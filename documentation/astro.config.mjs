// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Optional: Apply Tailwind to other file extensions if needed
      // applyBaseStyles: false // Disable if you want to manually control base styles
    })
  ]
});