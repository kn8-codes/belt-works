# Evidence — ShopFloor

Record receipts here. Agent narration is not evidence. Pretty words are how bugs wear cologne.

## 2026-08-16 — Cordis / DeepSeek Harness blog release preflight

- Command/source: read the Cordis preprint in full; inspected DeepSeek Harness architecture and Cordis primer at repository commit `47f943859bef60e4160492346772ded9b24f765a`; created isolated worktree `/Users/kn8/projects/belt-works-cordis-publish` from `origin/main` commit `1c76a7d`; adapted the approved draft to the flat-file renderer without unsupported tables or blockquotes.
- Result: local route `/blog/deepseek-harness-cordis-plugin-first-agents` renders “The Kernel Is the Constitution,” the “everything is a plugin” distinction, revertible effects, the model-visible logging rule, the external-emission boundary, Belt.works operating patterns, and all three direct source links; `/blog` lists the post.
- File/path/link: `content/posts/deepseek-harness-cordis-plugin-first-agents.md`, `work/active/2026-08-16-cordis-harness-blog.md`, `STATE.md`; target public route `https://www.belt.works/blog/deepseek-harness-cordis-plugin-first-agents`.
- Verification: frontmatter/slug/body check passed (`slug=deepseek-harness-cordis-plugin-first-agents`, body 11,955 characters, 11 posts); public-boundary and placeholder scans returned zero matches; `git diff --check` passed; `npm ci` completed; `npm run check` reported 0 errors / 0 warnings; `npm run build` passed; local production preview returned HTTP 200 for article and index and confirmed required markers with no unsupported rendering artifacts.
- Audit note: `npm ci` reported 9 vulnerabilities (1 low, 2 moderate, 6 high). No `npm audit fix` was run because dependency mutation is outside the article release.
- Known issue: `npm run lint` fails on the pre-existing `origin/main` `src/routes/problem-map/+page.svelte:284` `cameraFrame` error; the content-only release does not touch that file.
- Approval: Nate explicitly approved publication, commit, push to `main`, deployment/redeployment, and live verification on 2026-08-16.
- Publication: release commit `5d94076890b958be233ad01ad2f79b645fea1bd2` was pushed to GitHub `main`; remote `refs/heads/main` matched the local SHA. GitHub/Vercel deployment `5930072351` reported `success` with description `Deployment has completed`.
- Live verification: `https://www.belt.works/blog` and `https://www.belt.works/blog/deepseek-harness-cordis-plugin-first-agents` returned HTTP 200. The index contains the article slug. The live article contains the title, plugin thesis, revertible-effect section, model-visible logging rule, Cordis paper link, all three sources, and the closing kernel statement; no TODO or internal publication markers were present.
- Browser note: the configured cloud browser returned no CDP endpoint, and Playwright is not a dependency in the clean production worktree. No package was added for this check; direct production HTTP plus independent rendered-content extraction passed.
- Checked by: Egon/default, 2026-08-16.

## 2026-08-12 — IOC.Belt synthetic V0 local proof

