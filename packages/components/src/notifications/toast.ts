import { useCallback, useEffect } from 'haunted';
import { type LitElement, html, isServer } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import { define, delay, useHost, useStyles } from '@mui/core';

import '../icon/icon.js';

import styles from './toast.css.js';
import type { ToastOptions, ToastType } from './types.js';

const DISPLAYED_DURATION = 3_000;
const SHOWING_DURATION = 300;
const HIDING_DURATION = 500;

/**
 * Show a toast notification.
 *
 * @param options The options for the toast.
 */
export const toast = async (options: ToastOptions) => {
  const {
    message,
    duration = DISPLAYED_DURATION,
    type = 'info',
    appendToLitElement = 'app-index',
  } = options;
  const toast = document.createElement('mui-toast');
  toast.type = type;
  toast.message = message;

  if (!isServer) {
    const app = document.querySelector<LitElement>(appendToLitElement);
    app.shadowRoot?.appendChild(toast);

    // Wait for the toast to be appended to the DOM.
    await 0;

    toast.show = true;
    await delay(duration);
    toast.show = false;
    await delay(HIDING_DURATION);
    toast.remove();
  }
};

type ToastProps = {
  message: string;
  show: boolean;
  type: ToastType;
};

const popoverRef = createRef<HTMLElement>();

const Toast = ({ message = '', show, type = 'info' }: ToastProps) => {
  useStyles(styles);

  const _this = useHost();

  const _show = useCallback(async () => {
    const popover = popoverRef.value;
    popover.showPopover();
    popover.setAttribute('opening', '');
    await delay(SHOWING_DURATION);
    popover.removeAttribute('opening');
    popover.setAttribute('opened', '');
  }, []);

  const _hide = useCallback(async () => {
    const popover = popoverRef.value;
    popover.setAttribute('closing', '');
    await delay(SHOWING_DURATION);
    popover.removeAttribute('opened');
    popover.removeAttribute('closing');
    popover.hidePopover();
  }, []);

  useEffect(() => {
    _this.setAttribute('type', type);
  }, [type]);

  useEffect(async () => {
    await (show ? _show() : _hide());
  }, [show]);

  return html`
    <aside ${ref(popoverRef)} popover>
      <mui-icon>info</mui-icon>
      <span>${message}</span>
    </aside>
  `;
};

define('mui-toast', Toast, { observedAttributes: ['type'] });

declare global {
  interface HTMLElementTagNameMap {
    'mui-toast': HTMLElement & ToastProps;
  }
}
