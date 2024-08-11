import { transformerDirectives } from 'unocss';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from '@unocss/svelte-scoped/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
    UnoCSS({
      cssFileTransformers: [transformerDirectives()],
    }),
  ],
});
