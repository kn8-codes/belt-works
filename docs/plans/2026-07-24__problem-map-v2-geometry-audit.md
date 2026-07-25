# Problem Map V2 — Geometry Audit Checklist

**Audit scope:** `src/routes/problem-map/+page.svelte` only, on `feat/problem-map-drilldown`.
**Status:** implementation checklist, not a code change or public-UX approval.
**Direction preserved:** a symmetric, dreamy/liminal field with a stable central anchor; a branch may become local without the whole map losing its orientation.

## Evidence reviewed

- Existing uncommitted route diff and approved V2 work card: `work/active/2026-07-23-problem-map-drilldown-v2.md`.
- Live local route at `/problem-map`; each of the seven branches opened and allowed to settle.
- `npm run check`: 0 errors, 0 warnings.
- `npm run build`: passed.
- Desktop geometry observed at a 1280px-wide local render (1120 × 940 map field). The browser session's available height was 633px, so final 1280 × 900 screenshot review remains a required acceptance check.
- Mobile geometry was exercised with the component's 390px responsive state and the route's ≤620px rules. It is a geometry probe, not a replacement for an actual 390 × 844 device screenshot.

## Findings to resolve before calling V2 geometry-ready

### P0 — keep the root as a fixed central anchor on branch open

`moveCamera()` translates every point, including the root, by `50 - activeGroup.{x,y}`. On a 390px mobile probe the root therefore moves to branch-dependent edges instead of staying central. Example bounds: Information is scattered: x=13–144; Something stopped working: x=229–360; No way to do this yet: x=209–340.

- [ ] Do not translate the root/reset control with the branch camera, or replace the whole-field camera with a bounded local-branch transform.
- [ ] Keep the root center within 5% of map-field center in root, branch, and leaf states.
- [ ] Preserve a visible root/reset path without forcing a user to hunt at a field edge.

### P0 — reserve a collision-free center exclusion zone for mobile leaves

The current mobile leaf rule uses a single vertical lane at `parent.x` with offsets `[10, 23, 36]`; the camera then moves that lane toward field center. All seven opened branches produce at least one root/leaf collision in the 390px geometry probe:

| Branch | Observed root/leaf collision |
| --- | --- |
| Something stopped working | leaf 2 and leaf 3 overlap root |
| It takes too long | leaf 3 overlaps root |
| People can’t find us | leaf 2 and leaf 3 overlap root |
| Information is scattered | leaf 1 overlaps root |
| We’re stuck | leaf 2 overlaps root |
| No way to do this yet | leaf 2 and leaf 3 overlap root |
| Let me just tell you what happened | leaf 1 overlaps root |

- [ ] Define a root exclusion radius from measured rendered root dimensions, not only point coordinates.
- [ ] Give each cardinal branch an authored mobile lane that opens away from the fixed root: top branches downward, bottom branches upward, left/right branches outward before becoming vertical if needed.
- [ ] Require >=16px visual gap between every root and leaf bounding box after D3 settles, including the longest labels.
- [ ] Keep leaf-to-leaf vertical gap >=16px and prevent a leaf/link from sitting beneath the root hit target.

### P1 — bound desktop camera/receded-node displacement

At 1280px width, active leaves themselves stayed inside the 1120 × 940 map field for all seven branches. But selecting `It takes too long` displaced the receded `We’re stuck` and `No way to do this yet` controls below the field (their bounds began at y=1002 and y=997 respectively). This exposes the camera transform as unbounded and means low-opacity map artifacts can clip while an open branch is visible.

- [ ] Clamp any camera translation against the rendered outer bounds of root, active group, active leaves, and intentionally retained receded groups.
- [ ] Or hide non-active top-level branches on desktop as well as mobile once a branch opens, if that better matches the approved “local neighborhood” behavior.
- [ ] Do not rely on `overflow: hidden` to conceal navigation controls or link endpoints.
- [ ] Re-measure after the D3 simulation has stopped, not only at authored target coordinates.

### P1 — retain safe desktop edge margins after motion

The authored desktop leaf targets use x=11 and x=90/89 with leaf cards that render up to 192px wide. They fit at rest, but only with a narrow margin once camera motion and D3 collision displacement are included.

- [ ] Derive desktop target inset from actual card width plus 24px minimum field margin, or measure and constrain the final D3 coordinates by each node's rendered dimensions.
- [ ] Keep all branch leaf labels fully visible at 1280 × 900 after a 1.5–2s settle.
- [ ] Verify long labels in `not-working`, `takes-too-long`, `cant-find-us`, `information-scattered`, and `no-way-yet`; short labels alone are not evidence.

## Branch-by-branch acceptance matrix

For each branch, test root → branch → each leaf → back to branch → root at **1280 × 900** and **390 × 844**. Wait for the motion solver to settle before judging geometry.

- [ ] Something stopped working
- [ ] It takes too long
- [ ] People can’t find us
- [ ] Information is scattered
- [ ] We’re stuck
- [ ] No way to do this yet
- [ ] Let me just tell you what happened

Every checked branch must meet all of the following:

1. Root remains centrally legible and clickable; reset is not obscured.
2. Three leaves are visible only for the selected branch and never overlap each other, root, group control, or field edge.
3. Every visible control retains a 16px minimum field-edge margin and a 16px minimum non-overlap gap after settling.
4. The root→group and group→leaf links terminate visibly at their intended controls without clipping or passing through an unrelated hit target.
5. Selection and back/reset states do not cause a visible jump after the physical settle.
6. At mobile width, the local branch remains a readable single field rather than a tiny left-aligned panel inside a desktop canvas.
7. `prefers-reduced-motion` produces the same safe final geometry without transitional movement.

## Verification receipt required after implementation

- Actual screenshots or DOM-bounds captures for all 14 viewport/branch combinations, including a true 1280 × 900 and true 390 × 844 browser viewport.
- One pre-settle and one post-settle capture for at least a top, side, and bottom branch.
- `npm run check` with zero diagnostics and a passing `npm run build`.
- A short receipt that names the final spacing constants/exclusion rule and records any intentional tradeoff.
