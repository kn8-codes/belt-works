export const roomNodes = [
  {
    name: 'Jeep',
    role: 'conductor',
    status: 'online',
    tone: 'live',
    lastSeen: 'live session',
    task: 'Belt.works rebuild, worklog, dispatch',
    event: 'Site rebuild committed. ROOMS static proof layer is being expanded.'
  },
  {
    name: 'M4',
    role: 'frontend worker',
    status: 'ready',
    tone: 'warn',
    lastSeen: 'earlier session',
    task: 'UI options and visual passes',
    event: 'Available for focused interface work when dispatched.'
  },
  {
    name: 'M1',
    role: 'backend/data worker',
    status: 'ready',
    tone: 'warn',
    lastSeen: 'earlier session',
    task: 'Data shape, content inventory, service glue',
    event: 'Available for structured data and integration work when dispatched.'
  }
];

export const rooms = [
  {
    name: 'Front Door',
    slug: 'front-door',
    status: 'live draft',
    purpose: 'Explain what Belt.works is before the visitor gets bored.',
    visibleWork: ['Homepage', 'work registry', 'method', 'service routes'],
    nextMove: 'Pick the strongest homepage option and cut the rest.'
  },
  {
    name: 'FOUNDRY Intake',
    slug: 'foundry-intake',
    status: 'draft route',
    purpose: 'Turn a messy problem into a scoped build conversation.',
    visibleWork: ['problem intake', 'client-fit copy', 'Mike-facing path'],
    nextMove: 'Wire storage and notification after copy direction is approved.'
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
    name: 'ROOMS Cockpit',
    slug: 'rooms-cockpit',
    status: 'being dropped in',
    purpose: 'Public-safe view of the agent mesh and what each room is for.',
    visibleWork: ['node cards', 'room cards', 'event ledger', 'public rules'],
    nextMove: 'Replace sample records with sanitized live feed once the shape holds.'
  },
  {
    name: 'Data Yard',
    slug: 'data-yard',
    status: 'placeholder',
    purpose: 'Expose useful public datasets and collection methods.',
    visibleWork: ['data.belt.works route', 'ROOMS sample data'],
    nextMove: 'Choose first public dataset worth maintaining.'
  },
  {
    name: 'Intel Desk',
    slug: 'intel-desk',
    status: 'placeholder',
    purpose: 'Turn research into short useful briefings.',
    visibleWork: ['intel.belt.works route', 'research route'],
    nextMove: 'Define one briefing format and publish the first ugly example.'
  },
  {
    name: 'IOC Bench',
    slug: 'ioc-bench',
    status: 'placeholder',
    purpose: 'Track indicators, signatures, and field notes without theatrics.',
    visibleWork: ['ioc.belt.works route'],
    nextMove: 'Keep it empty until there is public-safe material.'
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
    room: 'Proof Registry',
    event: 'Work and service routes added so the site has a skeleton, not just a hero.',
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
    event: 'Rooms expanded from node cards into a decision surface for the whole lab.',
    publicSafe: true
  }
];

export const roomRules = [
  'No secrets.',
  'No private chat logs.',
  'No client data.',
  'No sensitive local paths.',
  'No raw command output.',
  'Status labels over theater.',
  'Static proof first. Live feed later.'
];
