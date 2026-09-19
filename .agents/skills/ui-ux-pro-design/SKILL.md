---
name: ui-ux-pro-design
description: >-
  Comprehensive guidelines and methodology for crafting human-grade, world-class UI/UX design.
  Eliminates "AI slop", generic templates, and uninspired cliches by enforcing bespoke art direction,
  semantic color systems, intentional typography, ergonomic UX psychology, tactile component states,
  and production-ready micro-interactions. Use this skill whenever designing, building, or refining
  user interfaces, landing pages, web applications, design systems, and components.
---

# UI/UX Pro Design & Anti-AI-Slop Mastery

This skill provides the definitive engineering and design framework for building human-grade, visually stunning, and conversion-optimized digital experiences. It strictly eliminates generic "AI slop" patterns in favor of intentional craftsmanship, bespoke brand identity, and ergonomic usability.

---

## 1. The Anti-AI-Slop Manifesto (What to Ban & What to Build)

| "AI Slop" Anti-Pattern | Why It Fails | The Human-Grade Replacement |
| :--- | :--- | :--- |
| **Purple/Indigo Neon Glows on Dark Blue** | Cliché, lazy `#0f172a` + violet blob aesthetic that screams automated generator. | **Bespoke Art Direction**: Choose palettes rooted in the specific domain (e.g. warm terracotta + sage cream for wellness, crisp monochromatic Swiss typography + electric vermilion for tech, deep sapphire + warm ivory for fintech). |
| **Over-Glassmorphism Everywhere** | `backdrop-filter: blur(20px)` with semi-transparent white borders on every card destroys contrast and visual hierarchy. | **Layered Elevation System**: Clear L0–L3 surface hierarchy with solid, legible backgrounds, crisp borders (1px solid with tailored alpha), and multi-layered diffused ambient shadows. |
| **Symmetric 3-Box Generic Grid** | 3 identical cards with isometric icons and generic buzzwords ("AI-Powered", "Fast", "Secure"). | **Asymmetric Bento Grids & Live Previews**: Mixed aspect ratios, interactive mini-widgets, tangible metrics, and real content density that demonstrates real value. |
| **Default Generic Typography** | Unstyled Inter/Roboto at 16px with default leading and zero personality. | **Intentional Type Pairings**: High-contrast pairing (e.g. Characterful Display Serif + Clean Geometric Sans), strict modular scale (1.25 / 1.333), fluid `clamp()` sizing, negative letter-spacing on display headers, and positive tracking on uppercase microcopy. |
| **Static / Missing Interactive States** | Buttons and inputs that don't react to hover, click, focus, or loading. | **Complete 6-State Lifecycle**: `default`, `hover` (elevate + subtle glow/shift), `focus-visible` (accessible high-contrast ring), `active` (tactile `scale(0.98)`), `loading` (spinner/skeleton without layout jump), `disabled` (clear accessible de-emphasis). |
| **Vague, Ungrounded Whitespace** | Giant empty gaps with tiny uninformative text that feels hollow. | **Purposeful Spatial Rhythm**: Strict 4px/8px modular spacing scale. Every pixel of whitespace serves to group related concepts (Gestalt proximity) or guide the eye. |

---

## 2. Visual Hierarchy & Art Direction

### A. The 60-30-10 Color Architecture
* **60% Dominant Foundation**: Background and primary canvas (e.g., `#FAF6F0` warm cream or `#0B0F17` obsidian slate).
* **30% Structural & Surface**: Cards, sidebars, typography, structural borders, and neutral elements (`#FFFFFF`, `#161F30`, `#2D2A26`).
* **10% Accent & Action**: Primary CTAs, active indicators, focal metrics, and key conversion hooks (e.g., `#E592A1` blossom rose, `#7A8E6B` sage, `#3B82F6` electric azure).

### B. Typography as Visual Architecture
1. **Header vs Body Contrast**:
   - Display Headings (H1/H2): Tight letter-spacing (`letter-spacing: -0.025em`), bold or heavy weights, tight line-height (`1.05` to `1.2`).
   - Body Copy: Generous line-height (`1.5` to `1.7`), readable size (15px–17px), normal letter-spacing (`0` to `0.01em`).
   - Uppercase Eyebrows/Labels: Small size (11px–13px), bold weight (`600`–`700`), wide tracking (`letter-spacing: 0.08em` to `0.12em`), text transform `uppercase`.
2. **Fluid Typography Formula**:
   ```css
   font-size: clamp(2rem, 1.5rem + 2.5vw, 3.75rem); /* Scalable H1 */
   ```

