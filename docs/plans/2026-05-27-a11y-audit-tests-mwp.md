# A11y Audit Tests MWP Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task if this becomes code work.

**Goal:** Add a minimum automated accessibility audit lane for the belt.works public site.

**Architecture:** Build and preview the SvelteKit site locally, then run a browser-based accessibility audit against a fixed route list. Keep raw output as local artifacts and summarize results in project evidence.

**Tech Stack:** SvelteKit, Vite preview server, Playwright, `@axe-core/playwright`, npm scripts.

---

## Non-goals

- No production deployment.
- No DNS changes.
- No public report publishing.
- No external-site crawling in the first blocking pass.
- No dashboard until raw receipts exist.

## Route set

First pass local routes:

- `/`
- `/blog/a11y`
- `/blog/shopfloor`
- `/support`
- `/contact`
- `/rooms`

## Task 1: Add A11y test dependencies

**Objective:** Install only the browser/audit dependencies needed for the first lane.

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json` if npm writes it

**Step 1: Install dev dependencies**

Run:

```bash
npm install -D @playwright/test @axe-core/playwright
```

**Step 2: Install Playwright browser**

Run:

```bash
npx playwright install chromium
```

**Step 3: Verify package scripts still parse**

Run:

```bash
npm run check
```

Expected: existing SvelteKit checks pass, or pre-existing failures are documented before continuing.

## Task 2: Create the route manifest

**Objective:** Keep the audited URL list in one obvious file.

**Files:**
- Create: `tests/a11y/routes.ts`

**Code:**

```ts
export const a11yRoutes = [
  { path: '/', name: 'home' },
  { path: '/blog/a11y', name: 'a11y-post' },
  { path: '/blog/shopfloor', name: 'shopfloor-post' },
  { path: '/support', name: 'support' },
  { path: '/contact', name: 'contact' },
  { path: '/rooms', name: 'rooms' }
] as const;
```

**Verification:**

Run:

```bash
npm run check
```

Expected: TypeScript/Svelte check still passes.

## Task 3: Add the axe audit spec

**Objective:** Audit every route and fail on WCAG-impacting axe violations.

**Files:**
- Create: `tests/a11y/a11y.spec.ts`

**Code:**

```ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { a11yRoutes } from './routes';

const reportDir = 'artifacts/a11y';

test.describe('belt.works accessibility audit', () => {
  for (const route of a11yRoutes) {
    test(`${route.name} has no serious automated accessibility violations`, async ({ page }) => {
      await page.goto(route.path);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      await mkdir(reportDir, { recursive: true });
      await writeFile(
        `${reportDir}/${route.name}.json`,
        JSON.stringify(results, null, 2)
      );

      const blockingViolations = results.violations.filter((violation) =>
        ['serious', 'critical'].includes(violation.impact ?? '')
      );

      expect(blockingViolations).toEqual([]);
    });
  }
});
```

**Verification:**

Run after preview wiring exists:

```bash
npm run test:a11y
```

Expected: reports are created under `artifacts/a11y/`; test fails only for serious/critical violations.

## Task 4: Add Playwright config and npm script

**Objective:** Let one command build, preview, audit, and stop cleanly.

**Files:**
- Create: `playwright.config.ts`
- Modify: `package.json`

**Config:**

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/a11y',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: false,
    timeout: 120_000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
```

**Script:**

Add to `package.json` scripts:

```json
"test:a11y": "playwright test"
```

**Verification:**

Run:

```bash
npm run test:a11y
```

Expected: the site builds, preview starts, routes are audited, and Playwright exits with pass/fail.

## Task 5: Ignore generated artifacts

**Objective:** Keep large/generated reports out of git while preserving the directory contract.

**Files:**
- Modify: `.gitignore`
- Create: `artifacts/.gitkeep` if the artifacts root should be visible

**Suggested ignore:**

```gitignore
artifacts/a11y/*.json
playwright-report/
test-results/
```

**Verification:**

Run:

```bash
git status --short
```

Expected: generated JSON reports are ignored; source/config files remain visible.

## Task 6: Record evidence and update state

**Objective:** Leave a receipt for future agents and tired humans.

**Files:**
- Modify: `docs/EVIDENCE.md`
- Modify: `STATE.md`
- Move task card from `work/active/` to `work/done/` if fully implemented

**Evidence entry should include:**

- Command: `npm run test:a11y`
- Result: pass/fail and violation count
- Route set audited
- Artifact path: `artifacts/a11y/*.json`
- Checked by/date

## Open decisions before implementation

- Should serious/critical violations block immediately, or should the first run collect baseline only?
- Should moderate violations fail later after the baseline is clean?
- Should external Akron resource URLs be a separate non-blocking suite from day one?
