import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://dotnetevangelist.com',
  trailingSlash: 'never',
  base:'/LearnGlobal/',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()],
  outDir: './dist'
});
