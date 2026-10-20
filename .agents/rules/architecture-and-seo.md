# Project Architecture & SEO Rules

## 1. Strict Server Components by Default (RSC / SSR First)
- **Parent-Level Rule**: NEVER mark parent-level components, pages (`src/app/**/page.tsx`), layouts (`src/app/**/layout.tsx`), section containers, or data-fetching wrappers with `'use client'`.
- All pages and layouts MUST remain React Server Components (RSC) to ensure complete Server-Side Rendering (SSR) and fast Initial Server Response.
- Data fetching, heavy computations, and static content rendering must always happen on the server.

## 2. Isolate Client Components to the Leaves
- **Push `'use client'` down**: Only the specific interactive elements that require browser events, state, or hooks (e.g. `useState`, `useEffect`, `onClick`, modal popups, form handlers, carousels, mobile drawer toggles) should be declared with `'use client'`.
- **Component Composition**: If an interactive component must wrap server content, pass the server content as `children` (`children: React.ReactNode`) so the children remain Server Components rendered on the server.
- **Naming & Organization**: Keep interactive client components isolated in dedicated files (e.g., in `src/components/ui/` or `src/components/interactive/`).

## 3. SEO & Semantic Structure
- **Next.js Metadata API**: Every page must declare a comprehensive `Metadata` object (or `generateMetadata` for dynamic routes) including:
  - Descriptive, unique `title` and `description`
  - Canonical URLs (`alternates.canonical`)
  - OpenGraph tags (`openGraph: { title, description, images, url, siteName }`)
  - Twitter Card tags
  - Search engine directives (`robots`)
- **Semantic HTML**: Always use standard semantic HTML tags (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`) with a single `<h1>` per page and an orderly heading hierarchy (`<h1>` -> `<h2>` -> `<h3>`).
- **Structured Data (Schema.org / JSON-LD)**: Integrate relevant JSON-LD schemas for rich snippets (e.g., Organization, Place/Temple, Event, FAQPage) directly rendered on the server.
- **Zero Hydration Mismatch**: Ensure HTML rendered on the server exactly matches client expectations, preventing layout shifts and hydration errors for web crawlers.
