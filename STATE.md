# Current State — ShopFloor / belt.works

## 2026-07-25 — Problem Map hybrid visual synthesis awaiting Nate visual pass

- Active goal: Nate visually reviews the hybrid bake-off synthesis (Opus sibling-recede base + Kimi dt-eyebrow donor) in the local preview and decides the commit boundary.
- Current state: `src/routes/problem-map/+page.svelte` carries the hybrid: siblings recede instead of unmounting (depth, not deletion), single light source + grain + 38s haze breath, three type tiers, real focus outlines everywhere, answer heading at sentence scale with 1180px step, hint visible when branch open, mobile type floor, reduced-transparency and forced-colors branches. No commit. Fresh preview live at `http://127.0.0.1:4181/problem-map` (background proc_36dbc988561e).
- Verification: `npm run check` → 0/0; `npm run build` → passed; `git diff --check` → clean. Isolated Chrome/CDP pass at 1280×900 and 390×844: 6 receded+inert siblings on branch open, 5 focusable nodes with branch open, Enter→`#answer-title` focus transfer, root/group focus outlines 2px accent. Screenshots in `bh-tmp/hybrid2-*.png`. Full receipt in `docs/EVIDENCE.md` (2026-07-25 entry).
- Next best action: DONE — Nate approved the preview verbatim 2026-07-25 ("that preview looks great. everything is approved. you go ahead and commit, push to main."); the full problem-map lane (V2 drilldown, seven authored cards, hybrid visual synthesis) is committed and pushed to `main`. Deferred slices: category-centered camera recentering; mobile-specific redesign; bleep.out real-BLE GSD alignment packet (docs aligned 2026-07-25, packet itself not started).
- Blockers: no commit, push, PR, deploy, backend/Supabase, analytics, contact-flow, or camera-behavior change is authorized.
- Last verified: 2026-07-25 05:38 EDT by Egon.

## 2026-07-24 — Problem Map seven authored leaf-card editorial review

- Active goal: give five additional Data-Belt-adjacent leaves the same bounded, six-field local guidance as the two existing pilots, without turning map selection into diagnosis, collection, or a contact flow.
- Current state: `src/routes/problem-map/+page.svelte` now has seven authored cards: the unchanged pilots for `Different records disagree` and `Our public information is old or unclear`, plus `Files or forms are hard to find`, `The useful history lives only in people’s heads`, `The same information gets copied between places`, `A report or update gets rebuilt every time`, and `Paper or messages have to be typed in again`. All remaining leaves retain the labelled neutral fallback. The existing selected-answer panel, linear route, graph tiers, geometry, force settings, and local-only interaction boundary were left unchanged.
- Verification: `npm run check` → 0 errors / 0 warnings; `npm run build` → passed; `git diff --check` → passed. Fresh production preview at `http://127.0.0.1:4180/problem-map` exercised all seven authored cards at desktop: each rendered the expected heading, six fields, no neutral fallback, no selected-panel links, and no form controls. Isolated Chrome/CDP also exercised `Files or forms are hard to find` at an emulated 390×844 viewport; it rendered all six fields, no fallback, no links, no form controls, and a 358px-wide answer panel.
- Next best action: Nate performs a seven-card editorial review of tone, specificity, and panel density before any additional authored cards or interaction changes. The original card's “eight-card” label is stale: two pilots plus the authorized five current leaves equals seven.
- Blockers: editorial review and confirmation of the stale eight-card label are required. No commit, push, PR, deployment, Supabase/backend mutation, PostHog/analytics, contact-flow change, credential action, linear-route structural change, graph/tier/geometry/force change, or network submission is authorized.
- Last verified: 2026-07-24 08:29 EDT by Egon.

## 2026-07-24 — Problem Map two authored leaf-card pilot

