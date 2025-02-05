import { SignalWatcher, html } from '@lit-labs/signals';
import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css``;

@customElement('app-inventory-page')
export class InventoryPage extends SignalWatcher(LitElement) {
  static styles = [styles];

  render() {
    return html`<div>Inventory</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-inventory-page': InventoryPage;
  }
}
