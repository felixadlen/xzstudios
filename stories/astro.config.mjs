import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), mdx()],
  vite: {
    ssr: {
      noExternal: ['astro', '@igor.dvlpr/astro-post-excerpt']
    }
  },
  output: "server",
  adapter: netlify(),
});