- Approval/scope: Nate said, “okay i want you to get started on ioc.belt.works.” Interpreted as Phase 1 local synthetic proof only. No commit, push, PR, DNS, deploy, publication, intake, backend, account, API, feed, search, database, or real evidence.
- Isolation: created worktree `/Users/kn8/projects/belt-works-ioc-v0` on local branch `feat/ioc-belt-synthetic-v0`, based on `origin/main` commit `76ed204`. Existing `/Users/kn8/projects/belt-works` lane `feat/ask-blog-eth-support` remained untouched.
- Code classification: `code_lifecycle=maintained_internal_planning_prototype`; `ponytail_mode=off`; reused existing Belt.works SvelteKit routes, tokens, header/footer, and flat static-page conventions; no dependency additions.
- Architecture correction: preserved the existing lab-wide `/method` route. The future subdomain root is modeled locally under `/ioc`, with `/ioc/method` and `/ioc/playbooks/impersonation/protect-your-money`.
- Result: replaced the historical `/ioc` property stub with a planning-stage overview; added an evidence/lifecycle/privacy methodology page; added a wholly synthetic `SYN-001` bank/government impersonation playbook with containment first, bounded assessment, unknowns, forecast language, official CFPB/FTC sources, and record lifecycle metadata.
- Baseline verification before IOC edits: `npm ci`; `npm run check` → 0 errors / 0 warnings; `npm run build` → pass. Full `npm run lint` has one pre-existing unrelated `origin/main` failure at `src/routes/problem-map/+page.svelte:284` (`cameraFrame` never assigned). No unrelated repair was attempted. `npm ci` reported 9 existing vulnerabilities (1 low, 2 moderate, 6 high); no audit fix was run.
- Final code verification: `npm run check` → 0 errors / 0 warnings; targeted `npx eslint` over all three IOC route files → pass; `npm run build` → pass; `git diff --check` → pass.
- Runtime verification: production preview `http://127.0.0.1:4192` returned HTTP 200 for all three IOC routes. Isolated Chrome/CDP exercised all three at 1280×900 and 390×844. All 6 route/viewport combinations reported `overflow=false`, `forms=0`, required synthetic/uncertainty/limits markers present, and only the site’s existing Google Fonts stylesheet as an external load. Results: `artifacts/ioc-v0/runtime-results.json`.
- Visual verification: inspected actual desktop/mobile captures. Planning/synthetic labels are visible before the main claims; mobile navigation wraps; headlines remain inside the viewport; no visible clipping or horizontal overflow. Initial captures: `artifacts/ioc-v0/{ioc,method,playbook}-{desktop,mobile}.png`; post-review full-page captures: `artifacts/ioc-v0/{ioc,method,playbook}-{desktop,mobile}-full.png`.
- Independent review round 1: `REQUEST_CHANGES`; no critical findings. Remediated the public internal-profile label, low-contrast metadata, evidence-table keyboard/caption/scroll cue, inherited contact/intake ambiguity, overstrong identity wording, desktop headline cap, incomplete screenshot coverage, and artifact-path scope.
- Independent re-review: `PASS`; `local_review_ready=true`; `public_deploy_ready=false`; zero critical, important, or minor findings. Every prior material finding was verified fixed or, for the inherited Google Fonts request, correctly gated as a public-deployment blocker.
- Post-fix contrast: IOC metadata uses `--muted` (`rgb(167,161,144)`), measured at 7.10–7.77:1 across used dark backgrounds; no IOC `var(--dim)` usages remain.
- Post-fix runtime: all 6 route/viewport combinations passed with no overflow or forms; inherited contact CTA computed `display:none`; evidence wrapper accepted keyboard focus and exposed caption/label/scroll cue on desktop and mobile. `failedCount=0`; results: `artifacts/ioc-v0/review-runtime-results.json`.
- Production authorization resolved the inherited font blocker: downloaded IBM Plex Mono 400/600/700 from the previously used upstream Google-hosted assets, retained the IBM Plex upstream license at `static/fonts/ibm-plex-mono/OFL.txt`, added local `@font-face` declarations, and removed the shared Google Fonts preconnect/stylesheet. Host-header smoke proved `ioc.belt.works/`, `/method`, and `/playbooks/impersonation/protect-your-money` internally reroute to the reviewed IOC routes with HTTP 200, correct canonical URLs, zero Google font references, and all four local font/license files returning HTTP 200.
- Fresh persistent-target Chrome/CDP verification against the final build loaded all three IOC routes with project-owned IBM Plex Mono 400/700 resources, zero external resources, zero Google resources, zero forms, and zero horizontal overflow. Weight 600 is defined and its file returns HTTP 200 but remained browser-unloaded because no tested IOC glyph required that weight. A stale preview process previously exited with an `ENOENT` after a rebuild replaced hashed assets; restarting from the final build resolved the test-process sequencing issue without a code change.
- Production pre-commit review initially returned `REQUEST_CHANGES`: the IOC hostname still exposed unrelated Belt routes/forms and the landing page retained stale local/no-deployment copy. The reproduced host-boundary smoke failed 18 assertions before remediation. A server `handle` hook now restricts the IOC hostname to three clean GET/HEAD page paths and required static assets, redirects unrelated read-only page paths to `/`, and returns 404 before shared handlers for API or non-GET/HEAD requests. IOC pages use a dedicated header/footer with no intake links; the only cross-site navigation is an explicit `https://belt.works/` return link. Production wording now says `synthetic public proof` and `public research surface`.
- Post-containment verification: the same SSR host-boundary smoke reports `failures=0`; a dedicated Chrome instance mapped `ioc.belt.works` to the final local build and passed same-origin client navigation to `/method`, direct `/ask` containment to `/`, and `/api/contact` 404 with no form. Ordinary `belt.works` home and `/ask` remained HTTP 200 with their original behavior, while `/ioc` retained compatibility links under `/ioc/**`.
- Semantic verification: direct CDP checks found one `main` landmark and at least one `nav` landmark on every route, zero heading-level skips, zero empty link names, and the skip link as the first programmatically focused target. `SEMANTIC_FAILURES=0`.
- Boundary scan: all three public route files scanned for private paths, secrets/credential context, SSN/card/OTP patterns, wallet/email/phone identifiers, unsafe certainty, open-intake language, and prohibited claims. Result: `BOUNDARY_SCAN=PASS`; files=3; forms=0; scripts=0. An initial generic six-digit regex matched CSS color `#080807`; the final context-aware OTP check correctly distinguished color literals from credential material.
- Source check: CFPB page extracted successfully and contains the cited statement that real agencies/institutions do not ask people to withdraw cash or send cryptocurrency to protect money. FTC canonical cryptocurrency-scam page returned HTTP 200; source link updated to its current canonical slug. Internal route links returned HTTP 200.
- Plan/work card: `docs/plans/2026-08-12-ioc-belt-synthetic-v0.md`; `work/active/2026-08-12-ioc-belt-synthetic-v0.md`.
- Preview/restart: from `/Users/kn8/projects/belt-works-ioc-v0`, run `npm run build && npm run preview -- --host 127.0.0.1 --port 4192`.
- Current publication guardrails: source remains staged and uncommitted pending final documentation re-review, but Nate has authorized GitHub/Vercel/DNS production publication. The IOC surface still contains no intake, data collection, submission behavior, accounts, APIs, feeds, analytics, real identifiers, attribution, or certainty claim. Historical no-deploy constraints above describe the pre-authorization local-review phase only.
- Checked by: Egon/default, 2026-08-12 EDT.

## 2026-07-25 — Problem Map hybrid visual synthesis (bake-off lanes A/B/C)

