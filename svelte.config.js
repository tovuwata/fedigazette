import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import UnoCSS from '@unocss/svelte-scoped/preprocess';
import { mdsvex } from 'mdsvex';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsDir = path.resolve(__dirname, './src/routes/news/posts');
const newsSvxFiles = fs
  .readdirSync(newsDir)
  .filter((file) => file.endsWith('.svx'));

const newsEntries = newsSvxFiles.map(
  (file) => `/news/view/${file.replace('.svx', '')}`
);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extension: '.svx',
    }),
    UnoCSS(),
  ],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      base: '/fedigazette',
    },
    alias: {
      '$components': 'src/components'
    },
    prerender: {
      entries: [
        '/',
        '/about',
        '/contact',
        '/donate',
        '/news',
        '/news/view/_test',
        '/policy',
        '/privacy',
        '/sponsor',
        '/terms',
        '/news/rss.xml',
        '/robots.txt',
        '/sitemap.xml'
      ].concat(newsEntries),
    },
  },
};

export default config;
