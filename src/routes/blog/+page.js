import { getPosts } from '$lib/content/blog.js';

export function load() {
  return {
    posts: getPosts()
  };
}
