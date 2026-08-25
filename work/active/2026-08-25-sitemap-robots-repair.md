# Work Card — Sitemap and Robots Repair

**Date:** 2026-08-25
**Owner:** Nate
**Lead/verifier:** Egon/default
**Status:** local implementation authorized; no deploy
**Branch:** `fix/sitemap-robots-canonical`
**Base:** `origin/main` at `8e6aed2`

## Classification

```yaml
code_lifecycle: maintained_public
ponytail_mode: off
ponytail_reason: shared long-lived crawl and indexing infrastructure
reuse_ladder:
  - current origin/main route and blog architecture
  - stale sitemap/robots lane as read-only prior art
  - minimal route endpoint and robots declaration
quality_floor:
  - canonical www host backed by live redirect behavior
  - valid deterministic XML
  - published blog slugs generated from current content
  - no false lastmod values for static routes
  - check, build, scoped lint, HTTP and XML smoke
rollback_stop_path:
  - unmerged feature branch
```

## Scope

Allowed:

- `src/routes/sitemap.xml/+server.js`
- `static/robots.txt`
- this work card
- `STATE.md`
- `docs/EVIDENCE.md`

Forbidden:

- changes to the stale dirty SEO worktree;
- service pages, case studies, JSON-LD, navigation or course code;
- dependencies, accounts, Search Console, deployment or production mutation;
- merge to `main` without a separate gate.

## Acceptance

- `/sitemap.xml` returns valid XML at HTTP 200.
- URLs use `https://www.belt.works` only.
- Reviewed core routes are explicit.
- Current blog posts are included from the existing content loader with frontmatter dates.
- URLs are unique and deterministic.
- `robots.txt` advertises the sitemap.
- Every included local URL returns 200 in production preview.
