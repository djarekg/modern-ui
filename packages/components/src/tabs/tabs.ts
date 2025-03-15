import type { TypedEvent } from '@mui/core';
import { LitElement, css, html, isServer, nothing } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';

import '../icon/icon.js';

import type { Tab } from './tab.js';
import { isTab } from './utils.js';

const styles = css`
  /* * {
    box-sizing: border-box;
  } */

  :host {
    display: flex;
    flex-direction: column;
    block-size: 90px;
  }

  .tabs {
    display: flex;
    background-color: var(--mui-tabs-background-color, trasnsparent);
  }

  [role=tabpanel] {
    border-radius: 0 var(--mui-shape-medium) var(--mui-shape-medium);
    background-color: var(--mui-tab-background-color, var(--mui-color-background));
  }

  [slot=panel] {
    padding: 1rem;
  }
`;

/**
 * @cssprop --mui-tabs-background-color - The background color of the tabs.
 *
 * A tab component that manages a collection of tabs.
 */
@customElement('mui-tabs')
export class Tabs extends LitElement {
  static styles = [styles];

  /**
   * Cache of mui-tab's tabpanel elements.
   */
  #tabpanelsCache: Record<string, Element> = {};

  /**
   * Cast to HTMLElement needed for closure.
   */
  readonly #internals = (this as HTMLElement).attachInternals();

  /**
   * The ResizeObserver instance used to adjust the height of the tabs component
   * based on the height of the active tabpanel.
   */
  #resizeObserver: ResizeObserver | null = null;

  /**
   * Whether or not to automatically select a tab when it is focused.
   */
  @property({ type: Boolean, attribute: 'auto-activate' }) autoActivate = false;

  /**
   * The index of the selected tab.
   */
  @property({ type: Number, attribute: 'active-tab-index' })
  get activeTabIndex() {
    return this.tabs.findIndex(({ active }) => active);
  }
  set activeTabIndex(index: number) {
    const activateTabAtIndex = () => {
      const tab = this.tabs[index];

      // Ignore out-of-bound indices.
      if (tab) {
        this.#activateTab(tab);
      }
    };

    if (!this.slotElement) {
      /**
       * This is need to support setting the activeTabIndex before the slot
       * has been assigned and rendered.
       *
       * ```ts
       * html`
       *  <mui-tabs .activeTabIndex=${1}>
       *   <mui-tab>Tab 1</mui-tab>
       *   <mui-tab>Tab 2</mui-tab>
       * </mui-tabs>
       * `;
       * ```
       *
       * In this example, the activeTabIndex is set before the tabs are rendered.
       * We need to wait for the updateComplete lifecycle event to ensure the
       * slot has been assigned and the tabs have been rendered.
       */
      this.updateComplete.then(activateTabAtIndex);
      return;
    }

    activateTabAtIndex();
  }

  /**
   * All the tabs in the tabs component.
   */
  @queryAssignedElements({ selector: 'mui-tab', flatten: true }) readonly tabs!: Tab[];

  /**
   * The element that contains the tabs.
   */
  @query('.tabs') private readonly tabsScrollerElement!: HTMLElement | null;

  /**
   * The element that contains the tab panels.
   */
  @query('slot') private readonly slotElement!: HTMLSlotElement | null;

  /**
   * The tab that is currently active/selected.
   */
  get activeTab() {
    return this.tabs.find(({ active }) => active) ?? null;
  }
  set activeTab(tab: Tab | null) {
    // Ignore nulls. As long as there are children, there must be an active tab.
    if (tab) {
      this.#activateTab(tab);
    }
  }

  /**
   * The tab that is currently focused.
   */
  get focusedTab() {
    return this.tabs.find(tab => tab.matches(':focus-within'));
  }

