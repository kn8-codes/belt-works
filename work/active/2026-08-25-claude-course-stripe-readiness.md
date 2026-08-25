# Work Card — Claude Code Course Stripe Readiness

**Date:** 2026-08-25
**Owner:** Nate
**Lead/verifier:** Egon/default
**Branch:** `feat/claude-code-course-stripe-readiness`
**Base:** `origin/feat/claude-code-course-sales-page` at `805a971`
**Status:** private 04C-1 implementation; no live payment

## Classification

```yaml
code_lifecycle: maintained_public
ponytail_mode: off
ponytail_reason: payment, personal-data, entitlement and long-lived public code
reuse_ladder:
  - existing SvelteKit server patterns
  - existing server-only Supabase helper
  - official Stripe Node SDK and hosted Checkout
  - repository migration and Node tests
quality_floor:
  - server-owned price
  - fail-closed activation
  - raw-body webhook signature verification
  - idempotent event/order receipts
  - no purchase-to-marketing coupling
  - test/build/lint/synthetic signature proof
rollback_stop_path:
  - unmerged child feature branch; checkout disabled by default
```

## Scope

Build only the Stripe transport and receipt boundary. Test mode may verify a synthetic/test purchase after credentials and migration exist. Live mode must remain structurally blocked until the owner-approved access adapter, price, refund and tax terms exist.

## Approval gates

- Stripe account/test credentials and Stripe CLI login;
- Supabase migration application;
- access delivery model;
- product/price creation;
- refund/tax/support terms;
- live mode, merge, deploy and publication.

## Implemented transport

- `stripe@22.5.0` server SDK;
- server-owned Stripe Product ID + Price ID;
- hosted one-time Checkout Session action;
- raw-body signature-verified webhook;
- completed/pending/asynchronous-success/asynchronous-failure handling;
- idempotent Supabase event/order receipt migration with browser access revoked;
- no buyer email or card persistence;
- default page with no price/form/button;
- live-mode structural refusal until a real access adapter exists.

## Verification

```text
commerce tests: 26/26
Svelte check:   0 errors / 0 warnings
build:          pass
scoped ESLint:  pass
full repo lint: inherited `problem-map` `cameraFrame` failure retained
diff check:     pass
default HTTP:   5/5 fail-closed smokes
browser:        6/6 desktop/mobile semantic smokes
prod audit:     0 vulnerabilities (`ws@8.21.3` override)
dev audit:      8 retained toolchain findings
review:         independent read-only review pending
```