- Command/source: plan `docs/plans/2026-07-25__problem-map-hybrid-bakeoff-synthesis.md`. Nate approval via Telegram 2026-07-25 ~05:20 ("take the best parts of all three, get them implemented, and give me something to look at"). Base = Lane A (Opus 5) sibling-recede architecture; donor = Lane C (Kimi 3) answer-panel dt small-caps index labels; Lane B (Fable 5) donated no code (animated dash grammar rejected as busywork). Camera recentering and mobile redesign explicitly deferred.
- Result: `src/routes/problem-map/+page.svelte` only. Sibling categories now stay mounted when a branch opens — they recede (recede factor 1.06, `far` force kind at strength .105, weaker links), dim via `.receded`, and leave the tab order/a11y tree via `inert` + `tabindex={-1}`. CSS: single center-weighted light source over fine grain, breathing central haze (38s), three legible tiers (fluid root, semibold categories, amber-edged leaves), real `:focus-visible` accent outlines (all `outline:none` removed), answer heading capped to sentence scale with a 1180px two-column step, `.constellation__hint` visible at .66 when branch open, mobile type floor .66/.7rem, dt small-caps index labels, full `prefers-reduced-transparency` solid fallback and `forced-colors:active` system-color branch.
- Verification: `npm run check` → `svelte-check found 0 errors and 0 warnings`; `npm run build` → passed (1.41s); `git diff --check` → clean. Fresh preview `http://127.0.0.1:4181/problem-map` exercised in isolated Browser Harness Chrome at 1280×900 and emulated 390×844: root shows 7 categories on the ring; branch open shows exactly 6 `.receded` + 6 `[inert]` siblings with faint terminating links and 3 amber leaves; mobile branch fits with no leaf overlap. Keyboard smoke: root focus outline `2px rgb(215,255,99)`, group focus outline 2px, exactly 5 focusable nodes with branch open (root+active+3 leaves), Enter on leaf moves focus to `#answer-title`. Captures: `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/hybrid2-{desk-1-root,desk-2-branch,desk-3-leaf,desk-4-answer,mob-1-root,mob-2-branch}.png`.
- Guardrails: no commit, push, PR, deploy, backend/analytics/contact-flow change, or camera-behavior implementation. Working-tree only on `feat/problem-map-drilldown`.
- Approval: Nate visual pass completed 2026-07-25 morning; exact Telegram text: "that preview looks great. everything is approved. you go ahead and commit, push to main." Committed and pushed to `main` same morning (SHA in git log).
- File/path/link: `src/routes/problem-map/+page.svelte`; local review route `http://127.0.0.1:4181/problem-map` (preview process running, proc_36dbc988561e).
- Checked by: Egon, 2026-07-25 05:38 EDT.

## 2026-07-24 — Problem Map five-card Data-Belt authored expansion

- Command/source: read `.stack/manifest.yaml`, `PROJECT_CHARTER.md`, `STATE.md`, `work/active/2026-07-23-problem-map-drilldown-v2.md`, the card plan `docs/plans/2026-07-24__problem-map-data-belt-six-leaf-cards.md`, and the existing selected-answer data map. Per the Kanban clarification, authored only the five current leaves—not a nonexistent sixth—by changing only `authoredLeafCards` in `src/routes/problem-map/+page.svelte`.
- Result: preserved both pilot cards byte-for-byte and added six-field local, read-only cards for `information-scattered-files`, `information-scattered-history`, `takes-too-long-copying`, `takes-too-long-reports`, and `takes-too-long-paper`. Together, the map now has seven authored cards; all other leaves retain the labelled neutral fallback. No selected-answer link, form control, submission, or network-facing behavior was added.
- Verification: `npm run check` → `svelte-check found 0 errors and 0 warnings`; `npm run build` → passed; `git diff --check` → passed. Fresh Vite preview at `http://127.0.0.1:4180/problem-map` was tested in isolated Browser Harness Chrome. Desktop selection exercised all seven authored cards and each returned its expected heading, six `dt` fields, `fallback=false`, `links=0`, and `formControls=0`. CDP mobile selection of `Files or forms are hard to find` at exactly `390×844` returned the same six fields with `fallback=false`, `links=0`, `formControls=0`, and a `358px` answer-panel width. Visual captures: `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-authored-public-desktop-4180.png` and `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-authored-files-mobile-cdp-390x844-4180.png`.
- Guardrails: no linear-route markup/CSS/behavior, graph tier, geometry, force configuration, dependency, backend/Supabase, PostHog, analytics, contact link/endpoint, network submission, account, credential, commit, push, or deployment change.
- File/path/link: `src/routes/problem-map/+page.svelte`; local review route `http://127.0.0.1:4180/problem-map`.
- Checked by: Egon, 2026-07-24 08:29 EDT.

## 2026-07-24 — Problem Map two authored leaf-card pilot

- Command/source: read the approved local staging packets `~/MESH_BOARD/20_PLANS/2026-07-24__problem-map-content-model-and-page-simplification.md` and `~/MESH_BOARD/20_PLANS/2026-07-24__problem-map-leaf-card-copy-v1.md`, then changed only the selected-leaf data derivation and selected-answer panel in `src/routes/problem-map/+page.svelte`.
- Result: exactly two leaves have authored six-field guidance: scene, consequence, one useful question, small first move, possible Belt path, and optional human handoff. All other leaves use a visibly labelled `Neutral fallback` and explicitly state that no Belt path is suggested yet. The selected panel is read-only/local and contains no contact link or submission control.
- Verification: `npm run check` → `svelte-check found 0 errors and 0 warnings`; `npm run build` → passed; `git diff --check` → passed. Isolated Browser Harness Chrome at `http://127.0.0.1:4179/problem-map` verified desktop root (`selected=false`, 7 group buttons), records branch open (3 leaves), keyboard Enter selection of `Different records disagree` with focus moved to `#answer-title`, six labelled fields, and zero selected-panel links. It also verified the public-information card at desktop and 390×844 mobile, plus the labelled neutral fallback. Visual captures: `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-authored-root-desktop.png`, `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-authored-records-open-desktop.png`, `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-authored-records-desktop.png`, `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-authored-public-mobile.png`.
- Guardrails: no graph tier, force, geometry, linear-route, dependency, backend/Supabase, PostHog, analytics, contact endpoint, network submission, account, credential, commit, push, or deployment change.
- File/path/link: `src/routes/problem-map/+page.svelte`; local verification route `http://127.0.0.1:4179/problem-map`.
- Checked by: Egon, 2026-07-24 07:50 EDT.

