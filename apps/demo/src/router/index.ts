import { type RouteConfig, Router } from '@lit-labs/router';
import { type ReactiveControllerHost, html } from 'lit';
import { routes } from './routes.js';

const routeConfigs: RouteConfig[] = [
  {
    name: 'home',
    path: routes.home,
    render: () => {
      import('../pages/index.js');
      return html`<app-home></app-home>`;
    },
  },
  {
    name: 'login',
    path: routes.login,
    render: () => {
      import('../pages/auth/login.js');
      return html`<app-login-page></app-login-page>`;
    },
  },
  {
    name: 'user',
    path: `${routes.users}/:id`,
    render: ({ id }) => {
      import('../pages/users/user.js');
      return html`<app-user-page .id=${id}></app-user-page>`;
    },
  },
  {
    name: 'users',
    path: `${routes.users}`,
    render: () => {
      import('../pages/users/index.js');
      return html`<app-users-page></app-users-page>`;
    },
  },
];

export const createRouter = (host: ReactiveControllerHost & HTMLElement) =>
  new Router(host, routeConfigs);

/**
 * Setup a proxy for the pushState method to intercept and
 * navigate to a new URL using the router.
 *
 * This allows router navitation via the 'navigate' method without
 * having to expose the router instance to the global scope using
 * something like the Context API.
 * @param router Router instance
 */
export const initNavigation = (router: Router) => {
  globalThis.history.pushState = new Proxy(globalThis.history.pushState, {
    apply: (
      target,
      thisArg,
      argArray: [data: unknown, unused: string, url?: string | URL | null | undefined],
    ) => {
      // TODO: customize view transition to something more animated
      document.startViewTransition(() => {
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
      });

      return target.apply(thisArg, argArray);
    },
  });
};

/**
 * Navigate to a new URL using the router
 * @param path The path to navigate to
 */
export const navigate = (path: string): void => globalThis.history.pushState({}, '', path);
