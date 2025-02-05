import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

type ButtonType = 'button' | 'submit' | 'reset' | 'menu';

export class ButtonBase extends LitElement {
  @property({ type: String, reflect: true }) type: ButtonType = 'button';
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.classList.add('mui-button');
  }

  override render() {
    const classes = {};

    return html`
      <button
        class="${classMap(classes)}"
        type=${this.type}
        ?disabled=${this.disabled}>
        <slot></slot>
      </button>`;
  }
}
