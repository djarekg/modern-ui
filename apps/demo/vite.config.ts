import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3003,
    hmr: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@mui/components': resolve(__dirname, '../../packages/components'),
      '@mui/core': resolve(__dirname, '../../packages/core/src'),
      '@mui/web': resolve(__dirname, '../../packages/web'),
    },
  },
});
