import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../icon/icon.js';

import baseStyles from './button-base.css.js';
import { ButtonBase } from './button-base.js';

const styles = css`
  :host  {
    --_color: var(--mui-link-button-color, var(--mui-color-primary));
    --_hover-color: var(--mui-link-button-hover-color, var(--mui-color-background-hover));
    --_font-size: var(--mui-link-button-font-size, 1rem);
    --_font-weight: var(--mui-link-button-font-weight, 500);
    --_align-items: var(--mui-link-button-align-items, center);

    display: flex;
    align-items: center;

    button {
      all: unset;
      display: inline-flex;
      align-items: var(--_align-items);
      justify-content: center;
      background: none;
      color: var(--_color);

      &:hover {
        background: var(--_background-hover-color);
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      line-height: var(--_font-size);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

/**
 * @cssprop --mui-link-button-color - The color of the button.
 * @cssprop --mui-link-button-hover-color - The color when the button is hovered.
 * @cssprop --mui-link-button-font-size - The font size of the button.
 * @cssprop --mui-link-button-font-weight - The font weight of the button.
 * @cssprop --mui-link-button-align-items - The alignment of the button.
 *
 * A button that links to a URL.
 */
@customElement('mui-link-button')
export class LinkButton extends ButtonBase {
  static override styles = [baseStyles, styles];

  /**
   * The URL of a linked resource.
   */
  @property() href = '';

  override render() {
    const classes = {};

    return html`
      <button
        class="${classMap(classes)}"
        type=${this.type}
        ?disabled=${this.disabled}>
        <a href=${this.href}>
          <slot></slot>
        </a>
      </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-link-button': LinkButton;
  }
}
