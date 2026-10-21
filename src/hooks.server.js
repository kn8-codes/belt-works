import { error, redirect } from '@sveltejs/kit';

const IOC_HOST = 'ioc.belt.works';
const IOC_PAGES = new Set([
  '/',
  '/method',
  '/playbooks/impersonation/protect-your-money'
]);
const IOC_STATIC_FILES = new Set(['/favicon.svg', '/og.png', '/robots.txt']);

// Towpath Civic subdomain (civics.belt.works): the clean-URL -> /civic-desk route
// rewrite lives in hooks.universal.js (`reroute` is sourced ONLY from the universal
// hooks file — kit 2.57, verified 2026-10-21). This file keeps only the
// publication-only guard for the civics host, same contract as the IOC host.
const CIVICS_HOST = 'civics.belt.works';

/** @param {string} pathname */
function isIocStatic(pathname) {
  if (IOC_STATIC_FILES.has(pathname)) return true;
  if (pathname.startsWith('/_app/')) return /\.(?:css|js|json|map|svg|png|jpe?g|webp|woff2?|ttf)$/i.test(pathname);
  if (pathname.startsWith('/fonts/ibm-plex-mono/')) return /\.(?:ttf|txt)$/i.test(pathname);
  return false;
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const { hostname, pathname } = event.url;

  if (hostname === CIVICS_HOST) {
    // Publication-only host: never pass writes or API paths to shared handlers.
    if (!['GET', 'HEAD'].includes(event.request.method) || pathname.startsWith('/api/')) {
      error(404, 'Not found');
    }
    return resolve(event);
  }

  if (hostname !== IOC_HOST) return resolve(event);

  const isStatic = isIocStatic(pathname);
  const isPage = IOC_PAGES.has(pathname);

  // The IOC hostname is publication-only. Never pass writes or API paths to shared handlers.
  if (!['GET', 'HEAD'].includes(event.request.method) || pathname.startsWith('/api/')) {
    error(404, 'Not found');
  }

  if (!isPage && !isStatic) {
    redirect(307, '/');
  }

  return resolve(event);
}
