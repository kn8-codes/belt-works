# Plan — Problem Map Data-Belt six-leaf card expansion

## Goal

Extend the existing local-only selected-answer data map with exactly six authored six-field cards under the two approved Data-Belt-adjacent branches:

1. `Information is scattered → Files or forms are hard to find`
2. `Information is scattered → The useful history lives only in people’s heads`
3. `It takes too long → The same information gets copied between places`
4. `It takes too long → A report or update gets rebuilt every time`
5. `It takes too long → Paper or messages have to be typed in again`

Together with the two existing pilots, this produces eight authored cards. All remaining leaves keep the exact neutral fallback.

## Content rules

- Preserve the existing fields: `scene`, `consequence`, `question`, `firstMove`, `beltPath`, and `handoff`.
- Keep recognition concrete, first moves small and safe, and Belt paths as bounded capability hints rather than diagnosis or a service promise.
- Keep handoffs optional and read-only. Do not add data collection, contact links, or submission controls.
- Preserve the pilot-card text unchanged.

## Implementation boundary

1. Modify only `authoredLeafCards` in `src/routes/problem-map/+page.svelte`.
2. Do not change leaf/group topology, computed leaf model, panel markup/CSS, linear route, graph geometry, D3/force configuration, dependencies, or network-facing code.
3. Update `STATE.md` and `docs/EVIDENCE.md` with commands and browser proof.
4. Do not commit, push, deploy, or change any external service.

## Verification

1. Run `npm run check`, `npm run build`, and `git diff --check`.
2. Run a fresh local production preview.
3. At desktop, select every authored leaf and confirm all six headings render without a neutral fallback or selected-panel link.
4. At 390×844, select at least one new authored card and confirm the six-field panel remains present and the fallback is absent.
5. Leave the Kanban card blocked for Nate’s eight-card editorial review.

## Stop conditions

Stop if the content requires an interaction/visual/graph change, a new dependency, data collection, a contact flow, analytics, backend/service configuration, or an unbounded Belt claim.
