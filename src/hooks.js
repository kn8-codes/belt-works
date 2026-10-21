// Universal hooks (src/hooks.js) — the ONLY place `reroute` is read from
// (kit 2.57 get_hooks(): reroute comes from the compiled universal entry;
// exporting it from hooks.server.js is silently ignored — verified 2026-10-21).

const CIVICS_PREFIX = '/civic-desk';
// Paths that keep serving the shared main-site routes on the civics host
// (contact + machine files); everything else is rewritten under the prefix.
const CIVICS_PASSTHROUGH = ['/contact', '/robots.txt', '/sitemap.xml', '/llms.txt', '/security.txt', '/.well-known'];

/** @param {string} pathname */
function isCivicsAsset(pathname) {
  if (pathname.startsWith('/_app/') || pathname.startsWith('/fonts/')) return true;
  return /\.(?:svg|png|jpe?g|webp|ico|txt|xml|woff2?|ttf|map|json)$/i.test(pathname);
}

/** @type {import('@sveltejs/kit').Reroute} */
export function reroute({ url }) {
  if (url.hostname === 'ioc.belt.works') {
    if (url.pathname === '/') return '/ioc';
    if (url.pathname === '/method' || url.pathname.startsWith('/playbooks/')) {
      return `/ioc${url.pathname}`;
    }
    return;
  }

  // Towpath Civic subdomain face (Nate 2026-10-21: "This is supposed to live on
  // its own subdomain"): clean URLs map onto the /civic-desk routes, so
  // civics.belt.works/ serves the civic desk and the client-facing URL (and the
  // canonical/schema built from event.url) stays clean.
  if (url.hostname === 'civics.belt.works') {
    const { pathname } = url;
    if (
      CIVICS_PASSTHROUGH.some((p) => pathname === p || pathname.startsWith(`${p}/`)) ||
      isCivicsAsset(pathname) ||
      pathname.startsWith(CIVICS_PREFIX)
    ) {
      return;
    }
    return pathname === '/' ? CIVICS_PREFIX : CIVICS_PREFIX + pathname;
  }
}
