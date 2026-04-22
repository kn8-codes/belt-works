import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = env.SUPABASE_URL;
const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;
const twilioAccountSid = env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = env.TWILIO_AUTH_TOKEN;
const twilioFromNumber = env.TWILIO_FROM_NUMBER;

const supabase = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;

/** @param {unknown} phone */
function normalizePhone(phone) {
  return String(phone || '').replace(/\D/g, '');
}

/**
 * @param {{
 *   client_name: string,
 *   client_phone: string,
 *   client_zip: string,
 *   job_type: string,
 *   description: string
 * }} payload
 */
async function sendSms({ client_name, client_phone, client_zip, job_type, description }) {
  const params = new URLSearchParams();
  params.set('To', client_phone);
  params.set('From', twilioFromNumber || '');
  params.set(
    'Body',
    `New lead from belt.works\nName: ${client_name}\nPhone: ${client_phone}\nJob: ${job_type}\nNotes: ${description || ''}\nZip: ${client_zip || ''}`
  );

  const auth = Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64');

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
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
    throw new Error('Failed to send SMS');
  }

  return response.json();
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const client_name = String(body.client_name || '').trim();
    const client_phone_digits = normalizePhone(body.client_phone);
    const client_zip = String(body.client_zip || '').trim();
    const job_type = String(body.job_type || '').trim();
    const description = String(body.description || '').trim();

    if (!client_name || !client_phone_digits) {
      return json({ error: 'client_name and client_phone are required' }, { status: 400 });
    }

    if (client_phone_digits.length !== 10) {
      return json({ error: 'client_phone must be 10 digits' }, { status: 400 });
    }

    if (!supabase) {
      throw new Error('Supabase server config missing');
    }

    if (!twilioAccountSid || !twilioAuthToken || !twilioFromNumber) {
      throw new Error('Twilio server config missing');
    }

    const client_phone = client_phone_digits;

    const { data: insertedLead, error: insertError } = await supabase
      .from('leads')
      .insert({
        client_name,
        client_phone,
        client_zip: client_zip || null,
        job_type,
        description: description || null,
        status: 'new'
      })
      .select('id')
      .single();

    if (insertError) {
      throw insertError;
    }

    await sendSms({ client_name, client_phone, client_zip, job_type, description });

    const { error: updateError } = await supabase
      .from('leads')
      .update({
        status: 'sent',
        sms_sent_at: new Date().toISOString()
      })
      .eq('id', insertedLead.id);

    if (updateError) {
      throw updateError;
    }

    return json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('submit-lead error', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
}
