-- ============================================================================
-- Dzakirah.id — Supabase schema
-- Run this in: Supabase Dashboard > SQL Editor > New query > Run
-- (or via CLI: supabase db push)
--
-- Design notes:
--   * Content tables mirror the exact shapes in src/data/*.js so the React app
--     can swap static imports for live rows with zero UI changes.
--   * Every content table has a `published` flag; the public site only reads
--     published rows. This lets admins draft content safely.
--   * RLS is ENABLED on every table. Public anon access is:
--       - SELECT on published content rows
--       - INSERT on the three lead-capture tables (registrations, newsletter,
--         contact) so the site can write submissions without a backend.
--   * No UPDATE/DELETE for anon. Manage content via the Dashboard, the service
--     role key (server-side only), or an authenticated admin role.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- CONTENT TABLES
-- ---------------------------------------------------------------------------

create table if not exists public.articles (
  id          bigserial primary key,
  slug        text unique not null,
  title       text not null,
  excerpt     text,
  content     text,
  category    text,
  image       text,
  date        date,
  read_time   text,                 -- maps to JS `readTime`
  featured    boolean default false,
  published   boolean default true,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create table if not exists public.programs (
  id               bigserial primary key,
  slug             text unique not null,
  title            text not null,
  tagline          text,
  focus            text,
  icon             text,
  color            text,
  color_light      text,             -- maps to JS `colorLight`
  description      text,
  audience         jsonb default '[]'::jsonb,   -- string[]
  long_description text,             -- maps to JS `longDescription`
  objectives       jsonb default '[]'::jsonb,   -- string[]
  schedule         text,
  format           text,
  published        boolean default true,
  created_at       timestamptz default now()
);

create table if not exists public.events (
  id          bigserial primary key,
  title       text not null,
  date        date,
  time        text,
  location    text,
  category    text,
  description text,
  image       text,
  published   boolean default true,
  created_at  timestamptz default now()
);

create table if not exists public.facilitators (
  id         bigserial primary key,
  name       text not null,
  role       text,
  specialty  text,
  bio        text,
  avatar     text,
  published  boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.gallery (
  id         bigserial primary key,
  title      text,
  event      text,
  date       date,
  category   text,
  image      text,
  published  boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.testimonials (
  id           bigserial primary key,
  name         text,
  is_anonymous boolean default false,  -- maps to JS `isAnonymous`
  text         text,
  program      text,
  date         date,
  published    boolean default true,
  created_at   timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- LEAD-CAPTURE TABLES (written by the public site)
-- ---------------------------------------------------------------------------

create table if not exists public.event_registrations (
  id         bigserial primary key,
  event_id   bigint references public.events(id) on delete set null,
  name       text not null,
  whatsapp   text not null,
  city       text not null,
  created_at timestamptz default now()
);

create table if not exists public.newsletter_subscribers (
  id         bigserial primary key,
  email      text not null unique,
  created_at timestamptz default now()
);

create table if not exists public.contact_messages (
  id         bigserial primary key,
  name       text not null,
  email      text,
  subject    text,
  message    text not null,
  created_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- INDEXES (helpful for the public read paths)
-- ---------------------------------------------------------------------------
create index if not exists articles_published_date_idx   on public.articles (published, date desc);
create index if not exists articles_slug_idx             on public.articles (slug);
create index if not exists events_published_date_idx     on public.events (published, date desc);
create index if not exists gallery_published_date_idx    on public.gallery (published, date desc);
create index if not exists testimonials_published_idx    on public.testimonials (published, date desc);
create index if not exists registrations_event_idx       on public.event_registrations (event_id);

-- ---------------------------------------------------------------------------
-- ROW LEVEL SECURITY
-- ---------------------------------------------------------------------------
alter table public.articles             enable row level security;
alter table public.programs             enable row level security;
alter table public.events               enable row level security;
alter table public.facilitators         enable row level security;
alter table public.gallery              enable row level security;
alter table public.testimonials         enable row level security;
alter table public.event_registrations  enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_messages     enable row level security;

-- Public READ of published content (anon + authenticated)
drop policy if exists "public read published articles"     on public.articles;
create policy "public read published articles"     on public.articles     for select to anon, authenticated using (published = true);

drop policy if exists "public read published programs"     on public.programs;
create policy "public read published programs"     on public.programs     for select to anon, authenticated using (published = true);

drop policy if exists "public read published events"       on public.events;
create policy "public read published events"       on public.events       for select to anon, authenticated using (published = true);

drop policy if exists "public read published facilitators" on public.facilitators;
create policy "public read published facilitators" on public.facilitators for select to anon, authenticated using (published = true);

drop policy if exists "public read published gallery"      on public.gallery;
create policy "public read published gallery"      on public.gallery      for select to anon, authenticated using (published = true);

drop policy if exists "public read published testimonials" on public.testimonials;
create policy "public read published testimonials" on public.testimonials for select to anon, authenticated using (published = true);

-- Public INSERT (write-only) for lead capture. No read-back for anon, so
-- submissions cannot be enumerated by visitors.
drop policy if exists "public insert registrations" on public.event_registrations;
create policy "public insert registrations" on public.event_registrations for insert to anon, authenticated with check (true);

drop policy if exists "public insert newsletter" on public.newsletter_subscribers;
create policy "public insert newsletter" on public.newsletter_subscribers for insert to anon, authenticated with check (true);

drop policy if exists "public insert contact" on public.contact_messages;
create policy "public insert contact" on public.contact_messages for insert to anon, authenticated with check (true);

-- NOTE: To manage content (INSERT/UPDATE/DELETE) from the Dashboard or an
-- admin app, either use the service_role key server-side (bypasses RLS) or add
-- policies gated on an authenticated admin role, e.g.:
--   create policy "admin write articles" on public.articles
--     for all to authenticated using ((auth.jwt() ->> 'role') = 'admin');

-- ---------------------------------------------------------------------------
-- updated_at trigger for articles
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists articles_set_updated_at on public.articles;
create trigger articles_set_updated_at
  before update on public.articles
  for each row execute function public.set_updated_at();
