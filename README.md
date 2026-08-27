# Logo America

> We design the marks America runs on.

Premium marketing site for **Logo America** — a brand identity studio. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4, with a cinematic "Night Flight / Interstate" identity: a scroll-driven highway centerline, long-exposure light-streak hero, pinned horizontal case-study journey, and telemetry-style typography.

## Stack

| Layer      | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 16 (App Router, static prerender)           |
| Styling    | Tailwind CSS v4 (design tokens in `app/globals.css`)|
| Animation  | GSAP + ScrollTrigger (pin, scrub, parallax, stagger), Motion (micro-interactions), Lenis (smooth scroll) |
| Type       | Archivo (display) · Instrument Serif (accents) · Public Sans (body) · IBM Plex Mono (data) |
| SEO        | Metadata API, JSON-LD, `sitemap.ts`, `robots.ts`, dynamic OG image |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Project map

```
app/
  layout.tsx            fonts, metadata, viewport
  page.tsx              section composition + JSON-LD
  globals.css           design tokens, type scale, centerline/grain effects
  opengraph-image.tsx   dynamic 1200×630 social card
  sitemap.ts / robots.ts
components/
  SmoothScroll.tsx      Lenis + GSAP ticker (reduced-motion aware)
  Cursor.tsx            custom cursor follower (desktop, motion-safe)
  Magnetic.tsx          magnetic hover wrapper for CTAs
  SplitWords.tsx        masked word-by-word heading reveals (*outline* / ~serif~)
  RouteRail.tsx         signature scroll rail + mile odometer (≥1280px)
  Hero.tsx              canvas light-streak scene + intro + scroll parallax
  Marquee.tsx           velocity-skewed services strip
  Work.tsx              pinned horizontal case-study journey (desktop)
  Services.tsx  Process.tsx  Studio.tsx  Testimonials.tsx
  Packages.tsx          4 tiers + add-ons + FAQ
  Contact.tsx           section shell
  contact/
    ContactForm.tsx     3-step animated form (validation, arming guard)
    formState.ts        form state machine
  Footer.tsx            CTA band, newsletter, giant wordmark
  Nav.tsx  Reveal.tsx  SectionHeading.tsx  RouteShield.tsx  ProjectArt.tsx
lib/
  data.ts               all site copy/content in one place
```

## Signature interactions

- **Route rail** — dashed centerline fills with scroll; odometer counts 0 → 2,789 mi (NYC → LA); waypoints light up per section
- **Work journey** — desktop pins the viewport and drives the case studies horizontally with per-panel art parallax and ghost numerals; mobile falls back to a vertical stack
- **Manifesto** — studio statement illuminates word-by-word, scrubbed to scroll
- **Multi-step brief** — 3-step contact form with animated transitions, live summary, and a double-submit guard

## Design system

- Palette: Midnight `#0A1220` · Moonlight `#EEF2F6` · Taillight `#FF4030` · Centerline `#F5B700` · Asphalt `#97A1B3` · Interstate `#4A72FF`
- The yellow centerline is reserved for the scroll route (rail, process timeline) — don't use it as a general accent
- All animations respect `prefers-reduced-motion`

## Notes

- Copy lives in `lib/data.ts` — edit content there, not in components
- The contact form and newsletter currently show client-side success states; wire them to a real endpoint (Resend, Formspree, or a Route Handler) before launch
- `npm run lint` — ESLint (passes clean)
