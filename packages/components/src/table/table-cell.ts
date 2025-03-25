import { useMemo } from 'haunted';
import { css, html, unsafeCSS } from 'lit';

import { define, useHost, useStyles } from '@mui/core';

import '../button/icon-button.js';

import { createTableInternalRowSelectedEvent, createTableInternalRowViewEvent } from './events.js';
import type { TableRow } from './table-row.js';

import sharedCss from './table-cell-shared.css.js';

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

type TableCellProps = {
  edit: boolean;
  view: boolean;
  editIcon: string;
  viewIcon: string;
  type: string;
  height: string;
  width: string;
};

/**
 * @cssprop --mui-table-hover-color - Background color of the table cell when hovered. Default is `var(--mui-color-on-background)`.
 */
const TableCell = ({
  edit,
  view,
  editIcon = 'edit',
  viewIcon = 'pageview',
  height = 'auto',
  width = 'auto',
}: TableCellProps) => {
  useStyles([
    sharedCss,
    styles,
    css`
      :host {
        inline-size: ${unsafeCSS(width)};
        block-size: ${unsafeCSS(height)};
      }
    `,
  ]);

  const _this = useHost();

  const handleEditClick = (e: MouseEvent) => {
    e.stopPropagation();

    const row = _this.closest<TableRow>('mui-table-row');
    if (row) {
      _this.dispatchEvent(createTableInternalRowSelectedEvent(row));
    }
  };

  const handleViewClick = (e: MouseEvent) => {
    e.stopPropagation();

    const row = _this.closest<TableRow>('mui-table-row');
    if (row) {
      _this.dispatchEvent(createTableInternalRowViewEvent(row));
    }
  };

  const renderEdit = useMemo(
    () => html`
      <div>
        <mui-icon-button @click=${handleEditClick}>${editIcon}</mui-icon-button>
      </div>
    `,
    [editIcon],
  );

  const renderView = useMemo(
    () => html`
      <div>
        <mui-icon-button @click=${handleViewClick}>${viewIcon}</mui-icon-button>
      </div>
    `,
    [viewIcon],
  );

  if (edit) {
    return renderEdit;
  }

  if (view) {
    return renderView;
  }

  return html`<slot></slot>`;
};

define('mui-table-cell', TableCell, { observedAttributes: ['edit', 'view', 'type', 'width'] });

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-cell': HTMLElement;
  }
}
