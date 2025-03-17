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
      '@mui/api': resolve(__dirname, '../../apps/api/src'),
      '@mui/components': resolve(__dirname, '../../packages/components/src'),
      '@mui/core': resolve(__dirname, '../../packages/core/src'),
      '@mui/graphql': resolve(__dirname, '../../packages/graphql/src'),
      '@mui/logger': resolve(__dirname, '../../packages/logger/src'),
    },
    preserveSymlinks: true,
    conditions: ['browser', 'development'],
    dedupe: [
      '@apollo/client',
      '@lit-labls/context',
      '@lit-labs/observers',
      '@lit-labs/router',
      '@lit-labs/signals',
      '@lit-labs/task',
      'graphql',
      'haunted',
      'lit',
      'lit/decorators',
      'lit/directives',
      'signal-utils',
    ],
  },
  plugins: [
    unfonts({
      google: {
        families: ['Inter', 'Material+Symbols+Sharp'],
      },
    }),
  ],
  define: {},
});
