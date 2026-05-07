import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';
import type { Actions } from './$types';

const SUPABASE_URL = env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
const TWILIO_ACCOUNT_SID = env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = env.TWILIO_AUTH_TOKEN;
const TWILIO_FROM = env.TWILIO_FROM ?? env.TWILIO_FROM_NUMBER;
const TWILIO_TO = env.TWILIO_TO;
const NOTIFY_EMAIL = env.NOTIFY_EMAIL;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSupabase() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Supabase server config missing. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  }

  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

function hasTwilioConfig() {
  return Boolean(TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_FROM && TWILIO_TO);
}

function hasEmailConfig() {
  return Boolean(NOTIFY_EMAIL);
}

async function sendTwilioSms(name: string, email: string, whatTheyWant: string) {
  if (!hasTwilioConfig()) {
    throw new Error('Twilio config missing.');
  }

  const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64');
  const params = new URLSearchParams();
  params.set('To', TWILIO_TO!);
  params.set('From', TWILIO_FROM!);
  params.set(
    'Body',
    [
      'belt.works/start lead',
      `Name: ${name}`,
      `Email: ${email}`,
      `What they are working on: ${whatTheyWant || '[blank]'}`
    ].join('\n')
  );

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
    {
      method: 'POST',
      headers: {
        authorization: `Basic ${auth}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    }
  );

  if (!response.ok) {
    const payload = await response.text();
    throw new Error(`Twilio SMS failed: ${payload}`);
  }
}

async function sendEmailFallback(name: string, email: string, whatTheyWant: string) {
  if (!hasEmailConfig()) {
    throw new Error('Email fallback config missing.');
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(NOTIFY_EMAIL!)}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify({
      _subject: 'belt.works/start lead',
      _captcha: 'false',
      name,
      email,
      what_they_want: whatTheyWant || '[blank]'
    })
  });

  if (!response.ok) {
    const payload = await response.text();
    throw new Error(`Email fallback failed: ${payload}`);
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const whatTheyWant = String(data.get('what_they_want') ?? '').trim();

    if (!name || !email) {
      return fail(400, {
        success: false,
        message: 'Name and email are required.',
        values: { name, email, what_they_want: whatTheyWant }
      });
    }

    if (name.length < 2) {
      return fail(400, {
        success: false,
        message: 'Use the name you actually go by so I know who is reaching out.',
        values: { name, email, what_they_want: whatTheyWant }
      });
    }

    if (!EMAIL_RE.test(email)) {
      return fail(400, {
        success: false,
        message: 'Use a real email address so I can get back to you.',
        values: { name, email, what_they_want: whatTheyWant }
      });
    }

    if (name.length > 120) {
      return fail(400, {
        success: false,
        message: 'Name is too long. Keep it under 120 characters.',
        values: { name, email, what_they_want: whatTheyWant }
      });
    }

    if (email.length > 160) {
      return fail(400, {
        success: false,
        message: 'Email is too long. Keep it under 160 characters.',
        values: { name, email, what_they_want: whatTheyWant }
      });
    }

    if (whatTheyWant.length > 140) {
      return fail(400, {
        success: false,
        message: 'Keep the project note under 140 characters.',
        values: { name, email, what_they_want: whatTheyWant }
      });
    }

    try {
      const supabase = getSupabase();

      const { data: lead, error: insertError } = await supabase
        .from('leads')
        .insert({
          name,
          email,
          what_they_want: whatTheyWant || null,
          notified: false
        })
        .select('id')
        .single();

      if (insertError) {
        throw insertError;
      }

      const notifications = await Promise.allSettled([
        hasTwilioConfig()
          ? sendTwilioSms(name, email, whatTheyWant)
          : Promise.reject(new Error('Twilio config missing.')),
        hasEmailConfig()
          ? sendEmailFallback(name, email, whatTheyWant)
          : Promise.reject(new Error('Email fallback config missing.'))
      ]);

      const notified = notifications.some((result) => result.status === 'fulfilled');

      await supabase.from('leads').update({ notified }).eq('id', lead.id);

      const smsError = notifications[0].status === 'rejected' ? notifications[0].reason : null;
      const emailError = notifications[1].status === 'rejected' ? notifications[1].reason : null;

      return {
        success: true,
        message: "I'll be in touch within 24 hours.",
        smsPending: Boolean(smsError),
        emailPending: Boolean(emailError)
      };
    } catch (error) {
      console.error('start lead submission error', error);

      const maybeError = error as { code?: string; message?: string };

      if (maybeError?.code === '42P01') {
        return fail(500, {
          success: false,
          message: 'The leads table is missing in Supabase. Run the migration first.',
          values: { name, email, what_they_want: whatTheyWant }
        });
      }

      if (maybeError?.message?.includes('Supabase server config missing')) {
        return fail(500, {
          success: false,
          message: 'Supabase is not configured in Vercel yet.',
          values: { name, email, what_they_want: whatTheyWant }
        });
      }

      return fail(500, {
        success: false,
        message: error instanceof Error ? error.message : 'Something went sideways. Try again in a bit.',
        values: { name, email, what_they_want: whatTheyWant }
      });
    }
  }
};
