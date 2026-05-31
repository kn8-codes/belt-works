# Current State — ShopFloor / belt.works

## Active Goal

Finish and review the focused donate-page/progress tracker work for belt.works, then return to the A11y audit MWP lane.

## Right Now

The Belt.works repo now contains first-pass ShopFloor support framing:

- `content/posts/shopfloor.md` no longer has placeholder copy.
- `/support` and `/donate` are merged into a single page at `/donate`: the sustainability framing Nate liked plus the Cash App QR embedded in the "Direct support" card. `/support` now 308-redirects to `/donate`.
- `/donate` now includes a transparent infrastructure-cost section with a public `$100/month` support target. It explicitly says support covers belt.works operating costs — inference/agent work, accessibility audit tooling, and web infrastructure — not Nate's personal bills.
- `/donate` now includes an honest manual progress tracker showing `$0 / $100`. Nate confirmed `$100/month` should remain the public starting target; `$300/month` is closer to the ideal actual burn target later.
- The homepage final CTA includes `Support the work` (now → `/donate`) as a secondary action.
- The footer links to `/donate` gently ("Support the work.").
- The homepage current-work cards now include ShopFloor and point to `/blog/shopfloor`.
- The key line is live in both `/donate` and `/blog/shopfloor`: “ShopFloor is free to use because barriers to help are bugs.”
- `content/posts/a11y.md` now contains Nate's final A11y post, rendered at `/blog/a11y`.
- A11y audit test context is now documented at `docs/context/a11y-audit-tests-context.md`.
- A first MWP implementation plan exists at `docs/plans/2026-05-27-a11y-audit-tests-mwp.md`.
- The task card for implementation exists at `work/inbox/2026-05-27-a11y-audit-tests-mwp.md`.
- The `kn8-codes/add-donate-page` branch adds `/donate` with the Cash App QR, links it from the primary nav, merges the `/support` page into `/donate`, and redirects `/support` → `/donate`. The shop-floor post, footer, and homepage CTA now link to `/donate`.
- `package-lock.json` was restored to `origin/main` so the donate PR stays scoped to page, nav, support copy, evidence, and state changes.

## Verification

Checked on 2026-05-31:

- `npm run check` — 0 errors / 0 warnings.
- `npm run build` — completed successfully after the `/donate` progress tracker update.
- `npm run test:a11y` — 7 passed, including `/donate`.

Checked on 2026-05-29:

- `npm run check` — 0 errors / 0 warnings.
- `npm run build` — completed successfully.
- `npm run lint` — fails on pre-existing `src/routes/ally/+page.svelte:37:14` unused `err`, outside the donate-page diff.
- `cmp -s static/donate/cashapp-qr.png .context/attachments/DnvOQ6/CashApp-Kn800-QR.png` — exited 0.

## Next Best Action

1. Keep the `/donate` progress tracker at `$0 / $100` for the public starting target. Nate noted `$300/month` is closer to ideal actual burn, but `$100/month` is the right first public target.
2. Review and merge the donate-page/progress branch when ready.
3. Then decide the first A11y audit blocking policy, activate `work/inbox/2026-05-27-a11y-audit-tests-mwp.md`, and implement the local route audit lane.
4. For ShopFloor app deployment, continue with preview deployment before wiring `shopfloor.belt.works`.

## Blockers

- `npm run lint` is blocked by pre-existing `src/routes/ally/+page.svelte:37:14` unused `err`.
- No A11y audit blocking policy chosen yet: fail on serious/critical immediately, or collect a baseline first.
- No DNS/deployment changes made.

## Open Questions for Nate

- Should first-pass A11y audits fail on serious/critical violations immediately, or collect a baseline first?
- Should first-pass scope stay local to belt.works routes, or include one external Akron resource site as a non-blocking smoke target?
- Should the pre-existing Ally lint issue be fixed in its own cleanup PR?
- Should `/donate` stay Cash App only, or later add Ko-fi, GitHub Sponsors, Stripe, Open Collective, or another support rail?

## Last Verified

2026-05-31 09:45 EDT
