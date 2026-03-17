# Astro Project Polish: From Rough Conversion to Production-Ready

You are reviewing and polishing an Astro project that was recently converted from an older stack. Your job is to take it from "it works" to "production-ready." Work through the following phases systematically. After each phase, summarize what you changed and why.

Start by reading the project structure and package.json to understand the setup before making any changes.

## Phase 1: HTML Validity & Semantics
- Run through every `.astro` page and layout. Fix any invalid HTML (unclosed tags, deprecated elements, incorrect nesting like `<div>` inside `<p>`, duplicate IDs).
- Ensure proper semantic structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` used correctly.
- Every page must have exactly one `<h1>`. Heading hierarchy must not skip levels.
- All `<img>` tags must have meaningful `alt` attributes. Decorative images get `alt=""`.
- All interactive elements must be keyboard accessible. No `<div>` with `onclick` — use `<button>` or `<a>` as appropriate.
- Ensure all `<a>` tags with `target="_blank"` have `rel="noopener noreferrer"`.

## Phase 2: Component Extraction
- Identify repeating HTML/CSS patterns across pages (headers, footers, cards, CTAs, navigation, section layouts).
- Extract them into reusable Astro components in `src/components/`.
- Use `Astro.props` with sensible TypeScript interfaces for component props.
- If a pattern repeats more than twice, it should be a component.
- Ensure slot usage where inner content varies between instances.

## Phase 3: CSS Cleanup & Consistency
- Consolidate duplicate styles. Remove dead/unused CSS.
- Ensure consistent spacing, typography scale, and color usage. If there's no design token system, create CSS custom properties in a global stylesheet for colors, font sizes, spacing, and breakpoints.
- Verify responsive behavior at common breakpoints (375px, 768px, 1024px, 1440px). Fix any overflow, broken layouts, or unreadable text.
- Prefer scoped `<style>` in Astro components for component-specific styles. Keep global styles minimal and intentional.
- Remove any inline styles and move them to proper stylesheets or scoped styles.

## Phase 4: SEO & Meta Data
- Every page must have a unique, descriptive `<title>` (50–60 chars ideal).
- Every page must have a `<meta name="description">` (120–160 chars ideal).
- Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter card meta to all pages.
- Create or verify a shared `<SEO>` or `<Head>` component that pages use with per-page overrides.
- Ensure `<html lang="...">` is set correctly to Norsk bokmål.
- Add canonical URLs to every page.
- Verify or create `robots.txt` and `sitemap.xml` (use `@astrojs/sitemap` if not already).

## Phase 5: Performance & Best Practices
- Use Astro's `<Image />` component (from `astro:assets`) instead of raw `<img>` tags for local images. Ensure proper `width` and `height` attributes.
- Lazy-load below-the-fold images. Critical above-the-fold images get `loading="eager"`.
- Minimize client-side JS. If any `client:*` directives are used, verify they are necessary.
- Ensure fonts are loaded efficiently (preload critical fonts, use `font-display: swap`).
- Check that no large assets are unoptimized (images, SVGs, etc.).

## Phase 6: Accessibility Audit
- Ensure sufficient color contrast (WCAG AA minimum).
- All form inputs must have associated `<label>` elements.
- Add `aria-label` or `aria-labelledby` where visual labels are absent.
- Ensure skip-to-content link exists.
- Focus states must be visible on all interactive elements.

## Phase 7: Final Checks
- No console errors or warnings in dev.
- No broken internal links.
- No placeholder content (lorem ipsum, TODO comments, placeholder images).
- Favicon is set.
- 404 page exists and is styled.
- Build runs without errors (`astro build`).

---

## How to work
- Go phase by phase. Don't skip ahead.
- For each phase, first audit the current state, then make changes.
- After each phase, give me a brief summary of changes.
- If you are unsure about a design decision (e.g., color choice, layout structure), ask me before changing it.
- Do not remove any functionality or content — this is a polish pass, not a redesign.
- Commit-ready code only. No half-done changes.
```

Important: DO NOT ASK QUESTIONS, JUST GO AHEAD AND COMPLETE. Questions are fine in that case after you have completed full refactoring.