## 2026-07-24 — Problem Map V2 local preview recovery and cleanup

- Command/source: inspected the failed preview report, confirmed its referenced hashed CSS asset was absent, then ran `npm run check && npm run build && git diff --check` in `/Users/kn8/projects/belt-works-problem-map-drilldown`; started a fresh `npm run preview -- --host 127.0.0.1 --port 4178` from the resulting output and probed `/problem-map`.
- Result: `svelte-check` reported 0 errors / 0 warnings; Vite production build passed; diff whitespace check passed. Fresh output contains coherent current hashed assets, replacing the stale missing reference. `http://127.0.0.1:4178/problem-map` returned `HTTP 200 bytes=13748`; response contains the Problem Map marker; preview is listening on `127.0.0.1:4178`.
- File/path/link: local review route `src/routes/problem-map/+page.svelte`; fresh preview `http://127.0.0.1:4178/problem-map`.
- Guardrails: no source reset, cache deletion, commit, push, deployment, backend/Supabase/PostHog change, analytics collection, credential access, or public action.
- Checked by: Egon, 2026-07-24.

## 2026-07-24 — Problem Map atmospheric seam repair

- Command/source: inspected Nate’s screenshot and the map field CSS. The broad vertical/rectangular tonal boundary came from the large rotated `.constellation::before` element using `filter:blur(34px)` over the dark layered field. Replaced only that element with a continuous large radial-gradient layer painted directly in `.constellation`’s background; retained the intended orbit and graph links.
- Result: fresh local browser inspection shows no visible broad vertical/rectangular atmospheric seam. Faint connection lines and the elliptical orbit remain as intentional graph structure.
- Verification: `npm run check` → 0 errors / 0 warnings; `npm run build` → passed; `git diff --check` → passed; fresh `vite preview` at `http://127.0.0.1:4178/problem-map` visually inspected.
- Guardrails: CSS-only local review change in `src/routes/problem-map/+page.svelte`; no reset, commit, push, deploy, backend/Supabase/PostHog change, analytics collection, credential access, or public action.
- Checked by: Egon, 2026-07-24.

## 2026-07-23 — Problem-map visual language pass: hard-line blue field

- Command/source: inspected a fresh production preview, then changed only map-scoped CSS in `src/routes/problem-map/+page.svelte`.
- Result: converted the map from lime/amber orbital diagram to a midnight-blue thinking field: diffuse cyan glow, angular/hard-cut root and node geometry, cyan link halos, and lime limited to active selection. Content, controls, D3/camera motion, accessibility route, and data contract were not changed.
- Verification: `npm run check` → 0 errors / 0 warnings; `npm run build` → passed; `git diff --check` → passed. Screenshot visually reviewed: `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-blue-hardline.png`. Production-preview rect probes across every group at `1280×900` and `390×844`: all results returned `leafCount=3`, `overlap=false`, `clipped=false`.
- Guardrails: local visual review only. No commit, push, deploy, public action, analytics, consent intake, Supabase mutation, Plaud configuration, or credential access.
- Checked by: Egon, 2026-07-23 23:14 EDT.

## 2026-07-23 — Adaptive problem-map leaf-spacing review pass

- Command/source: read the local visual handoff, live route geometry, D3 motion plan, repo state, and attached Plaud capability assessment; changed only the local review route's leaf-layout coordinates after preserving the current root/camera/physics contract.
- Result: opened desktop branches now use authored direction-aware layouts: shallow corner arcs for top/bottom paths and vertical stacks for left/right paths. The 390px layout is parent-relative: top/side branches stack below their centered category; bottom branches stack above it. This avoids capsule overlap and camera-induced edge clipping without adding problem content or replacing the continuous field.
- File/path/link: `src/routes/problem-map/+page.svelte`; Plaud assessment receipt: `/Users/kn8/MESH_BOARD/30_RECEIPTS/egon/2026-07-23__plaud-conversational-gateway-capability-assessment.md`; consent-backend design packet: `/Users/kn8/MESH_BOARD/20_PLANS/2026-07-23__problem-map-consent-backend-and-next-question-packet.md`.
- Verification: `npm run check` — 0 errors / 0 warnings; `npm run build` — passed; `git diff --check` — passed. Fresh preview `http://127.0.0.1:4178/problem-map` was tested with isolated Chrome/CDP after build. Rect-based checks across all 7 desktop branches and all 7 branches at a 390×844 viewport each reported `leafCount=3`, `overlap=false`, `clipped=false`. Local screenshot: `/Users/kn8/sandbox/browser-harness-spike/bh-tmp/problem-map-mobile-spacing.png`.
- Guardrails: local review only. No commit, push, PR, deploy, public copy change, analytics, contact submission, Supabase mutation, Plaud configuration, credential access, or Apple enrollment action.
- Checked by: Egon, 2026-07-23 23:14 EDT.