### C. Depth, Shadows & Border Physics
Avoid harsh, single-point black drop shadows (`box-shadow: 0 10px 20px rgba(0,0,0,0.5)`). Instead, use **multi-layered natural ambient shadows**:
```css
/* Premium Light Surface Shadow */
box-shadow: 
  0 1px 2px rgba(0, 0, 0, 0.04),
  0 4px 12px rgba(0, 0, 0, 0.06),
  0 12px 28px rgba(0, 0, 0, 0.04);

/* Premium Dark Surface Elevation with Inner Highlight */
background: #161B26;
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 
  0 0 0 1px rgba(0, 0, 0, 0.4),
  0 8px 24px rgba(0, 0, 0, 0.3),
  inset 0 1px 0 rgba(255, 255, 255, 0.08); /* Crisp top bezel */
```

---

## 3. Ergonomics & UX Psychology

### A. Key Cognitive Laws
* **Hick’s Law**: Minimize choices. Break complex forms or onboarding into multi-step progressive flows.
* **Fitts’s Law**: Critical CTAs must have generous click/tap hitboxes (minimum **44×44px** on touch devices) and be placed in natural ergonomic thumb/mouse zones.
* **Gestalt Law of Proximity**: Spacing between unrelated components (`margin-bottom: 48px`) must be significantly larger than spacing between label and input (`margin-bottom: 8px`).
* **Visual Anchor / Squint Test**: When squinting at any screen, exactly **one primary element** should dominate visual weight (the conversion action).

### B. Microcopy & Content-First Design
* Replace generic lorem ipsum with authentic domain data, customer scenarios, and specific quantifiable value.
* CTAs must be specific verbs: Replace `"Submit"` or `"Click Here"` with `"Daftar Sekarang Melalui WhatsApp"`, `"Unduh Panduan PDF"`, `"Mulai Sesi Konsultasi"`.

---

## 4. Component Anatomy & Micro-Interactions

### A. High-Craft Buttons
Every button must feel physical and responsive:
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 9999px; /* Pill or tailored 10px-12px */
  background: var(--color-primary);
  color: #ffffff;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(var(--color-primary-rgb), 0.35);
  filter: brightness(1.05);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 1px 3px rgba(var(--color-primary-rgb), 0.2);
}

.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.4);
}
```

### B. Form Inputs with Absolute Clarity
* Explicit labels always visible above the input (never rely on placeholders alone for accessibility).
* High-contrast focus state with a soft colored ring.
* Clear helper text and immediate validation feedback with semantic colors.

### C. Bento Grids & Asymmetric Content Cards
* Combine a **2-column hero card** (holding dynamic preview, interactive chart, or visual asset) with **stacked 1-column detail cards**.
* Use subtle hover zoom on thumbnail masks (`overflow: hidden; img { transition: transform 0.4s ease; } img:hover { transform: scale(1.04); }`).

---

## 5. Animation & Motion Standards

* **Timing Thresholds**:
  - Micro-interactions (hover, active click, tooltip): **120ms – 200ms**.
  - Drawer / Dropdown / Modal entrance: **250ms – 350ms**.
  - Page Transitions / Skeletons: **400ms – 600ms**.
* **Spring Easing**: Avoid `linear` or generic `ease`. Use `cubic-bezier(0.16, 1, 0.3, 1)` (snappy spring) or `cubic-bezier(0.4, 0, 0.2, 1)` (material standard).
* **Accessibility**: Always respect reduced motion:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 6. Pre-Commit UI/UX Quality Checklist

Before finalizing any frontend feature, run through the **10-Point Human Craft Checklist**:

1. [ ] **No Generic Slop**: Is the color palette and typography specifically tailored to this project's unique brand, or does it look like a template?
2. [ ] **Contrast Compliance**: Does body text meet at least WCAG AA (4.5:1 ratio) on every single background card?
3. [ ] **Complete Interactive States**: Do all buttons, links, inputs, and cards have distinct `hover`, `active`, `focus-visible`, and `disabled` styles?
4. [ ] **Squint Test Passed**: Is there a single, unambiguous primary CTA or focal anchor per viewport?
5. [ ] **Modular Spacing Rhythm**: Are all paddings, margins, and gaps aligned to a strict 4px/8px scale without random arbitrary values?
6. [ ] **Responsive Grace**: Does the layout gracefully adapt across 320px (small mobile), 768px (tablet), 1024px (laptop), and 1440px+ (desktop)?
7. [ ] **Tactile Touch Targets**: Are mobile hitboxes at least 44×44px with comfortable thumb reach?
8. [ ] **Microcopy Quality**: Is the copy clear, direct, empathetic, and free of generic filler text?
9. [ ] **Smooth Transitions**: Are all animations smooth (<350ms) with snappy cubic-bezier easing and zero layout shifts (CLS)?
10. [ ] **Clean Token Usage**: Are colors, shadows, and spacing using centralized CSS variables/tokens instead of hardcoded ad-hoc styles?
