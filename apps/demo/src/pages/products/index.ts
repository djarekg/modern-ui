import { component } from 'haunted';
import { type LitElement, css, html } from 'lit';

import { useStyles } from '@mui/components';

const styles = css`
  h1 {
    color: purple;
  }
`;

const ProductsPage = () => {
  useStyles([styles]);

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

customElements.define('app-products-page', component(ProductsPage));

declare global {
  interface HTMLElementTagNameMap {
    'app-products-page': LitElement;
  }
}
