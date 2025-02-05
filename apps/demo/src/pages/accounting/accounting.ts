import { SignalWatcher, html } from '@lit-labs/signals';
import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css``;

@customElement('app-accounting-page')
export class AccountingPage extends SignalWatcher(LitElement) {
  static styles = [styles];

  render() {
    return html`<div>Accounting</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-accounting-page': AccountingPage;
  }
}
