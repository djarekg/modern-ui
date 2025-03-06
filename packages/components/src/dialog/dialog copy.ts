// import { useCallback, useLayoutEffect, useState } from 'haunted';
// import { type LitElement, html } from 'lit';
// import { classMap } from 'lit/directives/class-map.js';

// import { define } from '@mui/core';

// import styles from './dialog.css.js';

// type DialogProps = {
//   closeOnClick: boolean;
//   open: boolean;
//   returnValue: string;
//   type: 'alert' | undefined;
// };

// /**
//  * A dialog is a type of modal window that appears in front of app content to
//  * @cssprop --mui-dialog-inline-size - The inline size of the dialog.
//  * @cssprop --mui-dialog-block-size - The block size of the dialog.
//  * @cssprop --mui-dialog-inset - The inset of the dialog.
//  * @cssprop --mui-dialog-background-color - The background color of the dialog.
//  * @cssprop --mui-dialog-border-color - The border color of the dialog.
//  * @cssprop --mui-dialog-border-width - The border width of the dialog.
//  * @cssprop --mui-dialog-padding - The padding of the dialog.
//  * @trigger close - Dispatched when the dialog is closed.
//  * @trigger opened - Dispatched when the dialog is opened.
//  * @trigger transitionend - Dispatched when the dialog transition ends.
//  */
// function Dialog(this: HTMLElement, { closeOnClick, open, returnValue, type }: DialogProps) {
//   useState(styles);

//   useLayoutEffect(() => {
//     // Trigger change detection for the `open` property.
//     // (this as LitElement).requestUpdate('open', open);
//     this.dispatchEvent(new CustomEvent('opened', { bubbles: true, composed: true }));
//   }, [open]);

//   const scrimClasses = {
//     open,
//   };

//   const handleCancel = () => {
//     this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
//     open = false;
//   };

//   const handleClose = () => {
//     this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
//     open = false;
//   };

//   const handleDialogClick = ({ target }: Event) => {
//     if (target === this) {
//       handleCancel();
//     }
//   };

//   const handleScrimClick = () => {
//     if (closeOnClick) {
//       handleCancel();
//     }
//   };

//   const handleDialogTransitionEnd = useCallback(() => {
//     if (open) {
//       // Native modal dialogs ignore autofocus and instead focus the first
//       // focusable element in the dialog. This is a workaround to focus the first
//       // autofocus element in the dialog.-
//       this.shadowRoot.querySelector<HTMLElement>('[autofocus]')?.focus();
//     }

//     this.dispatchEvent(new CustomEvent('transitionend', { bubbles: true, composed: true }));
//   }, [open]);

//   return html`
//     <div
//       class="scrim ${classMap(scrimClasses)}"
//       @click=${handleScrimClick}>
//     </div>
//     <dialog
//       role=${type === 'alert' ? 'alertdialog' : 'dialog'}
//       .returnValue=${returnValue || ''}
//       ?open=${open}
//       @cancel=${handleCancel}
//       @close=${handleClose}
//       @click=${handleDialogClick}
//       @transitionend=${handleDialogTransitionEnd}>
//       <header class="header">
//         <slot name="title"></slot>
//         <slot name="icon"></slot>
//       </header>
//       <section class="content">
//         <slot name="content"></slot>
//       </section>
//       <footer class="actions">
//         <slot name="actions"></slot>
//       </footer>
//     </dialog>
//   `;
// }

// define('mui-dialog', Dialog);

// declare global {
//   interface HTMLElementTagNameMap {
//     'mui-dialog': HTMLElement & DialogProps;
//   }
// }
