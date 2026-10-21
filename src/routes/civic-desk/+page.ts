
export async function load({ url }) {
  const [{ default: cities }, { default: posts }] = await Promise.all([
    import('$lib/data/civic-cities.js'),
    import('$lib/data/civic-posts.js')
  ]);

  return { cities, posts, path: url.pathname, origin: url.origin };
}
