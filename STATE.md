# Current State — ShopFloor / belt.works

## Active Goal

Make ShopFloor legible on belt.works while keeping the app flow free-to-use and keeping the sustainability ask one page away.

## Right Now

The Belt.works repo now contains first-pass ShopFloor support framing:

- `content/posts/shopfloor.md` no longer has placeholder copy.
- `/support` exists as a Belt.works sustainability page.
- The homepage final CTA includes `Support the work` as a secondary action.
- The footer links to `/support` gently.
- The homepage current-work cards now include ShopFloor and point to `/blog/shopfloor`.
- The key line is live in both `/support` and `/blog/shopfloor`: “ShopFloor is free to use because barriers to help are bugs.”

## Verification

Checked on 2026-05-25:

- `npm run check` — 0 errors / 0 warnings.
- `npm run build` — completed successfully.
- Local HTTP probes — `/`, `/support`, and `/blog/shopfloor` returned 200.

## Next Best Action

Review the copy visually, then decide whether to keep the first-pass support mechanism as “contact first” or add explicit payment rails later.

For ShopFloor app deployment, continue with preview deployment before wiring `shopfloor.belt.works`.

## Blockers

- No payment/support provider chosen yet. Intentionally deferred.
- No DNS/deployment changes made.

## Open Questions for Nate

- Should `/support` stay “talk first” for now, or should it later point to Ko-fi, GitHub Sponsors, Stripe, Open Collective, or another support rail?
- Should ShopFloor be linked from the main nav, or is homepage/footer/current-work enough for the alpha period?

## Last Verified

2026-05-25
