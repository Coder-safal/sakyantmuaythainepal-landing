# Sak Yant Muay Thai Nepal

The official website for **Sak Yant Muay Thai Nepal** — a premier Muay Thai & MMA fight academy in Pokhara, Nepal, and home of *The Contender Fight Series*.

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **TypeScript**, and **shadcn/ui** (Radix primitives).

---

## Tech Stack

| Layer            | Technology                                |
| ---------------- | ----------------------------------------- |
| Framework        | [Next.js 15](https://nextjs.org/) (App Router, Server Components) |
| Language         | TypeScript 5                              |
| Styling          | Tailwind CSS v4 + custom CSS variables    |
| UI Primitives    | shadcn/ui (Radix UI)                      |
| Icons            | lucide-react                              |
| Data Layer       | TanStack Query                            |
| Forms            | react-hook-form + zod                     |
| Package Manager  | pnpm                                      |

---

## Prerequisites

- **Node.js** ≥ 18.18
- **pnpm** ≥ 8 (`npm install -g pnpm`)

---

## Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Start the dev server (http://localhost:3000)
pnpm dev

# 3. Build for production
pnpm build

# 4. Run the production server
pnpm start
```

### Available scripts

| Command          | What it does                                     |
| ---------------- | ------------------------------------------------ |
| `pnpm dev`       | Run the Next.js dev server with HMR              |
| `pnpm build`     | Create an optimized production build             |
| `pnpm start`     | Serve the production build                       |
| `pnpm lint`      | Lint with Next.js ESLint config                  |
| `pnpm typecheck` | Type-check the project                           |
| `pnpm format`    | Format the codebase with Prettier                |

---

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── about/                # /about
│   ├── achievements/         # /achievements
│   ├── contact/              # /contact (with client form)
│   ├── contender/            # /contender
│   ├── events/               # /events
│   ├── gallery/              # /gallery (client-side filter + lightbox)
│   ├── membership/           # /membership
│   ├── podcast/              # /podcast
│   ├── error.tsx             # Global error boundary
│   ├── globals.css           # Tailwind v4 + theme tokens
│   ├── layout.tsx            # Root layout + metadata
│   ├── not-found.tsx         # 404 page
│   ├── page.tsx              # / (Home)
│   ├── robots.ts             # /robots.txt
│   └── sitemap.ts            # /sitemap.xml
├── components/
│   ├── layout/               # Navbar, Footer, SiteLayout, WhatsAppFab
│   ├── providers/            # QueryProvider
│   └── ui/                   # shadcn/ui primitives + PageHero, SectionHeader
├── hooks/                    # Reusable hooks
└── lib/
    ├── images.ts             # Centralized image paths
    ├── site.ts               # Site config + nav
    └── utils.ts              # cn() helper
public/
└── images/                   # Static images served from /images/*
```

---

## Environment Variables

Create a `.env.local` file in the project root for any overrides:

```bash
# Public base URL used by sitemap & robots
NEXT_PUBLIC_SITE_URL=https://sakyantmuaythai.com
```

---

## Deployment

The project is a standard Next.js 15 application and deploys cleanly to any Node-compatible host. Recommended targets:

- **Vercel** — push the repo, import the project, done.
- **Self-hosted** — `pnpm build && pnpm start` behind a reverse proxy.

---

## License

© Sak Yant Muay Thai Nepal — All rights reserved.
