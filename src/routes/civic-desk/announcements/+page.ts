
export async function load({ url }) {
  const { default: posts } = await import('$lib/data/civic-posts.js');
  return { posts, path: url.pathname, origin: url.origin };
}
