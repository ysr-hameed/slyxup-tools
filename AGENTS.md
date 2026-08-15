# Slyxup Tools — AGENTS.md

Tools site — Next.js (static export, no SSR) frontend + Cloudflare Worker (Hono) backend.

## Repo layout

```
tools.slyxup.in/
├── frontend/          # Next.js static-export app (Tailwind v4, shadcn/ui Base UI, lucide, next-themes)
├── backend/           # Cloudflare Worker + Hono API on port 8790
├── docs/TOOLS-ROADMAP.md   # The 50-tool SEO roadmap — the source of truth for what to build
└── AGENTS.md          # This file
```

- The Next.js `frontend/AGENTS.md` has auto-maintained Next.js 16 breaking-change rules — **read it before writing frontend code**.
- The roadmap (`docs/TOOLS-ROADMAP.md`) defines every tool we intend to ship, with keyword research, niche, and feasibility. **Build in roadmap order; never invent tools that aren't on it.**

## Commands

- `pnpm dev` — run frontend + backend in parallel
- `pnpm dev:frontend` — Next.js dev server only (port 3000)
- `pnpm dev:backend` — Wrangler dev only (port 8790)
- `pnpm build` — build all packages
- `pnpm --filter frontend run build` — static export to `frontend/out`
- `pnpm --filter frontend run preview` — serve the static `out/` build
- `pnpm typecheck` — typecheck all packages
- `pnpm --filter frontend run lint` — ESLint

Always run **typecheck + lint + build** after any change.

## Frontend conventions

- Static export (`output: "export"` in `next.config.ts`). **No SSR, no API routes, no server code in pages.**
- Fonts (see `app/fonts.ts` + `app/globals.css`): **Outfit** = `--font-display` (headings), **DM Sans** = `--font-sans` (fallback), **Lora** = `--font-body` (body, ~1.0625rem, line-height 1.7), **JetBrains Mono** = `--font-mono` (labels/eyebrows). Note `--font-serif` and `--font-heading` both map to `--font-display`, so a `font-heading` class = Outfit.
- Theme toggle via `next-themes` (`components/theme-toggle.tsx`).
- **shadcn/ui preset `base-nova` uses Base UI** — interactive components use the `render` prop, NOT `asChild` (e.g. `render={<Link href="/x" />}`).
- Brand logo (teal snake, theme-adaptive via CSS vars) — `components/logo.tsx`.
- **Slyxup brand tokens** (in `app/globals.css`): dark surfaces (`#0a0a0a`–`#262626`), **coral** primary (`#ff6b6b`→`#ee5a24`), **teal** logo gradient (`#08736F`→`#7AFFF7`).
- **Design utilities** (in `app/globals.css`): `.glass`, `.text-gradient`, `.card-border`, `.orb`, `.grid-dots`, `.noise`, and `.label` (mono uppercase eyebrow). Reuse `components/page-header.tsx` for page intros.
- API base URL from `NEXT_PUBLIC_API_URL` (default `http://localhost:8790`) — see `lib/api.ts`.

## SEO (apply to EVERY new page)

- Each page exports its own `metadata` (unique `title`, `description`, `alternates.canonical`).
- Add JSON-LD `schema` (WebApplication for tools, Article + FAQPage for guides) via a `<script type="application/ld+json">`.
- Rich, keyword-targeted copy based on the roadmap's research: hero, "how it works", real-world examples, FAQ, and a "Methodology & sources" note with a clear disclaimer (never fake live data).
- Internal links: related guides ↔ tools.
- Root-level Organization/WebSite JSON-LD already live in `app/layout.tsx` — don't duplicate.

---

## How to build a NEW TOOL

1. **Pick the tool from `docs/TOOLS-ROADMAP.md`** in order. Verify its keyword + feasibility section. Update the roadmap item to `✅ DONE` when finished.

2. **Create the tool page folder** under `frontend/app/(tools)/<slug>/` with two files:
   - `frontend/app/(tools)/<slug>/<slug>.tsx` — the **client** calculator component (`"use client"`), pure browser JS, static 2026 assumptions, adjustable inputs, low–high estimate ranges.
   - `frontend/app/(tools)/<slug>/page.tsx` — a **server** component with `metadata`, JSON-LD schema, the calculator, and the SEO content sections (TL;DR, methodology, niche table, examples, FAQ, related guides). Mirror `frontend/app/(tools)/tiktok-money-calculator/`.

3. **Register the tool** in `app/tools/page.tsx` (`availableTools` array — add title, href, description, icon). Keep real tools only; never list unbuilt tools.

4. **Add it to `app/sitemap.ts`** `routes` array.

5. **Build a companion blog article** (see below) targeting the roadmap's long-tail keywords — **every tool ships with 3 unique articles** (target long-tail variations of the tool's keyword). See the "Article quota" rule below.

