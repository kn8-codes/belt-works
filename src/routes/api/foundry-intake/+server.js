import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = env.SUPABASE_URL;
const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;

/** @param {string} name */
function placeholderEmail(name) {
  const slug = String(name || 'unknown')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'unknown';

  return `foundry-intake+${slug}-${Date.now()}@belt.works.local`;
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const whatYouDo = String(body.whatYouDo || '').trim();
    const whereYouWork = String(body.whereYouWork || '').trim();
    const biggestHeadache = String(body.biggestHeadache || '').trim();
    const sourcePath = String(body.sourcePath || '').trim();
    const sourceUrl = String(body.sourceUrl || '').trim();
    const referrer = String(body.referrer || '').trim();
    const submittedAt = String(body.submittedAt || '').trim();
    const intakeVersion = String(body.intakeVersion || '').trim();

    if (!name || !phone || !whatYouDo || !whereYouWork || !biggestHeadache) {
      return json({ error: 'All five fields are required.' }, { status: 400 });
    }

    if (!supabase) {
      throw new Error('Supabase server config missing');
    }

    const message = [
      'FOUNDRY short intake',
      '',
      `What do you do: ${whatYouDo}`,
      `Where do you work: ${whereYouWork}`,
      '',
      'Biggest headache right now:',
      biggestHeadache,
      '',
      '--- metadata ---',
      `intakeVersion: ${intakeVersion || 'foundry-short-form-v1'}`,
      `submittedAt: ${submittedAt || new Date().toISOString()}`,
      `sourcePath: ${sourcePath || '[blank]'}`,
      `sourceUrl: ${sourceUrl || '[blank]'}`,
      `referrer: ${referrer || '[blank]'}`
    ].join('\n');

    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email: placeholderEmail(name),
      phone,
      type: 'FOUNDRY short intake',
      message
    });

    if (error) {
      throw error;
    }

    return json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('foundry intake submission error', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
}
