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

  // get isFooterItem(): boolean {
  //   const { icon = '' } = this.item;
  //   return /.[a-z]*$/.test(icon);
  // }

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Object }) item: Readonly<NavItem> | undefined;

  // override render(): TemplateResult {
  //   if (this.#isInvalidItem()) {
  //     return html``;
  //   }

  //   return this.isFooterItem ? this.renderExternalNavItem() : this.renderNavItem();
  // }

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

  protected renderExternalNavItem() {
    const { icon, path } = this.item;

    return html`
      <a
        class="logo"
        target="_blank"
        href=${path}>
        <img
          src=${icon}
          alt="NavigationItem"
          width="22px"
          height="22px" />
      </a>
    `;
  }

  // #isInvalidItem(): boolean {
  //   const { icon, label, path } = this.item;

  //   return isEmpty(icon) || isEmpty(label) || isEmpty(path);
  // }

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
