# Nadeem — Front-End Developer Portfolio

> **Live demo:** https://nadeeem1.github.io/nadeem-portfolio/
>
> **Repository:** https://github.com/nadeeem1/nadeem-portfolio

A production-ready personal portfolio built with React, TypeScript, Tailwind CSS v4, React Router and Framer Motion.

## Design direction
- **Concept:** "Code becomes interface" — the hero shows a code editor pane resolving into a live rendered UI card, a direct visual thesis for a front-end developer.
- **Palette:** ink navy (#0A0D14) / paper off-white in light mode, signal blue (#3556FF) as the primary accent, amber (#FF8A3D) as a secondary warm accent.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels, tags, code).
- **Motif:** a subtle dot-grid + ruler-tick pattern throughout, referencing a designer's grid.
- **Dark/Light mode:** toggle in the navbar, persisted to localStorage, respects prefers-color-scheme on first visit.

## Getting started

    npm install
    npm run dev       # local dev server
    npm run build     # production build -> dist/
    npm run preview   # preview the production build

## Before you publish — replace these placeholders

1. **Social links** — GitHub, LinkedIn and email are placeholders in Hero.tsx, Contact.tsx, and Footer.tsx.
2. **Project links** — each project in src/data/projects.ts has live: '#' and github: '#'. Swap in your real URLs.
3. **Project screenshots** — cards and detail pages use a styled number placeholder instead of a screenshot. Drop images into src/assets/ and swap the placeholder div for an img in ProjectCard.tsx and ProjectDetail.tsx.
4. **Testimonials** — Testimonials.tsx intentionally ships with dashed-border placeholders. Replace with real client quotes once available; don't fabricate reviews.
5. **Contact form** — handleSubmit in Contact.tsx only sets local state right now. Wire it to a form backend (Formspree, Resend, your own API route).
6. **OG image** — add public/og-image.png (1200x630) for link previews; it's already referenced in index.html.
7. **Domain / SEO** — update the title, meta description and theme-color in index.html once you have a live domain.

## Project structure

    src/
      components/   UI sections (Hero, About, Skills, Projects, Services, ...)
      context/       Theme (dark/light) context
      data/          Project content (single source of truth for the grid + detail pages)
      pages/         Home and ProjectDetail route components

Adding a new project is a single entry in src/data/projects.ts — no component changes needed.