- Active goal: make two specific map leaves return useful, bounded local guidance without turning a selected path into diagnosis, collection, or a contact flow.
- Current state: `src/routes/problem-map/+page.svelte` now has an authored six-field card map for `Information is scattered → Different records disagree` and `People can’t find us → Our public information is old or unclear`. The remaining leaves render a visibly labelled neutral fallback that declines to infer a Belt path. The existing linear route, graph tiers, authored leaf geometry, force settings, and local-only interaction boundary were left unchanged.
- Verification: `npm run check` → 0 errors / 0 warnings; `npm run build` → passed; `git diff --check` → passed. Isolated local Chrome/CDP smoke at `http://127.0.0.1:4179/problem-map` exercised root, opened records branch, both authored leaf cards at desktop, the public-information card at 390×844, keyboard Enter focus transfer to the answer heading, and an un-authored neutral fallback. No selected-answer contact links were present.
- Next best action: review the two authored cards and their visual density before authoring more leaves; keep scope limited to the card data/panel until a separate approval changes the interaction model.
- Blockers: no commit, push, PR, deployment, Supabase/backend mutation, PostHog/analytics, contact-flow change, credential action, or linear-route structural change is authorized.
- Last verified: 2026-07-24 07:50 EDT by Egon.

## 2026-07-24 — Problem Map V2 cleanup and fresh preview recovery

- Active goal: preserve the completed local Problem Map V2 review build for Nate’s visual/interaction decision, without mixing in backend, analytics, or deployment work.
- Current state: the local V2 worktree remains intentionally uncommitted on `feat/problem-map-drilldown`. A fresh production build regenerated the missing SvelteKit hashed CSS output that had caused the prior preview process to exit. The subsequent CSS-only seam repair replaced the clipped, filtered atmospheric pseudo-element with continuous radial background paint; `http://127.0.0.1:4178/problem-map` now returns HTTP 200 from the fresh build without the broad vertical/rectangular field seam.
- Verification: `npm run check` → 0 errors / 0 warnings; `npm run build` → passed; `git diff --check` → passed; fresh browser inspection confirmed the seam is absent while intentional graph links/orbit remain; HTTP probe confirmed the Problem Map marker and a listener on `127.0.0.1:4178`.
- Next best action: Nate reviews the now-stable local preview and decides the visual/interaction commit boundary. Separately, approve/amend/reject the consent-aware backend/next-question packet before any Supabase implementation.
- Blockers: no commit, push, PR, deploy, backend/Supabase mutation, PostHog activation, analytics collection, contact-flow change, or credential action is authorized.
- Last verified: 2026-07-24 by Egon.

## 2026-07-23 — Problem-map visual language pass: hard-line blue field

- Active goal: make the proven problem-map field feel more playful and contemplative without replacing its spatial behavior.
- Current state: local review visual treatment changes only `src/routes/problem-map/+page.svelte` CSS: midnight-blue field, diffuse cyan glow, hard-cut/angled node silhouettes, electric-blue paths, and lime reserved for active human choice. The prior root/camera/physics/leaf geometry remains intact.
- Verification: `npm run check` passed with 0 errors / 0 warnings; `npm run build` and `git diff --check` passed. Fresh production screenshot inspected at `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-blue-hardline.png`. Browser geometry probe across every branch at 1280×900 and 390×844 reported 3 leaves per branch, `overlap=false`, `clipped=false` throughout.
- Next best action: Nate reviews the visual direction in the local preview. Commit boundary remains an explicit decision; do not mix in backend work.
- Blockers: no commit, push, PR, deployment, public copy change, backend/analytics, contact flow, or database mutation is authorized.
- Last verified: 2026-07-23 23:14 EDT by Egon.

## 2026-07-23 — Adaptive problem-map leaf-spacing review pass

- Active goal: preserve the one-field camera/settle behavior while making every opened three-leaf branch readable at desktop and phone widths.
- Current state: local-only review implementation now uses authored adaptive leaf geometry: shallow desktop corner arcs, vertical side stacks, and mobile parent-relative vertical stacks that open below top/side categories and above bottom categories. This accounts for camera recentering instead of merely changing global spacing.
- Verification: `npm run check` returned 0 errors / 0 warnings; `npm run build` passed; `git diff --check` passed. Fresh production preview at `http://127.0.0.1:4178/problem-map` was exercised through an isolated CDP browser. At desktop width, all seven branches rendered 3 leaves with zero detected rectangle intersections or constellation clipping. At 390px, all seven branches again rendered 3 leaves with zero detected intersections or clipping.
- Next best action: Nate reviews the local visual motion/spacing pass. If accepted, decide the commit boundary separately; do not mix the consent backend into this visual-only branch without a new approved work card.
- Blockers: no commit, push, PR, deployment, analytics, contact-flow, or database mutation is authorized. Consent backend is design-only at `/Users/kn8/MESH_BOARD/20_PLANS/2026-07-23__problem-map-consent-backend-and-next-question-packet.md`.
- Last verified: 2026-07-23 23:14 EDT by Egon.

