import { withSupabase } from './supabaseClient';

/**
 * Table names mirror the existing `src/data/*.js` shapes so that a row fetched
 * from Supabase is structurally identical to the bundled static object.
 * Keep these in sync with supabase/schema.sql.
 */
export const TABLES = {
  articles: 'articles',
  events: 'events',
  testimonials: 'testimonials',
  gallery: 'gallery',
  programs: 'programs',
  facilitators: 'facilitators',
  registrations: 'event_registrations',
  newsletter: 'newsletter_subscribers',
  contact: 'contact_messages',
};

/** Only published rows should be visible to the public site. */
const published = (q) => q.eq('published', true);

// ---------------------------------------------------------------------------
// Row mappers: DB uses snake_case columns; the app expects camelCase fields
// that match the bundled static data shapes exactly. These normalize live rows
// so pages can consume them without any UI changes.
// ---------------------------------------------------------------------------
const mapArticle = (r) => r && ({
  id: r.id,
  slug: r.slug,
  title: r.title,
  excerpt: r.excerpt,
  content: r.content,
  category: r.category,
  image: r.image,
  date: r.date,
  readTime: r.read_time,
  featured: r.featured,
});

const mapProgram = (r) => r && ({
  id: r.id,
  slug: r.slug,
  title: r.title,
  tagline: r.tagline,
  focus: r.focus,
  icon: r.icon,
  color: r.color,
  colorLight: r.color_light,
  description: r.description ?? '',
  audience: r.audience ?? [],
  longDescription: r.long_description ?? '',
  objectives: r.objectives ?? [],
  schedule: r.schedule,
  format: r.format,
});

const mapEvent = (r) => r && ({
  id: r.id,
  title: r.title,
  date: r.date,
  time: r.time,
  location: r.location,
  category: r.category,
  description: r.description,
  image: r.image,
  // Derived: an event is "upcoming" if its date is today or in the future.
  isUpcoming: r.date ? new Date(r.date) >= new Date(new Date().toDateString()) : false,
});

const mapFacilitator = (r) => r && ({
  id: r.id,
  name: r.name,
  role: r.role,
  specialty: r.specialty,
  bio: r.bio,
  avatar: r.avatar,
});

const mapGallery = (r) => r && ({
  id: r.id,
  title: r.title,
  event: r.event,
  date: r.date,
  category: r.category,
  image: r.image,
});

const mapTestimonial = (r) => r && ({
  id: r.id,
  name: r.name,
  isAnonymous: r.is_anonymous,
  text: r.text,
  program: r.program,
  date: r.date,
});

/** Apply a mapper across a `withSupabase` result, preserving { data, error }. */
function mapResult(result, mapper) {
  if (!result.data) return result;
  const data = Array.isArray(result.data) ? result.data.map(mapper) : mapper(result.data);
  return { data, error: result.error };
}

/** Fetch blog articles, newest first. */
export async function fetchArticles() {
  return mapResult(
    await withSupabase((sb) =>
      published(sb.from(TABLES.articles).select('*')).order('date', { ascending: false })
    ),
    mapArticle
  );
}

/** Fetch a single article by slug. */
export async function fetchArticleBySlug(slug) {
  return mapResult(
    await withSupabase((sb) =>
      published(sb.from(TABLES.articles).select('*')).eq('slug', slug).maybeSingle()
    ),
    mapArticle
  );
}

/** Fetch events, newest first. `isUpcoming` is derived from the date. */
export async function fetchEvents() {
  return mapResult(
    await withSupabase((sb) =>
      published(sb.from(TABLES.events).select('*')).order('date', { ascending: false })
    ),
    mapEvent
  );
}

/** Fetch community testimonials, newest first. */
export async function fetchTestimonials() {
  return mapResult(
    await withSupabase((sb) =>
      published(sb.from(TABLES.testimonials).select('*')).order('date', { ascending: false })
    ),
    mapTestimonial
  );
}

/** Fetch gallery items, newest first. */
export async function fetchGallery() {
  return mapResult(
    await withSupabase((sb) =>
      published(sb.from(TABLES.gallery).select('*')).order('date', { ascending: false })
    ),
    mapGallery
  );
}

/** Fetch the three program pillars in display order. */
export async function fetchPrograms() {
  return mapResult(
    await withSupabase((sb) =>
      published(sb.from(TABLES.programs).select('*')).order('id', { ascending: true })
    ),
    mapProgram
  );
}

/** Fetch facilitator/team profiles in display order. */
export async function fetchFacilitators() {
  return mapResult(
    await withSupabase((sb) =>
      published(sb.from(TABLES.facilitators).select('*')).order('id', { ascending: true })
    ),
    mapFacilitator
  );
}

/**
 * Insert an event registration (RSVP). Requires an INSERT RLS policy.
 * @param {{event_id: number, name: string, whatsapp: string, city: string}} payload
 */
export function createRegistration(payload) {
  return withSupabase((sb) =>
    sb.from(TABLES.registrations).insert(payload).select().single()
  );
}

/**
 * Subscribe an email to the newsletter. Requires an INSERT RLS policy.
 * @param {{email: string}} payload
 */
export function subscribeNewsletter(payload) {
  return withSupabase((sb) =>
    sb.from(TABLES.newsletter).insert(payload).select().single()
  );
}

/**
 * Store a contact form message. Requires an INSERT RLS policy.
 * @param {{name: string, email: string, subject: string, message: string}} payload
 */
export function createContactMessage(payload) {
  return withSupabase((sb) =>
    sb.from(TABLES.contact).insert(payload).select().single()
  );
}
