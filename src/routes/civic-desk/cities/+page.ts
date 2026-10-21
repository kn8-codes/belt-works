import { page } from '$app/state';

export async function load() {
  const { default: cities } = await import('$lib/data/civic-cities.js');
  const { default: posts } = await import('$lib/data/civic-posts.js');
  const grouped = Object.fromEntries(
    cities.map((city) => [city.id, posts.filter((post) => post.cityId === city.id)])
  );
  return { cities, grouped, path: page.url.pathname };
}
