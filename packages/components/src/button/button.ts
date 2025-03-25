import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import baseStyles from './button-base.css';
import { ButtonBase } from './button-base.js';

const styles = css`
  :host {
    button {
      all: unset;
      background: var(--mui-color-secondary-hsl);
      padding: 0.3rem 1.5rem;
      border-radius: var(--mui-shape-small);
      font-size: var(--mui-typescale-label-large-size);
      font-weight: 600;
      box-shadow: var(--mui-elevation-1);

      &:hover {
        filter: brightness(0.9);
        box-shadow: var(--mui-elevation-2);
      }
    }
  }
`;

@customElement('mui-button')
export class Button extends ButtonBase {
  static override styles = [baseStyles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-button': Button;
  }
}
