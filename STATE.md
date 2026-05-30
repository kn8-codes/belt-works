# Current State — ShopFloor / belt.works

## Active Goal

Make the A11y audit promise testable with a small MWP lane before expanding to external Akron resource sites.

## Right Now

The Belt.works repo now contains first-pass ShopFloor support framing:

- `content/posts/shopfloor.md` no longer has placeholder copy.
- `/support` exists as a Belt.works sustainability page.
- The homepage final CTA includes `Support the work` as a secondary action.
- The footer links to `/support` gently.
- The homepage current-work cards now include ShopFloor and point to `/blog/shopfloor`.
- The key line is live in both `/support` and `/blog/shopfloor`: “ShopFloor is free to use because barriers to help are bugs.”
- `content/posts/a11y.md` now contains Nate's final A11y post, rendered at `/blog/a11y`.
- A11y audit test context is now documented at `docs/context/a11y-audit-tests-context.md`.
- A first MWP implementation plan exists at `docs/plans/2026-05-27-a11y-audit-tests-mwp.md`.
- The task card for implementation exists at `work/inbox/2026-05-27-a11y-audit-tests-mwp.md`.

## Verification

Checked on 2026-05-25:

- `npm run check` — 0 errors / 0 warnings.
- `npm run build` — completed successfully.
- Local HTTP probes — `/`, `/support`, `/blog/shopfloor`, and `/blog/a11y` returned 200.

## Next Best Action

Decide the first A11y audit blocking policy, then activate `work/inbox/2026-05-27-a11y-audit-tests-mwp.md` and implement the local route audit lane.

For ShopFloor app deployment, continue with preview deployment before wiring `shopfloor.belt.works`.

## Blockers

- No A11y audit blocking policy chosen yet: fail on serious/critical immediately, or collect a baseline first.
- No payment/support provider chosen yet. Intentionally deferred.
- No DNS/deployment changes made.

## Open Questions for Nate

- Should first-pass A11y audits fail on serious/critical violations immediately, or collect a baseline first?
- Should first-pass scope stay local to belt.works routes, or include one external Akron resource site as a non-blocking smoke target?
- Should `/support` stay “talk first” for now, or should it later point to Ko-fi, GitHub Sponsors, Stripe, Open Collective, or another support rail?
- Should ShopFloor be linked from the main nav, or is homepage/footer/current-work enough for the alpha period?

## Last Verified

2026-05-27
