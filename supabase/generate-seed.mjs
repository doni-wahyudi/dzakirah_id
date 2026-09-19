// Generates supabase/seed.sql from the existing src/data/*.js content so the
// database starts with exactly what the site shows today.
// Run: node supabase/generate-seed.mjs
import { articles } from '../src/data/articles.js';
import { programs } from '../src/data/programs.js';
import { events } from '../src/data/events.js';
import { facilitators } from '../src/data/facilitators.js';
import { galleryItems as gallery } from '../src/data/gallery.js';
import { testimonials } from '../src/data/testimonials.js';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const q = (v) => (v === null || v === undefined ? 'null' : `'${String(v).replace(/'/g, "''")}'`);
const b = (v) => (v ? 'true' : 'false');
const j = (v) => q(JSON.stringify(v ?? []));
const d = (v) => (v ? q(v) : 'null');

let sql = `-- Dzakirah.id seed data (generated from src/data/*.js)
-- Run AFTER supabase/schema.sql. Safe to re-run: it clears then re-inserts.

delete from public.articles;
delete from public.programs;
delete from public.events;
delete from public.facilitators;
delete from public.gallery;
delete from public.testimonials;

`;

sql += `insert into public.articles (id, slug, title, excerpt, content, category, image, date, read_time, featured, published) values\n`;
sql += articles.map((a) =>
  `  (${a.id}, ${q(a.slug)}, ${q(a.title)}, ${q(a.excerpt)}, ${q(a.content)}, ${q(a.category)}, ${q(a.image)}, ${d(a.date)}, ${q(a.readTime)}, ${b(a.featured)}, true)`
).join(',\n') + ';\n\n';

sql += `insert into public.programs (id, slug, title, tagline, focus, icon, color, color_light, description, audience, long_description, objectives, schedule, format, published) values\n`;
sql += programs.map((p) =>
  `  (${p.id}, ${q(p.slug)}, ${q(p.title)}, ${q(p.tagline)}, ${q(p.focus)}, ${q(p.icon)}, ${q(p.color)}, ${q(p.colorLight)}, ${q(p.description)}, ${j(p.audience)}, ${q(p.longDescription)}, ${j(p.objectives)}, ${q(p.schedule)}, ${q(p.format)}, true)`
).join(',\n') + ';\n\n';

sql += `insert into public.events (id, title, date, time, location, category, description, image, published) values\n`;
sql += events.map((e) =>
  `  (${e.id}, ${q(e.title)}, ${d(e.date)}, ${q(e.time)}, ${q(e.location)}, ${q(e.category)}, ${q(e.description)}, ${d(e.image)}, true)`
).join(',\n') + ';\n\n';

sql += `insert into public.facilitators (id, name, role, specialty, bio, avatar, published) values\n`;
sql += facilitators.map((f) =>
  `  (${f.id}, ${q(f.name)}, ${q(f.role)}, ${q(f.specialty)}, ${q(f.bio)}, ${q(f.avatar)}, true)`
).join(',\n') + ';\n\n';

sql += `insert into public.gallery (id, title, event, date, category, image, published) values\n`;
sql += gallery.map((g) =>
  `  (${g.id}, ${q(g.title)}, ${q(g.event)}, ${d(g.date)}, ${q(g.category)}, ${q(g.image)}, true)`
).join(',\n') + ';\n\n';

sql += `insert into public.testimonials (id, name, is_anonymous, text, program, date, published) values\n`;
sql += testimonials.map((t) =>
  `  (${t.id}, ${d(t.name)}, ${b(t.isAnonymous)}, ${q(t.text)}, ${q(t.program)}, ${d(t.date)}, true)`
).join(',\n') + ';\n\n';

// Keep bigserial sequences ahead of the explicitly-inserted ids.
sql += `-- resync sequences after explicit id inserts
select setval(pg_get_serial_sequence('public.articles','id'), (select coalesce(max(id),1) from public.articles));
select setval(pg_get_serial_sequence('public.programs','id'), (select coalesce(max(id),1) from public.programs));
select setval(pg_get_serial_sequence('public.events','id'), (select coalesce(max(id),1) from public.events));
select setval(pg_get_serial_sequence('public.facilitators','id'), (select coalesce(max(id),1) from public.facilitators));
select setval(pg_get_serial_sequence('public.gallery','id'), (select coalesce(max(id),1) from public.gallery));
select setval(pg_get_serial_sequence('public.testimonials','id'), (select coalesce(max(id),1) from public.testimonials));
`;

writeFileSync(join(here, 'seed.sql'), sql);
console.log('Wrote supabase/seed.sql', sql.length, 'bytes');
