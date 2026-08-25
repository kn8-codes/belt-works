import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fixtureDiff } from '../../src/lib/content/course-evidence.js';

const repo = resolve(import.meta.dirname, '../..');
const pagePath = resolve(repo, 'src/routes/courses/claude-code-beyond-chat-window/+page.svelte');
const evidenceRoot = resolve(repo, 'static/course-evidence/claude-code-beyond-chat-window');

test('displayed unified diff exactly matches the published diff', () => {
  const published = readFileSync(resolve(evidenceRoot, 'FAQ.starter-to-completed.diff'), 'utf8');
  assert.equal(fixtureDiff, published);
});

test('all public evidence links resolve to included files', () => {
  const page = readFileSync(pagePath, 'utf8');
  const hrefs = [...page.matchAll(/href="(\/course-evidence\/claude-code-beyond-chat-window\/[^"]+)"/g)]
    .map((match) => match[1]);
  assert.equal(new Set(hrefs).size, 7);
  for (const href of hrefs) {
    assert.equal(existsSync(resolve(repo, 'static', href.slice(1))), true, href);
  }
});

test('public README documents only the included reproducible subset', () => {
  const readme = readFileSync(resolve(evidenceRoot, 'README.md'), 'utf8');
  assert.equal(readme.includes('scripts/reset.py'), false);
  assert.equal(readme.includes('scripts/apply_completed_example.py'), false);
  for (const relative of [
    'TASK_PACKET.md',
    'EVENT_NOTES.md',
    'fixtures/FAQ.starter.md',
    'fixtures/FAQ.completed.md',
    'FAQ.starter-to-completed.diff',
    'tests/check_faq.py'
  ]) {
    assert.equal(existsSync(resolve(evidenceRoot, relative)), true, relative);
    assert.equal(readme.includes(relative), true, relative);
  }
});

test('published starter fails and reviewed fixture passes the named check', () => {
  const starter = spawnSync('python3', ['tests/check_faq.py', '--file', 'fixtures/FAQ.starter.md'], {
    cwd: evidenceRoot,
    encoding: 'utf8'
  });
  const completed = spawnSync('python3', ['tests/check_faq.py', '--file', 'fixtures/FAQ.completed.md'], {
    cwd: evidenceRoot,
    encoding: 'utf8'
  });
  assert.equal(starter.status, 1);
  assert.match(starter.stdout, /CHECK FAIL/);
  assert.equal(completed.status, 0);
  assert.match(completed.stdout, /CHECK PASS/);
  assert.match(completed.stdout, /LIMIT:/);
});

test('sample and product-format status remain explicit', () => {
  const page = readFileSync(pagePath, 'utf8');
  assert.equal(page.includes('Representative sample'), false);
  assert.equal(page.includes('Sample in private production'), true);
  assert.equal(page.includes('self-paced'), true);
  assert.equal(page.includes('English master'), true);
  assert.equal(page.includes('recording not complete'), true);
});
