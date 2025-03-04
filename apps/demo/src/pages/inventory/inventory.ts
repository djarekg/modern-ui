import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css``;

const InventoryPage = () => {
  useStyles(styles);

  return html`<div>Inventory</div>`;
};

define('app-inventory-page', InventoryPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-inventory-page': HTMLElement;
  }
}
