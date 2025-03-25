import type { Router } from '@lit-labs/router';

/**
 * Detail type for route changed event.
 */
export type RouterChangedDetail = {
  router: Router;
};

/**
 * Event type for route changed.
 */
export type RouterChangedEvent = CustomEvent<RouterChangedDetail>;

/**
 * Create custom event for route changed.
 *
 * @param {Router} router - The router instance.
 * @returns {RouterChangedEvent} The custom event.
 */
export const createRouterChangedEvent = (router: Router) => {
  return new CustomEvent<RouterChangedDetail>('router-changed', {
    detail: { router },
    bubbles: true,
    composed: true,
  });
};