## 2026-07-23 — Problem map drill-down V2 local review build

- Command/source: created isolated worktree `/Users/kn8/projects/belt-works-problem-map-drilldown` on `feat/problem-map-drilldown` from `origin/main` commit `9868f45`; read project manifest/charter/state/instructions, the original problem-map project-start packet, and the V1 route before writing the V2 plan and code.
- Result: V2 explicitly models map depth instead of rendering every authored node at rest. The browser starts with root + four broad groups. Selecting `Work keeps getting stuck` exposes exactly three matching leaves and its orientation card; selecting `The same work happens twice` activates that leaf, preserves the `Map root / Work keeps getting stuck / leaf` breadcrumb, renders the lower answer panel, and exposes its `Bring the repeat` CTA. A text-first route uses the same tree.
- File/path/link: `src/routes/problem-map/+page.svelte`, `docs/plans/2026-07-23__problem-map-drilldown-v2.md`, `work/active/2026-07-23-problem-map-drilldown-v2.md`, `STATE.md`.
- Verification: after `npm ci` installed the existing lockfile, `npm run check` reported 0 errors / 0 warnings; `npm run build` passed; `git diff --check` passed. A local production preview at `http://127.0.0.1:4175/problem-map` was inspected in root, opened-branch, and selected-leaf states. Browser DOM proof: opened branch had `open=3` and title `Follow the work itself first.`; leaf proof had active leaf `The same work happens twice`, answer `The repeat is taking time away from the actual work.`, CTA `Bring the repeat`, correct breadcrumb, and `linearLeaves=3`. Desktop visual review found a coherent local-branch drill-down with no observed label collision/clipping.
- Guardrails: local review only. No commit, push, PR, deployment, published copy change, analytics, contact-flow change, dependency version change, or data collection was performed. `npm ci` reported 7 existing dependency vulnerabilities (1 low, 2 moderate, 4 high); no audit fix was attempted.
- Checked by: Egon, 2026-07-23.


## 2026-07-22 — Practical software shop copy-system pass

- Command/source: created isolated worktree `/Users/kn8/projects/belt-works-copy-system` on `feat/belt-copy-system` from `origin/main` commit `6122cd1`; read existing visitor routes/content, the approved review draft, and repo instructions before editing.
- Result: Belt.works now has one public identity across its primary visitor path: a practical software shop making small working systems for real work. The service vocabulary is custom software, workflow automation, data shaping, and web systems. Homepage proof removes ROOMS while leaving its route intact; ShopFloor is framed as protected public-interest work built around trust instead of extraction, with no public-release or lead-funnel claim.
- File/path/link: `src/routes/+page.svelte`, `src/routes/services/+page.svelte`, `src/routes/method/+page.svelte`, `src/routes/about/+page.svelte`, `src/routes/work/+page.svelte`, `src/routes/data/+page.svelte`, `src/routes/vision/+page.svelte`, `src/routes/+layout.svelte`, `src/lib/content/{services,projects}.js`, `src/lib/components/SiteFooter.svelte`, `docs/plans/2026-07-22__practical-software-shop-copy-system.md`.
- Verification: source drift scan returned no matches for removed `scope hard`/funnel/AI-harness framing; `npm ci` installed the existing lockfile only; `npm run check` reported 0 errors / 0 warnings; `npm run lint` and `npm run build` passed. Local production preview route probes returned 200 for `/`, `/services`, `/method`, `/about`, `/work`, `/data`, `/admin-workflow-audit`, `/contact`, and `/ask`. Browser smoke verified `/`, `/services`, `/method`, and `/data` render the new hierarchy and four lanes without form submission.
- Audit note: `npm ci` reported 7 vulnerabilities (1 low, 2 moderate, 4 high). No `npm audit fix` was run because dependency changes are out of scope.
- Checked by: Egon, 2026-07-22.

## 2026-07-22 — Admin Workflow Audit offer page

- Command/source: created isolated worktree `feat/admin-workflow-audit-offer` from `origin/main`; added `/admin-workflow-audit` and one homepage CTA after inspecting the existing `/contact` intake endpoint.
- Result: a public-facing, fixed-scope `$495` Admin Workflow Audit offer is available for HVAC, plumbing, and electrical shops. The page states the 90-minute session, written follow-up, concrete deliverables, good-fit conditions, and explicit exclusions. It uses the existing contact path; no new lead system, payment rail, or outbound contact was added.
- File/path/link: `src/routes/admin-workflow-audit/+page.svelte`, `src/routes/+page.svelte`.
- Verification: `npm ci`; `npm run check` (0 errors / 0 warnings); `npm run lint`; `npm run build`; local production preview returned `200` for `/`, `/admin-workflow-audit`, and `/contact`; browser smoke confirmed title, offer terms, deliverables, and contact CTA render on the new route.
- Checked by: Egon, 2026-07-22.

## 2026-07-22 — Admin Workflow Audit attribution and demand-test packet

