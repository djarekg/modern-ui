import '@mui/components/button/button.js';
import './dialog.js';

import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

import type { Dialog } from './dialog.js';

const styles = css`
  mui-dialog {
    inline-size: 500px;
  }

  h2 {
    margin-block-start: 0;
  }

  [slot=content],
  [slot=actions] {
    display: flex;
    justify-content: flex-end;
    inline-size: 100%;
    gap: 1rem;
  }

  [slot=actions] {
    margin-block-start: 2rem;
  }
`;

@customElement('mui-confirm')
export class Confirm extends LitElement {
  static override styles = [styles];

  @property({ reflect: false }) title = 'Confirm';
  @property({ reflect: false }) content = '';
  @property({ reflect: false }) confirmText = 'OK';
  @property({ reflect: false }) cancelText = 'Cancel';

  #dialogRef = createRef<Dialog>();

  override render() {
    return html`
      <mui-dialog ${ref(this.#dialogRef)}>
        <h2 slot="title">${this.title}</h2>
        <p slot="content">${this.content}</p>
        <div slot="actions">
          <mui-button @click=${this.#handleConfirm}>${this.confirmText}</mui-button>
          <mui-button @click=${this.#handleCancel}>${this.cancelText}</mui-button>
        </div>
      </mui-dialog>
    `;
  }

  show() {
    setTimeout(() => {
      this.#dialogRef.value.open = true;
    });
  }

  close() {
    this.#dialogRef.value.open = false;
  }

  #handleConfirm() {
    this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
  }

  #handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-confirm': Confirm;
  }
}
