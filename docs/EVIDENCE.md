# Evidence — ShopFloor

Record receipts here. Agent narration is not evidence. Pretty words are how bugs wear cologne.

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
