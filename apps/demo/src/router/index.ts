import type { RouteConfig, Router } from '@lit-labs/router';
import { html } from 'lit';

export const navigate = (path: string): void => globalThis.history.pushState({}, '', path);

export const routes: RouteConfig[] = [
  {
    name: 'default',
    path: '/apps/demo',
    render: () => {
      import('../index.js');
      return html`<app-home></app-home>`;
    },
  },
  {
    name: 'home',
    path: '/',
    render: () => {
      import('../pages/index.js');
      return html`<app-home></app-home>`;
    },
  },
  {
    name: 'login',
    path: '/login',
    render: () => {
      import('../pages/login/login.js');
      return html`<app-login></app-login>`;
    },
  },
];

/**
 * Initialize navigation
 * @param router Router instance
 */
export const initNavigation = (router: Router) => {
  globalThis.history.pushState = new Proxy(globalThis.history.pushState, {
    apply: (
      target,
      thisArg,
      argArray: [data: unknown, unused: string, url?: string | URL | null | undefined],
    ) => {
      const url = argArray[2];
      if (url instanceof URL) {
        router.goto(url.pathname);
      } else if (typeof url === 'string') {
        if (url.startsWith('/')) {
          router.goto(url);
        } else {
          router.goto(new URL(url).pathname);
        }
      } else {
        router.goto(window.location.pathname);
      }
      return target.apply(thisArg, argArray);
    },
  });
};
