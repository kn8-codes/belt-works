# Evidence — ShopFloor

Record receipts here. Agent narration is not evidence. Pretty words are how bugs wear cologne.

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
