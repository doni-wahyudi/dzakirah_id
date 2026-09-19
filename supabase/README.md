# Supabase Integration — Dzakirah.id

This folder wires the site to a Supabase project so content (articles, events,
programs, testimonials, gallery, facilitators) and lead-capture submissions
(event RSVPs, newsletter, contact messages) can live in the database instead of
being hardcoded in `src/data/*.js`.

Project: `qtagroahdshxasyupotw` — https://qtagroahdshxasyupotw.supabase.co

## ⚠️ Current status

The anon key supplied for integration is **structurally valid but rejected by
Supabase** (signature invalid — the project's JWT secret was rotated after the
key was generated). Until a fresh key is added, the site automatically **falls
back to its bundled static content**, so nothing is broken.

To activate the live database:

1. **Get a fresh anon key**: Supabase Dashboard → Project Settings → API →
   *anon public* key.
2. **Create the schema**: Dashboard → SQL Editor → paste and run
   [`schema.sql`](./schema.sql). This creates all tables, indexes, RLS policies,
   and triggers.
3. **Seed current content**: run [`seed.sql`](./seed.sql) in the SQL Editor. It
   contains exactly what the site shows today (generated from `src/data/*.js`).
4. **Add the key locally**: copy `.env.example` → `.env.local` and set
   `VITE_SUPABASE_ANON_KEY`.
5. **Add the key for production**: in the GitHub repo → Settings → Secrets and
   variables → Actions, create secrets `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY`. The deploy workflow injects them at build time.

## How it works

- `src/lib/supabaseClient.js` — lazily creates one shared browser client and a
  `withSupabase()` helper that normalizes every query to `{ data, error }`.
- `src/lib/supabaseQueries.js` — one fetch/insert function per content type.
  Includes **row mappers** that convert DB snake_case columns (e.g. `read_time`,
  `color_light`, `is_anonymous`) to the camelCase fields the app already uses
  (`readTime`, `colorLight`, `isAnonymous`), so pages needed no UI changes.
- `src/lib/useSupabaseData(fetcher, fallback)` — React hook. Renders `fallback`
  immediately, then swaps in live rows when they arrive. On any error/empty
  result it keeps the fallback (unless strict mode).

### Fallback & strict mode

By default the app is **resilient**: if Supabase is unconfigured, unreachable,
returns an error, or has no rows, the site shows the bundled static content.
This guarantees the public site never goes blank.

Set `VITE_SUPABASE_STRICT=true` to disable fallback and surface errors instead —
useful once the database is the single source of truth and you want to notice
problems rather than silently degrade.

### Event "upcoming" is now derived

Previously `events.js` hardcoded `isUpcoming: true` on past events (the site
showed June 2026 events as "upcoming" in September). The event mapper now
computes `isUpcoming` from the event date, so past events correctly move to the
archive automatically.

## Security notes

- The **anon key is public** by design and is safe to ship in the browser. All
  access control is enforced by **Row Level Security (RLS)**, which is enabled on
  every table.
- Public anon can: `SELECT` published content rows; `INSERT` into the three
  lead-capture tables. It **cannot** read submissions, update, or delete.
- To manage content (write/edit/delete) use the Dashboard, the **service_role**
  key server-side only (never in the browser), or an authenticated admin role
  (see the commented policy at the bottom of `schema.sql`).

## Regenerating seed data

After editing `src/data/*.js`, regenerate the seed with:

```bash
node supabase/generate-seed.mjs
```

This rewrites `seed.sql` from the current static content (safe to re-run; it
clears then re-inserts, and resyncs sequences).

## Tables

| Table | Purpose | Public access |
| :-- | :-- | :-- |
| `articles` | Blog posts | SELECT (published) |
| `programs` | The 3 pillars | SELECT (published) |
| `events` | Kajian & workshops | SELECT (published) |
| `facilitators` | Team/mentors | SELECT (published) |
| `gallery` | Activity photos | SELECT (published) |
| `testimonials` | Community stories | SELECT (published) |
| `event_registrations` | RSVPs | INSERT only |
| `newsletter_subscribers` | Email signups | INSERT only |
| `contact_messages` | Contact form | INSERT only |
