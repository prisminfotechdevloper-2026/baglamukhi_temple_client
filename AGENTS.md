<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Core Architecture & SEO Rules (MANDATORY)

### 1. Server Components (RSC) by Default — Never Mark Parent Components Client-Side
- **NO Parent `'use client'`**: NEVER place `'use client'` on parent-level components, pages (`page.tsx`), layouts (`layout.tsx`), section containers, or data wrappers.
- Parent pages and layouts MUST remain pure React Server Components for maximum Server-Side Rendering (SSR) speed, zero client bundle bloat, and complete search engine indexability.

### 2. Push `'use client'` Down to Interactive Leaves Only
- Only specific leaf elements that require client-side interactivity (`onClick`, `useState`, `useEffect`, form handlers, interactive modals, toggles) should use `'use client'`.
- If client interactivity wraps server content, pass the content through `children: React.ReactNode` so the children remain server-rendered.

### 3. Complete SEO & Metadata Optimization
- Every route must export full Next.js `metadata` (`title`, `description`, `openGraph`, `canonical`, `robots`, `keywords`).
- Maintain clean semantic HTML (`<h1>` hierarchy, `<main>`, `<article>`, `<nav>`, `<section>`).
- Add JSON-LD Structured Data on the server for rich snippet search indexing.

### 4. Strict UI & Icon Restrictions (PERMANENT RULE)
- **STRICT PROHIBITION ON SPARKLE ICONS (`Sparkles` / `Sparkle`)**: NEVER use `Sparkles`, `Sparkle`, or any 4-point AI/magic sparkle icon anywhere in this project (headers, badges, cards, buttons, lists, SVGs, or decorations). Use dignified Vedic symbols (`Flame`, `SunMedium`, `BookOpen`, `Scroll`, `ShieldCheck`, `CheckCircle2`, `Award`) instead.
- **NO Bubbly Oval / Sausage Pill Shapes**: Avoid `rounded-full` or `rounded-2xl` sausage pills for buttons and badges. Use crisp, architectural corners (`rounded-lg` / `rounded-md` / `rounded-xl`) with the signature gold left border (`border-l-[6px] border-l-[#D89B18]`).
- **NO Column-Wise Centered Stacking**: Do not center-stack elements in a long vertical column. Use structured, left-aligned editorial hierarchy and horizontal micro-grids.

