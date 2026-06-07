---
status: active
priority: high
owner: egon
created: 2026-06-06
project: ShopFloor / belt.works
requires_decision: false
---

# Publish broad ask form, blog posts, and optional ETH support

## Intent

Get the current Belt.works public-facing work committed so the site has visible activity and the broad Akron-first help loop can be edited live if needed.

## Scope

1. Add all currently staged/written blog posts to the flat-file blog.
2. Add a `/ask` page for `What’s on your mind?`.
3. Reuse the existing Supabase-backed contact submission path instead of inventing new database infrastructure.
4. Add the optional support block with `TheeCodePoet.eth` below the ask form only.
5. Link the ask form from the homepage/header in a low-friction way.
6. Run local checks/build and commit verified changes.

## Constraints

- No deploy/publish command unless Nate explicitly asks.
- No credentials or Supabase dashboard changes.
- No database schema migration.
- No deletion.
- Keep support optional and never a gate.
- Preserve existing donate/progress work.

## Acceptance Criteria

- `/ask` route renders.
- `/ask` form posts to `/api/contact` with `type: What’s on your mind?`.
- Required disclaimer is visible.
- Optional ETH support block appears below the form only.
- Blog index includes the added posts.
- `npm run check` passes or known failures are documented.
- `npm run build` passes.
- `docs/EVIDENCE.md` and `STATE.md` are updated.
- Git commit has a meaningful message.

## Out of scope

- Production deployment.
- Supabase table/schema changes.
- Admin dashboard.
- Public social blast.
- Payment checkout.
