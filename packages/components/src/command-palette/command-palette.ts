import { SignalWatcher, html, signal } from '@lit-labs/signals';
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { signalArray } from 'signal-utils/array';

import type { TypedEvent } from '@mui/core';

import '../button/link-button.js';
import '../dialog/dialog.js';
import '../icon/icon.js';
import '../list/list-item-link.js';
import '../list/list.js';

import type { ListActiveListItemChangeEvent } from '../list/events.js';
import { List } from '../list/list.js';
import type { NavItem } from '../navigation-item/types.js';
import { NAVIGABLE_KEYS, isNavigableKey } from '../navigation/navigable.js';

import styles from './command-palette.css.js';

/**
 * @trigger opened - Dispatched when the command palette is opened.
 *
 * A command palette that allows users to search for and jump to different
 */
@customElement('mui-command-palette')
export class CommandPalette extends SignalWatcher(LitElement) {
  static styles = [styles];

  #resultListRef = createRef<List>();
  #open = signal(false);
  #value = signal('');
  #inputPrependPaths = signal<string[]>([]);
  #resultItems = signalArray<NavItem>([
    {
      icon: 'group',
      label: 'Users',
      path: '/users',
    },
    {
      icon: 'settings',
      label: 'Settings',
      path: '/settings',
    },
    {
      icon: 'account_balance',
      label: 'Accounting',
      path: '/accounting',
    },
    {
      icon: 'analytics',
      label: 'Accounting Reports',
      path: '/accounting/reports',
    },
    {
      icon: 'inventory',
      label: 'Inventory',
      path: '/inventory',
    },
  ]);

  /**
   * Whether the command palette is closing. This is used to animate the
   * closing of the command palette.
   */
  @property({ type: Boolean, reflect: true }) closing = false;

  /**
   * Whether the command palette is opening. This is used to animate the
   * opening of the command palette.
   */
  @property({ type: Boolean, reflect: true }) opening = false;

  /**
   * Whether the command palette is open.
   */
  @property({ type: Boolean, reflect: true })
  get open() {
    return this.#open.get();
  }
  set open(value: boolean) {
    if (value === this.#open.get()) {
      return;
    }

    this.#open.set(value);
  }

  /**
   * The source of the logo for the command palette.
   */
  @property() logoSrc: string | undefined;

  connectedCallback(): void {
    super.connectedCallback();

    document.addEventListener('keydown', this.#handleKeyDown.bind(this));
  }

  render() {
    return html`
      ${when(this.#resultItems.length, () => this.#renderCssCustomProperties())}
      ${this.#renderShortcutTip()}
      <mui-dialog
        .open=${this.#open.get()}
        .closeOnClick=${true}
        @close=${() => this.#open.set(false)}
        @transitionend=${this.#handleDialogTransitionEnd}>

        <section slot="content">
          ${this.#renderInput()}
        </section>

        <section slot="actions">
          ${this.#renderResults()}
        </section>

      </mui-dialog>
    `;
  }

  #renderShortcutTip() {
    return html`
      <div class="shortcut-tip" @click=${this.#handleShortcutTipClick}>
        <mui-icon>search</mui-icon>
        Type
        <span class="icon-like">/</span>
        to search
      </div>
    `;
  }

  #renderInput() {
    return html`
      <div class="search-input">
        <mui-icon>search</mui-icon>
        ${this.#renderInputPrependPaths()}
        <input
          autofocus
          autocomplete="off"
          spellcheck="false"
          aria-expanded="false"
          type="search"
          tabindex="0"
          role="combobox"
          placeholder="Type to search..."
          @keydown=${this.#handleInputKeydown}
          @input=${this.#handleInputChange} />
      </div>
    `;
  }

  #renderInputPrependPaths() {
    const separator = html`<span>&nbsp;/&nbsp;</span>`;
    const paths = this.#inputPrependPaths.get();
    const count = paths.length - 1;

    return html`
      <span class="prepend-text">
        ${map(paths, (path, index) => {
          return html`
            ${separator}
            <mui-link-button .href=${path}>${path}</mui-link-button>
            ${when(index === count, () => separator)}
          `;
        })}
      </span>
    `;
  }

  #renderResults() {
    return html`
      <div class="search-results">
        <mui-list
          ${ref(this.#resultListRef)}
          @active-list-item-change=${this.#handleActiveListItemChange}>
          ${map(this.#resultItems, ({ cssColorVar, icon, label, path }) => {
            let iconStyle = {};

            if (cssColorVar) {
              iconStyle = {
                '--mui-icon-color': `var(${cssColorVar})`,
              };
            }

            return html`
              <mui-list-item-link
                .href=${path}
                .headline=${label}
                .supportingText=${path}>
                <div slot="start">
                  <mui-icon style=${styleMap(iconStyle)}>${icon}</mui-icon>
                </div>
                <div slot="end">
                  Jump To
                </div>
              </mui-list-item-link>`;
          })}
        </mui-list>
      </div>
      ${this.#renderFooter()}
    `;
  }

  #renderFooter() {
    return html`
      <footer>
        <div class="instructions">
          <div>
            <mui-icon>keyboard_return</mui-icon>
            to select
          </div>
          <div class="instructions-keyboard">
            <mui-icon>keyboard_arrow_down</mui-icon>
            <mui-icon>keyboard_arrow_up</mui-icon>
            to navigate
          </div>
          <div>
            <span class="icon-like">esc</span>
            to close
          </div>
        </div>
        <div class="search-by">
          <span>Powered by</span>
          <img
            src=${ifDefined(this.logoSrc)}
            width="24px"
            height="24px" />
        </div>
      </footer>
    `;
  }

  #renderCssCustomProperties() {
    return html`
      <style>
        :host {
          --_result-item-count: ${this.#resultItems.length};
        }
      </style>
    `;
  }

  /**
   * Show the command palette.
   */
  async show() {
    this.open = true;
    this.opening = true;
    this.dispatchEvent(new CustomEvent('opened'));
  }

  /**
   * Hide the command palette.
   */
  hide() {
    this.closing = true;
    this.open = false;
  }

  #handleKeyDown = ({ ctrlKey, key, metaKey }: KeyboardEvent) => {
    if (((ctrlKey || metaKey) && key.toLowerCase() === 'k') || key === '/') {
      this.show();
    } else if (key === 'Escape') {
      this.hide();
    }
  };

  #handleShortcutTipClick() {
    this.show();
  }

  async #handleDialogTransitionEnd() {
    this.opening = false;
    this.closing = false;
  }

  /**
   * Handles keyboard navigation when the user is using the arrow keys to
   * navigate the command palette.
   *
   * @param {KeyboardEvent} e
   */
  #handleInputKeydown({ key }: KeyboardEvent) {
    if (!isNavigableKey(key)) {
      return;
    }

    // Get currently active item and deactivate it.
    const { items } = this.#resultListRef.value;
    const activeListItem = List.getActiveItem(items);
    if (activeListItem) {
      activeListItem.item.active = false;
    }

    // Activate the next or previous item depending on which direction we are navigating.
    const itemIndex = key === NAVIGABLE_KEYS.ArrowDown || key === NAVIGABLE_KEYS.Home ? 0 : -1;
    items.at(itemIndex).active = true;
  }

  #handleInputChange(e: TypedEvent<HTMLInputElement>) {
    const { value: query } = e.target;

    e.stopPropagation();

    this.#value.set(query);
    this.dispatchEvent(new CustomEvent('search', { detail: { query } }));
  }

  #handleActiveListItemChange({ detail: { item } }: ListActiveListItemChangeEvent) {
    const { path = '' } = this.#resultItems.at(item.index);
    const paths = path.split('/').filter(({ length }) => length);
    this.#inputPrependPaths.set(paths);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-command-palette': CommandPalette;
  }
}
