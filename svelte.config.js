import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	// Optional: customize mdsvex options
	layout: {
		blog: resolve(__dirname, 'src/lib/layouts/blog.svelte')
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$lib: 'src/lib',
			$components: 'src/components',
			$routes: 'src/routes'
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
