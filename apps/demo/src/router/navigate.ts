/**
 * Navigate to a new URL using the router.
 *
 * @param {string} path - The path to navigate to.
 */
export const navigate = (path: string) => globalThis.history.pushState({}, '', path);
