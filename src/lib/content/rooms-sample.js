// ROOMS sample data.
// Plain English version: this file is the fake/live-ish data that feeds the `/rooms` page.
// If Nate wants to change what a room says, start here before touching the Svelte page.
// Later, Towpath/Supabase can replace this file with real data. Until then, this keeps the UI easy to reason about.

// Small counters shown near the bottom of the ROOMS page.
// `label` is the caption. `value` is the number/text shown above it.
export const fleetStats = [
  { label: 'rooms', value: '3' },
  { label: 'live nodes', value: '1' },
  { label: 'queued tasks', value: '8' },
  { label: 'public mode', value: 'on' }
];

// Main room records.
// Each object below becomes one visible room card on `/rooms`.
// The `id` value is the safe internal handle used when someone clicks a card.
// The `asset` SVG is the large room picture.
// The `character` SVG is the smaller person/avatar in the drill-down panel.
export const roomNodes = [
  {
    // M4 is the frontend/design worker.
    id: 'm4',
    name: 'M4',
    machine: 'kn8-m4',
    room: 'M4',
    role: 'frontend worker',
    status: 'idle',
    tone: 'warn',
    asset: '/rooms/room-m4.svg',
    character: '/rooms/character-operator.svg',
    theme: 'M4 is the frontend/UI worker. Screens, options, interface passes.',
    task: 'UI options and visual passes',
    progress: 38,
    queue: ['tighten visual layout', 'compare homepage options', 'prepare animation hooks'],
    recentFiles: ['src/routes/options/+page.svelte', 'src/app.css'],
    log: ['heartbeat ping', 'status: ready', 'waiting for dispatch'],
    commits: [
      { hash: '4ddba77', message: 'redraft ROOMS layout options' },
      { hash: 'a8066db', message: 'port static demo into SvelteKit' },
      { hash: 'a4a4ecc', message: 'rebuild Belt.works front door' }
    ]
  },
  {
    // M1 is the backend/data worker.
    id: 'm1',
    name: 'M1',
    machine: 'kn8-mbp',
    room: 'M1',
    role: 'backend/data worker',
    status: 'working',
    tone: 'live',
    asset: '/rooms/room-m1.svg',
    character: '/rooms/character-worker.svg',
    theme: 'M1 is the backend/data worker. Shape data, inspect content, wire services.',
    task: 'Data shape, content inventory, service glue',
    progress: 64,
    queue: ['normalize room state schema', 'map Towpath events', 'draft public feed rules'],
    recentFiles: ['docs/rooms-public-data-spec.md', 'src/lib/content/rooms-sample.js'],
    log: ['task assigned', 'processing sample state', 'public-safe fields only'],
    commits: [
      { hash: '4ddba77', message: 'redraft ROOMS layout options' },
      { hash: '8cbcc14', message: 'expand ROOMS cockpit proof' },
      { hash: 'a4a4ecc', message: 'rebuild Belt.works front door' }
    ]
  },
  {
    // Jeep is the conductor/operator node.
    id: 'jeep',
    name: 'Jeep',
    machine: 'kn8-jeep',
    room: 'Jeep',
    role: 'conductor',
    status: 'active',
    tone: 'live',
    asset: '/rooms/room-jeep.svg',
    character: '/rooms/character-driver.svg',
    theme: 'Jeep is the conductor. Dispatch, worklog, integration, final decisions.',
    task: 'Belt.works rebuild, worklog, dispatch',
    progress: 82,
    queue: ['drop ROOMS into SvelteKit', 'commit demo port', 'keep report current'],
    recentFiles: ['src/routes/rooms/+page.svelte', 'static/rooms/room-jeep.svg'],
    log: ['dev server ready', 'rooms uploaded', 'porting static demo'],
    commits: [
      { hash: '4ddba77', message: 'redraft ROOMS layout options' },
      { hash: 'a8066db', message: 'port ROOMS demo into SvelteKit' },
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
    name: 'FOUNDRY Intake',
    slug: 'foundry-intake',
    status: 'draft route',
    purpose: 'Turn a messy problem into a scoped build conversation.',
    visibleWork: ['problem intake', 'client-fit copy', 'Mike-facing path'],
    nextMove: 'Connect approved intake fields to storage and notification.'
  },
  {
    name: 'Proof Registry',
    slug: 'proof-registry',
    status: 'static proof',
    purpose: 'Show work as evidence instead of making claims.',
    visibleWork: ['Belt.works', 'ROOMS', 'FOUNDRY', 'Towpath'],
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

// Event ledger copy from an earlier layout.
// It is not front-and-center now because Nate wanted the rooms to be the point.
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
  },
  {
    time: 'current pass',
    room: 'ROOMS Cockpit',
    event: 'React/static HTML shape ported into SvelteKit route using local SVG assets.',
    publicSafe: true
  }
];

// Public-safety rules.
// These matter when ROOMS gets real queue/log data. Do not expose secrets or private operational details.
export const roomRules = [
  'Each agent gets its own room.',
  'Rooms are navigable: overview first, detail panel second.',
  'Keep operator labels visible: m4, m1, jeep.',
  'No secrets.',
  'No private chat logs.',
  'No client data.',
  'No sensitive local paths.',
  'No raw command output.',
  'Static proof first. Live feed later.'
];
