import { useEffect, useState } from 'react';
import { isStrict } from './supabaseClient';

/**
 * Generic data-fetching hook for Supabase-backed content with a static fallback.
 *
 * Behaviour:
 *  - Initialises with `fallback` (the bundled static array) so content renders
 *    instantly and the public site never shows a blank state.
 *  - Calls `fetcher()` (returns `{ data, error }` from supabaseQueries).
 *  - If Supabase returns rows, swaps them in.
 *  - If Supabase is unconfigured, errors, or returns empty, keeps the fallback.
 *  - In strict mode (VITE_SUPABASE_STRICT=true) it will NOT fall back and will
 *    surface the error instead — useful once the live schema is authoritative.
 *
 * `fetcher` and `fallback` are expected to be stable module-level references;
 * pass `deps` to control re-fetching (defaults to once on mount).
 *
 * @param {() => Promise<{data: any, error: any}>} fetcher
 * @param {any} fallback static data used until/unless live data is available
 * @param {any[]} deps dependency list that should re-trigger the fetch
 */
export function useSupabaseData(fetcher, fallback = [], deps = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('fallback'); // 'supabase' | 'fallback'

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data: live, error: err } = await fetcher();
      if (cancelled) return;

      const hasLive = Array.isArray(live) && live.length > 0;
      const hasSingle = live && !Array.isArray(live);

      if (hasLive || hasSingle) {
        setData(live);
        setSource('supabase');
        setError(null);
      } else if (isStrict) {
        setData(Array.isArray(fallback) ? [] : null);
        setSource('supabase');
        setError(err || new Error('No data returned from Supabase'));
      } else {
        setData(fallback);
        setSource('fallback');
        setError(err || null);
      }
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error, source };
}
