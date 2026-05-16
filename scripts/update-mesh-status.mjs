#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const USER = process.env.GITHUB_USER || 'kn8-codes';
const WINDOW_HOURS = Number(process.env.MESH_STATUS_WINDOW_HOURS || 6);
const TARGET_PRS_PER_WINDOW = Number(process.env.MESH_STATUS_TARGET_PRS || 1);
const OUTFILE = process.env.MESH_STATUS_OUTFILE || 'src/lib/content/mesh-status.json';
const EVENTS_URL = `https://api.github.com/users/${USER}/events/public?per_page=100`;

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'belt-works-mesh-status'
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

function cleanMessage(message = '') {
  return message.replace(/\s+/g, ' ').trim().slice(0, 160);
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function fetchJson(url) {
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function buildSnapshot(events) {
  const generatedAt = new Date();
  const windowStart = new Date(generatedAt.getTime() - WINDOW_HOURS * 60 * 60 * 1000);

  const pushEvents = events.filter((event) => event.type === 'PushEvent');
  const pullRequestEvents = events.filter((event) => event.type === 'PullRequestEvent');

  const recentCommits = uniqueBy(
    pushEvents.flatMap((event) => {
      const repo = event.repo?.name ?? 'unknown/repo';
      const branch = (event.payload?.ref ?? '').replace('refs/heads/', '') || 'unknown';
      const createdAt = event.created_at;

      return (event.payload?.commits ?? []).map((commit) => ({
        repo,
        branch,
        sha: commit.sha?.slice(0, 7) ?? 'unknown',
        message: cleanMessage(commit.message),
        url: `https://github.com/${repo}/commit/${commit.sha}`,
        createdAt
      }));
    }),
    (commit) => `${commit.repo}:${commit.sha}`
  ).slice(0, 12);

  const recentPullRequests = uniqueBy(
    pullRequestEvents
      .filter((event) => ['opened', 'reopened', 'synchronize', 'closed'].includes(event.payload?.action))
      .map((event) => {
        const pr = event.payload.pull_request;
        return {
          repo: event.repo?.name ?? 'unknown/repo',
          number: pr?.number ?? event.payload?.number,
          title: pr?.title ?? `PR #${pr?.number ?? event.payload?.number ?? 'unknown'}`,
          state: pr?.merged ? 'merged' : pr?.state ?? event.payload.action,
          action: event.payload.action,
          url: pr?.html_url ?? `https://github.com/${event.repo?.name}/pull/${pr?.number ?? event.payload?.number}`,
          createdAt: event.created_at
        };
      }),
    (pr) => `${pr.repo}:${pr.number}:${pr.action}:${pr.createdAt}`
  ).slice(0, 8);

  const commitsLastWindow = recentCommits.filter((commit) => new Date(commit.createdAt) >= windowStart).length;
  const prsLastWindow = recentPullRequests.filter((pr) => new Date(pr.createdAt) >= windowStart).length;

  return {
    generatedAt: generatedAt.toISOString(),
    source: `GitHub public events for ${USER}`,
    polling: {
      cadenceHours: 6,
      windowHours: WINDOW_HOURS,
      targetPrsPerWindow: TARGET_PRS_PER_WINDOW
    },
    health: {
      commitsLastWindow,
      prsLastWindow,
      prTargetMet: prsLastWindow >= TARGET_PRS_PER_WINDOW,
      label: prsLastWindow >= TARGET_PRS_PER_WINDOW ? 'target met' : 'needs PR motion'
    },
    recentCommits,
    recentPullRequests
  };
}

const events = await fetchJson(EVENTS_URL);
const snapshot = buildSnapshot(events);
const outputPath = path.resolve(process.cwd(), OUTFILE);

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`);

console.log(`Wrote ${OUTFILE}`);
console.log(`Commits in window: ${snapshot.health.commitsLastWindow}`);
console.log(`PRs in window: ${snapshot.health.prsLastWindow}/${snapshot.polling.targetPrsPerWindow}`);
