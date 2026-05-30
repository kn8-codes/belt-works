# A11y Audit Tests Context

Updated: 2026-05-27
Owner: Egon / Nate
Project: belt.works / ShopFloor public lane

## Why this exists

The public A11y post says belt.works will run automated accessibility audits for Akron community-resource sites and use the results to remove barriers. That claim needs a small, repeatable test harness before it becomes another noble sentence laminated over a pothole.

This context doc defines the first Minimum Workable Pass: prove that the belt.works site itself can be audited locally, with machine-readable output and a short human summary. After that works, expand the same harness to external Akron resource URLs.

## Current repo facts

- Repo: `/Users/kn8/projects/belt-works`
- Stack: SvelteKit / Svelte 5 / Vite
- Current package scripts: `dev`, `build`, `preview`, `check`, `check:watch`, `lint`
- Existing public A11y copy: `content/posts/a11y.md`
- Existing generated routes of interest:
  - `/`
  - `/support`
  - `/blog/a11y`
  - `/blog/shopfloor`
  - `/rooms`
  - `/contact`
- No current Playwright, axe, pa11y, Lighthouse, or browser-test dependency is present in `package.json`.

## MWP definition

MWP means the smallest test lane that creates useful evidence:

1. Start the local SvelteKit preview server from a production build.
2. Audit a fixed list of local routes.
3. Fail on serious accessibility regressions.
4. Save raw JSON reports under an ignored artifacts directory.
5. Print a short terminal summary suitable for `docs/EVIDENCE.md`.

Do not start by building a dashboard. Dashboards are where accountability goes to wear a tie and die.

## First route set

Local routes for the first pass:

- `/`
- `/blog/a11y`
- `/blog/shopfloor`
- `/support`
- `/contact`
- `/rooms`

Rationale: homepage, A11y claim page, ShopFloor claim page, support/sustainability page, contact/intake page, and public operator-room proof surface.

## Recommended implementation shape

Preferred first implementation:

- Add Playwright for deterministic local browser control.
- Add `@axe-core/playwright` for automated WCAG-style checks.
- Create `tests/a11y/a11y.spec.ts` or equivalent.
- Add package script: `test:a11y`.
- Store generated reports under `artifacts/a11y/` and git-ignore that directory.

Alternative if Playwright install is too heavy today:

- Use `pa11y-ci` against `npm run preview`.
- Add `pa11yci` config with fixed route list.
- Still store reports under `artifacts/a11y/`.

## Test boundaries

The automated check should catch:

- Missing document titles / landmarks when detectable.
- Missing alt text.
- Invalid ARIA.
- Form label failures.
- Contrast failures detectable by axe.
- Keyboard blockers if a later Playwright flow is added.

The automated check will not fully prove:

- Screen-reader quality.
- Copy clarity.
- Cognitive accessibility.
- Real mobile ergonomics.
- Whether outreach to nonprofits is respectful.

Those require human review. Software remains stubbornly bad at being human. A scandal.

## Evidence standard

A completed A11y audit test pass must record:

- Command run.
- Route set audited.
- Tool used and version where practical.
- Result summary: pass/fail, violation counts.
- Artifact path for raw reports.
- Checked by and date.

Use `docs/EVIDENCE.md` for receipts.

## Open decisions for Nate

- Should the first automated lane audit only belt.works, or include one external Akron site as a non-blocking smoke target?
- Should failures block deploy immediately, or start as warning-only until the route set stabilizes?
- Should reports be kept locally only, or published later as public accountability artifacts?
