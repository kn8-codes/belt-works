# belt.works Rebuild Implementation Plan

> **For Hermes:** Use subagent-driven-development or OpenClaw task dispatch to implement this plan task-by-task. Workers must read `CONTEXT.md` and `docs/beltworks-site-direction.md` before changing public-facing copy.

**Goal:** Rebuild belt.works into the public face of a software research lab: research first, software as evidence, with mailing list, proof of work, service/tool funnels, and public sanitized ROOMS.

**Architecture:** SvelteKit content-first site. Start with shared content modules and route scaffolds. Keep copy honest and draft-labeled until voice is locked. Avoid backend expansion except existing lead/intake APIs and future mailing list plumbing.

**Tech Stack:** SvelteKit, JavaScript content modules, existing CSS conventions, GitHub links, later Supabase mailing list and sanitized ROOMS source.

---

## Phase 0: Guardrails

### Task 1: Add Context Guardrails

**Objective:** Make sure every worker has the context before writing copy.

**Files:**
- Confirm exists: `CONTEXT.md`
- Confirm exists: `docs/beltworks-site-direction.md`
- Create: `docs/copy-rules.md`

**Steps:**
1. Read `CONTEXT.md`.
2. Read `docs/beltworks-site-direction.md`.
3. Create a concise copy rules checklist.
4. Include banned phrases and required tone.

**Verification:** `docs/copy-rules.md` exists and is under 120 lines.

---

## Phase 1: Shared Content Model

### Task 2: Create Project Registry Content Module

**Objective:** Put projects/services/statuses in data instead of hardcoding pages.

**Files:**
- Create: `src/lib/content/projects.js`
- Create: `src/lib/content/services.js`

**Project fields:**
- `slug`
- `name`
- `summary`
- `status`
- `type`
- `href`
- `github`
- `notes`

**Initial projects:**
- belt.works
- BoomMates
- GREYMARKET
- ShopFloor
- FOUNDRY
- ROOMS
- hosp-or-not
- OBDsidian
- towpath

**Initial services/properties:**
- data.belt.works
- intel.belt.works
- ioc.belt.works
- rooms.belt.works
- FOUNDRY intake

**Verification:** Add only data files. Run `npm run check`.

---

## Phase 2: Route Scaffolds

### Task 3: Add `/work`

**Objective:** Show the project registry with honest status labels.

**Files:**
- Create: `src/routes/work/+page.svelte`

**Requirements:**
- Import project data.
- Render cards.
- Show status labels exactly.
- Avoid hype.

**Verification:** `npm run check` passes.

### Task 4: Add `/services`

**Objective:** Show problem-solving paths without agency/package framing.

**Files:**
- Create: `src/routes/services/+page.svelte`

**Requirements:**
- Custom software
- AI workflows / automation
- Ecommerce funnels
- Data scraping / normalization / APIs
- OSINT / intelligence tools
- CTA to FOUNDRY intake

**Verification:** `npm run check` passes.

### Task 5: Add `/method`

**Objective:** Explain the mesh/process as part of the research.

**Files:**
- Create: `src/routes/method/+page.svelte`

**Requirements:**
- Three machines
- Infrastructure enables autonomous sessions
- Autonomous sessions build products
- Products generate evidence and revenue
- No motivational framing

**Verification:** `npm run check` passes.

### Task 6: Add Service Property Stubs

**Objective:** Add honest placeholders for subdomain properties.

**Files:**
- Create: `src/routes/data/+page.svelte`
- Create: `src/routes/intel/+page.svelte`
- Create: `src/routes/ioc/+page.svelte`
- Create or revise: `src/routes/rooms/+page.svelte`

**Requirements:**
- Mark status clearly.
- Explain what each property is for.
- Do not imply finished services unless they are live.

**Verification:** `npm run check` passes.

---

## Phase 3: Homepage Rewrite

### Task 7: Rewrite Homepage Structure

**Objective:** Replace contractor lead-gen homepage with lab front door.

**Files:**
- Modify: `src/routes/+page.svelte`

**Sections:**
1. Hero: `Research first. Software as evidence.`
2. Subline: `Consumer hardware. Consumer spend. Business results.`
3. Mailing list CTA
4. What this is
5. Proof / project cards
6. Services/properties
7. Method summary
8. Bring a problem CTA

**Verification:** `npm run check` passes. Public copy remains draft until Nate approves.

---

## Phase 4: Mailing List

### Task 8: Mailing List Placeholder

**Objective:** Add front-end mailing list form without committing backend until provider is chosen.

**Files:**
- Create or modify component: `src/lib/components/MailingListForm.svelte`
- Modify: `src/routes/+page.svelte`

**Requirements:**
- Email field
- Plain text promise: one send per month
- Disabled or local placeholder state if backend is not ready

**Verification:** Form does not submit to a dead endpoint unless endpoint exists.

### Task 9: Mailing List API

**Objective:** Wire mailing list storage after backend decision.

**Files:**
- Create: `src/routes/api/mailing-list/+server.js`

**Requirements:**
- Validate email
- Store in Supabase or configured backend
- No duplicate explosions
- No secrets in client

**Verification:** Endpoint tested with curl or app form.

---

## Phase 5: Public ROOMS

### Task 10: Define Sanitized ROOMS Data Shape

**Objective:** Specify public-safe node/agent status before wiring live data.

**Files:**
- Create: `docs/rooms-public-data-spec.md`
- Create: `src/lib/content/rooms-sample.js`

**Fields:**
- node name
- role
- status
- last seen
- current task label
- sanitized recent event

**Forbidden:**
- secrets
- tokens
- private chat logs
- private file paths when sensitive
- client data

**Verification:** Sample data renders without exposing private details.

### Task 11: Build `/rooms` Static Preview

**Objective:** Build public ROOMS page using sample sanitized data.

**Files:**
- Create or modify: `src/routes/rooms/+page.svelte`

**Verification:** `npm run check` passes.

---

## Phase 6: Review

### Task 12: Voice Review

**Objective:** Review every public route against `CONTEXT.md`.

**Checks:**
- No startup language
- No agency language
- No Akron underdog framing
- No fake inspiration
- Research remains the lede
- Statuses are honest
- Mailing list CTA is primary

**Verification:** Produce `docs/reviews/voice-review.md`.

### Task 13: Technical Review

**Objective:** Verify app builds and routes work.

**Commands:**
- `npm run check`
- `npm run lint`
- `npm run build`

**Verification:** Produce `docs/reviews/technical-review.md` with pass/fail and fixes needed.
