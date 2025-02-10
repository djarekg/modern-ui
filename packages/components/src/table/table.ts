import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import {
  type TableInternalRowSelectedEvent,
  createTableRowEditEvent,
  createTableRowSelectedEvent,
  createTableRowViewEvent,
} from './events.js';
import { TableRow } from './table-row.js';

const styles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    --_table-border-color: var(--mui-table-border-color, var(--mui-color-border));
    --_table-font-size: var(--mui-table-font-size, 14px);
    --_table-color-background: var(--mui-table-background-color, transparent);

    display: table;
    table-layout: auto;
    inline-size: 100%;
    border: 1px solid var(--_table-border-color);
    border-radius: var(--mui-shape-medium);
    font-size: var(--_table-font-size);
    background: var(--_table-color-background);
  }
`;

/**
 * @fires row-selected - Fired when a row is selected.
 * @fires row-view - Fired when a row is viewed.
 * @fires row-edit - Fired when a row is edited.
 * @cssprops --mui-table-border-color - Border color of the table. Default is `var(--mui-color-border)`.
 * @cssprops --mui-table-font-size - Font size of the table. Default is `14px`.
 *
 * @slot - Default slot for table rows.
 */
@customElement(Table.selector)
export class Table extends LitElement {
  static selector = 'mui-table';
  static override styles = [styles];

  @property({ reflect: true }) type = 'table';
  @property({ type: Boolean }) selectable = false;

  @queryAssignedElements({ selector: `${TableRow.selector}:not([header])`, flatten: true })
  rows: TableRow[];

  override connectedCallback(): void {
    super.connectedCallback();

    if (this.selectable) {
      this.addEventListener('internal-row-selected', this.#handleInternalRowSelected);
      this.addEventListener('internal-row-view', this.#handleInternalRowView);
      this.addEventListener('internal-row-edit', this.#handleInternalRowEdit);
    }
  }

  override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  async #handleInternalRowSelected(e: Event): Promise<void> {
    console.log('Table#handleInternalRowSelected');
    e.stopPropagation();

    const { row } = (e as TableInternalRowSelectedEvent).detail;

    const prevRowSelected = this.rows.find(r => r.getAttribute('aria-selected') === 'true');

    if (prevRowSelected) {
      prevRowSelected.removeAttribute('selected');
      prevRowSelected.setAttribute('aria-selected', 'false');
    }

    row.setAttribute('selected', '');
    row.setAttribute('aria-selected', 'true');

    await this.updateComplete;

    this.dispatchEvent(createTableRowSelectedEvent(row));
  }

  async #handleInternalRowView(e: Event): Promise<void> {
    console.log('Table#handleInternalRowView');
    e.stopPropagation();

    const { row } = (e as TableInternalRowSelectedEvent).detail;

    const prevRowSelected = this.rows.find(r => r.getAttribute('aria-selected') === 'true');

    if (prevRowSelected) {
      prevRowSelected.removeAttribute('selected');
      prevRowSelected.setAttribute('aria-selected', 'false');
    }

    row.setAttribute('selected', '');
    row.setAttribute('aria-selected', 'true');

    await this.updateComplete;

    this.dispatchEvent(createTableRowViewEvent(row));
  }

  async #handleInternalRowEdit(e: Event): Promise<void> {
    e.stopPropagation();

    const { row } = (e as TableInternalRowSelectedEvent).detail;

    const prevRowSelected = this.rows.find(r => r.getAttribute('aria-selected') === 'true');

    if (prevRowSelected) {
      prevRowSelected.removeAttribute('selected');
      prevRowSelected.setAttribute('aria-selected', 'false');
    }

    row.setAttribute('selected', '');
    row.setAttribute('aria-selected', 'true');

    await this.updateComplete;

    this.dispatchEvent(createTableRowEditEvent(row));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-table': Table;
  }
}
