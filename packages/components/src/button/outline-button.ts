import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import baseStyles from './button-base.css';
import { ButtonBase } from './button-base.js';

const styles = css`
  :host {
    button {
      background: none;
      border: 1px solid var(--mui-color-text);
    }
  }
`;

@customElement('mui-outline-button')
export class OutlineButton extends ButtonBase {
  static override styles = [baseStyles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-outline-button': OutlineButton;
  }
}
