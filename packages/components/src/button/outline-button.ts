import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import baseStyles from './button-base.css';
import { ButtonBase } from './button-base.js';

const styles = css`
  :host {
    button {
      background: none;
      border: 1px solid var(--mui-color-text);

      &:hover {
        transition: box-shadow 0.3s ease, background 0.3s ease;
        background: rgba(0, 0, 0, 0.3);
        box-shadow: var(--mui-elevation-1);
      }
    }
  }
  `;

type ButtonCorner = 'small' | 'medium' | 'large' | 'round';

@customElement('mui-outline-button')
export class OutlineButton extends ButtonBase {
  static override styles = [baseStyles, styles];

  @property({ type: String, reflect: true }) corner: ButtonCorner = 'medium';
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-outline-button': OutlineButton;
  }
}
