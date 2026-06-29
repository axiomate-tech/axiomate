<div align="center">

# axiomate

**Cloud, automation & AI solutions — marketing site**

A fast, accessible, production-ready one-page site built with [Astro](https://astro.build).
Dark "future-of-finance" aesthetic, brand-cyan accents, self-hosted fonts, near-zero JavaScript.

</div>

---

## Tech stack

| | |
|---|---|
| **Framework** | Astro 7 (static output, ships almost no JS) |
| **Styling** | Hand-written modern CSS + design tokens (`src/styles/global.css`), Astro scoped component styles |
| **Fonts** | Self-hosted via Fontsource — Space Grotesk (display), Inter (body), JetBrains Mono (technical labels) |
| **Contact form** | [Web3Forms](https://web3forms.com) — no backend required |
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

1. **Contact form key** — _the form will not send until you do this:_
   - Go to [web3forms.com](https://web3forms.com), enter your email, copy the free access key.
   - Paste it into `content.ts` → `site.contact.web3formsKey`.
2. **Contact email** — `site.contact.email` (currently `akworks247@gmail.com`; consider a branded address like `hello@axiomate.io`).
3. **Booking link** — `site.contact.bookingUrl` (paste your Calendly / Cal.com link; currently jumps to the form).
4. **Domain** — set your real domain in **two** places so canonical URLs, Open Graph tags, and the sitemap are correct:
   - `astro.config.mjs` → `site`
   - `content.ts` → `site.url` and `site.domain`
5. **Social links** — `site.social` (LinkedIn / X / GitHub URLs).
6. **Testimonials** — `outcomes.items` are realistic **placeholders** with role-based attribution. Replace with real, named quotes once you have permission.
7. **Stats** — `stats.items` are framed as *target* outcomes with a disclaimer. Adjust to your real figures.

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
├── components/     # Nav, Hero, Services, Process, Stats, WhyUs, Outcomes, Faq, Contact, Footer, Icon
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
