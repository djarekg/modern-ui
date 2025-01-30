import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { type TableInternalRowSelectedEvent, createTableRowSelectedEvent } from './events.js';
import type { TableRow } from './table-row.js';

const styles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    --_table-border-color: var(--mui-table-border-color, var(--mui-color-border));
    --_table-font-size: var(--mui-table-font-size, 14px);

    display: table;
    table-layout: auto;
    inline-size: 100%;
    border: 1px solid var(--_table-border-color);
    border-radius: var(--mui-shape-large);
    font-size: var(--_table-font-size);
  }
`;

/**
 * @cssprops --mui-table-border-color - Border color of the table. Default is `var(--mui-color-border)`.
 * @cssprops --mui-table-font-size - Font size of the table. Default is `14px`.
 *
 * @slot - Default slot for table rows.
 */
@customElement('mui-table')
export class Table extends LitElement {
  static override styles = [styles];

  @property({ reflect: true }) type = 'table';
  @property({ type: Boolean }) selectable = false;

  @queryAssignedElements({ selector: 'mui-table-row:not([header])', flatten: true })
  rows: TableRow[];

  override connectedCallback(): void {
    super.connectedCallback();

    if (this.selectable) {
      this.addEventListener('internal-row-selected', this.#handleInternalRowSelected);
      this.addEventListener('internal-row-edit', this.#handleInternalRowEdit);
    }
  }

  override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  async #handleInternalRowSelected(e: Event): Promise<void> {
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

    this.dispatchEvent(createTableRowSelectedEvent(row));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-table': Table;
  }
}
