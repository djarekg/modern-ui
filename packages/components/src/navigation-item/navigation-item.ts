import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { createNavigationItemClickedEvent } from './events.js';
import type { NavItem } from './types.js';
import '../icon/icon.js';

import styles from './navigation-item.css.js';

@customElement('mui-navigation-item')
export class NavigationItem extends LitElement {
  static override styles = [styles];

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Object }) item: Readonly<NavItem> | undefined;

  render() {
    const { icon, label, cssColorVar } = this.item;
    let styles = {};

    if (cssColorVar) {
      styles = {
        color: `var(${cssColorVar})`,
      };
    }

    return html`
      <a
        tabindex="0"
        href="#"
        style=${styleMap(styles)}
        @click=${this.#handleClick}>
        <mui-icon>${icon}</mui-icon>
        <span>${label}</span>
        <div class="active-indicator"></div>
      </a>
    `;
  }

  #handleClick(e: Event): void {
    e.stopImmediatePropagation();
    this.dispatchEvent(createNavigationItemClickedEvent(this.item));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-navigation-item': NavigationItem;
  }
}
