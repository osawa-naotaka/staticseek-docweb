// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "staticseek",
			description: "A Lightweight, Fast Full-text Search Engine for Static Sites",
			pagefind: false,
			favicon: "/favicon.svg",
			head: [{
				tag: 'link',
				attrs: {
					rel: 'icon',
					href: '/favicon.ico',
					sizes: '32x32',
				},
			},],
			logo: {
				src: "./src/assets/logo-no-background.svg",
				replacesTitle: true,
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3
			},			
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en"
				},
			},
			social: {
				github: 'https://github.com/osawa-naotaka/staticseek',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'start-here/getting-started' },
						{ label: 'Setting and Query', slug: 'start-here/setting-and-query' },
						{ label: 'Key Feature', slug: 'start-here/key-feature' },
						{ label: 'Performance', slug: 'start-here/performance' },
					],
				},
				{
					label: "Query",
					items: [
						{ label: 'Query Syntax', slug: 'query/query-syntax' },
						{ label: 'Query Result', slug: 'query/query-result' },
					]
				},
				{
					label: "API Reference",
					items: [
						{ label: 'createIndex', slug: 'api-reference/create-index' },
						{ label: 'indexToObject', slug: 'api-reference/index-to-object' },
						{ label: 'createSearchFn', slug: 'api-reference/create-search-fn' },
						{ label: 'createIndexFromObject', slug: 'api-reference/create-index-from-object' },
						{ label: 'search', slug: 'api-reference/search' },
					],
				},
				{
					label: "Basic Integration",
					items: [
						{ label: 'Astro', slug: 'integration/astro/basic' },	
						{ label: 'Next.js', slug: 'integration/next/basic' },	
						{ label: 'Nuxt', slug: 'integration/nuxt/basic' },	
					]
				},
				{
					label: "Advanced Integration",
					items: [
						{ label: 'Astro', slug: 'integration/astro/preindex' },
						{ label: 'Next.js', slug: 'integration/next/preindex' },
						{ label: 'Nuxt', slug: 'integration/nuxt/preindex' },
					]
				},
				{
					label: "Benchmark",
					items: [
						{ label: 'Intel Core i5 + RTX4070', slug: 'benchmark/13400f-rtx4070' },
						{ label: 'Intel N100', slug: 'benchmark/n100' },
					],
				},
				{
					label: "Algorithms",
					items: [
						{ label: 'Search Algorithms', slug: 'algorithms/search-algorithms' },
						{ label: 'Preprocessing', slug: 'algorithms/preprocessing' },
					],
				},
				{
					label: "How To Create staticseek",
					items: [
						{ label: 'I Want to Search in Japanese!', slug: 'howto/howto01' },
						{ label: 'Of Course I Want to Search in English Too!', slug: 'howto/howto02' },
						{ label: 'I Want to Search Even with Typos!', slug: 'howto/howto03' },
						{ label: 'I Want to Search with WebGPU!', slug: 'howto/howto04' },
						{ label: 'I Want to Make the Search User-Friendly!', slug: 'howto/howto05' },
					],
				},
			],
		}),
	],
});
