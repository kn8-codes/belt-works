import { getPosts } from '$lib/content/blog.js';

const SITE = 'https://www.belt.works';

const coreRoutes = [
  '/',
  '/about',
  '/services',
  '/admin-workflow-audit',
  '/method',
  '/work',
  '/blog',
  '/ask',
  '/contact',
  '/donate',
  '/privacy'
];

/** @param {string} value */
function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

/** @param {{ loc: string, lastmod?: string }} entry */
function renderUrl(entry) {
  const lastmod = /^\d{4}-\d{2}-\d{2}$/.test(entry.lastmod ?? '')
    ? `\n    <lastmod>${entry.lastmod}</lastmod>`
    : '';

  return `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>${lastmod}\n  </url>`;
}

export function GET() {
  const entries = [
    ...coreRoutes.map((route) => ({ loc: `${SITE}${route}` })),
    ...getPosts().map((post) => ({
      loc: `${SITE}/blog/${encodeURIComponent(post.slug)}`,
      lastmod: post.date
    }))
  ];

  const uniqueEntries = [...new Map(entries.map((entry) => [entry.loc, entry])).values()].sort(
    (a, b) => a.loc.localeCompare(b.loc)
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueEntries
    .map(renderUrl)
    .join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600'
    }
  });
}
