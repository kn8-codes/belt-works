import { redirect } from '@sveltejs/kit';

// /support merged into /donate — redirect permanently, preserving old links.
export const load = () => {
  throw redirect(308, '/donate');
};
