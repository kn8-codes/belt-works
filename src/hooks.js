/** @type {import('@sveltejs/kit').Reroute} */
export function reroute({ url }) {
  if (url.hostname !== 'ioc.belt.works') return;

  if (url.pathname === '/') return '/ioc';
  if (url.pathname === '/method' || url.pathname.startsWith('/playbooks/')) {
    return `/ioc${url.pathname}`;
  }
}
