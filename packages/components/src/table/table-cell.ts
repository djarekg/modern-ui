import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../button/icon-button.js';

import { createTableInternalRowSelectedEvent, createTableInternalRowViewEvent } from './events.js';
import sharedCss from './table-cell-shared.css.js';
import { TableRow } from './table-row.js';

const styles = css`
  :host-context(:is(mui-table-row:last-child)):host(:is(:first-child)) {
    border-end-start-radius: var(--mui-shape-medium);
  }

  :host-context(:is(mui-table-row:last-child)):host(:is(:last-child)) {
    border-end-end-radius: var(--mui-shape-medium);
  }

  :host-context(:is(mui-table-row:hover:not([header]), :is(mui-table-row[aria-selected="true"]))) {
    --_background-color: var(--mui-table-row-hover-background-color, var(--mui-palette-surface-a20));
    --_color: var(--mui-table-row-hover-color, #fff);
    --mui-color-icon: var(--_color);

    background: var(--_background-color);
    color: var(--_color);
  }
`;

/**
 * @cssprop --mui-table-hover-color - Background color of the table cell when hovered. Default is `var(--mui-color-on-background)`.
 */
@customElement('mui-table-cell')
export class TableCell extends LitElement {
  static override styles = [sharedCss, styles];

  @property({ type: Boolean, reflect: true }) edit = false;
  @property({ type: Boolean, reflect: true }) view = false;
  @property() editIcon = 'edit';
  @property() viewIcon = 'pageview';
  @property({ reflect: true }) type = 'cell';

  override render(): TemplateResult {
    if (this.edit) {
      return this.#renderEdit();
    }

    if (this.view) {
      return this.#renderView();
    }

    return this.#renderSlot();
  }

  #renderSlot(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  #renderEdit(): TemplateResult {
    return html`
      <div>
        <mui-icon-button @click=${this.#handleEditClick}>${this.editIcon}</mui-icon-button>
      </div>
    `;
  }

  #renderView(): TemplateResult {
    return html`
      <div>
        <mui-icon-button @click=${this.#handleViewClick}>${this.viewIcon}</mui-icon-button>
      </div>
    `;
  }

  #handleEditClick(e: MouseEvent): void {
    e.stopPropagation();

    const row = this.closest<TableRow>(TableRow.selector);

    if (row) {
      this.dispatchEvent(createTableInternalRowSelectedEvent(row));
    }
  }

  #handleViewClick(e: MouseEvent): void {
    e.stopPropagation();

    const row = this.closest<TableRow>(TableRow.selector);

    if (row) {
      this.dispatchEvent(createTableInternalRowViewEvent(row));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-cell': TableCell;
  }
}
