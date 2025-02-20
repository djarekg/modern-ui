import { SignalWatcher, html } from '@lit-labs/signals';
import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css``;

@customElement('app-accounting-reports-page')
export class AccountingReportsPage extends SignalWatcher(LitElement) {
  static styles = [styles];

  render() {
    return html`<div>Accounting Reports</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-accounting-reports-page': AccountingReportsPage;
  }
}
