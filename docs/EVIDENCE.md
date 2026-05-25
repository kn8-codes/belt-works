# Evidence — ShopFloor

Record receipts here. Agent narration is not evidence. Pretty words are how bugs wear cologne.

## Format

```md
## YYYY-MM-DD — Thing verified

- Command/source:
- Result:
- File/path/link:
- Checked by:
```

## 2026-05-24 — Stack OS bootstrap initialized

- Command/source: `/Users/kn8/.hermes/stack-os/stackctl.py init /Users/kn8/projects/belt-works --name ShopFloor ...` followed by `/Users/kn8/.hermes/stack-os/stackctl.py audit /Users/kn8/projects/belt-works`
- Result: Stack OS structure created and audit reported `OK: structure present`.
- File/path/link: `/Users/kn8/projects/belt-works/{PROJECT_CHARTER.md,AGENTS.md,STATE.md,docs/DECISIONS.md,docs/EVIDENCE.md,.stack/manifest.yaml,work/}`
- Checked by: Egon

## 2026-05-24 — First ShopFloor task card created

- Command/source: wrote `work/inbox/2026-05-24-shopfloor-placeholder-copy.md`
- Result: Task card exists with acceptance criteria for replacing the placeholder ShopFloor post.
- File/path/link: `/Users/kn8/projects/belt-works/work/inbox/2026-05-24-shopfloor-placeholder-copy.md`
- Checked by: Egon

## 2026-05-25 — ShopFloor support framing added to belt.works

- Command/source: read `AGENTS.md`, `.stack/manifest.yaml`, `PROJECT_CHARTER.md`, `STATE.md`, `work/inbox/2026-05-24-shopfloor-placeholder-copy.md`, existing route/content files; wrote `work/active/2026-05-25-shopfloor-support-page.md` before editing.
- Result: ShopFloor placeholder copy replaced, `/support` page added, homepage/footer/project card now link to support/ShopFloor framing without putting a payment ask inside the app flow.
- File/path/link: `content/posts/shopfloor.md`, `src/routes/support/+page.svelte`, `src/routes/+page.svelte`, `src/lib/components/SiteFooter.svelte`, `src/lib/content/projects.js`.
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; local HTTP probes returned 200 for `/`, `/support`, and `/blog/shopfloor`; `/support` and `/blog/shopfloor` contained `ShopFloor is free to use because barriers to help are bugs`.
- Checked by: Egon

## 2026-05-25 — A11y blog post published in content

- Command/source: replaced placeholder `content/posts/a11y.md` with Nate's supplied `A11Y BLOG FINAL.md` copy, preserving the flat-file blog frontmatter shape.
- Result: `/blog/a11y` now renders “Accessibility as Community Service: Fixing the Digital Curb-Cuts of Akron.”
- File/path/link: `content/posts/a11y.md`.
- Verification: `npm run check` reported 0 errors / 0 warnings; `npm run build` completed successfully; local HTTP probe returned 200 for `/blog/a11y` and confirmed the rendered page contains `Accessibility as Community Service`, `At belt.works, we don’t do locked doors.`, and `Every morning at 4:00 AM`.
- Checked by: Egon
