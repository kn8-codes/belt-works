import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

// Server-only Supabase client.
// Keep service-role access behind API routes or server actions. Never import this from browser code.
const supabaseUrl = env.SUPABASE_URL;
const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;
