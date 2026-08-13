# Work Card — IOC.Belt Synthetic V0

**Date:** 2026-08-12
**Owner:** Nate
**Builder/verifier:** Egon/default
**Status:** implementation and hostname containment verified; final documentation review pending before authorized publication
**Branch:** `feat/ioc-belt-synthetic-v0`
**Worktree:** `/Users/kn8/projects/belt-works-ioc-v0`
**Base:** `origin/main` at `76ed204`

## Goal

Replace the historical `/ioc` stub with a local, reviewable IOC.Belt proof and add two nested synthetic routes:

- `/ioc/method`
- `/ioc/playbooks/impersonation/protect-your-money`

## User-visible result

A visitor can understand:

1. IOC.Belt is planned research infrastructure, not an active checker or intake service.
2. The method separates observed facts, source reports, inference, and unknowns.
3. The synthetic playbook shows the scam sequence, irreversible gate, bounded assessment, uncertainty, possible next move, and one immediate protective action.
4. Nothing on the pages certifies safety or attributes a real person.

## Code classification

```yaml
code_lifecycle: public_production_maintained
ponytail_mode: off
ponytail_reason: Public/security-adjacent production work; implementation mode is prohibited and dense shortcut implementation is inappropriate.
reuse_ladder:
  - existing Belt.works components and visual conventions
  - existing SvelteKit route/content patterns
  - standard platform features
  - minimal new code only
quality_floor:
  - synthetic data only
  - source, lifecycle, uncertainty, correction, and limits visible
  - responsive and accessible
  - npm check, lint, build, browser smoke, privacy/secret scan
  - verified production deployment with explicit provider/DNS/TLS checks and a non-destructive rollback path
```

## Allowed paths

- `src/routes/ioc/**`
- `src/routes/+layout.svelte`
- `src/app.css`
- `src/hooks.js`
- `src/hooks.server.js`
- `src/lib/components/IocHeader.svelte`
- `src/lib/components/IocFooter.svelte`
- `static/fonts/ibm-plex-mono/**`
- `.gitignore`
- `vite.config.js`
- `docs/plans/2026-08-12-ioc-belt-synthetic-v0.md`
- `work/active/2026-08-12-ioc-belt-synthetic-v0.md`
- `docs/EVIDENCE.md`
- `STATE.md`
- `artifacts/ioc-v0/**` (generated local screenshots and runtime JSON; not approved for commit)

## Publication authorization

On 2026-08-12 Nate explicitly authorized pushing to GitHub, deploying on Vercel, configuring DNS, and taking `ioc.belt.works` live. The content and behavior boundaries below remain unchanged.

Production containment uses project-owned fonts, a clean-path host reroute, and a server-side IOC page/static allowlist. API and non-read methods are blocked before shared handlers. Dedicated IOC header/footer components expose no intake links; the only cross-site navigation returns explicitly to `https://belt.works/`.

## Forbidden actions

- No changes to shared `/method`.
- No intake, upload, form, account, database, API, feed, search, analytics, or network calls.
- No real identifiers or participant evidence.
- No dependency changes.
- No force-push, history rewrite, destructive reset, unrelated publication, or credential disclosure.
- No deletion or unrelated refactor.

## Acceptance criteria

- [x] `/ioc` accurately describes the synthetic public-research status while keeping real intake closed.
- [x] `/ioc/method` makes evidence classes and publication boundaries legible.
- [x] Synthetic playbook is clearly labelled and source-linked.
- [x] Immediate containment precedes analysis.
- [x] Unknown identity and non-safety language are explicit.
- [x] All three routes render at desktop and 390px without horizontal overflow.
- [x] Keyboard/focus and semantic structure remain usable.
- [x] `npm run check`, `npm run build`, and relevant lint checks pass or baseline failures are documented.
- [x] Local browser smoke returns 200 and expected markers.
- [x] Evidence and state are updated.

Pre-authorization independent re-review verdict: `PASS`; `local_review_ready=true`; `public_deploy_ready=false`; zero critical, important, or minor findings. Nate subsequently authorized production publication, and the inherited Google Fonts blocker is resolved below. Production code and hostname containment have been independently reviewed; a final documentation-only re-review remains before commit.

## Resolved deployment blocker

Nate's production authorization opened the shared-layout gate. IBM Plex Mono is now self-hosted from project-owned static files with the upstream license retained, and the Google Fonts preconnect/stylesheet was removed. Host-aware routing is locally verified for the clean `ioc.belt.works` paths.

## Stop conditions

Stop for unauthorized scope expansion, real data, intake/backend/accounts/APIs/feeds/analytics, credential disclosure, ambiguous provider ownership, an existing conflicting DNS record, destructive or history-rewriting operations, failed verification, or a direction beyond the approved synthetic proof. GitHub push, Vercel deployment, the required `ioc.belt.works` domain/DNS work, and public launch are authorized when the documented review and verification gates pass.
