# Sean Watkins — Portfolio

A senior product designer portfolio built with Next.js (App Router), Tailwind CSS v4, shadcn/ui, and Motion (Framer Motion). Black-primary, gradient-mesh visual language with scroll-triggered reveals, a mobile-first nav, and fully placeholder content ready to be swapped for real work.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4** + **shadcn/ui** (Radix primitives, `nova` preset)
- **Motion** (`motion/react`) for entrance/scroll animations
- **Geist**, **Bricolage Grotesque**, and **Instrument Serif** via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All copy, case studies, testimonials, and stats live in `src/lib/data.ts` — edit that file to replace the placeholder content with your real work, bio, and links. Case study cover art is generated with CSS gradients rather than screenshots; swap in real product imagery inside `src/components/site/case-study-card.tsx` when ready.

## Build & deploy

This app is configured for static export (`output: "export"` in `next.config.ts`), producing a static `out/` directory:

```bash
npm run build
```

Deployed to Cloudflare Pages via Wrangler:

```bash
npx wrangler pages deploy out --project-name portfolio-website --branch main
```
