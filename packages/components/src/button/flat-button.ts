import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import baseStyles from './button-base.css';
import { ButtonBase } from './button-base.js';

const styles = css`
  :host {
    button {
      background: none;
    }
  }
`;

@customElement('mui-flat-button')
export class FlatButton extends ButtonBase {
  static override styles = [baseStyles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-flat-button': FlatButton;
  }
}
