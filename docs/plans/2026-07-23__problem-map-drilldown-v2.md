# Problem Map Drill-Down V2 — Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Replace the flat all-at-once constellation behavior with a review-only, visual drill-down that lets a visitor move from a broad recognized friction to a specific version of it.

**Architecture:** Keep the implementation in the existing native Svelte route and represent the authored map as a tiny tree: one root, four top-level categories, and three leaf problems per category. A single `activeGroupId` controls which first-ring branch is expanded; a single `selectedLeafId` controls the explanatory panel. The graphical field and a linear text route use the same data and state.

**Tech Stack:** Svelte 5 runes already used by the route; native CSS/SVG; no dependencies or data services.

**Review boundary:** This branch is a local visual/interaction review artifact only. Do not push, open a PR, deploy, add analytics, modify contact behavior, or change any other public route without a separate Nate decision.

---

## Interaction contract

```text
rest state
  root question + exactly four large recognized problem classes

select a class
  selected class stays anchored
  unrelated classes recede but remain available
  exactly that class’s three leaf problems bloom outward
  a breadcrumb / reset control restores orientation

select a leaf
  leaf is visibly selected
  explanation card names the pattern, offers common first moves,
  and permits a low-burden next action

always
  the text-first list exposes the same tree and controls
  reduced-motion removes non-essential transitions
```

## Visual direction

**Primary reference direction:** Obsidian-style local graph, but with one deliberate change: the graph behaves like a readable *local neighborhood*, not an exposed knowledge graph. It should look like a root system or circuit diagram that clarifies one thread at a time.

**Composition rules:**

- Root question at the visual center rather than a title floating outside the graph.
- First ring is sparse and high-legibility: no more than four nodes.
- Selected branch becomes a local arc / orbit of secondary nodes.
- Do not use a permanent side panel as the primary interaction. The answer should arrive below the live map at leaf depth, so the map keeps the emotional center of gravity.
- Edges are meaningful only for the current local branch; unrelated edges fade.
- Use lime as selected/focused signal and warm amber as navigational possibility. Do not add gradients, glass-card stacks, or decorative particles as substitutes for hierarchy.

## Tasks

### Task 1: Replace flat graph data with explicit tree data

**Files:**
- Modify: `src/routes/problem-map/+page.svelte`

**Implementation:**

1. Define four `groups` with `id`, human label, short framing, category detail, and map coordinates.
2. Define three `leaves` per group with `groupId`, label, explanation, three first moves, and a safe existing-route CTA.
3. Derive `activeGroup`, `activeLeaves`, and `selectedLeaf` from Svelte `$state` values.
4. Retain no behavior that makes every leaf render in rest state.

**Verification:** `npm run check` must report no errors/warnings.

### Task 2: Build depth-aware constellation state

**Files:**
- Modify: `src/routes/problem-map/+page.svelte`

**Implementation:**

1. Render a central root button that clears the active group/leaf.
2. Render four category buttons at rest and retain them after selection with a `receded` treatment.
3. Render leaf buttons only when a group is active.
4. Render SVG links from root to groups and from active group to active leaves only.
5. Add a breadcrumb/reset control with an aria-live status sentence describing the current depth.

**Verification:** selecting a category changes the visible leaf set; selecting a leaf changes only that branch’s answer; reset restores root depth.

### Task 3: Move answers beneath the map and keep a text route

**Files:**
- Modify: `src/routes/problem-map/+page.svelte`

**Implementation:**

1. Show a compact orienting card after group selection.
2. Show the full answer card only after leaf selection.
3. Use a `fieldset`/button-style linear list beneath the map that exposes groups and only selected-group leaves.
4. Keep all controls keyboard-focusable with `aria-pressed`, clear labels, and no canvas-only interaction.

**Verification:** build and inspect static markup for root, group buttons, reset control, and answer live region.

### Task 4: Apply state-driven motion and responsive rules

**Files:**
- Modify: `src/routes/problem-map/+page.svelte`

**Implementation:**

1. Use short opacity/transform transitions strictly to communicate expansion/recession.
2. Disable transitions under `prefers-reduced-motion: reduce`.
3. At phone width, retain four group buttons, show active leaves in a natural readable stack, and never hide content solely for fitting a decorative graph.
4. Ensure label sizing avoids collisions at desktop and mobile widths.

**Verification:** `npm run check`, `npm run build`, plus a rendered-page inspection when the browser lane is available.

### Task 5: Record state and evidence

**Files:**
- Modify: `STATE.md`
- Modify: `docs/EVIDENCE.md`
- Create: `work/active/2026-07-23-problem-map-drilldown-v2.md`

**Implementation:** Record the exact review boundary, branch, commands, result, and remaining visual-review/deployment gate.

**Verification:** file reads confirm all three records exist and agree with the code state.

## Acceptance criteria

- A first-time visitor sees a root question and four recognizable categories, not a full sky of labels.
- A category expands only its own concrete subproblems.
- A leaf adds an answer without turning the experience into a sales quiz.
- The graph reads as a structured visual narrowing process.
- The linear route works without needing to parse the graph.
- Check/build pass.
- Nothing is deployed or published in this V2 pass.
