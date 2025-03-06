import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

import sharedCss from './table-cell-shared.css.js';

import '../icon/icon.js';
import { useMemo } from 'haunted';

const styles = css`
  :host {
    --_table-header-cell-background-color: var(--mui-table-header-cell-background-color, var(--mui-color-background));
    --_container-padding-block: calc(var(--mui-table-cell-padding-block) - 3px);

    background: var(--_table-header-cell-background-color);
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

type TableHeaderCellProps = {
  align: 'center' | 'left' | 'right';
  add: boolean;
  addIcon: string;
  minWidth: number | undefined;
  edit: boolean;
  scope: 'col' | 'row';
  type: string;
  width: number;
};

/**
 * @cssprop --mui-table-header-cell-background-color - Background color of the table header cell. Default is `var(--mui-color-background)`.
 * @cssprop --mui-table-cell-padding-block - Block padding of the table cell. Default is `12px`.
 */
const TableHeaderCell = ({ add = false, addIcon = 'add' }: TableHeaderCellProps) => {
  useStyles([sharedCss, styles]);

  const renderAdd = useMemo(
    () => html`
      <div>
        <mui-icon>${addIcon}</mui-icon>
      </div>
    `,
    [addIcon],
  );

  return html`
    ${add ? renderAdd : html`<slot></slot>`}
  `;
};

define('mui-table-header-cell', TableHeaderCell, {
  observedAttributes: ['add', 'edit', 'scope', 'type'],
});

declare global {
  interface HTMLElementTagNameMap {
    'mui-table-header-cell': HTMLElement & TableHeaderCellProps;
  }
}
