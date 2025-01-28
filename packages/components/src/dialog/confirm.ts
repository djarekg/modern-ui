import { type LitElement, isServer } from 'lit';
import type { Confirm } from './confirm-dialog.js';

type ConfirmOptions = {
  title: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
};

/**
 * Shows a confirmation dialog
 * @param title Title of the dialog
 * @param content Content of the dialog (i.e. Are you sure you want to delete this?)
 * @returns A promise that resolves when the user confirms the dialog, and rejects when the user cancels
 */
export const confirm = (options: ConfirmOptions) => {
  const dialog = document.createElement('mui-confirm') as Confirm;
  const { title, content, confirmText, cancelText } = options;

  dialog.title = title;
  dialog.content = content;
  dialog.confirmText = confirmText ?? 'OK';
  dialog.cancelText = cancelText ?? 'Cancel';
  dialog.show();

  const promise = new Promise<boolean>(resolve => {
    dialog.addEventListener('confirm', () => {
      resolve(true);
      dialog.remove();
    });

    dialog.addEventListener('cancel', () => {
      resolve(false);
      dialog.remove();
    });
  });

  if (!isServer) {
    const app = document.querySelector<LitElement>('app-index');
    app.shadowRoot?.appendChild(dialog);
  }

  return promise;
};