- Command/source: added a query-to-intake attribution handoff to the existing `/contact` form and created a bounded Google Search launch packet.
- Result: direct offer CTAs submit as `Admin Workflow Audit · Direct`; a future Search campaign can use `Admin Workflow Audit · Google Search` without a new tracker, cookie, or table. The launch packet specifies a `$10/day × 10 days = $100` hard cap and fails closed without an inspectable account/billing surface.
- File/path/link: `src/routes/contact/+page.svelte`, `src/routes/admin-workflow-audit/+page.svelte`, `/mesh/20_PLANS/2026-07-22__belt-admin-workflow-audit-demand-test-launch-packet.md`.
- Verification: `npm run check` (0 errors / 0 warnings), `npm run lint`, and `npm run build` completed successfully.
- Checked by: Egon, 2026-07-22.

## Format

```md
## YYYY-MM-DD — Thing verified

- Command/source:
- Result:
- File/path/link:
- Checked by:
```

## 2026-05-24 — Stack OS bootstrap initialized

- Command/source: `/Users/kn8/.hermes/stack-os/stackctl.py init /Users/kn8/projects/belt-works --name ShopFloor ...` followed by `/Users/kn8/.hermes/stack-os/stackctl.py audit /Users/kn8/projects/belt-works`
- Result: Stack OS structure created and audit reported `OK: structure present`.
- File/path/link: `/Users/kn8/projects/belt-works/{PROJECT_CHARTER.md,AGENTS.md,STATE.md,docs/DECISIONS.md,docs/EVIDENCE.md,.stack/manifest.yaml,work/}`
- Checked by: Egon

## 2026-05-24 — First ShopFloor task card created

- Command/source: wrote `work/inbox/2026-05-24-shopfloor-placeholder-copy.md`
- Result: Task card exists with acceptance criteria for replacing the placeholder ShopFloor post.
- File/path/link: `/Users/kn8/projects/belt-works/work/inbox/2026-05-24-shopfloor-placeholder-copy.md`
- Checked by: Egon

## 2026-05-25 — ShopFloor support framing added to belt.works

- Command/source: read `AGENTS.md`, `.stack/manifest.yaml`, `PROJECT_CHARTER.md`, `STATE.md`, `work/inbox/2026-05-24-shopfloor-placeholder-copy.md`, existing route/content files; wrote `work/active/2026-05-25-shopfloor-support-page.md` before editing.
- Result: ShopFloor placeholder copy replaced, `/support` page added, homepage/footer/project card now link to support/ShopFloor framing without putting a payment ask inside the app flow.
- File/path/link: `content/posts/shopfloor.md`, `src/routes/support/+page.svelte`, `src/routes/+page.svelte`, `src/lib/components/SiteFooter.svelte`, `src/lib/content/projects.js`.
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; local HTTP probes returned 200 for `/`, `/support`, and `/blog/shopfloor`; `/support` and `/blog/shopfloor` contained `ShopFloor is free to use because barriers to help are bugs`.
- Checked by: Egon

## 2026-05-25 — A11y blog post published in content

- Command/source: replaced placeholder `content/posts/a11y.md` with Nate's supplied `A11Y BLOG FINAL.md` copy, preserving the flat-file blog frontmatter shape.
- Result: `/blog/a11y` now renders “Accessibility as Community Service: Fixing the Digital Curb-Cuts of Akron.”
- File/path/link: `content/posts/a11y.md`.
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; local HTTP probe returned 200 for `/blog/a11y` and confirmed the rendered page contains `Accessibility as Community Service`, `At belt.works, we don’t do locked doors.`, and `Every morning at 4:00 AM`.
- Checked by: Egon

## 2026-05-27 — A11y audit tests MWP structure created

- Command/source: inspected `.stack/manifest.yaml`, `PROJECT_CHARTER.md`, `STATE.md`, `package.json`, `content/posts/a11y.md`, `docs/EVIDENCE.md`, and existing `work/` task cards; ran `/Users/kn8/.hermes/stack-os/stackctl.py audit /Users/kn8/projects/belt-works`.
- Result: Stack OS structure was present; A11y audit context, MWP plan, and inbox task card were created without installing dependencies or modifying runtime code.
- File/path/link: `docs/context/a11y-audit-tests-context.md`, `docs/plans/2026-05-27-a11y-audit-tests-mwp.md`, `work/inbox/2026-05-27-a11y-audit-tests-mwp.md`, `STATE.md`.
- Verification: `stackctl audit` reported `OK: structure present`; `git status --short` shows intended new A11y docs/task plus pre-existing untracked `docs/briefs/`.
- Checked by: Egon

## 2026-05-29 — Donate page PR prepared

- Command/source: inspected `.stack/manifest.yaml`, `PROJECT_CHARTER.md`, `STATE.md`, `work/active/2026-05-25-shopfloor-support-page.md`, `.context/plans/add-a-donate-page-with-cash-app-qr.md`, and the donate/support/header diff; restored `package-lock.json` from `origin/main` to remove unrelated lockfile metadata churn.
- Result: `/donate` exists with the Cash App QR image only, the primary nav links to `/donate`, and `/support` now points direct support to the donate page while keeping `/contact` as the secondary path.
- File/path/link: `src/routes/donate/+page.svelte`, `static/donate/cashapp-qr.png`, `src/lib/components/SiteHeader.svelte`, `src/routes/support/+page.svelte`.
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully and included `entries/pages/donate/_page.svelte.js`; `cmp -s static/donate/cashapp-qr.png .context/attachments/DnvOQ6/CashApp-Kn800-QR.png` exited 0.
- Known issue: `npm run lint` still fails on pre-existing `src/routes/ally/+page.svelte:37:14` unused `err` (`no-unused-vars`), outside the donate-page diff.
- Checked by: Codex at 2026-05-29 21:26:43 EDT

## 2026-05-29 — /support merged into /donate

