export const fleetStats = [
  { label: 'rooms', value: '3' },
  { label: 'live nodes', value: '1' },
  { label: 'queued tasks', value: '8' },
  { label: 'public mode', value: 'on' }
];

export const roomNodes = [
  {
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
    log: ['heartbeat ping', 'status: ready', 'waiting for dispatch']
  },
  {
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
    log: ['task assigned', 'processing sample state', 'public-safe fields only']
  },
  {
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
    log: ['dev server ready', 'rooms uploaded', 'porting static demo']
  }
];

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
