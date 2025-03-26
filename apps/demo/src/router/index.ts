import type { Router, URLPatternRouteConfig } from '@lit-labs/router';

export * from './navigate.js';

/**
 * Get the current route.
 *
 * @param {Router} router - The router.
 * @returns {RouteConfig} The current route.
 */
export const getCurrentRoute = (router: Router) => {
  const route = router.routes.find(route =>
    (route as URLPatternRouteConfig).pattern.test(window.location.href),
  );
  return route;
};
