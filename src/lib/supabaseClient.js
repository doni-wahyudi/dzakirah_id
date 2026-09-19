import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * True when "strict" mode is requested: the app should rely on Supabase only
 * and surface errors instead of silently falling back to bundled static data.
 */
export const isStrict = String(import.meta.env.VITE_SUPABASE_STRICT || 'false') === 'true';

/** True when both URL and anon key are present and look usable. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let client = null;

/**
 * Lazily create a single shared Supabase browser client.
 * Returns null when not configured so callers can fall back to static data.
 *
 * The anon key is a PUBLIC client key and is safe to ship in the browser —
 * access control MUST be enforced by Postgres Row Level Security (RLS) policies.
 */
export function getSupabase() {
  if (!isSupabaseConfigured) return null;
  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

/**
 * Run a Supabase query and normalize the result.
 * On any error (or when not configured) it returns `{ data: null, error }`
 * so the UI layer can decide whether to fall back to static content.
 *
 * @param {(sb: import('@supabase/supabase-js').SupabaseClient) => PromiseLike<{data: any, error: any}>} runQuery
 */
export async function withSupabase(runQuery) {
  try {
    const sb = getSupabase();
    if (!sb) {
      return { data: null, error: new Error('Supabase is not configured') };
    }
    const { data, error } = await runQuery(sb);
    if (error) return { data: null, error };
    return { data, error: null };
  } catch (err) {
    // Covers client-construction failures, network errors, and query throws so
    // the UI layer can always fall back to static content.
    return { data: null, error: err };
  }
}

export default getSupabase;
