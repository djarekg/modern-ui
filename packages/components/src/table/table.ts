import { useEffect } from 'haunted';
import { css, html } from 'lit';

import { define, useHost, useStyles } from '@mui/core';

import {
  type TableEvent,
  createTableRowEditEvent,
  createTableRowSelectedEvent,
  createTableRowViewEvent,
} from './events.js';
import type { TableRow } from './table-row.js';

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

type TableProps = {
  selectable: boolean;
};

/**
 * Table component.
 * @cssprops --mui-table-border-color - Border color of the table. Default is `var(--mui-color-border)`.
 * @cssprops --mui-table-font-size - Font size of the table. Default is `14px`.
 * @fires row-selected - Fired when a row is selected.
 * @fires row-view - Fired when a row is viewed.
 * @fires row-edit - Fired when a row is edited.
 */
const Table = ({ selectable }: TableProps) => {
  useStyles(styles);

  const _this = useHost();
  const rows = Array.from(_this.querySelectorAll<TableRow>('mui-table-row:not([header])'));

  const handleInternalEvent = async (e: Event, customEvent: (row: TableRow) => TableEvent) => {
    e.stopPropagation();

    const prevRowSelected = rows.find(r => r.getAttribute('aria-selected') === 'true');
    if (prevRowSelected) {
      prevRowSelected.removeAttribute('selected');
      prevRowSelected.setAttribute('aria-selected', 'false');
    }

    const { row } = (e as TableEvent).detail;
    row.setAttribute('selected', '');
    row.setAttribute('aria-selected', 'true');

    await 0;

    _this.dispatchEvent(customEvent(row));
  };

  const addEventListener = (event: string, customEvent: (row: TableRow) => TableEvent) => {
    _this.addEventListener(event, e => handleInternalEvent(e, customEvent));
  };

  const removeEventListener = (event: string, customEvent: (row: TableRow) => TableEvent) => {
    _this.removeEventListener(event, e => handleInternalEvent(e, customEvent));
  };

  useEffect(() => {
    if (selectable) {
      addEventListener('internal-row-selected', createTableRowSelectedEvent);
      addEventListener('internal-row-view', createTableRowViewEvent);
      addEventListener('internal-row-edit', createTableRowEditEvent);
    }

    return () => {
      removeEventListener('internal-row-selected', createTableRowSelectedEvent);
      removeEventListener('internal-row-view', createTableRowViewEvent);
      removeEventListener('internal-row-edit', createTableRowEditEvent);
    };
  }, [selectable]);

  return html`<slot></slot>`;
};

define('mui-table', Table, { observedAttributes: ['selectable'] });

export type Table = HTMLElement & TableProps;

declare global {
  interface HTMLElementTagNameMap {
    'mui-table': Table;
  }
}
