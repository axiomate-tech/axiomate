<div align="center">

# axiomate

**AI & automation for US collections BPOs — marketing site**

A fast, accessible, production-ready one-page site built with [Astro](https://astro.build).
Dark fintech aesthetic, brand-cyan accents, self-hosted fonts, near-zero JavaScript.
Positioned for one buyer: ops/training leaders at US collections BPOs.

</div>

---

## Tech stack

| | |
|---|---|
| **Framework** | Astro 7 (static output, ships almost no JS) |
| **Styling** | Hand-written modern CSS + design tokens (`src/styles/global.css`), Astro scoped component styles |
| **Fonts** | Self-hosted via Fontsource — Space Grotesk (display), Inter (body), JetBrains Mono (technical labels) |
| **Contact form** | Google Apps Script → Google Sheet + email notification (see `scripts/google-form-handler.js`) |
| **Icons** | Inline SVG set (`src/lib/icons.ts`) |
| **Images** | Optimized at build time (`astro:assets` → WebP) |

Typical first-visit payload: **~11 KB HTML + ~10 KB CSS + ~1 KB JS** (+ fonts & logo). 🚀

---

## Quick start

> Node.js (v24 LTS) is already installed at `~/.local/node` and added to your `PATH` in `~/.zshrc`.
> Open a **new terminal** so `node`/`npm` are available, then:

```bash
npm install      # first time only (already done)
npm run dev      # start dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

---

## ✅ Before you launch — replace these placeholders

Everything you need to edit lives in **`src/data/content.ts`** (plus one line in the Astro config).

1. **Contact form** — _the form will not send until you do this:_
   - Follow the setup steps in `scripts/google-form-handler.js` (create a Google Sheet, deploy the Apps Script).
   - Paste the deployed URL into `content.ts` → `site.contact.googleScriptUrl`.
2. ~~**Contact email**~~ — ✅ set to `arsh@axiomate.tech`.
3. **Booking link** — `site.contact.bookingUrl` (paste your Calendly / Cal.com link; currently jumps to the form).
4. ~~**Domain**~~ — ✅ set to `axiomate.tech` in both `astro.config.mjs` and `content.ts`.
5. **Social links** — `site.social` (LinkedIn / X URLs still point at placeholder handles).
6. ~~**Case studies**~~ — ✅ `outcomes.items` now carry your three real builds with the measured **40%** result and real role-attributed quotes. Optional upgrade: named attribution + company once you have written permission.
7. ~~**Stats**~~ — ✅ leads with the measured 40%; the rest are labeled as design targets in the disclaimer. Swap in more measured figures as you collect them.
8. **Marquee tech list** — `marquee.items` names common collections-floor platforms (Five9, Genesys, NICE CXone, Vapi, Retell AI…). Trim it to the tools you genuinely work with.
9. ~~**Entry offer**~~ — ✅ the fixed-fee **Collections AI & Automation Audit** has its own section (`offer` in `content.ts`, `#offer` on the page). Decide the actual fee before your first outreach — the site intentionally says "quoted upfront."

Tip: search the codebase for `TODO` to find every spot that needs your input.

---

## Editing content & copy

- **All copy, services, process steps, FAQs, and footer links** → `src/data/content.ts`. It's typed, so your editor will catch mistakes.
- To add/change a service, add an object to `services.items` and pick an `icon` from the available names in `src/lib/icons.ts`.
- To add an FAQ, append to `faq.items`.

## Customizing the design

- **Colors, fonts, spacing, radii, shadows, motion** are all CSS custom properties at the top of `src/styles/global.css` (`:root`). Change `--cyan-500`, `--bg`, etc. in one place and the whole site updates.
- Component-specific styles live in `<style>` blocks inside each `src/components/*.astro` file (scoped to that component).

## Brand assets

Generated from your logo (`Gemini_Generated_Image_uau16luau16luau1.png`):

- `src/assets/logo-lockup.png` — chevron + wordmark (background removed, Gemini badge stripped)
- `src/assets/logo-mark.png`, `logo-wordmark.png` — split variants
- `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` — full icon set
- `public/og-image.png` — 1200×630 social share card

If you change the logo, re-run the generation steps (see commit notes) or ask to regenerate these.

---

## Project structure

```
src/
├── assets/         # brand images (optimized at build)
├── components/     # Nav, Hero, Services, Process, Offer, Stats, WhyUs, Outcomes, Faq, Contact, Footer, Icon
├── data/content.ts # 👈 single source of truth for all copy & config
├── layouts/Base.astro  # <head>, SEO/OG meta, JSON-LD, fonts, scroll-reveal
├── lib/icons.ts    # inline SVG icon set
├── pages/index.astro   # assembles the one-page site
└── styles/global.css   # design tokens + base + utilities
public/             # favicons, manifest, robots, OG image (served as-is)
```

---

## Deploying

The build output in `dist/` is plain static files — host it anywhere.

- **Netlify / Vercel / Cloudflare Pages:** connect the repo, build command `npm run build`, publish/output directory `dist`. (Or drag-and-drop the `dist/` folder onto Netlify Drop.)
- **GitHub Pages / S3 / any static host:** upload the contents of `dist/`.

Set your real domain first (see step 4 above) so SEO tags resolve correctly.

---

## Accessibility & performance notes

- Semantic landmarks, skip-link, keyboard-accessible nav & accordion, visible focus rings.
- Respects `prefers-reduced-motion` (all animations and scroll-reveal disable gracefully).
- Self-hosted fonts (no third-party requests) subset by `unicode-range`.
- Scroll-reveal and stat counters degrade gracefully without JS.
