# Current State — ShopFloor / belt.works

## 2026-07-22 — Admin Workflow Audit offer and demand-test readiness

- Active goal: run the first bounded market test for the `$495` Admin Workflow Audit without broad social/outreach theater or unbounded ad spend.
- Current state: `https://www.belt.works/admin-workflow-audit` is live from `main` commit `66069c5`; direct CTAs now record `Admin Workflow Audit · Direct` in the existing contact intake. A Search-campaign destination is ready to record `Admin Workflow Audit · Google Search`.
- Next best action: inspect or sign into the intended ad account, prove the account/billing identity and a hard `$10/day`, 10-day/$100 maximum, then launch only the launch-packet scope.
- Blockers: no accessible authenticated Google/Meta campaign account or billing surface was found; no campaign was created.
- Open questions for Nate: which existing account should be used if one exists; otherwise whether to create a new Google Ads account manually.
- Last verified: 2026-07-22 by Egon.

## 2026-07-22 — OpenAI/Hugging Face incident blog local assembly

- Active goal: preserve the reviewed OpenAI/Hugging Face incident blog as a committed Belt.works branch without pushing, merging, deploying, or publishing.
- Current state: isolated worktree `/Users/kn8/projects/belt-works-openai-blog` is on `feat/openai-huggingface-incident-blog`; `content/posts/ai-hacker-objective-misrouting.md` exists and renders as the flat-file Belt.works blog route `/blog/ai-hacker-objective-misrouting`.
- Next best action: push/open PR only if Nate approves; deploy/publish/social remain separate gates.
- Blockers: no push, PR, merge, deploy, or publish approval in this step. Dependency audit still reports vulnerabilities; no `npm audit fix` was run because dependency mutation is separate approval.
- Open questions for Nate: whether to push the branch, open a PR, deploy after review, and/or prepare social copy later.
- Last verified: 2026-07-22 07:40 EDT by Egon; `npm run check` and `npm run build` passed.

## 2026-07-14 — Current blog-install lane

- Active goal: add the completed “Coding agents need egress receipts” post to the flat-file Belt.works blog without publishing it.
- Current state: the repo is on `main`; `content/posts/coding-agents-need-egress-receipts.md` is installed locally with the staging copy's title, slug, description, and date preserved.
- Next best action: review the local diff, then decide separately whether to commit/push/deploy.
- Blockers: none for local review. Egon later installed dependencies with `npm ci`; `npm run check` and `npm run build` passed. Dependency audit still reports 7 vulnerabilities; no `npm audit fix` was run because dependency mutation is a separate approval gate.
- Open questions for Nate: none for installation; commit, push, deploy, and public posting remain explicit gates.
- Last verified: 2026-07-14 11:43 EDT by Venkman.

## Prior active goal (2026-06-06 snapshot)

## Active Goal

Get the broad Belt.works ask loop, current blog posts, and optional support rail committed so the site has visible current activity and can be edited live if needed.

## Right Now

The repo is on branch:

```text
feat/ask-blog-eth-support
```

This branch is based on the previous donate progress branch and includes:

- `/donate` with the manual `$0 / $100` monthly support tracker.
- `/donate` with Cash App QR and `TheeCodePoet.eth` as an optional ENS support rail.
- New `/ask` page for the broad-entry `What’s on your mind?` help loop.
- `/ask` reuses the existing Supabase-backed `/api/contact` path by submitting with `type: What’s on your mind?`.
- `/ask` keeps the emergency/privacy disclaimer visible.
- `/ask` places optional support below the form only, never as a gate.
- Header and homepage now link to `/ask`.
- Flat-file blog now includes current posts:
  - `content/posts/what-is-on-your-mind.md`
  - `content/posts/durable-mesh.md`
  - `content/posts/shopfloor-who-has-the-damn-tool.md`
  - existing `content/posts/shopfloor.md`
  - existing `content/posts/a11y.md`
  - existing `content/posts/boommates.md`
- `static/social/` contains current belt.works social/avatar images.
- Pre-existing `/ally` lint issue was fixed by removing an unused catch binding.

## Verification

Checked on 2026-06-06 17:45 EDT:

- `npm run check` — 0 errors / 0 warnings.
- `npm run build` — completed successfully.
- `npm run lint` — completed successfully.
- Pa11y WCAG2AA local preview audit — 0 issues on `/`, `/ask`, `/contact`, `/donate`, `/blog/a11y`, `/blog/what-is-on-your-mind`, `/blog/durable-mesh`, `/blog/shopfloor-who-has-the-damn-tool`, and `/rooms`.
- Local preview probes returned 200 for:
  - `/ask`
  - `/blog/what-is-on-your-mind`
  - `/blog/durable-mesh`
  - `/blog/shopfloor-who-has-the-damn-tool`
  - `/donate`
- Local preview probes confirmed `TheeCodePoet.eth` appears on `/ask` and `/donate`.

## Next Best Action

1. Push the current branch and open a PR.
2. If production deployment is Git-backed, verify whether merging to `main` triggers deployment before doing it.
3. If Nate wants to keep Supabase from pausing, verify actual Supabase project status separately; a static commit alone may not count as database activity unless the deployed form receives a real submission.

## Blockers

- No deploy command has been run.
- No Supabase dashboard/API status has been checked in this pass.
- No production form submission has been made.

## Open Questions for Nate

- Should it be merged to `main` if the site deploys from `main`?
- Should we make one real production `/ask` test submission after deployment to exercise Supabase?

## Last Verified

2026-06-06 17:45 EDT
