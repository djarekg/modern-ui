import type { Router } from '@lit-labs/router';

/**
 * Setup a proxy for the pushState method to intercept and
 * navigate to a new URL using the router.
 *
 * This allows router navitation via the 'navigate' method without
 * having to expose the router instance to the global scope using
 * something like the Context API.
 *
 * @param router Router instance
 */
export const subscribeToPushState = (router: Router) => {
  globalThis.history.pushState = new Proxy(globalThis.history.pushState, {
    apply: (
      target,
      thisArg,
      argArray: [data: unknown, unused: string, url?: string | URL | null | undefined],
    ) => {
      const url = argArray[2];
      const pathname =
        url instanceof URL
          ? url.pathname
          : typeof url === 'string'
            ? new URL(url, window.location.origin).pathname
            : window.location.pathname;

      document.startViewTransition(() => {
        router.goto(pathname);
      });

      return target.apply(thisArg, argArray);
    },
  });
};
