import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';

import type { NavigationItemEvent } from '../navigation-item/events.js';
import type { NavItem } from '../navigation-item/types.js';
import '../button/icon-button.js';
// import '../tooltip/tooltip.js';

import { createNavigationDrawerNavigateEventEvent } from './events.js';
import styles from './navigation-drawer.css.js';

/**
 * Navigation drawer component.
 * @fires close - Dispatched when the drawer is closed.
 * @fires navigate - Dispatched when a navigation item is clicked.
 */
@customElement('mui-navigation-drawer')
export class NavigationDrawer extends LitElement {
  static override styles = [styles];

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) headline = '';
  @property({ type: Array }) items: ReadonlyArray<Readonly<NavItem>> | undefined;
  @property({ type: Boolean, reflect: true }) opened = false;
  @property({ type: Boolean, reflect: true }) pinned = false;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.onKeydown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.onKeydown);
  }

  render() {
    const classes = {
      visible: this.opened,
    };
    const ariaExpanded = this.opened ? 'true' : 'false';
    // const ariaHidden = !this.opened ? 'true' : 'false';

    return html`
      <div class="scrim" @click=${this.#handleScrimClick}></div>
      <aside
        role="dialog"
        aria-expanded="${ariaExpanded}"
        class="${classMap(classes)}">
        ${this.#renderHeader()}
        ${this.#renderNav()}
        ${this.#renderFooter()}
      </aside>
      <slot></slot>
    `;
  }

  #renderNav() {
    return html`
      <nav>
        ${map(this.items, item => {
          return html`
            <mui-navigation-item
              .item=${item}
              @navigate=${this.#handleItemClicked}>
            </mui-navigation-item>
          `;
        })}
      </nav>
    `;
  }

  #renderHeader() {
    return html`
      <header>
        <h4>
          ${this.headline}
        </h4>
        <div>
          <mui-icon-button
            id="pinDrawer"
            rotatable
            class="pin-button"
            tabindex="0"
            @click=${this.#togglePin}>
            push_pin
          </mui-icon-button>
          <!-- <mui-tooltip anchor="pinDrawer">${this.pinned ? 'Un-pin drawer' : 'Pin drawer'}</mui-tooltip> -->

          <mui-icon-button
            id="closeDrawer"
            class="close-button"
            tabindex="0"
            @click=${this.#closeDrawer}>
            close
          </mui-icon-button>
          <!-- <mui-tooltip anchor="closeDrawer">Close drawer</mui-tooltip> -->
        </div>
      </header>
    `;
  }

  #renderFooter() {
    return html`
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }

  show(): void {
    this.#openDrawer();
  }

  close(): void {
    this.#closeDrawer();
  }

  protected onKeydown = (e: KeyboardEvent) => {
    if (this.opened) {
      if (e.key.toLowerCase() === 'escape') {
        this.#closeDrawer();
      }
    }

    if (!this.opened) {
      if (e.ctrlKey && e.key === 'm') {
        e.preventDefault();

        this.#openDrawer();

        setTimeout(() => {
          const input = this.shadowRoot.querySelector('input');

          if (input) {
            input.focus();
          }
        });
      }
    }
  };

  #togglePin() {
    this.pinned = !this.pinned;
  }

  #closeDrawer() {
    this.opened = false;
    this.pinned = false;
    this.dispatchEvent(new CustomEvent('close'));
  }

  #openDrawer() {
    this.opened = true;
    this.focus();
  }

  #handleItemClicked(e: NavigationItemEvent) {
    this.dispatchEvent(createNavigationDrawerNavigateEventEvent(e.detail.item));

    // we dont' want to clsoe the drawer if it's pinned
    if (!this.pinned) {
      this.#closeDrawer();
    }
  }

  #handleScrimClick(e: Event) {
    e.stopImmediatePropagation();
    this.#closeDrawer();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-navigation-drawer': NavigationDrawer;
  }
}
