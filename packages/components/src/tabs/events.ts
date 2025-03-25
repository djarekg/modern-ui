import type { Tab } from './tab.js';

/**
 * @event change - Fired when the selected tab changes.
 */
export interface TabChangeEventDetail {
  tab: Tab;
}

export interface TabChangeEvent extends CustomEvent<TabChangeEventDetail> {}

export const createTabChangeEvent = (tab: Tab) => {
  return new CustomEvent<TabChangeEventDetail>('change', {
    detail: { tab },
    bubbles: true,
    composed: true,
  });
};
