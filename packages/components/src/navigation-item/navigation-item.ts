import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { define, useHost, useStyles } from '@mui/core';

import { createNavigationItemClickedEvent } from './events.js';
import type { NavItem } from './types.js';
import '../icon/icon.js';

import styles from './navigation-item.css.js';

type NavigationItemProps = {
  disabled?: boolean;
  item: Readonly<NavItem> | undefined;
};

/**
 * General use navigation item with icon, label, hover and selection states.
 * @cssprop --mui-navigation-item-color - The color of the navigation item.
 * @cssprop --mui-navigation-item-hover-color - The color of the navigation item when hovered.
 * @cssprop --mui-navigation-item-active-indicator-border-radius - The border radius of the active indicator.
 * @cssprop --mui-navigation-active-indicator-background-color - The background color of the active indicator.
 */
const NavigationItem = ({ item }: NavigationItemProps) => {
  useStyles(styles);

  const _this = useHost();

  const handleClick = (e: Event) => {
    e.stopImmediatePropagation();
    _this.dispatchEvent(createNavigationItemClickedEvent(item));
  };

  const { icon, label, cssColorVar } = item;
  let style = {};

  if (cssColorVar) {
    style = {
      color: `var(${cssColorVar})`,
    };
  }

  return html`
    <a
      tabindex="0"
      href="#"
      style=${styleMap(style)}
      @click=${handleClick}>
      <mui-icon>${icon}</mui-icon>
      <span>${label}</span>
      <div class="active-indicator"></div>
    </a>
  `;
};

define('mui-navigation-item', NavigationItem, { observedAttributes: ['disabled', 'item'] });

declare global {
  interface HTMLElementTagNameMap {
    'mui-navigation-item': HTMLElement;
  }
}
