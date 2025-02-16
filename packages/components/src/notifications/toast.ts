import { LitElement, css, html, isServer } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

import { delay } from '@mui/core';

import '../icon/icon.js';

import type { ToastOptions, ToastType } from './types.js';

/**
 * Show a toast notification.
 *
 * @param options The options for the toast.
 */
export const toast = async (options: ToastOptions) => {
  const {
    message,
    duration = DEFAULT_DURATION,
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

    await toast.show();
    await delay(duration);
    await toast.hide();
    toast.remove();
  }
};

const DEFAULT_DURATION = 3_000;

const styles = css`
  :host {
    --_popover-background-color: var(--mui-palette-surface-a0);
  }

  [popover] {
    --mui-icon-size: 24px;

    content-visibility: hidden;
    visibility: hidden;
    min-block-size: 50px;
    z-index: 900;
    inset: 1rem 0 auto 0;
    background: var(--_popover-background-color);
    box-shadow: var(--mui-elevation-4);
    border-radius: var(--mui-shape-small);
    border: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0 1rem;
    opacity: 0;

    &:popover-open {
      content-visibility: visible;
      visibility: visible;
    }

    &:is([opened]) {
      opacity: 1;
    }

    &:is([opening]) {
      opacity: 1;
      transition: opacity 0.3s;
    }

    &:is([closing]) {
      opacity: 0;
      transition: opacity 0.5s;
    }
  }

  aside {
    color: var(--mui-color-text);

    mui-icon {
      color: var(--mui-color-text);
      /* margin-inline-end: 0.5rem; */
    }
  }

  :host([toast-type=info]) {
    --_popover-background-color: var(--mui-color-alert-info);
  }

  :host([toast-type=success]) {
    --_popover-background-color: var(--mui-color-alert-success);
  }

  :host([toast-type=warning]) {
    --_popover-background-color: var(--mui-color-alert-warning);
  }

  :host([toast-type=error]) {
    --_popover-background-color: var(--mui-color-alert-error);
  }
`;

@customElement('mui-toast')
export class Toast extends LitElement {
  static styles = [styles];

  /**
   * Reference to the popover element.
   */
  #popoverRef = createRef<HTMLElement>();

  /**
   * Popover element.
   */
  get #popover() {
    return this.#popoverRef.value;
  }

  /**
   * The type of toast to display.
   */
  @property({ attribute: 'toast-type', reflect: true }) type: ToastType = 'info';

  @property() message = '';

  render() {
    return html`
      <aside ${ref(this.#popoverRef)} popover>
        <mui-icon>info</mui-icon>
        <span>${this.message}</span>
      </aside>
    `;
  }

  /**
   * Show the toast.
   */
  async show() {
    this.#popover.showPopover();
    this.#popover.setAttribute('opening', '');
    await delay(300);
    this.#popover.removeAttribute('opening');
    this.#popover.setAttribute('opened', '');
  }

  /**
   * Hide the toast.
   */
  async hide() {
    this.#popover.setAttribute('closing', '');
    await delay(500);
    this.#popover.removeAttribute('opened');
    this.#popover.removeAttribute('closing');
    this.#popover.hidePopover();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-toast': Toast;
  }
}
