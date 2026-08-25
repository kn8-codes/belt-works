# Work Card — Claude Code Course Sales Page V0

**Date:** 2026-08-25
**Owner:** Nate
**Lead/verifier:** Egon/default
**Status:** authorized private local implementation only
**Branch:** `feat/claude-code-course-sales-page`
**Base:** `origin/main` at `8e6aed2`

## Classification

```yaml
code_lifecycle: maintained_public
ponytail_mode: off
ponytail_reason: long-lived public buyer-facing page adjacent to analytics, consent and commerce
reuse_ladder:
  - existing SvelteKit and Belt.works design/accessibility patterns
  - accepted course facts and current public proof
  - route-local Svelte/CSS only where existing patterns do not fit
quality_floor:
  - no false availability, testimonials, demand, scarcity or affiliation
  - responsive/keyboard/accessibility checks
  - check, build, scoped lint, diff check and real browser smoke
```

## Goal

Build a private local route at `/courses/claude-code-beyond-chat-window` that gives a prospective learner the full decision surface without pretending that the course, sample, price or checkout is live.

## Required content

- status-safe hero and working promise;
- project-aware threshold;
- inspect → bound → diff → named check/limitation → human decision loop;
- honest representative-sample placeholder;
- locked six-module curriculum;
- for/not-for and complete prerequisite burden;
- planned assets with status labels;
- inspectable Belt.works proof links;
- FAQ and prelaunch close;
- no form, checkout, analytics or fake purchase control.

## Allowed implementation

- `src/routes/courses/claude-code-beyond-chat-window/+page.svelte`
- route-local course components/content only when they improve maintainability
- this card, `STATE.md`, and `docs/EVIDENCE.md`
- ignored local verification artifacts

No shared header/footer, dependency, backend, contact, analytics, hostname or sitemap changes in this V0 branch.

## Forbidden actions

No commit, push, PR, merge, deployment, DNS, Vercel, public preview, provider/account access, checkout, email capture, analytics, external assets or unrelated cleanup.

## Verification

- `npm run check`
- `npm run build`
- scoped ESLint
- `git diff --check`
- local production route returns 200
- desktop 1280×900 and mobile 390×844
- no overflow, empty links, forms, external scripts or fake purchase CTA
- visible keyboard focus and sane headings

## Canonical source packet

`/Users/kn8/MESH_BOARD/projects/ai-education-consultancy-2027/claude-code-makerspace/SALES_PAGE_IMPLEMENTATION_WORK_CARD_2026-08-25.md`