## 2026-07-23 — Problem-map drill-down V2 review build

- Active goal: turn the public problem-map concept from a flat constellation directory into a visibly narrowing root → category → specific-problem interaction.
- Current state: clean isolated worktree `/Users/kn8/projects/belt-works-problem-map-drilldown` on `feat/problem-map-drilldown`, based on current production commit `9868f45`. `src/routes/problem-map/+page.svelte` is a local V2 review implementation only: root question, four broad groups, three authored leaves per group, state-aware local links, a leaf answer below the map, breadcrumb/reset, accessible linear equivalent, and reduced-motion treatment.
- Next best action: Nate reviews the V2 visual/interaction direction. If it is the right structural direction, make a short design-tuning pass (headline scale, node language, branch order, phone-width layout) before any approval to commit/push/deploy.
- Blockers: no public review URL is intentionally available; Vercel previews are login-protected. The local preview was visually inspected in the browser. A phone-width live visual pass is still required.
- Open questions for Nate: Does the revealed local branch feel like the right kind of narrowing? Should the answer title be this large/editorial, or more subdued and diagnostic?
- Last verified: 2026-07-23 by Egon: `npm run check` (0 errors / 0 warnings), `npm run build`, local browser root/branch/leaf state checks, and desktop visual inspection. No commit, push, PR, deploy, public copy change, analytics, or new dependency was made.


## 2026-07-22 — Practical software shop copy-system pass

- Active goal: make Belt.works’ public visitor path coherently describe the practical software shop: small working systems for real work.
- Current state: isolated `feat/belt-copy-system` rewrites the homepage, primary visitor routes, shared metadata/footer, service vocabulary, and proof framing around custom software, workflow automation, data shaping, and web systems. ShopFloor is explicitly public-interest work built around trust instead of extraction; ROOMS remains reachable but is no longer primary homepage proof.
- Next best action: commit/push the verified bounded copy pass and confirm the Git-backed production deployment renders the new public copy.
- Blockers: none for source verification. `npm ci` reports 7 dependency vulnerabilities (1 low, 2 moderate, 4 high); no `npm audit fix` is in scope.
- Open questions for Nate: none for this authorized copy pass; later review can refine individual phrases against live use.
- Last verified: 2026-07-22 by Egon: `npm run check` (0 errors / 0 warnings), `npm run lint`, `npm run build`, local route probes, and browser smoke.

## 2026-07-22 — Admin Workflow Audit offer and demand-test readiness

- Active goal: run the first bounded market test for the `$495` Admin Workflow Audit without broad social/outreach theater or unbounded ad spend.
- Current state: `https://www.belt.works/admin-workflow-audit` is live from `main` commit `66069c5`; direct CTAs now record `Admin Workflow Audit · Direct` in the existing contact intake. A Search-campaign destination is ready to record `Admin Workflow Audit · Google Search`.
- Next best action: inspect or sign into the intended ad account, prove the account/billing identity and a hard `$10/day`, 10-day/$100 maximum, then launch only the launch-packet scope.
- Blockers: no accessible authenticated Google/Meta campaign account or billing surface was found; no campaign was created.
- Open questions for Nate: which existing account should be used if one exists; otherwise whether to create a new Google Ads account manually.
- Last verified: 2026-07-22 by Egon.

## 2026-07-22 — OpenAI/Hugging Face incident blog local assembly

