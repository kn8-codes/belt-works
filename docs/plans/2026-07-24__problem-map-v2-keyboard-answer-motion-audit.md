# Problem Map V2 — Keyboard, Answer State, and Motion Audit

**Scope:** review-only. Inspected the existing uncommitted V2 route on `feat/problem-map-drilldown`; this checklist does not authorize app-code changes, dependency changes, reset/stash, or publication.

## Evidence reviewed

- `work/active/2026-07-23-problem-map-drilldown-v2.md`
- `src/routes/problem-map/+page.svelte`
- `npm run check` — passes: 0 errors, 0 warnings.
- `npm run build` — passes.
- Local browser smoke at `http://127.0.0.1:4173/problem-map`: opening `Something stopped working` exposed exactly its three visual and three linear leaves; selecting `A website or form is broken` exposed the matching answer and three first moves. The accessibility tree labelled the map only as generic `Interactive problem map`.

## Assessment

- Native buttons provide Enter/Space activation. The visual map and linear route share `activeGroupId` and `selectedLeafId`; `chooseGroup()` clears the leaf, so a newly opened branch cannot retain a prior branch answer.
- Current source exposes a polite map-status message and `aria-pressed` state, but the visual map is a generic labelled `div`; it does not identify its controlled branch/answer regions or provide a structured group relationship.
- The browser's tab order follows DOM order, not graph geometry. It is predictable but long: root, all visual group buttons, active leaves, then the linear route. On desktop, visually receded group buttons remain keyboard stops.
- Selecting a leaf announces that the answer is below the map, but no answer heading receives focus. Keyboard users must continue tabbing to reach a CTA and cannot reliably discover the newly inserted answer content from focus alone.
- The selected leaf's answer state is branch-isolated in data, but should be defensively guarded so invalid/out-of-branch IDs cannot render stale content if future data becomes asynchronous.
- JS reduced-motion handling correctly disables camera interpolation and force simulation. CSS still animates the constellation hint opacity; remove that transition under reduced motion too.

## Required implementation checklist

1. Give the visual map a semantic container: use a labelled `section`/`nav` or `role="group"`, and connect the active leaf cluster plus answer panel with stable IDs and `aria-controls`/`aria-describedby` where useful. Keep SVG decorative (`aria-hidden="true"`).
2. Define keyboard behavior deliberately. Native Enter/Space remains required. Either:
   - keep ordinary Tab navigation and make receded desktop groups non-tabbable while a branch is open, with the breadcrumb/root as the explicit route out; or
   - implement documented roving focus with Arrow keys, Home/End, and focus movement that follows visible graph order.
   Do not claim spatial keyboard navigation without testing it.
3. On leaf selection, expose the answer as the next discoverable state: give the answer heading `tabindex="-1"` and move focus there for keyboard-origin activation only, or keep focus on the selected leaf and make its accessible description include the new answer title plus a clear shortcut/link to the answer. Use one concise live-status source; avoid duplicate live announcements from map status and answer/orientation containers.
4. Preserve state invariants in one transition helper: root means no group/no leaf; group means a known group and no leaf; leaf means a known leaf belonging to the active group. Reject/reset unknown IDs before rendering derived state.
5. Keep visible focus indication on root, visual group/leaf controls, breadcrumbs, linear controls, and answer actions. Do not rely only on color or a subtle border change.
6. Under `prefers-reduced-motion: reduce`, disable all map transition properties, including constellation-hint opacity, and verify no `requestAnimationFrame` camera or D3 tick is left running after a preference change.

## Smoke-test acceptance criteria

- `npm run check` and `npm run build` pass with zero errors/warnings.
- Keyboard-only at desktop and 375px: Tab order is documented and visible; Enter/Space opens every one of the seven groups, each group exposes exactly its own three leaves, and root/breadcrumb resets cleanly.
- For all 21 leaves: selecting it exposes the matching answer title and three first moves only; selecting another group clears the prior leaf/answer; the linear route and visual map remain synchronized.
- Screen-reader smoke: map root/group/leaf controls announce name plus selected/expanded state; a leaf selection yields one concise status and discoverable answer content; decorative SVG never announces.
- Reduced-motion smoke: emulate `prefers-reduced-motion: reduce`, open/reset a branch, confirm an immediate stable layout with no camera easing, D3 movement, or opacity transition.
- Repeat at 375px and a desktop viewport with browser devtools accessibility tree inspection. Record browser/version, viewport, and any exception in the V2 evidence receipt.
