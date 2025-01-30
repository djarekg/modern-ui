import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import sharedCss from './table-cell-shared.css.js';

import '../icon/icon.js';

const styles = css`
  :host {
    /* --mui-color-icon: var(--md-sys-color-blue); */
    --_container-padding-block: calc(var(--mui-table-cell-padding-block) - 3px);

    background: var(--mui-color-hover);
    border-block-end: 1px solid var(--mui-color-border);
    padding-block: var(--_container-padding-block);
  }

  :host(:is(:first-child)) {
    border-start-start-radius: var(--mui-shape-medium);
  }

  :host(:is(:last-child)) {
    border-start-end-radius: var(--mui-shape-medium);
  }

  :host([add]) mui-icon {
    --mui-icon-size: 24px;
  }
`;

/**
 * @cssprop --mui-table-cell-padding-block - Block padding of the table cell. Default is `12px`.
 *
 * @slot - Default slot for table header cells.
 */
@customElement('mui-table-header-cell')
export class TableHeaderCell extends LitElement {
  static override styles = [sharedCss, styles];

  @property() align: 'center' | 'left' | 'right' = 'left';
  @property({ type: Boolean, reflect: true }) add = false;
  @property() addIcon = 'add';
  @property({ type: Number }) minWidth: number | undefined;
  @property({ type: Boolean, reflect: true }) edit = false;
  @property({ reflect: true }) scope: 'col' | 'row' = 'col';
  @property({ reflect: true }) type = 'columnheader';
  @property({ type: Number }) width = 100;

  override render(): TemplateResult {
    return html`
      ${when(
        this.add,
        () => this.#renderAdd(),
        () => this.#renderSlot(),
      )}
    `;
  }

  #renderSlot(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  #renderAdd(): TemplateResult {
    return html`
      <div>
        <mui-icon>${this.addIcon}</mui-icon>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-header-cell': TableHeaderCell;
  }
}
