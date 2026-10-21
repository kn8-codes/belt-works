import { page } from '$app/state';
import Share from '$lib/components/Share.svelte';

export async function load() {
  const { default: posts } = await import('$lib/data/civic-posts.js');
  return { posts, path: page.url.pathname };
}
