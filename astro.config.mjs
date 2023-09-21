import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
	build: {
		assets: 'assets',
		format: 'file',
	},
	vite: {
		build: {
			assetsInlineLimit: 0,
			rollupOptions: {
				output: {
					entryFileNames: 'assets/main.js',
					assetFileNames: 'assets/main[extname]',
				},
			},
		},
	},
	integrations: [
		// react(),
		alpinejs(),
		tailwindcss({
			applyBaseStyles: false,
		}),
	],
});