  constructor() {
    super();

    if (!isServer) {
      this.#internals.role = 'tablist';
      this.addEventListener('keydown', this.#handleKeydown.bind(this));
      this.addEventListener('keyup', this.#handleKeyup.bind(this));
      this.addEventListener('focusout', this.#handleFocusout.bind(this));
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#resetObserver();
  }

  render() {
    return html`
      <div class="tabs">
        <slot
          @slotchange=${this.#handleSlotChange.bind(this)}
          @click=${this.#handleTabClick}></slot>
      </div>
      ${this.#renderActiveTabpanel()}
    `;
  }

  #renderActiveTabpanel() {
    const { id } = this.activeTab ?? {};

    if (!id) {
      return nothing;
    }

    let panel = this.#tabpanelsCache[id];

    // If the panel does not exist in cache, then use the active tab's slotPanel
    // and cache that panel for future use.
    if (!panel) {
      panel = this.activeTab.slotPanel;
      this.#tabpanelsCache[id] = panel;
    }

    this.#resetObserver(panel);

    return cache(html`<div id="tabpanel-${id}" role="tabpanel">${panel}</div>`);
  }

  #handleFocusout() {
    // Restore focus to selected item when blurring the tab bar.
    if (this.matches(':focus-within')) {
      return;
    }

    const { activeTab } = this;

    if (activeTab) {
      this.#updateFocusableTab(activeTab);
    }
  }

  /**
   * Focus item on keydown and optionally select it.
   *
   * @param event The keydown event.
   */
  async #handleKeydown({ defaultPrevented, key, preventDefault }: KeyboardEvent) {
    // Allow event to bubble.
    await 0;

    const isLeft = key === 'ArrowLeft';
    const isRight = key === 'ArrowRight';
    const isHome = key === 'Home';
    const isEnd = key === 'End';

    // Ignore non-navigation keys.
    if (defaultPrevented || (!isLeft && !isRight && !isHome && !isEnd)) {
      return;
    }

    const { tabs } = this;

    // If there isn't any other, tabs don't continue with selection logic.
    if (tabs.length < 2) {
      return;
    }

    preventDefault();

    let indexToFocus: number;

    if (isHome || isEnd) {
      indexToFocus = isHome ? 0 : tabs.length - 1;
    } else {
      // Are we moving fowards or backwards?
      const isRtl = getComputedStyle(this).direction === 'rtl';
      const forwards = isRtl ? isLeft : isRight;
      const { focusedTab } = this;

      // If there isn't a focused tab, default to the first tab or last one
      // depending on the direction.
      if (!focusedTab) {
        indexToFocus = forwards ? 0 : tabs.length - 1;
      } else {
        const focusedIndex = tabs.indexOf(focusedTab);
        indexToFocus = forwards ? focusedIndex + 1 : focusedIndex - 1;

        if (indexToFocus >= tabs.length) {
          // Move to start if we reach the end.
          indexToFocus = 0;
        } else if (indexToFocus < 0) {
          // Move to end if we reach the start.
          indexToFocus = tabs.length - 1;
        }
      }
    }

    const tabToFocus = tabs[indexToFocus];
    tabToFocus.focus();

    if (this.autoActivate) {
      this.#activateTab(tabToFocus);
    } else {
      this.#updateFocusableTab(tabToFocus);
    }
  }

  #handleKeyup() {
    this.#scrollToTab(this.focusedTab ?? this.activeTab);
  }

  #handleSlotChange() {
    const [firstTab] = this.tabs;
    const { activeTab } = this;

    if (!activeTab && firstTab) {
      // If activeTab is not set, default to the first tab.
      this.#activateTab(firstTab);
    }

    // When children shift (e.g. when tab(s) added or removed), we need to
    // make sure the active tab is visible. If many children are inserted before
    // the active tab, the active tab may be pushed off screen. We most
    // scroll the active tab into view to ensure it's visible.
    this.#scrollToTab(activeTab);