- Command/source: rebuilt `/donate` from the `/support` structure (warm hero, "What support pays for" 3-card grid, "How to help" row), embedded the Cash App QR in the "Direct support" card, converted `/support` to a 308 redirect, and repointed the footer, homepage CTA, and shop-floor post to `/donate`.
- Result: one polished page at `/donate` carries both the sustainability framing and the payment rail; `/support` 308-redirects to `/donate`; no `/support` links remain in `src`/`content` except the redirect route itself.
- File/path/link: `src/routes/donate/+page.svelte`, `src/routes/support/+page.js` (new redirect), `src/routes/support/+page.svelte` (stub), `src/lib/components/SiteFooter.svelte`, `src/routes/+page.svelte`, `content/posts/shopfloor.md`, plus docs (`STATE.md`, a11y plan/context route lists).
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; `grep -rn "/support" src content` returns only the redirect route's own comments.
- Known issue: `npm run lint` still fails on pre-existing `src/routes/ally/+page.svelte:37:14` unused `err` (`no-unused-vars`), outside this diff.
- Checked by: Claude at 2026-05-29


## 2026-05-31 — Donate page progress tracker added

- Command/source: read `AGENTS.md`, `.stack/manifest.yaml`, `PROJECT_CHARTER.md`, `STATE.md`, `docs/EVIDENCE.md`, `package.json`, and existing `/donate` route before editing; created branch `feat/donate-progress-bar`; Nate reviewed and approved the support section copy.
- Result: `/donate` now has an honest manual monthly support progress tracker showing `$0 / $100` with a public `$100/month` starting target. The tracker uses an accessible `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- File/path/link: `src/routes/donate/+page.svelte`
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; `npm run test:a11y` reported 7 passed at 2026-05-31 09:45 EDT.
- Checked by: Egon

## 2026-06-06 — Ask page, blog posts, and ETH support prepared

- Command/source: read `AGENTS.md`, `.stack/manifest.yaml`, `PROJECT_CHARTER.md`, `STATE.md`, `work/active/2026-05-25-shopfloor-support-page.md`, existing blog/contact/donate routes, and the board copy packet for `What’s on your mind?` before editing.
- Result: added `/ask` broad-entry help-loop page, added `content/posts/what-is-on-your-mind.md`, included current untracked blog posts in the commit scope, linked `/ask` from the header/homepage, added `TheeCodePoet.eth` as optional support below the ask form and on `/donate`, and fixed the pre-existing `src/routes/ally/+page.svelte` unused catch binding so lint can pass.
- File/path/link: `src/routes/ask/+page.svelte`, `content/posts/what-is-on-your-mind.md`, `content/posts/durable-mesh.md`, `content/posts/shopfloor-who-has-the-damn-tool.md`, `src/lib/components/SiteHeader.svelte`, `src/routes/+page.svelte`, `src/routes/donate/+page.svelte`, `src/routes/ally/+page.svelte`, `static/social/`.
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; `npm run lint` completed successfully; local preview HTTP probes returned 200 for `/ask`, `/blog/what-is-on-your-mind`, `/blog/durable-mesh`, `/blog/shopfloor-who-has-the-damn-tool`, and `/donate`; probes confirmed `TheeCodePoet.eth` appears on `/ask` and `/donate`.
- Checked by: Egon at 2026-06-06 17:45 EDT

## 2026-06-06 — Ask/blog/ETH branch accessibility pass

- Command/source: production build + local preview on `127.0.0.1:4173`, then ephemeral `npx --yes pa11y` WCAG2AA audits for the public route set. Manual keyboard check verified the skip link moves focus to `main#main-content`.
- Result: fixed invalid autocomplete/type pairings on `/ask` and `/contact`, fixed low-contrast room-card metadata on `/rooms`, and made the skip-link target focusable with `tabindex="-1"`.
- File/path/link: `src/routes/ask/+page.svelte`, `src/routes/contact/+page.svelte`, `src/app.css`, `src/routes/+layout.svelte`, `.gitignore`.
- Verification: `npm run check`, `npm run build`, and `npm run lint` completed successfully. Pa11y WCAG2AA reported 0 issues for `/`, `/ask`, `/contact`, `/donate`, `/blog/a11y`, `/blog/what-is-on-your-mind`, `/blog/durable-mesh`, `/blog/shopfloor-who-has-the-damn-tool`, and `/rooms`.
- Checked by: Egon

## 2026-07-14 — Coding-agent egress-receipts blog installed locally

- Command/source: copied `/Users/kn8/MESH_BOARD/projects/writing/venkman/2026-07-14__coding-agents-need-egress-receipts-blog-v2.md` into the repo's flat-file post directory after reading repo instructions and blog loader conventions.
- Result: `content/posts/coding-agents-need-egress-receipts.md` exists with the staging title, slug, description, date, and body unchanged.
- File/path/link: `content/posts/coding-agents-need-egress-receipts.md`.
- Verification: source and destination SHA-256 both `d3144c98c280d16f1c04095937329722a987ac989a9e7b970a8c740c28605297`; dependency-free frontmatter/slug check reported `frontmatter=ok slug_unique=ok body=nonempty posts=7`.
- Build/check boundary: `node_modules/` is absent. Per task scope, packages were not installed, so `npm run check` and `npm run build` were not run.
- Guardrails: no commit, push, deploy, public posting/scheduling, credential access, deletion, or reset.
- Checked by: Venkman at 2026-07-14 11:43 EDT

