import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css`
  h1 {
    color: purple;
  }
`;

const ProductsPage = () => {
  useStyles(styles);

  const handleClick = () => {
    console.log('Product 1 clicked');
  };

  return html`
    <div>
      <h1>Products</h1>
      <button @click=${handleClick}>Product 1</button>
    </div>
  `;
};

define('app-products-page', ProductsPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-products-page': HTMLElement;
  }
}
