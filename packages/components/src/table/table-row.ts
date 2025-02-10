import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { createTableInternalRowSelectedEvent } from './events.js';
import { Table } from './table.js';

const styles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    display: table-row;
    overflow: hidden;
  }
`;

@customElement(TableRow.selector)
export class TableRow extends LitElement {
  static selector = 'mui-table-row';
  static override styles = [styles];

  @property({ type: Boolean, reflect: true }) header = false;
  @property({ reflect: true }) type = 'row';

  override connectedCallback(): void {
    super.connectedCallback();

    const table = this.closest<Table>('mui-table');

    if (table?.hasAttribute('selectable')) {
      this.addEventListener('click', this.#handleRowClick, { capture: true });
    }
  }

  override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  #handleRowClick(): void {
    console.log('TableRow#handleRowClick');
    const table = this.closest<Table>(Table.selector);

    if (table) {
      table.dispatchEvent(createTableInternalRowSelectedEvent(this));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-row': TableRow;
  }
}
