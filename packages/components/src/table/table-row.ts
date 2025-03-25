import { useEffect } from 'haunted';
import { css, html, unsafeCSS } from 'lit';

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
  height: string;
};

const TableRow = ({ height }: TableRowProps) => {
  useStyles([
    styles,
    css`
      :host {
        block-size: ${unsafeCSS(height)};
      }
    `,
  ]);

  const _this = useHost();
  const table = _this.closest<Table>('mui-table');
  const handleRowClick = () =>
    table.dispatchEvent(createTableInternalRowSelectedEvent(_this as TableRow));

  useEffect(() => {
    if (table.hasAttribute('selectable')) {
      _this.addEventListener('click', handleRowClick, { capture: true });
    }

    return () => _this.removeEventListener('click', handleRowClick, { capture: true });
  }, []);

  return html`<slot></slot>`;
};

define('mui-table-row', TableRow, { observedAttributes: ['header', 'type', 'height'] });

export type TableRow = HTMLElement & TableRowProps;

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-row': TableRow;
  }
}
