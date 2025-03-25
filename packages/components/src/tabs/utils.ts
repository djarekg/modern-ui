import type { Tab } from './tab.js';

/**
 * Checks if an element is a tab.
 *
 * @param element The element to check.
 * @returns True if the element is a tab, false otherwise.
 */
export const isTab = (element: unknown): element is Tab => {
  return element instanceof HTMLElement && element.hasAttribute('mui-tab');
};