## 2026-07-14 — M4 dependency/check/build verification for egress-receipts post

- Command/source: `npm ci`, `npm run check`, and `npm run build` from `/Users/kn8/projects/belt-works` after the local blog install.
- Result: dependency install passed; `svelte-check` reported 0 errors and 0 warnings; Vite/SvelteKit production build completed successfully.
- File/path/link: `content/posts/coding-agents-need-egress-receipts.md`.
- Audit note: `npm ci` reported 7 vulnerabilities (1 low, 3 moderate, 3 high). No `npm audit fix` was run because dependency mutation is a separate approval gate.
- Guardrails: no commit, push, deploy, public posting/scheduling, credential access, deletion, or reset.
- Checked by: Egon at 2026-07-14 11:52 EDT.

## 2026-07-22 — OpenAI/Hugging Face incident blog installed locally

- Command/source: created isolated worktree `/Users/kn8/projects/belt-works-openai-blog` from `origin/main` on branch `feat/openai-huggingface-incident-blog`; copied reviewed draft from `/Users/kn8/MESH_BOARD/20_PLANS/writing/tiktok-matt-ai-hacker-20260721/blog-draft.md` into flat-file blog format.
- Result: `content/posts/ai-hacker-objective-misrouting.md` exists with Belt.works blog frontmatter and the reviewed article body. Applied the source/risk hedges: first OpenAI reference says `preliminary`, and bottom-line wording says `compromised part of a real third-party platform’s production infrastructure`.
- File/path/link: `content/posts/ai-hacker-objective-misrouting.md`; local route `/blog/ai-hacker-objective-misrouting`.
- Verification: `npm ci` completed; `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; earlier local preview on `127.0.0.1:4177` returned 200 for `/blog` and `/blog/ai-hacker-objective-misrouting`; route HTML contained `The AI Hacker Didn`, `objective misrouting`, `OpenAI`, `Hugging Face`, and `receipts and boundaries`; blog index contained `The AI Hacker Didn`. Commit preflight on 2026-07-22 07:40 EDT reran `npm run check`, `npm run build`, and `git diff --check` successfully before staging.
- Audit note: `npm ci` reported 7 vulnerabilities (1 low, 2 moderate, 4 high). No `npm audit fix` was run because dependency mutation is a separate approval gate.
- Guardrails: commit approved by Nate; no push, deploy, merge to `main`, public posting/scheduling, credential access, deletion, or reset.
- Checked by: Egon at 2026-07-22 07:40 EDT.
## 2026-08-06 — The Work Before the Work blog release preflight

- Command/source: created isolated worktree `/Users/kn8/projects/belt-works-work-before-work` from `origin/main` on `publish/work-before-the-work`; installed Nate-approved article as `content/posts/the-work-before-the-work.md` with the repository-required flat-file frontmatter.
- Result: local route `/blog/the-work-before-the-work` rendered “The Work Before the Work,” the article’s problem-selection question, and “Build metabolism, not just motion”; `/blog` listed the new post.
- File/path/link: `content/posts/the-work-before-the-work.md`, `work/active/2026-08-06-the-work-before-the-work-blog.md`, `STATE.md`; target public route `https://belt-works.vercel.app/blog/the-work-before-the-work`.
- Verification: frontmatter/slug/body check passed (`slug=the-work-before-the-work`, body 7,369 characters, 9 posts); `git diff --check` passed; `npm ci` completed; `npm run check` reported 0 errors / 0 warnings; `npm run build` completed; local `vite preview` returned 200 for the post and index.
- Audit note: `npm ci` reported 8 vulnerabilities (1 low, 2 moderate, 5 high). No `npm audit fix` was run because dependency mutation is out of scope.
- Known issue: `npm run lint` fails on `src/routes/problem-map/+page.svelte:284`, where `cameraFrame` is never assigned. The same line exists at `origin/main`; it is outside this article-only diff and was not changed.
- Approval: Nate explicitly approved commit, merge to `main`, push, and production deployment on 2026-08-06.
- Checked by: Egon, 2026-08-06.

## 2026-08-06 — We Speak Software blog release preflight

- Command/source: created isolated worktree `/Users/kn8/projects/belt-works-software-fluency` from `origin/main` on `publish/software-fluency`; installed Nate-approved article as `content/posts/we-speak-software.md` with required flat-file frontmatter.
- Result: local route `/blog/we-speak-software` rendered “We Speak Software,” “Code is becoming cheaper. Translation is not.,” “This is what we bring to the table,” and “The goal is shared capacity”; `/blog` listed the new post.
- File/path/link: `content/posts/we-speak-software.md`, `work/active/2026-08-06-we-speak-software-blog.md`, `STATE.md`; target public route `https://www.belt.works/blog/we-speak-software`.
- Verification: frontmatter/slug/body check passed (`slug=we-speak-software`, body 6,991 characters, 10 posts); `git diff --check` passed; `npm ci` completed; `npm run check` reported 0 errors / 0 warnings; `npm run build` completed; local `vite preview` returned 200 for post and index.
- Audit note: `npm ci` reported 8 vulnerabilities (1 low, 2 moderate, 5 high). No `npm audit fix` was run because dependency mutation is out of scope.
- Known issue: `npm run lint` fails on the pre-existing `origin/main` `src/routes/problem-map/+page.svelte:284` `cameraFrame` assignment error; it is outside this content-only diff.
- Approval: Nate explicitly approved commit, push to `main`, and production deployment on 2026-08-06.
- Checked by: Egon, 2026-08-06.
