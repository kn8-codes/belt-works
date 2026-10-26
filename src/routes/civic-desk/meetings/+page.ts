export async function load({ url }) {
  const { default: meetings } = await import('$lib/data/civic-meetings.js');
  return { meetings, path: url.pathname, origin: url.origin };
}
