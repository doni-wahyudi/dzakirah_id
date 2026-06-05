# Project Technical Details — Dzakirah.id

This document records the exact, up-to-date technical state, active routing, data models, custom design guidelines, and key configurations for the **Dzakirah.id** codebase.

---

## 1. Technology Stack & Core Architecture

* **Core**: React 18, Vite, JavaScript/JSX.
* **Routing**: React Router v7 (`react-router-dom` for client-side SPA routing).
* **Styling**: Pure, native CSS (`src/index.css` global design system tokens, typography rules, custom utilities, and component-specific stylesheets).
* **Typography**: Outfit (sans-serif for body, UI, buttons) & Lora (serif/italic for titles, quotes, headings) imported from Google Fonts.
* **Icons**: `lucide-react` with custom high-fidelity SVG fallback for the Instagram icon (`src/components/Icons/Instagram.jsx`) to circumvent Rollup missing-export compilation errors.

---

## 2. Active Routing & Navigation (`src/App.jsx`)

The React Router shell handles the following active routes:
* `/` (Beranda / Home)
* `/tentang` (Tentang Kami / About Us)
* `/program` (Program Overview / Programs)
* `/program/:slug` (Dynamic Program Detail page, e.g. `mental-health`, `pranikah`, `parenting`)
* `/komunitas` (Komunitas / Chapter & Join Steps)
* `/blog` (Blog / Article Archive with Live Search & Category Filtering)
* `/blog/:slug` (BlogPost / Rich Text Reading View)
* `/event` (Event / Kajian Upcoming & Past Archive)
* `/galeri` (Galeri / Activity Masonry Grid with Elegant Lightbox Modal)
* `/belajar-sedekah` (Belajar Sedekah / Integrated Charity Portal & BSI Bank donation instructions)
* `/kontak` (Kontak / Premium contact form and WhatsApp redirects)

### Navigation System
* **Desktop**: Top sticky header bar, transparent on Hero with a transition to solid Cream (`#FAF6F0`) + backdrop blur on scroll. Active route indicators have custom Sage underlines.
* **Mobile**: Bottom bar Navigation with fixed tabs: `Beranda`, `Program`, `Blog`, and `Menu` (Hamburger).
  * The `Menu` tab opens a full-screen drawer with a smooth slide-up CSS transition, holding links to all pages.

---

## 3. Design System & Theme Tokens ("Earthy Healing")

A calming, cohesive, warm color palette curated specifically for a feminine Muslimah healing space:
* **Primary (Sage Green)**: `#7A8E6B` — calming, natural, growth-oriented.
* **Primary Light**: `#A8B99A`
* **Primary Dark**: `#5A6E4D`
* **Secondary (Dusty Rose)**: `#C4A07C` — warm, gentle, feminine.
* **Accent (Gold)**: `#C9A96E` — premium Islamic elegance.
* **Background Cream**: `#FAF6F0` — warm off-white background base.
* **Background Light**: `#F5EFE6`
* **Text Primary**: `#2D2A26` — warm dark charcoal brown.
* **Text Secondary**: `#6B6560` — soft muted brown.
* **Dark Sage (Footer BG)**: `#2D3328`
* **Instagram Pink**: `#E1306C`

### Animation & Layout Tokens
* **Standard Transitions**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
* **Card Border Radius**: `16px` (with standard card shadow elevations)
* **Button Border Radius**: Pill shape (`999px`) or `12px` rounded
* **Section Padding**: `80px 0` (Desktop), `48px 0` (Mobile)

---

## 4. Key Interactive Components & Custom Integrations

### A. Program Timeline (`src/components/ProgramTimeline/`)
An interactive vertical progress map showing the "Growth Journey" sequence:
1. **Mental Health** (`🧠`) — Self-healing, journaling, emotional balance.
2. **Pranikah** (`💍`) — Healthy pre-marital communication, Islamic foundations.
3. **Parenting** (`👨‍👩‍👧`) — Gentle parenting, raising pious children.
* Highlights the logical narrative connection: *"Mulai dari menyembuhkan diri → Mempersiapkan kehidupan baru → Menjadi orang tua yang luar biasa."*

### B. Testimonial Wall (`src/components/TestimonialWall/`)
* Refined, organic staggered feedback layout designed as speech bubbles and handwritten cards rather than standard grids.
* Features decorative leaf elements, soft quotes, and subtle random card rotations (`rotate(-1deg)` to `rotate(1deg)`).
* Includes a pre-configured, beautiful, future-proof input area: *"Bagikan ceritamu..."* with a modern `Segera Hadir` (Coming Soon) badge.

### C. Floating WhatsApp (`src/components/FloatingWhatsApp/`)
* Positioned bottom-right (above the bottom navigation bar on mobile).
* Pulses gently to attract user engagement.
* Deep-linked to direct number `082269665134` with pre-filled message template.

### D. Custom Scroll Reveal (`src/hooks/useScrollReveal.js`)
* Performance-optimized standard intersection observer hooks (`useScrollReveal` and `useMultiScrollReveal` for staggered children grids).
* Triggers modern CSS animations (`translateY(30px) → translateY(0)`, `opacity 0 → 1`) seamlessly as elements enter the viewport.

---

## 5. Build Fix & Lucide-React Resolutions

### The Problem
During development/bundling with Vite/Rollup, the bundler would crash due to a missing export error:
`[MISSING_EXPORT] "Instagram" is not exported by "node_modules/lucide-react/dist/esm/lucide-react.mjs"`

### The Solution
Instead of forcing package re-installs, a custom SVG-based `Instagram` icon component was created at:
👉 [Instagram.jsx](file:///c:/Users/whydo/D9043DB2025/code/explore/web_project/dzakirah_web/src/components/Icons/Instagram.jsx)
This component takes Lucide properties (`size`, `strokeWidth`, `className`, etc.) and outputs standard, accessible SVGs.

Affected files were refactored to load the local component:
1. `src/components/Footer/Footer.jsx`
2. `src/pages/Community/CommunityPage.jsx`
3. `src/pages/Contact/ContactPage.jsx`

---

## 6. Systemic Scroll Reveal Visibility Fix

### The Problem
Multiple pages (About, Programs, Community, Blog, Gallery, Charity, Contact) rendered completely blank main content areas because the IntersectionObserver-based `useScrollReveal` hooks were applied to parent section elements, while the transition classes `.scroll-reveal` were defined on their child layout containers. Since parent elements received `.revealed` but the CSS rules only targeted `.scroll-reveal.revealed`, child layout elements remained at `opacity: 0` and were never displayed.

### The Solution
The global style rule in `src/index.css` was extended to:
```css
.scroll-reveal.revealed,
.revealed .scroll-reveal {
  opacity: 1;
  transform: translate(0, 0);
}
```
This guarantees that child `.scroll-reveal` elements animate cleanly as soon as their observed parent section is revealed by the observer hook, immediately resolving all blank layout bugs across all pages.

---

## 7. Verification Pipeline & Verification Checklist
1. **Local Development Server**: Run `npm run dev` to verify routes, transitions, active indicator underlines, lightbox popups, and responsive states (running dynamically on the `/dzakirah_id/` subfolder path).
2. **Production Build Compilation**: Run `npm run build` to verify the asset pipeline bundles cleanly.
3. **Deployment**: Run `npm run deploy` to publish the production bundle to GitHub Pages.
