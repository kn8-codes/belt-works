
export async function load({ url }) {
  const { default: cities } = await import('$lib/data/civic-cities.js');
  const { default: posts } = await import('$lib/data/civic-posts.js');
  const grouped = Object.fromEntries(
    cities.map((city) => [city.id, posts.filter((post) => post.cityId === city.id)])
  );
  return { cities, grouped, path: url.pathname, origin: url.origin };
}
