# Work Card — Belt Problem Map Drill-Down V2

**Owner:** Nate / Egon
**Status:** active, review-only
**Branch:** `feat/problem-map-drilldown`
**Base:** `origin/main` at `9868f45`

## Intent

Build a local, reviewable V2 of the public problem map. The V1 route proved the voice and visual field but presents all authored nodes at once. V2 must visibly narrow: root question → four broad frictions → local branch leaves → one readable answer.

## Included

- Seven approved root categories: `Something stopped working`, `It takes too long`, `People can’t find us`, `Information is scattered`, `We’re stuck`, `No way to do this yet`, and `Let me just tell you what happened`.
- Root/reset, state-aware links, selected branch expansion, leaf answer, accessible linear equivalent, and reduced-motion treatment.
- One local D3-force motion review pass: client-only bounded coordinate solver that reheats and settles the authored graph geometry while Svelte remains the state/accessibility owner. See `docs/plans/2026-07-23__problem-map-d3-force-motion-pass.md`.

## Excluded

- Push, PR, deployment, public-copy changes outside this route.
- Analytics or PostHog implementation in this worktree, AI-generated answers, free-text diagnosis, contact-flow changes.
- Any dependency beyond the explicitly approved local `d3-force` review dependency.
- Claims that this is final public UX.

## Acceptance checks

1. `npm run check` has zero errors/warnings.
2. `npm run build` passes.
3. At rest, only root and seven approved top-level categories are visually prominent.
4. Selecting a category makes only its concrete children appear.
5. Selecting a leaf changes the explanatory state and preserves a Back/reset path.
6. A receipt/state entry identifies this as an un-deployed review artifact.

## Stop conditions

- Need to invent unsupported problem content beyond the existing V0 set.
- A visual effect compromises labels, keyboard access, reduced motion, or mobile readability.
- Any action would publish/deploy or alter a service/contact commitment.
