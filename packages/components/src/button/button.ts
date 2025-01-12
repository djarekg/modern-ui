import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
// import styles from './button.css?inline';

type ButtonType = 'button' | 'submit' | 'reset' | 'menu';

const styles = css`
  button {
    all: unset;
    cursor: pointer;
    padding: .5rem 1.5rem;
    border-radius: var(--shape-medium);
    background: var(--color-primary-a10);
    color: var(--color-surface-a0);
    text-align: center;
    transition: background 0.3s;
    box-shadow: var(--shadow-button);
  }
`;

@customElement('mui-button')
export class Button extends LitElement {
  static override styles = [styles];

  @property({ type: String, reflect: true }) type: ButtonType = 'button';
  @property({ type: Boolean, reflect: true }) disabled = false;

  override render() {
    const classes = {
      disabled: this.disabled,
    };

    return html`
      <button
        class="mui-button ${classMap(classes)}"
        type=${this.type}>
        <slot></slot>
      </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-button': Button;
  }
}
