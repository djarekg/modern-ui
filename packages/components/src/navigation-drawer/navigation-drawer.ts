import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';

import type { NavItem } from '../navigation-item/types.js';

import '../icon/icon.js';

import styles from './navigation-drawer.css.js';

@customElement('mui-navigation-drawer')
export class NavigationDrawer extends LitElement {
  static override styles = [styles];

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) headline = '';
  @property({ type: Array }) items: ReadonlyArray<Readonly<NavItem>> | undefined;
  @property({ type: Boolean, reflect: true }) opened = false;

  render() {
    const classes = {
      visible: this.opened,
    };
    const ariaExpanded = this.opened ? 'true' : 'false';
    const ariaHidden = !this.opened ? 'true' : 'false';

    return html`
      <div class="scrim" @click=${this.#handleScrimClick}></div>
      <aside
        role="dialog"
        aria-expanded="${ariaExpanded}"
        aria-hidden="${ariaHidden}"
        class="${classMap(classes)}">
        ${this.#renderNav()}
        ${this.#renderFooter()}
      </aside>
    `;
  }

  #renderNav() {
    return html`
      <nav>
        <h4>
          ${this.headline}
          <mui-icon class="close-button" tabindex="0" @click=${this.#closeDrawer}>menu_open</mui-icon>
        </h4>
        ${map(this.items, item => {
          return html`
            <mui-navigation-item
              .item=${item}
              @click=${this.#handleItemClicked}>
            </mui-navigation-item>
          `;
        })}
      </nav>
    `;
  }

  #renderFooter() {
    return html`
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
    //   if (isEmpty(this.footerItems)) {
    //     return html``;
    //   }

    //   return html`
    //     <footer>
    //       ${map(this.footerItems, (item) => {
    //         return html` <mui-navigation-item .item=${item}></mui-navigation-item> `;
    //       })};
    //     </footer>
    //   `;
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

  #closeDrawer() {
    this.opened = false;
  }

  #openDrawer() {
    this.opened = true;
    this.focus();
  }

  #handleItemClicked(e: Event) {
    e.stopImmediatePropagation();
    this.#closeDrawer();
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
