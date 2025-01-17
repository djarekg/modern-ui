import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

type ButtonType = 'button' | 'submit' | 'reset' | 'menu';

const styles = css`
  :host {
    button {
      all: unset;
      cursor: pointer;
      padding: .5rem 1.5rem;
      border-radius: var(--mui-shape-small);
      background: var(--mui-color-primary);
      color: var(--mui-color-text);
      text-align: center;
      transition: background 0.3s;
      box-shadow: var(--shadow-button);
    }

    [inert] :host button,
    :host button[disabled] {
        pointer-events: none;
    }
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
        type=${this.type}
        .disabled=${this.disabled}>
        <slot></slot>
      </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-button': Button;
  }
}
