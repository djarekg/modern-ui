import type { PathRouteConfig, Router } from '@lit-labs/router';

export * from './navigate.js';

/**
 * Get the current route.
 *
 * @param {Router} router - The router.
 * @returns {RouteConfig} The current route.
 */
export const getCurrentRoute = (router: Router) => {
  const { pathname } = new URL(window.location.href);
  const route = router.routes.find(route => (route as PathRouteConfig).path === pathname);
  return route;
};
