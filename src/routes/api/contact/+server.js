import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = env.SUPABASE_URL;
const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const type = String(body.type || '').trim();
    const message = String(body.message || '').trim();

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
      type: type || null,
      message
    });

    if (error) {
      throw error;
    }

    return json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('contact submission error', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
}
