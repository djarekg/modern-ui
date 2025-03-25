import { html, virtual } from 'haunted';

import '@mui/components/card/card.js';

type ProductProps = {
  /**
   * Product ID.
   */
  id: string;
};

export const ProductPage = virtual(({ id }: ProductProps) => {
  const renderCards = html`
      <mui-card>
        <div slot="header">Product ${id}</div>
        <div slot="content">
          <p>Product ${id} details.</p>
        </div>
        <div slot="footer">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </mui-card>
    `;

  return html`
    <div>
      <h1>Product ${id}</h1>
      ${renderCards}
    </div>
  `;
});
