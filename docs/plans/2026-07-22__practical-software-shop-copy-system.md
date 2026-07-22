# Belt.works practical software shop copy-system implementation plan

> **For Hermes:** Execute in the isolated `feat/belt-copy-system` worktree. Verify the exact files below before a commit/push.

**Goal:** Rework Belt.works’ primary public copy around one coherent identity: a practical software shop that builds small working systems—custom software, workflow automation, data shaping, and web systems—while keeping ShopFloor as protected public-interest proof rather than a lead funnel.

**Architecture:** This is a content/data pass only. Public route structure, form behavior, offer pricing, deployment configuration, and published essays remain unchanged. Shared `services.js` and `projects.js` provide the lane and proof vocabulary; primary pages consume that vocabulary without adding a new CMS or copy abstraction.

**Tech Stack:** SvelteKit/Svelte 5; existing flat JS content modules; existing npm check/lint/build commands.

## Authority and boundaries

- **Working root:** `/Users/kn8/projects/belt-works-copy-system`
- **Branch:** `feat/belt-copy-system`, based on `origin/main` commit `6122cd1`
- **Canonical mesh record:** `/Users/kn8/mesh/20_PLANS/2026-07-22__belt-homepage-coherence-copy-review-draft.md`
- **Allowed paths:** listed below plus `docs/EVIDENCE.md` and `STATE.md`.
- **Forbidden actions:** change forms/contact API, data model, dependencies, Vercel/DNS/Supabase configuration, ShopFloor code/release posture, published blog essay bodies, payment/support rails, or unrelated routes. No deletion of historical routes.
- **Public language constraints:** no “scope hard,” no generic agency/growth/funnel language, no ShopFloor availability/release claims, no implication that community members are leads/customers/gig workers.
- **Commit/push authority:** Nate explicitly authorized the whole-site copy-system rework and autonomous verified push. Deployment remains the Git-backed `main` path and must be externally smoke-tested after push.

## Requirements

- **COPY-001:** Homepage states Belt’s identity as a practical software shop and leads with `Software that earns its keep.`
- **COPY-002:** Homepage explains four concrete lanes: custom software, workflow automation, data shaping, and web systems.
- **COPY-003:** Primary navigation and metadata use the same practical-systems language.
- **COPY-004:** Services, Method, About, and Work routes reinforce the same identity without AI-first/lab-first/funnel framing.
- **COPY-005:** ShopFloor is accurately framed as Akron-first public-interest work built around trust instead of extraction, without release or sales-funnel claims.
- **COPY-006:** ROOMS remains reachable as historical/reference material but is removed from primary homepage proof.
- **COPY-007:** Existing contact/ask/audit routes and their behavior remain unchanged.

## Tasks

### 1. Establish the shared content vocabulary

**Modify:**
- `src/lib/content/services.js`
- `src/lib/content/projects.js`

Replace the homepage/service registry with exactly four public service lanes:

```text
Custom software
Workflow automation
Data shaping
Web systems
```

Use plain-language summaries oriented around real friction: a missing tool, repeated manual work, messy records, and a website/application that needs to do a job. Preserve the generic `/contact` destination and existing `ProjectCard` contract. Do not promote `intel`/`ioc` research stubs as client services.

Update project framing so:
- `ShopFloor` is public-interest proof, not a time-bank/product claim or business lead source;
- `ROOMS` remains listed honestly on `/work` as a reference/demo surface but is excluded from `featuredProjects`;
- homepage featured proof uses Belt, ShopFloor, and honest working/shipped artifacts only.

### 2. Rewrite shared metadata, header, and footer

**Modify:**
- `src/routes/+layout.svelte`
- `src/lib/components/SiteHeader.svelte`
- `src/lib/components/SiteFooter.svelte`

Replace inherited generic “software that works” metadata with `Software that earns its keep` / practical software shop language. Keep the current routes and contact CTA behavior. Replace footer `Research first. Software as evidence.` with concise practical-systems language; do not add navigation items.

### 3. Rewrite the homepage around one promise

**Modify:** `src/routes/+page.svelte`

Use the review-draft hierarchy:

```text
Hero: Software that earns its keep.
Identity: practical software shop / small working systems
Lanes: custom software, workflow automation, data shaping, web systems
Method: start with the work → make the first useful version → document what changed
ShopFloor bridge: trust instead of extraction; protected from commercial lead-funnel framing
Proof: honest current/shipped work, excluding ROOMS from the primary set
Final CTA: Bring the broken workflow.
```

Keep the `$495 Admin Workflow Audit` as a concrete, subordinate offer. Do not modify its route/page.

### 4. Align primary visitor routes

**Modify:**
- `src/routes/services/+page.svelte`
- `src/routes/method/+page.svelte`
- `src/routes/about/+page.svelte`
- `src/routes/work/+page.svelte`
- `src/routes/vision/+page.svelte`
- `src/routes/data/+page.svelte`

Replace lab/agent/harness-first and “scope” jargon with user-facing language about practical systems, real work, first useful versions, verification, and clear handoff. Preserve meaningful technical details only where they support the reader’s confidence; do not turn the method page into a public agent-org chart.

On `/data`, explain “data shaping” in plain language: turning scattered, duplicated, messy information into records, exports, or systems people can use. Preserve the early-status disclaimer.

### 5. Update state/evidence and verify

**Modify:**
- `STATE.md`
- `docs/EVIDENCE.md`

Record the identity decision, exact changed surface, and verification outputs. Run:

```sh
npm run check
npm run lint
npm run build
```

Start a local production preview and prove `200` plus content markers for:

```text
/
/services
/method
/about
/work
/data
/admin-workflow-audit
/contact
/ask
```

Use browser smoke on `/`, `/services`, `/method`, and `/data` to verify the copy hierarchy renders without broken navigation. No contact submission.

### 6. Commit, push, and publicly verify

Before commit:

```sh
git diff --check
git diff --cached --name-only
```

Commit only the bounded copy-system files plus `STATE.md`, `docs/EVIDENCE.md`, and this plan. Fast-forward push only if `origin/main` remains an ancestor; no force push.

After Vercel’s Git-backed deployment converges, prove public `200` and new copy markers for `/`, `/services`, `/method`, `/about`, `/work`, and `/data`. Write a Gatekeeper receipt covering files, commands, commit, public URLs, and preserved guardrails.

## Acceptance criteria

- A first-time visitor can state what Belt does in one sentence without seeing “AI,” “agent harness,” or “funnel” as the lead identity.
- The four service lanes appear consistently where services are described.
- The homepage offers one dominant intake phrase: `Bring the broken workflow.`
- The ShopFloor bridge is present but makes no availability, live-alpha, marketplace, or lead-generation claim.
- ROOMS is not on the homepage proof grid but still has its existing route.
- Check, lint, build, local route probes, browser smokes, production route probes, and public copy markers pass.
