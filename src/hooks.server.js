import { error, redirect } from '@sveltejs/kit';

const IOC_HOST = 'ioc.belt.works';
const IOC_PAGES = new Set([
  '/',
  '/method',
  '/playbooks/impersonation/protect-your-money'
]);
const IOC_STATIC_FILES = new Set(['/favicon.svg', '/og.png', '/robots.txt']);

/** @param {string} pathname */
function isIocStatic(pathname) {
  if (IOC_STATIC_FILES.has(pathname)) return true;
  if (pathname.startsWith('/_app/')) return /\.(?:css|js|json|map|svg|png|jpe?g|webp|woff2?|ttf)$/i.test(pathname);
  if (pathname.startsWith('/fonts/ibm-plex-mono/')) return /\.(?:ttf|txt)$/i.test(pathname);
  return false;
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.url.hostname !== IOC_HOST) return resolve(event);

  const { pathname } = event.url;
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
