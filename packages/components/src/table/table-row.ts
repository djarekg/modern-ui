import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createTableInternalRowSelectedEvent } from './events.js';
import type { Table } from './table.js';

export const TABLE_ROW_SELECTOR = 'mui-table-row';

const styles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    display: table-row;
    overflow: hidden;
  }
`;

@customElement('mui-table-row')
export class TableRow extends LitElement {
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

  #handleRowClick(e: MouseEvent): void {
    e.stopPropagation();

    const table = this.closest<Table>('mui-table');

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
