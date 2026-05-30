---
status: inbox
priority: high
owner: unassigned
created: 2026-05-27
project: ShopFloor
requires_decision: true
execution_lane: egon
model_policy: coding_heavy
requires_receipts: true
---

# Add A11y audit tests MWP

## Intent

Create the first repeatable accessibility audit lane for belt.works so the public A11y claim has a testable backbone.

## Context

The A11y post at `content/posts/a11y.md` says belt.works will run automated audits for Akron community-resource sites. Before auditing others, belt.works should audit its own public routes locally and produce receipts.

Read first:

- `docs/context/a11y-audit-tests-context.md`
- `docs/plans/2026-05-27-a11y-audit-tests-mwp.md`
- `content/posts/a11y.md`
- `package.json`

## Acceptance Criteria

- [ ] A single command runs the local A11y audit lane.
- [ ] The command builds/previews the SvelteKit site or clearly documents the required server prerequisite.
- [ ] The first route set includes `/`, `/blog/a11y`, `/blog/shopfloor`, `/support`, `/contact`, and `/rooms`.
- [ ] Serious/critical automated accessibility violations are surfaced as failures or baseline findings according to Nate's decision.
- [ ] Raw reports are written under `artifacts/a11y/` or another documented local artifact path.
- [ ] Generated artifacts are ignored by git unless Nate explicitly wants them committed.
- [ ] `docs/EVIDENCE.md` records the audit command, result, route set, and artifact path.
- [ ] `STATE.md` is updated with the current lane status and next action.

## Evidence Required

- `npm run check` result after dependency/config changes.
- `npm run test:a11y` or chosen equivalent result.
- Raw artifact path.
- `git status --short` showing intended changed files only.

## Decisions Needed

- Blocking policy: fail on serious/critical immediately, or collect a baseline first?
- Scope: belt.works local routes only in first pass, or include one external Akron site as non-blocking smoke?
- Report policy: local artifacts only, or future public report summaries?

## Notes

Do not install dependencies or change package scripts until Nate confirms the blocking policy if that choice affects CI/deploy behavior.
