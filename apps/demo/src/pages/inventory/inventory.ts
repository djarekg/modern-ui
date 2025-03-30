import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';
import '@mui/components/skeleton/skeleton-table.js';
import { useTitle } from '@mui/router';

const styles = css``;

const InventoryPage = () => {
  useStyles(styles);
  useTitle('inventory');

  return html`
    <mui-skeleton-table rows="7" columns="4"></mui-skeleton-table>
  `;
};

define('app-inventory-page', InventoryPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-inventory-page': HTMLElement;
  }
}
