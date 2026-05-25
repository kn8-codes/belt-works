---
status: active
priority: high
owner: egon
created: 2026-05-25
project: ShopFloor
requires_decision: false
---

# Add ShopFloor sustainability/support framing to belt.works

## Intent

Give the line “ShopFloor is free to use because barriers to help are bugs” a permanent public home on belt.works, while keeping the ShopFloor app itself free of paywall/gig-market framing.

## Plan

1. Replace the placeholder `content/posts/shopfloor.md` with plain product-lane copy.
2. Add a `/support` page on belt.works for the sustainability ask.
3. Link `/support` gently from the footer and home page.
4. Do not deploy, publish, spend money, or change domain/DNS.
5. Run `npm run check` and record receipts in `docs/EVIDENCE.md`.

## Acceptance Criteria

- [ ] The barrier/bugs line appears on a Belt.works page.
- [ ] ShopFloor is framed as free-to-use mutual-aid infrastructure, not a marketplace.
- [ ] The money/support ask is one page away from the app flow.
- [ ] Navigation/linking is visible but not intrusive.
- [ ] Checks pass or failures are documented.
- [ ] `STATE.md` and `docs/EVIDENCE.md` are updated.

## Out of Scope

- Payment provider setup.
- Donation checkout.
- Publishing/deployment.
- DNS/subdomain changes.
