import { fileURLToPath } from 'node:url';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default /** @type {import("@web/dev-server").DevServerConfig} */ ({
  esbuildTarget: 'auto',
  rootDir: './',
  // preserveSymlinks: true,
  middleware: [
    (context, next) => {
      const { path, url, app } = context;

      if (context.url === '/api') {
        context.response.body = 'Hello from the API';
        return;
      }
      return next();
    },
  ],
  http2: false,
  port: 3003,
  appIndex: 'src/index.html',
  debug: false,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
    // dedupe: ['@lit-labs/router', '@lit-labs/signals', 'lit'],
  },
  mimeTypes: {
    '*.html': 'html',
  },
  plugins: [
    esbuildPlugin({
      target: 'esnext',
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
      ts: true,
    }),
  ],
});