    // Update the active tab panel content.
    this.requestUpdate();
  }

  async #handleTabClick({ defaultPrevented, target: tab }: TypedEvent<Tab>) {
    // Allow event to bubble.
    await 0;

    if (defaultPrevented || !isTab(tab) || tab.active) {
      return;
    }

    this.#activateTab(tab);
  }

  #activateTab(activeTab: Tab) {
    const { tabs } = this;
    const previousTab = this.activeTab;

    if (!tabs.includes(activeTab) || previousTab === activeTab) {
      // ignore setting activeTab to a tab element that is not a child.
      return;
    }

    for (const tab of tabs) {
      tab.active = tab === activeTab;
    }

    if (previousTab) {
      // B/c we are displaying the active tab component's tabpanel in
      // the this component, we need to manual request an update to reflect
      // the new active tabpanel.
      this.requestUpdate();

      // Don't dispatch a change event if activating a tab when no previous tabs
      // were selected, such as when mui-tabs auto-selects the first tab.
      const defaultPrevented = !this.dispatchEvent(
        new Event('change', { bubbles: true, cancelable: true }),
      );

      if (defaultPrevented) {
        for (const tab of tabs) {
          tab.active = tab === previousTab;
        }
        return;
      }

      // @ts-ignore
      // activeTab[ANIMATE_INDICATOR](previousTab);
    }

    this.#updateFocusableTab(activeTab);
    this.#scrollToTab(activeTab);

    // this.#adjustHeight(this.activeTab?.slotPanel);
  }

  async #scrollToTab(tabToScrollTo: Tab | null = null) {
    await this.updateComplete;

    const { tabs } = this;

    /**
     * biome-ignore lint/style/noParameterAssign: we need to reassign the value
     * if null after the updateComplete lifecycle event. Otherwise, we would have
     * created a default parameter value.
     */
    tabToScrollTo ??= this.activeTab;

    // if we can't find the tab to scroll to, or the tabs scroller element
    // is not available, we can't scroll.
    if (!tabToScrollTo || !tabs.includes(tabToScrollTo) || !this.tabsScrollerElement) {
      return;
    }

    // wait for all tabs to finish rendering
    for (const tab of tabs) {
      await tab.updateComplete;
    }

    const { offsetLeft: offset, offsetWidth: extent } = this.tabsScrollerElement;
    const { scrollLeft: scroll, scrollWidth: hostExtent } = this;
    const scrollMargin = 48;
    const min = offset - scrollMargin;
    const max = offset + extent - hostExtent + scrollMargin;
    const left = Math.min(min, Math.max(max, scroll));

    // if tab is focused, you use auto to use css smooth scrolling. Otherwise,
    // use instant during initialization to immediately scroll to the focused tab.
    const behavior: ScrollBehavior = !this.focusedTab ? 'instant' : 'auto';
    this.tabsScrollerElement.scrollTo({ behavior, top: 0, left });
  }

  #updateFocusableTab(focusableTab: Tab) {
    for (const tab of this.tabs) {
      tab.tabIndex = tab === focusableTab ? 0 : -1;
    }
  }

  /**
   * Reset the resize observer to observe the height of the active tabpanel.
   * Because we are manually adding the child mui-tab's'tabpanel to
   * the mui-tabs's shadow DOM, we need to use the resize observer to adjust
   * the height of the tabs component.
   *
   * @param panel The panel to observe for height changes.
   */
  #resetObserver(panel?: Element) {
    // Clean up and destroy current observer.
    if (this.#resizeObserver) {
      if (panel) {
        this.#resizeObserver.unobserve(panel);
      }

      this.#resizeObserver.disconnect();
      this.#resizeObserver = null;
    }

    if (panel) {
      this.#resizeObserver = new ResizeObserver(([entry]) => {
        this.#adjustHeight(entry.target);
      });
      this.#resizeObserver.observe(panel);
    }
  }

  /**
   * Adjust the height of the tabs component to match the height of the active.
   *
   * @param panel The panel to adjust the height to.
   */
  #adjustHeight(panel: Element) {
    if (panel) {
      this.style.blockSize = `${panel.scrollHeight}px`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-tabs': Tabs;
  }
}
