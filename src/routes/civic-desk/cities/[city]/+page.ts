import { error } from '@sveltejs/kit';

export async function load({ url, params }) {
  const [{ default: cities }, { default: posts }] = await Promise.all([
    import('$lib/data/civic-cities.js'),
    import('$lib/data/civic-posts.js')
  ]);
  const city = cities.find((entry) => entry.id === params.city);
  if (!city) error(404, 'City not found');

  const cityPosts = posts.filter((post) => post.cityId === city.id);
  const cityPath = `${url.origin}${url.pathname}/`;

  return { city, posts: cityPosts, path: url.pathname, cityPath };
}
