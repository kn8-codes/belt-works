import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: ['belt.works', 'ioc.belt.works']
	},
	preview: {
		allowedHosts: ['belt.works', 'ioc.belt.works']
	}
});
