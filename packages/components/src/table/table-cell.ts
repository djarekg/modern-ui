import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { createTableInternalRowSelectedEvent } from './events.js';
import sharedCss from './table-cell-shared.css.js';

import '../icon/icon.js';

const styles = css`
  :host([edit]) mui-icon {
    --mui-icon-size: 20px;
  }

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
  @property() editIcon = 'edit';
  @property({ reflect: true }) type = 'cell';

  override render(): TemplateResult {
    return html`
      ${when(
        this.edit,
        () => this.#renderEdit(),
        () => this.#renderSlot(),
      )}
    `;
  }

  #renderSlot(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  #renderEdit(): TemplateResult {
    return html`
      <div @click=${this.#handleEditClick}>
        <mui-icon>${this.editIcon}</mui-icon>
      </div>
    `;
  }

  #handleEditClick(e: MouseEvent): void {
    e.stopPropagation();

    const row = this.closest('mui-table-row');

    if (row) {
      this.dispatchEvent(createTableInternalRowSelectedEvent(row));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-cell': TableCell;
  }
}
