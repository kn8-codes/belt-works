export const projects = [
  {
    slug: 'belt-works',
    name: 'belt.works',
    type: 'proof',
    status: 'active rebuild',
    summary: 'The public face of the lab. Research, proof, services, and intake all point through here.',
    href: '/',
    github: 'https://github.com/kn8-codes/belt-works',
    notes: 'Current priority. Voice is locked. Structure is being rebuilt.'
  },
  {
    slug: 'foundry',
    name: 'FOUNDRY',
    type: 'money',
    status: 'intake path',
    summary: 'A way to turn messy client context into a brief, scope, tickets, and software that can ship.',
    href: '/foundry/intake',
    notes: 'Closest to revenue. Keep it plain and scoped.'
  },
  {
    slug: 'rooms',
    name: 'ROOMS',
    type: 'proof',
    status: 'mock data',
    summary: 'A public, sanitized cockpit for the agent mesh. Status first. Control later.',
    href: '/rooms',
    notes: 'Good proof because it makes the work visible.'
  },
  {
    slug: 'towpath',
    name: 'Towpath',
    type: 'infrastructure',
    status: 'working predecessor',
    summary: 'Dispatch, ledger, and handoff layer for work across Jeep, M1, and M4.',
    notes: 'Not the product by itself. It matters when it ships visible work.'
  },
  {
    slug: 'boommates',
    name: 'BoomMates',
    type: 'civic software',
    status: 'backburner',
    statusTone: 'warn',
    summary: 'Housing and civic coordination idea tied to Akron work. Worthy, but scope can eat the shop.',
    notes: 'Bring back when there is a narrow first use case.'
  },
  {
    slug: 'shopfloor',
    name: 'ShopFloor',
    type: 'tooling',
    status: 'needs audit',
    statusTone: 'warn',
    summary: 'Inventory and operations tooling from earlier work. Could become proof after cleanup.',
    notes: 'Do not promise it publicly until reviewed.'
  },
  {
    slug: 'hosp-or-not',
    name: 'hosp-or-not',
    type: 'proof artifact',
    status: 'keep small',
    summary: 'Small shipped proof. Useful as evidence if it stays honest and bounded.',
    notes: 'Do not turn it into an empire.'
  },
  {
    slug: 'obdsidian',
    name: 'OBDsidian',
    type: 'proof artifact',
    status: 'parked',
    statusTone: 'warn',
    summary: 'Jeep telemetry and notes concept. Good texture. Not current money.',
    notes: 'Reference only when it helps explain the lab.'
  },
  {
    slug: 'greymarket',
    name: 'GREYMARKET',
    type: 'cash experiment',
    status: 'backburner',
    statusTone: 'warn',
    summary: 'Arbitrage and resale tooling. Comes back only if it makes cash or evidence fast.',
    notes: 'No romance. If it pays, it lives.'
  }
];

export const featuredProjects = projects.filter((project) => ['belt-works', 'foundry', 'rooms', 'towpath'].includes(project.slug));
