# Publish `The Kernel Is the Constitution`

## Goal

Publish the approved Belt.works technical field note on DeepSeek Harness and the Cordis paper, preserving the distinction between replaceable application behavior and the small runtime kernel that governs lifecycle, dependency resolution, and teardown.

## Code classification

- `code_lifecycle`: long-lived public website content
- `ponytail_mode`: off
- `ponytail_reason`: maintained public production surface
- `reuse_ladder`: existing flat-file blog and release conventions first
- `quality_floor`: frontmatter/slug check, diff/secret checks, site check/build, local route smoke, GitHub/Vercel deployment proof, public route verification

## Scope

- Add one flat-file blog post under `content/posts/`.
- Adapt the approved internal draft to the repository’s actual Markdown renderer.
- Preserve direct source links and distinguish paper claims from Belt.works judgment.
- Update project state and evidence.
- Commit the bounded release, push it to `main`, verify Vercel deployment, and verify the public article.

## Forbidden

- No unrelated code repair, dependency upgrade, analytics, form, credential, DNS, social posting, or deployment-configuration change.
- No Hermes rewrite or Cordis/DeepSeek installation.
- No claim that plugins provide sandboxing or that external emissions are reversible.

## Approval

Nate explicitly approved blog publication, commit, push to `main`, deployment/redeployment, and live verification on 2026-08-16.

## Done

`/blog/deepseek-harness-cordis-plugin-first-agents` is publicly live, appears in `/blog`, and contains the verified title, kernel distinction, reversibility boundary, and source links.

Completed on 2026-08-16 via release commit `5d94076890b958be233ad01ad2f79b645fea1bd2` and successful Vercel deployment `5930072351`.