6. Update the home page `app/page.tsx` **featured/`tools`** arrays **only if** you want to surface it there.

> **Calculator quality standards (REQUIRED for every tool):**
> - **Reset button** in the results header that restores every input to its default.
> - **Human-readable labels**, never raw IDs. If a niche/region/length is shown in a summary line, display "Finance × US × 1min+" — not `finance × us × under1min`.
> - Add a **per-1,000-views and/or per-1-million-views** conversion line in the results (strong SEO hook, e.g. "≈ $8,190–$15,210 per 1M views").
> - Guard inputs with `Math.max(0, Number(e.target.value))` so empty/negative values can't produce `NaN`.
> - **RPM/budget consistency:** the numbers the calculator produces MUST fall in the ranges your page table / TL;DR / FAQ claim. (e.g. if the page says "Finance RPM $10–$15", the calculator's finance output must land there — double-check units: dollars vs cents). Never ship a calculator whose outputs contradict its own page.

---

## How to write a NEW BLOG ARTICLE

1. **Create the article page** as a server component under `frontend/app/(guides)/<slug>/page.tsx`. It exports `metadata` (unique title/description/canonical), an `Article` + `FAQPage` JSON-LD `schema`, and the full guide content in `<article>`. Mirror `frontend/app/(guides)/how-much-does-tiktok-pay/`.

2. **Register it in `lib/articles.ts`** — add one entry (title, slug, description, category, datePublished, readTime, href). The `/blog` index page and `app/sitemap.ts` auto-pull from this registry, so the article appears everywhere automatically.

3. Include internal links to the related tool and at least one other guide.

> **Article quota (REQUIRED):** Every tool must have **at least 3 unique articles** published alongside it before it counts as done. Write these long-tail variations in one pass with the tool:
> - 1 core "how much does <platform> pay per view / RPM" explainer
> - 1 milestone/size article (e.g. "per 1 million views", "with 100K followers")
> - 1 by-channel-size or income-breakdown article (e.g. "ad revenue by subs", "how many followers to make money")
>
> The 3 articles must have genuinely distinct body copy and keywords — never reuse the same paragraphs across them or across tools.

> **Humanized voice (REQUIRED for every article):** Write like a sharp, honest friend who lives the topic — never like a bot.
> - Open with a **real hook**: the exact query a reader typed into Google, or a concrete scenario. Never "In today's world".
> - Use **"you" and contractions** (you're, it's, that'll). Vary sentence length (short + punchy mixed with longer).
> - **Ban AI filler:** "It's important to note", "In conclusion", "Furthermore", "Moreover", "Additionally", "delve", "leverage", "when it comes to", "in today's fast-paced world".
> - **Show, don't tell:** concrete numbers + small realistic examples ("Say you're a finance channel with 500K views a month...").
> - Use **spoken transitions** ("Here's the thing:", "Real talk:", "The short version:").
> - **Close with an opinionated takeaway** before the CTA, not a boilerplate summary.
> - Keep figures consistent with the page's schema/FAQ and the tool's calculator.
> - In JSX text, escape quotes with `&ldquo;`/`&rdquo;` (or curly quotes) — never raw `"`, or ESLint `react/no-unescaped-entities` fails.

> **Article/SEO checklist:** factual accuracy (no fake data — label estimates clearly), and every guide links to its related **tool + at least one other guide**; every tool page links to its **own platform's guides** in the "Related" block (not just cross-tool links).

## Folder structure (frontend/app)

```
app/
├── layout.tsx             # root layout (fonts, JSON-LD, nav/footer)
├── page.tsx               # home
├── blog/page.tsx          # blog index (auto-lists lib/articles.ts)
├── tools/page.tsx         # tools index (register tools here)
├── (tools)/               # route group → URLs have NO prefix
│   └── <slug>/            # each tool: page.tsx + <slug>.tsx (client calc)
├── (guides)/              # route group → URLs have NO prefix
│   └── <slug>/page.tsx    # each blog article
├── about|contact|privacy|terms/page.tsx
├── sitemap.ts
└── robots.ts
```

> **Route groups:** `(tools)` and `(guides)` organize files without changing URLs — every page still lives at its bare route (e.g. `/tiktok-money-calculator`, `/how-much-does-tiktok-pay`). Never nest a real path segment, or URLs/canonicals/sitemap break.

---

## Definition of "done"

- `pnpm --filter frontend run build` succeeds (static export complete).
- `pnpm typecheck` and `pnpm lint` pass.
- New pages have unique metadata + JSON-LD schema.
- New tools/blogs are registered in their registry files (`app/tools/page.tsx` / `lib/articles.ts`) and in `app/sitemap.ts`.
- Roadmap updated to `✅ DONE`.
