# Plan — Problem Map hybrid visual synthesis (bake-off lanes A/B/C)

**Date:** 2026-07-25 · **Author:** Egon · **Approval:** Nate, Telegram 2026-07-25 ~05:20 ("take the best parts of all three, get them implemented, and give me something to look at")

## Goal

Implement a hybrid of the three bake-off proposals into `src/routes/problem-map/+page.svelte` for Nate's visual pass this morning. No commit. Working tree only, consistent with the intentionally-uncommitted `feat/problem-map-drilldown` lane.

## Synthesis decision

- **Base = Lane A (Opus 5):** sibling categories stay mounted and recede (depth, not deletion) — this is the only proposal that preserves spatial memory, Nate's core interaction requirement.
- **Donor from Lane C (Kimi 3):** answer-panel `dt` labels become small-caps field-note index annotations (easily reversible hunk).
- **Lane B (Fable 5):** no code donated. Its animated dotted/beaded connector grammar was judged visual busywork; Opus's quiet/active/solid connector hierarchy already supplies the three-state path legibility.
- **Deferred:** category-centered camera recentering (none of the three lanes implemented it; it is a separate behavior slice after the visual pass). Mobile redesign deferred per Nate ("cross that bridge when we come to it").

## Changes (route file only)

1. Script: `recededPosition()` (recede factor 1.06, skipped under reduced motion), all groups always in `authoredPositions()`, `far` node kind with weaker x/y/charge forces and weaker link (distance 32 / strength .009).
2. Markup: group buttons always rendered; `class:receded`, `inert`, `tabindex={-1}` when receded.
3. CSS: single center-weighted light source + fine grain (field-note register), breathing central haze (::before, 38s), horizon ring loses glow; three legible tiers (fluid root clamp, semibold categories, amber-edged leaves shared with linear route); real `:focus-visible` accent outlines everywhere (removes all `outline:none`); answer heading capped to sentence scale with 1180px two-column step; `.constellation__hint` shows at .66 when branch open (recovers authored copy); mobile type floor .66/.7rem; dt small-caps eyebrow.
4. Accessibility blocks: extended `prefers-reduced-motion` (no breath/arrive/hover-lift, receded dims in place), full `prefers-reduced-transparency` solid-material fallback, `forced-colors: active` system-color branch.

## Verification

- `npm run check` → 0/0
- `npm run build` → pass
- `git diff --check` → pass
- Fresh production preview; screenshots at 1280px and 390×844: root, branch open (receded siblings visible), leaf selected, reduced-motion pass; delivered to Nate for visual pass.
- Update STATE.md + docs/EVIDENCE.md.

## Explicitly not authorized

No commit, push, PR, deploy, backend/analytics/contact-flow changes, or camera-behavior implementation.
