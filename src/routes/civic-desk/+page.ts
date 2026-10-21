import { page } from '$app/state';

export async function load() {
  const [{ default: cities }, { default: posts }] = await Promise.all([
    import('$lib/data/civic-cities.js'),
    import('$lib/data/civic-posts.js')
  ]);

  return { cities, posts, path: page.url.pathname };
}
