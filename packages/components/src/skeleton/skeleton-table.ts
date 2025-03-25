import { useMemo } from 'haunted';
import { html } from 'lit';

import { define, randomInRange } from '@mui/core';

import '../table/table.js';

import './skeleton.js';

const from = Array.from;

type SkeletonTableProps = {
  rows: number;
  columns: number;
  hasHeader: boolean;
};

/**
 * The skeleton table component is used to create a placeholder for loading content.
 *
 * @property {number} rows - The number of rows in the table.
 * @property {number} columns - The number of columns in the table.
 *
 * @example
 * ```ts
 * import '@mui/components/skeleton-table.js';
 *
 * html`
 *   <mui-skeleton-table rows="5" columns="3"></mui-skeleton-table>
 * `;
 * ```
 */
const SkeletonTable = ({ rows = 5, columns = 3, hasHeader }: SkeletonTableProps) => {
  const renderHeaderRow = useMemo(
    () => html`
    <mui-table-row header height="53px">
      ${from({ length: columns }).map(
        () => html`
          <mui-table-header-cell>
            <mui-skeleton body medium width="100%"></mui-skeleton>
          </mui-table-header-cell>
        `,
      )}
    </mui-table-row>
  `,
    [columns],
  );

  const renderCells = () =>
    from({ length: columns }).map(
      () => html`
          <mui-table-cell>
            <mui-skeleton body medium width="${randomInRange(25, 95)}%"></mui-skeleton>
          </mui-table-cell>
        `,
    );

  const renderRows = useMemo(
    () =>
      from({ length: rows }).map(
        () => html`
          <mui-table-row height="53px">${renderCells()}</mui-table-row>
        `,
      ),
    [rows],
  );

  console.log(`hasHeader: ${hasHeader}`);

  return html`
    <mui-table>
      ${hasHeader && renderHeaderRow}
      ${renderRows}
    </mui-table>
  `;
};

define('mui-skeleton-table', SkeletonTable, {
  observedAttributes: ['rows', 'columns', 'hasHeader'],
});

declare global {
  interface HTMLElementTagNameMap {
    'mui-skeleton-table': HTMLElement & SkeletonTableProps;
  }
}
