import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const styles = css`
  :host {
    margin: auto;
  }

  .scrim {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  dialog {
    min-block-size: 50px;
    min-inline-size: 320px;
    z-index: 1001;
    inset: 0;
    background: var(--mui-palette-surface-a10);
    box-shadow: var(--mui-elevation-5);
    border-radius: var(--mui-shape-large);
    border: 1px solid var(--mui-palette-surface-a20);
    color: var(--mui-color-text);
    overflow: hidden;
  }
`;

@customElement('mui-dialog')
export class Dialog extends LitElement {
  static override styles = [styles];

  @property({ type: Boolean }) open = false;

  /**
   * Gets or sets the dialog's return value, usually to indicate which button
   * a user pressed to close it.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue
   */
  @property({ attribute: false }) returnValue = '';

  /**
   * The type of dialog for accessibility. Set this to `alert` to announce a
   * dialog as an alert dialog.
   */
  @property() type?: 'alert';

  override render() {
    return html`
      <div class="scrim"></div>
      <dialog
        ?open=${this.open}
        role=${this.type === 'alert' ? 'alertdialog' : 'dialog'}
        @cancel=${this.#handleCancel}
        @close=${this.#handleClose}
        @click=${this.#handleDialogClick}
        .returnValue=${this.returnValue || ''}>
        <article>
          <header class="header">
            <slot name="title"></slot>
            <slot name="icon"></slot>
          </header>
          <section class="content">
            <slot name="content"></slot>
          </section>
          <footer class="actions">
            <slot name="actions"></slot>
          </footer>
        </article>
      </dialog>
    `;
  }

  #handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    this.open = false;
  }

  #handleClose() {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    this.open = false;
  }

  #handleDialogClick({ target }: Event) {
    if (target === this) {
      this.#handleCancel();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-dialog': Dialog;
  }
}
