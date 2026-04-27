import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase.js';

export async function POST({ request }) {
  try {
    const body = await request.json();
    const goal = String(body.goal || '').trim();
    const blocker = String(body.blocker || '').trim();
    const contact = String(body.contact || '').trim();

    if (!goal || !contact) {
      return json({ error: 'goal and contact are required' }, { status: 400 });
    }

    if (!supabase) {
      throw new Error('Supabase config missing');
    }

    const { error } = await supabase.from('leads').insert({
      goal,
      blocker: blocker || null,
      contact,
      created_at: new Date().toISOString()
    });

    if (error) throw error;

    return json({ ok: true });
  } catch (err) {
    console.error('leads insert error', err);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
}