- Active goal: preserve the reviewed OpenAI/Hugging Face incident blog as a committed Belt.works branch without pushing, merging, deploying, or publishing.
- Current state: isolated worktree `/Users/kn8/projects/belt-works-openai-blog` is on `feat/openai-huggingface-incident-blog`; `content/posts/ai-hacker-objective-misrouting.md` exists and renders as the flat-file Belt.works blog route `/blog/ai-hacker-objective-misrouting`.
- Next best action: push/open PR only if Nate approves; deploy/publish/social remain separate gates.
- Blockers: no push, PR, merge, deploy, or publish approval in this step. Dependency audit still reports vulnerabilities; no `npm audit fix` was run because dependency mutation is separate approval.
- Open questions for Nate: whether to push the branch, open a PR, deploy after review, and/or prepare social copy later.
- Last verified: 2026-07-22 07:40 EDT by Egon; `npm run check` and `npm run build` passed.

## 2026-07-14 — Current blog-install lane

- Active goal: add the completed “Coding agents need egress receipts” post to the flat-file Belt.works blog without publishing it.
- Current state: the repo is on `main`; `content/posts/coding-agents-need-egress-receipts.md` is installed locally with the staging copy's title, slug, description, and date preserved.
- Next best action: review the local diff, then decide separately whether to commit/push/deploy.
- Blockers: none for local review. Egon later installed dependencies with `npm ci`; `npm run check` and `npm run build` passed. Dependency audit still reports 7 vulnerabilities; no `npm audit fix` was run because dependency mutation is a separate approval gate.
- Open questions for Nate: none for installation; commit, push, deploy, and public posting remain explicit gates.
- Last verified: 2026-07-14 11:43 EDT by Venkman.

## Prior active goal (2026-06-06 snapshot)

## Active Goal

Get the broad Belt.works ask loop, current blog posts, and optional support rail committed so the site has visible current activity and can be edited live if needed.

## Right Now

The repo is on branch:

```text
feat/ask-blog-eth-support
```

This branch is based on the previous donate progress branch and includes:

- `/donate` with the manual `$0 / $100` monthly support tracker.
- `/donate` with Cash App QR and `TheeCodePoet.eth` as an optional ENS support rail.
- New `/ask` page for the broad-entry `What’s on your mind?` help loop.
- `/ask` reuses the existing Supabase-backed `/api/contact` path by submitting with `type: What’s on your mind?`.
- `/ask` keeps the emergency/privacy disclaimer visible.
- `/ask` places optional support below the form only, never as a gate.
- Header and homepage now link to `/ask`.
- Flat-file blog now includes current posts:
  - `content/posts/what-is-on-your-mind.md`
  - `content/posts/durable-mesh.md`
  - `content/posts/shopfloor-who-has-the-damn-tool.md`
  - existing `content/posts/shopfloor.md`
  - existing `content/posts/a11y.md`
  - existing `content/posts/boommates.md`
- `static/social/` contains current belt.works social/avatar images.
- Pre-existing `/ally` lint issue was fixed by removing an unused catch binding.

## Verification

Checked on 2026-06-06 17:45 EDT:

- `npm run check` — 0 errors / 0 warnings.
- `npm run build` — completed successfully.
- `npm run lint` — completed successfully.
- Pa11y WCAG2AA local preview audit — 0 issues on `/`, `/ask`, `/contact`, `/donate`, `/blog/a11y`, `/blog/what-is-on-your-mind`, `/blog/durable-mesh`, `/blog/shopfloor-who-has-the-damn-tool`, and `/rooms`.
- Local preview probes returned 200 for:
  - `/ask`
  - `/blog/what-is-on-your-mind`
  - `/blog/durable-mesh`
  - `/blog/shopfloor-who-has-the-damn-tool`
  - `/donate`
- Local preview probes confirmed `TheeCodePoet.eth` appears on `/ask` and `/donate`.

## Next Best Action

1. Push the current branch and open a PR.
2. If production deployment is Git-backed, verify whether merging to `main` triggers deployment before doing it.
3. If Nate wants to keep Supabase from pausing, verify actual Supabase project status separately; a static commit alone may not count as database activity unless the deployed form receives a real submission.

## Blockers

- No deploy command has been run.
- No Supabase dashboard/API status has been checked in this pass.
- No production form submission has been made.

## Open Questions for Nate

- Should it be merged to `main` if the site deploys from `main`?
- Should we make one real production `/ask` test submission after deployment to exercise Supabase?

## Last Verified

2026-06-06 17:45 EDT
