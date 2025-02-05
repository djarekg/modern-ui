import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '../button/icon-button.js';

const styles = css`
  button {
    all: unset;
    cursor: pointer;
  }

  [popovertarget] {
    --mui-icon-size: 32px;
  }

  [popover] {
    --mui-icon-size: 21px;
    --_inset-block-start: calc(var(--_header-height) - 0.8rem);

    content-visibility: hidden;
    visibility: hidden;
    padding: 0;
    border-radius: var(--mui-shape-medium);
    border: 1px solid var(--mui-palette-surface-a20);
    background: var(--mui-palette-surface-a0);
    box-shadow: var(--mui-elevation-4);
    inset: 0 1rem auto auto;
    z-index: 900;
    transform: translateY(var(--_inset-block-start));
    will-change: transform;
    transition: transform var(--mui-motion-duration-500) var(--mui-motion-standard-easing), visibility
      0s linear var(--mui-motion-duration-500);

    &:popover-open {
      content-visibility: visible;
      visibility: visible;
      transform: translateY(var(--_inset-block-start));
      transition: transform var(--mui-motion-duration-200) var(--mui-motion-standard-easing);
    }
  }
`;

@customElement('mui-menu')
export class Menu extends LitElement {
  static override styles = [styles];

  @property() icon = 'menu';

  @query('menu') private _menu!: HTMLElement;

  render() {
    return html`
      <button type="button" popovertarget="menu">
        <mui-icon-button>${this.icon}</mui-icon-button>
      </button>
      <menu id="menu" popover @click=${this.close}>
        <slot></slot>
      </menu>
    `;
  }

  close() {
    this._menu.hidePopover();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-menu': Menu;
  }
}
