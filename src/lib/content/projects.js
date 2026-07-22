export const projects = [
  {
    slug: 'belt-works',
    name: 'belt.works',
    type: 'practical software shop',
    status: 'active',
    summary: 'The public front door for small working systems: practical services, honest proof, and a clear way to bring a problem.',
    href: '/',
    actionLabel: 'view site',
    github: 'https://github.com/kn8-codes/belt-works',
    notes: 'The shop should make the work easier to understand and easier to start.'
  },
  {
    slug: 'shopfloor',
    name: 'ShopFloor',
    type: 'public-interest work',
    status: 'private alpha build',
    statusTone: 'warn',
    summary: 'Akron-first local repair and mutual-aid infrastructure built around trust instead of extraction.',
    href: '/blog/shopfloor',
    actionLabel: 'read the project',
    notes: 'Community members are not leads, inventory, or gig workers. Public release remains closed.'
  },
  {
    slug: 'towpath',
    name: 'Towpath',
    type: 'infrastructure',
    status: 'working predecessor',
    summary: 'Dispatch, ledger, and handoff infrastructure for work that needs to move between machines without losing the thread.',
    notes: 'Useful because it makes follow-through more reliable, not because infrastructure is a product by itself.'
  },
  {
    slug: 'hosp-or-not',
    name: 'hosp-or-not',
    type: 'shipped proof',
    status: 'shipped',
    summary: 'A small, bounded proof that useful software does not need to become an empire to count.',
    notes: 'Keep it honest, keep it useful.'
  },
  {
    slug: 'rooms',
    name: 'ROOMS',
    type: 'reference demo',
    status: 'historical / reference',
    statusTone: 'warn',
    summary: 'A sanitized operator-cockpit reference for making system status visible without leaking private work.',
    href: '/rooms',
    actionLabel: 'view reference',
    notes: 'Useful context, not the public definition of the shop.'
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

export const featuredProjects = projects.filter((project) =>
  ['belt-works', 'shopfloor', 'towpath', 'hosp-or-not'].includes(project.slug)
);
