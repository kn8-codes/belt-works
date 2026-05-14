import { json } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase.js';

const LIMITS = {
  name: 200,
  email: 200,
  phone: 200,
  type: 200,
  message: 5000
};

/**
 * Convert unknown form input to a trimmed string and enforce a hard maximum length.
 * Rejecting over-long input is boring. Boring is correct here: this is a public form.
 * @param {unknown} value
 * @param {number} max
 */
function clean(value, max) {
  const text = String(value || '').trim();
  if (text.length > max) {
    throw new Error(`Field exceeds ${max} characters.`);
  }
  return text;
}

export async function POST({ request }) {
  try {
    const body = await request.json();

    // Honeypot. Real users never see this field. Bots often fill every input.
    if (String(body.website || '').trim()) {
      return json({ error: 'Invalid submission' }, { status: 400 });
    }

    const name = clean(body.name, LIMITS.name);
    const email = clean(body.email, LIMITS.email);
    const phone = clean(body.phone, LIMITS.phone);
    const type = clean(body.type, LIMITS.type);
    const message = clean(body.message, LIMITS.message);

    if (!name || !email || !message) {
      return json({ error: 'name, email, and message are required' }, { status: 400 });
    }

    if (!supabase) {
      throw new Error('Supabase server config missing');
    }

    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      phone: phone || null,
      type: type || 'Problem / project',
      message
    });

    if (error) {
      throw error;
    }

    return json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('contact submission error', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    const status = message.startsWith('Field exceeds') ? 400 : 500;
    return json({ error: message }, { status });
  }
}
