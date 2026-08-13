# Slyxup Tools

Tools site — Next.js (static export, no SSR) frontend + Cloudflare Worker (Hono) backend.

## Structure

- `frontend/` — Next.js static-export app (Tailwind v4, shadcn/ui, lucide, next-themes)
- `backend/` — Cloudflare Worker + Hono API on port 8790

## Commands

- `pnpm dev` — run frontend + backend in parallel
- `pnpm dev:frontend` — Next.js dev server only
- `pnpm dev:backend` — Wrangler dev (port 8790) only
- `pnpm build` — build all packages
- `pnpm --filter frontend run build` — static export to `frontend/out`
- `pnpm --filter frontend run preview` — serve the static `out/` build
- `pnpm typecheck` — typecheck all packages

## Frontend

- Static export via `output: "export"` in `next.config.ts` (no SSR).
- Fonts: Space Grotesk (sans), Geist Mono (mono), Instrument Serif (heading) — defined in `app/fonts.ts`.
- Theme toggle via `next-themes` (`components/theme-toggle.tsx`).
- shadcn/ui preset `base-nova` uses Base UI — buttons use the `render` prop, NOT `asChild`.
- API base URL from `NEXT_PUBLIC_API_URL` (default `http://localhost:8790`) — see `lib/api.ts`.

## Backend

- Cloudflare Worker + Hono. Dev on port 8790, proxied origin at `https://api-tools.slyxup.online`.
