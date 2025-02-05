import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../icon/icon.js';

import baseStyles from './button-base.css.js';
import { ButtonBase } from './button-base.js';

const styles = css`
  :host  {
    --_background-hover-color: var(--mui-icon-button-background-hover-color, var(--mui-color-background-hover));

    button {
      --_size: var(--mui-icon-size, 24px);
      --_color: var(--mui-icon-color, var(--mui-text-color, currentColor));

      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--_size);
      block-size: var(--_size);
      padding: 0.3rem !important;
      background: none;
      color: var(--_color);
      border: none !important;
      border-radius: 50%;
      transition: background 0.5s;

      &:hover {
        background: var(--_background-hover-color);
      }
    }
  }
`;

@customElement('mui-icon-button')
export class IconButton extends ButtonBase {
  static override styles = [baseStyles, styles];

  override render() {
    const classes = {};

    return html`
      <button
        class="${classMap(classes)}"
        type=${this.type}
        ?disabled=${this.disabled}>
        <mui-icon>
          <slot></slot>
        </mui-icon>
      </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-icon-button': IconButton;
  }
}
