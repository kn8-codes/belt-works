# IOC.Belt Synthetic V0 Implementation Plan

> **Production authorization update — 2026-08-12:** Nate authorized GitHub push, Vercel deployment, DNS configuration, and public launch of `ioc.belt.works`. Production additions are limited to self-hosting the existing IBM Plex Mono font, host-aware SvelteKit rerouting for clean subdomain paths, canonical URLs, and provider configuration. Intake, forms, accounts, APIs, feeds, analytics, real evidence, and suspect engagement remain excluded.

**Date:** 2026-08-12
**Status:** implementation and hostname containment verified; final documentation review pending before authorized publication

## Architecture

Use the existing Belt.works SvelteKit site and its global design tokens. Keep the proof under `/ioc/**` because `/method` is already the lab-wide operating-method route. Treat `/ioc` as the future subdomain root in local path form.

Use static Svelte data and markup only. The synthetic playbook data stays close to the route in V0; no abstraction is justified for one case. A later second playbook would trigger extraction into a shared schema/data module.

## Task 1 — Baseline

Run from the isolated worktree:

```bash
npm ci
npm run check
npm run lint
npm run build
```

Record any pre-existing failure before edits.

## Task 2 — Replace the `/ioc` stub

Modify `src/routes/ioc/+page.svelte`.

Required content:

- planning/synthetic status;
- concise product frame;
- sequence-first explanation;
- system relationship;
- links to IOC methodology and synthetic playbook;
- prominent no-intake/no-safe-verdict/no-public-accusation boundaries.

## Task 3 — Add IOC methodology

Create `src/routes/ioc/method/+page.svelte`.

Required content:

- observed fact / source report / analyst inference / unresolved claim separation;
- evidence/source classes;
- five analysis lanes;
- lifecycle and correction states;
- Case Vault / Pattern Ledger / IOC.Belt separation;
- explicit V0 exclusions.

## Task 4 — Add synthetic playbook

Create `src/routes/ioc/playbooks/impersonation/protect-your-money/+page.svelte`.

Required content:

- `SYNTHETIC` label at top;
- fictional bank/government impersonation sequence;
- containment-first pause card;
- evidence table;
- bounded classification;
- what is not established;
- possible next move as forecast;
- official source links;
- lifecycle/review/correction metadata;
- no real identifiers.

## Task 5 — Style and accessibility

Keep route-scoped styles inside the three IOC route files. Reuse global variables and type. Verify:

- semantic sections/headings;
- visible links and focus behavior inherited from site;
- tables scroll inside their own wrapper if needed;
- mobile stacking and no body-level horizontal overflow;
- reduced-motion safety (avoid meaningful animation entirely in V0).

## Task 6 — Verification

Run:

```bash
npm run check
npm run lint
npm run build
git diff --check
```

Start production preview on an unused loopback port. Exercise all three IOC routes at desktop and 390×844. Confirm:

- HTTP 200;
- expected status/limits markers;
- no forms;
- no external network calls except font/source navigation not triggered during load;
- `scrollWidth <= clientWidth`;
- screenshots exist.

Run a source/privacy scan for secret patterns, real identifiers, absolute private paths, and prohibited claims.

## Task 7 — Evidence and state

Update `docs/EVIDENCE.md` and prepend a focused entry to `STATE.md`. The original pre-authorization phase left the branch uncommitted for review. That instruction is superseded by Nate's production authorization: after the final documentation-only re-review passes, commit the scoped branch, push it, fast-forward the unchanged production `main`, verify the exact Vercel deployment, attach `ioc.belt.works`, configure the required DNS record, and verify public DNS/TLS/routes/privacy boundaries. Record exact local URL/restart command and changed files.
