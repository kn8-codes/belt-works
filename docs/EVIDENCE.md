# Evidence — ShopFloor

Record receipts here. Agent narration is not evidence. Pretty words are how bugs wear cologne.

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
