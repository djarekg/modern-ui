import { useLayoutEffect } from 'haunted';
import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

import '../button/button.js';

import './dialog.js';

const styles = css`
  mui-dialog {
    inline-size: 500px;
  }

  h2 {
    margin-block-start: 0;
  }

  p {
    margin: 0;
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

type ConfirmProps = {
  title: string;
  content: string;
  confirmText: string;
  cancelText: string;
  openOnInit: boolean;
};

function Confirm(
  this: HTMLElement,
  { cancelText, confirmText, content, title, openOnInit }: ConfirmProps,
) {
  useStyles(styles);

  const handleConfirm = () => {
    this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
  };

  const handleCancel = () => {
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
  };

  return html`
    <mui-dialog .open=${openOnInit}>
      <h2 slot="title">${title}</h2>
      <p slot="content">${content}</p>
      <div slot="actions">
        <mui-button @click=${handleConfirm}>${confirmText}</mui-button>
        <mui-button @click=${handleCancel}>${cancelText}</mui-button>
      </div>
    </mui-dialog>
  `;
}

define('mui-confirm', Confirm);

declare global {
  interface HTMLElementTagNameMap {
    'mui-confirm': HTMLElement & ConfirmProps;
  }
}
