import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { createNavigationItemClickedEvent } from './events.js';
import type { NavItem } from './types.js';
import '../icon/icon.js';

import styles from './navigation-item.css.js';

/**
 * @cssprop --mui-navigation-item-color - The color of the navigation item.
 * @cssprop --mui-navigation-item-hover-color - The color of the navigation item when hovered.
 * @cssprop --mui-navigation-item-active-indicator-border-radius - The border radius of the active indicator.
 * @cssprop --mui-navigation-active-indicator-background-color - The background color of the active indicator.
 *
 * General use navigation item with icon, label, hover and selection states.
 */
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
