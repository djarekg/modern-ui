import { useEffect } from 'haunted';
import { css, html } from 'lit';

import { define, useHost, useStyles } from '@mui/core';

import { createTableInternalRowSelectedEvent } from './events.js';
import type { Table } from './table.js';

const styles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    display: table-row;
    overflow: hidden;
  }
`;

type TableRowProps = {
  header: boolean;
  type: string;
};

const TableRow = () => {
  useStyles(styles);

  const _this = useHost();
  const table = _this.closest<Table>('mui-table');
  const handleRowClick = () => table.dispatchEvent(createTableInternalRowSelectedEvent(this));

  useEffect(() => {
    if (table.hasAttribute('selectable')) {
      _this.addEventListener('click', handleRowClick, { capture: true });
    }

    return () => _this.removeEventListener('click', handleRowClick, { capture: true });
  }, []);

  return html`<slot></slot>`;
};

define('mui-table-row', TableRow, { observedAttributes: ['header', 'type'] });

export type TableRow = HTMLElement & TableRowProps;

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-row': TableRow;
  }
}
