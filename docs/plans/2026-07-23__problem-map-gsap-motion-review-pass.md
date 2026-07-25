# Problem Map GSAP Motion Review Pass — Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Give the local V2 problem map a calm, spatial, spring-like motion system that makes narrowing from root → group → leaf legible without replacing Svelte’s accessible state model.

**Architecture:** Svelte remains the source of truth for active group/leaf state, the linear route, keyboard behavior, and reduced-motion fallback. GSAP is loaded only in `onMount`, only for users without `prefers-reduced-motion`, and choreographs DOM elements already rendered by the state transition. SVG lines are referenced individually so they can draw after their associated nodes begin to arrive.

**Tech stack:** Svelte 5, dynamic client-only `gsap` import, existing CSS/SVG map.

**Boundaries:** Review-only worktree. No PostHog changes, contact-flow changes, public copy changes outside the existing local V2, commit, push, deployment, credential, account, or production action.

---

### Task 1: Add a single client animation dependency

**Objective:** Make GSAP available only in the isolated `feat/problem-map-drilldown` worktree.

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

**Steps:**
1. Run `npm install gsap` from the review worktree.
2. Confirm the lockfile records the expected package version.
3. Run `npm run check` to establish that dependency installation did not regress the current local build.

**Verification:** `npm ls gsap` returns one installed version; `npm run check` passes.

### Task 2: Add client-only motion references and safe lifecycle control

**Objective:** Bind the root, visible group/leaf nodes, and SVG links without making motion state authoritative.

**Files:**
- Modify: `src/routes/problem-map/+page.svelte`

**Steps:**
1. Import Svelte lifecycle helpers needed for a client-only animation setup.
2. Maintain DOM references for root, group nodes, leaf nodes, root links, and active leaf links.
3. In `onMount`, read `prefers-reduced-motion`; do not import or execute GSAP when it is enabled.
4. Dynamically import GSAP only in browser lifecycle code; return cleanup that kills active timelines.
5. Keep all buttons and `aria-*` state exactly state-driven by current Svelte variables.

**Verification:** SSR/build succeeds; reduced-motion still renders all meaningful map state without reliance on motion.

### Task 3: Implement entry and branch choreography

**Objective:** Create a legible, one-settle visual rhythm rather than a cartoon bounce.

**Files:**
- Modify: `src/routes/problem-map/+page.svelte`

**Steps:**
1. On first mount, animate root from a small scale/y offset using `back.out` with a restrained overshoot.
2. Draw root-to-group links shortly after root arrival using SVG dash offset.
3. Stagger group nodes outward with a 60–90 ms cadence and a single settle.
4. When a group opens, preserve immediate semantic state; after `tick`, draw branch links, pulse the selected group once, and reveal leaf nodes from a smaller scale/y offset.
5. When a leaf is chosen, give that leaf a brief selected confirmation without moving page layout or trapping focus.
6. On reset, only add a brief root acknowledgement; do not delay the state reset.
7. Remove/disable competing CSS `leaf-arrive` animation so each motion path has one owner.

**Verification:** root, group, leaf, and reset transitions execute without duplicate elements, broken links, or lingering GSAP tweens.

### Task 4: Verify behavior, mobile layout, and motion safety

**Objective:** Prove the visual layer did not damage the map’s functional route.

**Files:**
- Modify: `STATE.md`
- Modify: `docs/EVIDENCE.md`

**Steps:**
1. Run `npm run check` and `npm run build`.
2. Start local preview and smoke root → group → leaf → back → reset in the browser.
3. Inspect desktop and a phone-width viewport, including no clipping/collision introduced by animation transforms.
4. Emulate/review reduced-motion behavior to ensure nodes and links remain immediately usable.
5. Record exact commands, output, screenshots/visual results, and local-only boundary in state/evidence.

**Verification:** zero-error check/build; browser interaction proof; visual inspection; documented local review receipt.
