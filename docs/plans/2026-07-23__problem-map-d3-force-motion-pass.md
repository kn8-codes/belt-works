# Problem Map D3 Local-Physics Motion Pass

> **For Hermes:** execute in the isolated review worktree only; verify each task before proceeding.

**Goal:** Make the existing problem-map field locally reheat and settle when a branch opens or closes, so node motion communicates relationship and preserves spatial memory.

**Architecture:** Svelte remains authoritative for active group/leaf state, buttons, linear equivalent, and reduced-motion behavior. `d3-force` runs client-side only as a bounded coordinate solver: it receives a deliberately small local graph, settles toward authored targets, and writes render coordinates to Svelte state. Svelte renders SVG links and accessible HTML buttons from those coordinates. D3 does not own the DOM, data model, focus, or navigation.

**Tech stack:** Svelte 5; `d3-force` client-only import. GSAP will be removed from this route unless a later small non-graph UI animation proves necessary.

**Non-goals:** No permanent free-running graph; no random layout; no new problem content; no PostHog/contact/public-copy changes; no commit, push, deployment, or public action.

## Motion contract

```text
resting field is stable
→ click selects a parent anchor
→ local nodes reheat around authored positions
→ leaves begin at the parent and links extend with them
→ nearby nodes yield proportionally
→ solver cools into a deterministic, readable equilibrium
→ reset reverses toward root equilibrium
```

## Task 1 — Add the bounded coordinate dependency

**Files:** `package.json`, `package-lock.json`

1. Run `npm install d3-force` in this worktree.
2. Confirm `npm ls d3-force` has one resolved version.
3. Run `npm run check`.

**Acceptance:** dependency is lockfile-recorded; check remains clean.

## Task 2 — Replace DOM choreography with render-coordinate state

**Files:** `src/routes/problem-map/+page.svelte`

1. Remove GSAP lifecycle/import/timeline helpers from this route.
2. Define a client-side map of rendered node coordinates keyed by root/group/leaf ID.
3. Keep authored `x/y` coordinates as the deterministic target layout for each viewport/state.
4. Render both button CSS variables and SVG link endpoints from render coordinates rather than directly from authored targets.
5. When reduced motion is enabled, immediately use target coordinates with no solver.

**Acceptance:** root, groups, leaves, links, buttons, linear route, and ARIA states preserve existing behavior with direct target positions before physics activation.

## Task 3 — Implement local D3-force reheat and settle

**Files:** `src/routes/problem-map/+page.svelte`

1. Dynamically import `d3-force` in `onMount` only.
2. Construct only currently visible nodes: root, groups, and active leaves.
3. Add forces:
   - target-position force toward authored coordinates;
   - link force for root→groups and active group→leaves;
   - modest charge/repulsion;
   - collision radius based on node class;
   - boundary clamp to the constellation box.
4. On group open, seed leaves at the selected group coordinate and restart the solver at high alpha.
5. On reset, remove active leaves and restart toward root positions.
6. Tick at request-animation-frame cadence into Svelte render state; stop cleanly when alpha cools below threshold or component unmounts.

**Acceptance:** leaves visibly travel from parent to target while link endpoints stretch; stable authored resting geometry returns after cooling; no solver continues offscreen/unmounted.

## Task 4 — Preserve field continuity and responsive safety

**Files:** `src/routes/problem-map/+page.svelte`

1. Preserve all top-level nodes on desktop when a branch opens; let local forces/receded styling express relevance.
2. Preserve the tested mobile behavior: hide unrelated group buttons while a branch is open; solve only root, selected group, and leaves to prevent collisions.
3. On viewport resize, reset target coordinates and reheat the visible local graph once.
4. Keep reduced-motion users on immediate deterministic positions.

**Acceptance:** desktop provides spatial continuity; mobile remains readable and unclipped; reduced motion has no delayed/hidden semantic content.

## Task 5 — Verification and evidence

**Files:** `STATE.md`, `docs/EVIDENCE.md`, `work/active/2026-07-23-problem-map-drilldown-v2.md`

1. Run `npm run check`, `npm run build`, and `npm ls d3-force`.
2. Start preview only after the final build; do not build over a running preview.
3. Exercise root → group → leaf → branch → reset on desktop and 390px mobile.
4. Capture root/open/reset visual receipts; inspect link stretching, node travel, no clipping, and no console errors.
5. Review reduced-motion behavior.
6. Record local-only scope, exact commands/results, screenshots, and remaining design questions.

**Acceptance:** zero-error check/build, interaction proof for all states, and updated evidence/state. No commit/push/deploy.
