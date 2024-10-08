// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HyDE project',
			social: {
				github: 'https://github.com/HyDE-Project',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'HyDE Cli', slug: 'guides/cli' },
						{ label: 'HyDe Themes', slug: 'guides/gallery' },
						{ label: 'HyDe Panel', slug: 'guides/panel' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
