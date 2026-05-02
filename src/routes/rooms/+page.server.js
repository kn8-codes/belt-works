// +page.server.js — ROOMS live data fetcher
// Plain English version: on every page load, this runs server-side to collect
// real node state from M1, M4, and Jeep via SSH/local OpenClaw status.
// Results are cached for 2 minutes so we don't hammer SSH.
// If a node is unreachable, we fall back to static sample data for that node only.

import { roomNodes as sampleNodes } from '$lib/content/rooms-sample.js';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Cache config
const CACHE_DIR = join(process.cwd(), '.cache');
const CACHE_FILE = join(CACHE_DIR, 'rooms-live.json');
const CACHE_TTL_MS = 2 * 60 * 1000; // 2 minutes

// SSH hosts from towpath dispatch config
const NODES = {
  m4: { host: 'kn8@kn8-m4', label: 'M4 Air', role: 'frontend worker', asset: '/rooms/room-m4.svg', character: '/rooms/character-operator.svg' },
  m1: { host: 'kn8@kn8-mbp', label: 'M1 Pro', role: 'backend/data worker', asset: '/rooms/room-m1.svg', character: '/rooms/character-worker.svg' },
  jeep: { host: null, label: 'Jeep', role: 'conductor', asset: '/rooms/room-jeep.svg', character: '/rooms/character-driver.svg' }
};

function ensureCacheDir() {
  if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
}

function readCache() {
  if (!existsSync(CACHE_FILE)) return null;
  try {
    const raw = readFileSync(CACHE_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts < CACHE_TTL_MS) return parsed.data;
  } catch { /* ignore corrupt cache */ }
  return null;
}

function writeCache(data) {
  ensureCacheDir();
  writeFileSync(CACHE_FILE, JSON.stringify({ ts: Date.now(), data }), 'utf-8');
}

function sshStatus(nodeKey) {
  const node = NODES[nodeKey];
  if (!node) return null;

  const cmd = node.host
    ? `ssh -o BatchMode=yes -o ConnectTimeout=8 ${node.host} "openclaw status --json 2>/dev/null"`
    : `openclaw status --json 2>/dev/null`;

  try {
    const stdout = execSync(cmd, { encoding: 'utf-8', timeout: 15000 });
    const parsed = JSON.parse(stdout);

    // Extract public-safe fields
    const tasks = parsed.tasks || {};
    const byStatus = tasks.byStatus || {};
    const active = tasks.active || 0;
    const queued = byStatus.queued || 0;
    const failures = tasks.failures || 0;

    // Determine status bucket
    let status = 'idle';
    if (failures > 0) status = 'blocked';
    else if (active > 0 || queued > 0) status = 'working';

    // Get version
    const version = parsed.runtimeVersion || 'unknown';

    // Get recent session info if available
    const sessions = parsed.sessions || {};
    const recent = (sessions.recent || [])[0];
    const sessionKey = recent?.key || '';
    const lastSeenAt = recent?.updatedAt
      ? new Date(recent.updatedAt).toISOString()
      : new Date().toISOString();

    // Derive a task label from session key or default
    let taskLabel = 'waiting for dispatch';
    if (sessionKey.includes('towpath') || sessionKey.includes('dispatch')) {
      taskLabel = 'processing towpath dispatch';
    } else if (sessionKey.includes('telegram')) {
      taskLabel = 'handling telegram messages';
    } else if (active > 0) {
      taskLabel = `${active} active task${active > 1 ? 's' : ''}`;
    } else if (queued > 0) {
      taskLabel = `${queued} item${queued > 1 ? 's' : ''} queued`;
    }

    // Fake progress: working nodes show 0.6, idle 0.1
    const progress = status === 'working' ? 0.6 : 0.1;

    return {
      id: nodeKey,
      displayName: node.label,
      status,
      role: node.role,
      taskLabel,
      progress,
      queueLength: queued,
      lastSeenAt,
      version,
      asset: node.asset,
      character: node.character,
      theme: `${node.label} runs OpenClaw ${version}. ${node.role}.`,
      queue: queued > 0 ? [`${queued} queued task${queued > 1 ? 's' : ''}`] : ['no queued tasks'],
      recentArtifacts: [`OpenClaw ${version}`],
      log: [`version ${version}`, `status: ${status}`, `tasks: ${active} active, ${queued} queued`],
      commits: [{ hash: version.replace(/\./g, ''), message: `OpenClaw ${version}` }]
    };
  } catch (err) {
    console.error(`[rooms] ${nodeKey} status fetch failed:`, err.message);
    return null;
  }
}

export function load() {
  // Try cache first
  const cached = readCache();
  if (cached) {
    console.log('[rooms] serving cached live data');
    return { nodes: cached };
  }

  // Fetch fresh data from all nodes
  const live = {};
  for (const key of Object.keys(NODES)) {
    live[key] = sshStatus(key);
  }

  // Merge with sample data: use live if available, else fallback
  const merged = sampleNodes.map(sample => {
    const fresh = live[sample.id];
    if (fresh) return fresh;
    // Mark fallback as stale
    return { ...sample, status: 'idle', taskLabel: 'node unreachable', queueLength: 0 };
  });

  writeCache(merged);
  console.log('[rooms] fresh data fetched and cached');

  return { nodes: merged };
}
