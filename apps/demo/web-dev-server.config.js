import { fileURLToPath } from 'node:url';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default /** @type {import("@web/dev-server").DevServerConfig} */ ({
  esbuildTarget: 'auto',
  rootDir: './',
  port: 3003,
  appIndex: 'src/index.html',
  debug: true,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
    dedupe: ['@lit-labs/router', '@lit-labs/signals', 'lit'],
  },
  mimeTypes: {
    '*.html': 'html',
  },
  plugins: [
    esbuildPlugin({
      target: 'esnext',
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
      ts: true,
      json: true,
    }),
  ],
});
