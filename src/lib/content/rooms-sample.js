// ROOMS sample data.
// Plain English version: this file is the public-safe sample state that feeds `/rooms`.
// The contract for each public room lives in `src/lib/types/rooms.js`.
// Keep this sanitized: no real hostnames, no private paths, no raw command output, no client data.

// Import only for editor/JSDoc awareness. It does not run in the browser.
/** @typedef {import('$lib/types/rooms.js').PublicRoom} PublicRoom */

// Small counters shown near the bottom of the ROOMS page.
export const fleetStats = [
  { label: 'rooms', value: '3' },
  { label: 'working', value: '2' },
  { label: 'queued tasks', value: '8' },
  { label: 'public mode', value: 'on' }
];

// Main room records.
// The first eight fields match the public ROOMS data contract.
// The remaining fields are display-only sample details for the current static UI.
/** @type {Array<PublicRoom & {
 *   asset: string,
 *   character: string,
 *   theme: string,
 *   queue: string[],
 *   recentArtifacts: string[],
 *   log: string[],
 *   commits: Array<{ hash: string, message: string }>
 * }>} */
export const roomNodes = [
  {
    id: 'm4',
    displayName: 'Coding Machine',
    status: 'idle',
    role: 'frontend worker',
    taskLabel: 'UI options and visual passes',
    progress: 0.38,
    queueLength: 3,
    lastSeenAt: '2026-05-01T08:20:00.000Z',
    asset: '/rooms/room-m4.svg',
    character: '/rooms/character-operator.svg',
    theme: 'M4 handles frontend passes, interface options, and visual checks.',
    queue: ['tighten visual layout', 'compare homepage options', 'prepare animation hooks'],
    recentArtifacts: ['options route', 'global styles'],
    log: ['heartbeat ping', 'status: ready', 'waiting for dispatch'],
    commits: [
      { hash: '4ddba77', message: 'redraft ROOMS layout options' },
      { hash: 'a8066db', message: 'port static demo into SvelteKit' },
      { hash: 'a4a4ecc', message: 'rebuild Belt.works front door' }
    ]
  },
  {
    id: 'm1',
    displayName: 'Workhorse',
    status: 'working',
    role: 'backend/data worker',
    taskLabel: 'Data shape, content inventory, service glue',
    progress: 0.64,
    queueLength: 3,
    lastSeenAt: '2026-05-01T08:24:00.000Z',
    asset: '/rooms/room-m1.svg',
    character: '/rooms/character-worker.svg',
    theme: 'M1 handles backend checks, data shape, and service wiring.',
    queue: ['normalize room state schema', 'map Towpath events', 'draft public feed rules'],
    recentArtifacts: ['public data spec', 'room sample data'],
    log: ['task assigned', 'processing sample state', 'public-safe fields only'],
    commits: [
      { hash: '4ddba77', message: 'redraft ROOMS layout options' },
      { hash: '8cbcc14', message: 'expand ROOMS cockpit proof' },
      { hash: 'a4a4ecc', message: 'rebuild Belt.works front door' }
    ]
  },
  {
    id: 'jeep',
    displayName: 'Cockpit',
    status: 'working',
    role: 'conductor',
    taskLabel: 'Coordination, review, commit, and deploy',
    progress: 0.82,
    queueLength: 2,
    lastSeenAt: '2026-05-01T08:28:00.000Z',
    asset: '/rooms/room-jeep.svg',
    character: '/rooms/character-driver.svg',
    theme: 'Jeep is the operator surface: dispatch, worklog, integration, final decisions.',
    queue: ['keep public surface tight', 'prepare production-safe state feed'],
    recentArtifacts: ['ROOMS route', 'room assets'],
    log: ['dev server ready', 'rooms checked', 'public state locked'],
    commits: [
      { hash: '8cbc7f3', message: 'comment ROOMS for maintainability' },
      { hash: 'c43e10b', message: 'combine ROOMS wall with drilldown' },
      { hash: '8cbcc14', message: 'expand ROOMS cockpit proof' }
    ]
  }
];

// Older supporting records from the first ROOMS pass.
// Not currently the main visual focus, but kept because it documents product areas we may bring back later.
export const rooms = [
  {
    name: 'Overview',
    slug: 'overview',
    status: 'live draft',
    purpose: 'Show the fleet as inhabited rooms instead of generic status cards.',
    visibleWork: ['room art', 'node status', 'task queue', 'drill-down panel'],
    nextMove: 'Wire state from Towpath once static shape holds.'
  },
  {
    name: 'Intake',
    slug: 'contact-intake',
    status: 'draft route',
    purpose: 'Turn a messy problem into a scoped build conversation.',
    visibleWork: ['problem intake', 'client-fit copy', 'plain contact path'],
    nextMove: 'Connect approved intake fields to storage and notification.'
  },
  {
    name: 'Proof Registry',
    slug: 'proof-registry',
    status: 'static proof',
    purpose: 'Show work as evidence instead of making claims.',
    visibleWork: ['Belt.works', 'ROOMS', 'Intake', 'Towpath'],
    nextMove: 'Add screenshots, decisions, and before/after notes.'
  },
  {
    name: 'Mesh Ops',
    slug: 'mesh-ops',
    status: 'private',
    purpose: 'Operate the worker fleet and keep the toolchain boring.',
    visibleWork: ['sanitized node labels only'],
    nextMove: 'Do not expose hostnames, keys, private logs, or raw command output.'
  }
];

export const roomEvents = [
  {
    time: 'overnight pass',
    room: 'Front Door',
    event: 'Default homepage rebuilt around the locked line.',
    publicSafe: true
  },
  {
    time: 'overnight pass',
    room: 'ROOMS Cockpit',
    event: 'Static public-safe mesh view created. Live feed comes later.',
    publicSafe: true
  },
  {
    time: 'current pass',
    room: 'ROOMS Cockpit',
    event: 'Uploaded static ROOMS demo mined for art direction, room assets, state model, and drill-down behavior.',
    publicSafe: true
  }
];

export const roomRules = [
  'Each agent gets its own room.',
  'Rooms are navigable: overview first, detail panel second.',
  'Use sanitized display names, not real hostnames.',
  'No secrets.',
  'No private chat logs.',
  'No client data.',
  'No sensitive local paths.',
  'No raw command output.',
  'Static proof first. Live feed later.'
];
