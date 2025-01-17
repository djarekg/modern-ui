import { resolve } from 'node:path';
import unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3003,
    hmr: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@mui/components': resolve(__dirname, '../../packages/components/src'),
    },
    preserveSymlinks: true,
    conditions: ['browser', 'development'],
    dedupe: [
      '@lit-labls/context',
      '@lit-labs/router',
      '@lit-labs/signals',
      '@lit-labs/task',
      'lit',
      'lit/decorators',
      'lit/directives',
    ],
  },
  plugins: [
    unfonts({
      google: {
        families: ['Inter', 'Material+Symbols+Sharp'],
      },
    }),
  ],
  publicDir: resolve(__dirname, '../../packages/components/src/theme'),
});
