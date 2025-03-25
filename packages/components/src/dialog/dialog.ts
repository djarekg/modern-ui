import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './dialog.css.js';

/**
 * @cssprop --mui-dialog-inline-size - The inline size of the dialog.
 * @cssprop --mui-dialog-block-size - The block size of the dialog.
 * @cssprop --mui-dialog-inset - The inset of the dialog.
 * @cssprop --mui-dialog-background-color - The background color of the dialog.
 * @cssprop --mui-dialog-border-color - The border color of the dialog.
 * @cssprop --mui-dialog-border-width - The border width of the dialog.
 * @cssprop --mui-dialog-padding - The padding of the dialog.
 *
 * @trigger close - Dispatched when the dialog is closed.
 * @trigger opened - Dispatched when the dialog is opened.
 * @trigger transitionend - Dispatched when the dialog transition ends.
 *
 * A dialog is a type of modal window that appears in front of app content to
 */
@customElement('mui-dialog')
export class Dialog extends LitElement {
  static override styles = [styles];

  #open = false;

  /**
   * If true, the dialog will close when the scrim is clicked.
   */
  @property({ type: Boolean }) closeOnClick = false;

  /**
   * If true, the dialog is open.
   */
  @property({ type: Boolean })
  get open() {
    return this.#open;
  }
  set open(value: boolean) {
    if (value === this.#open) {
      return;
    }

    this.#open = value;
    // Trigger change detection for the `open` property.
    this.requestUpdate('open', value);
    this.dispatchEvent(new CustomEvent('opened', { bubbles: true, composed: true }));
  }

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
    const scrimClasses = {
      open: this.open,
    };

    return html`
      <div
        class="scrim ${classMap(scrimClasses)}"
        @click=${this.#handleScrimClick}>
      </div>
      <dialog
        role=${this.type === 'alert' ? 'alertdialog' : 'dialog'}
        .returnValue=${this.returnValue || ''}
        ?open=${this.open}
        @cancel=${this.#handleCancel}
        @close=${this.#handleClose}
        @click=${this.#handleDialogClick}
        @transitionend=${this.#handleDialogTransitionEnd}>
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
      </dialog>
    `;
  }

  #handleCancel() {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
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

  #handleScrimClick() {
    if (this.closeOnClick) {
      this.#handleCancel();
    }
  }

  #handleDialogTransitionEnd() {
    if (this.open) {
      // Native modal dialogs ignore autofocus and instead focus the first
      // focusable element in the dialog. This is a workaround to focus the first
      // autofocus element in the dialog.
      this.querySelector<HTMLElement>('[autofocus]')?.focus();
    }

    this.dispatchEvent(new CustomEvent('transitionend', { bubbles: true, composed: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-dialog': Dialog;
  }
}
