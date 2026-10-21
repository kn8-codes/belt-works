import { error } from '@sveltejs/kit';
import { page } from '$app/state';

export async function load({ params }) {
  const [{ default: cities }, { default: posts }] = await Promise.all([
    import('$lib/data/civic-cities.js'),
    import('$lib/data/civic-posts.js')
  ]);
  const city = cities.find((entry) => entry.id === params.city);
  if (!city) error(404, 'City not found');

  const cityPosts = posts.filter((post) => post.cityId === city.id);
  const cityPath = `${page.url.pathname}/`;

  return { city, posts: cityPosts, path: page.url.pathname, cityPath };
}
