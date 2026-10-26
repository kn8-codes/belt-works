import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
  const { default: meetings } = await import('$lib/data/civic-meetings.js');
  const meeting = meetings.find((item) => item.slug === params.slug);
  if (!meeting) {
    throw error(404, 'Meeting record not found');
  }
  return { meeting, path: url.pathname, origin: url.origin };
}
