import { defineConfig } from 'astro/config';

// 1) Si tu repo se llama  TU-USUARIO.github.io  →  base: '/'
// 2) Si tu repo se llama distinto (ej. "portafolio") →  base: '/portafolio'
export default defineConfig({
  site: 'https://miaren125.github.io',
  base: '/portfolio',
});
