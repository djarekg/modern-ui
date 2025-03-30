import { html, useMemo, virtual } from 'haunted';
import { unsafeCSS } from 'lit';

import '@mui/components/card/index.js';
import '@mui/components/button/icon-button.js';
import '@mui/components/tooltip/tooltip.js';
import { useStyles } from '@mui/core';

import type { Product } from '@/types/graphql.js';

import styles from './product-list.css?inline';

type ProductListProps = {
  products: Product[];
};

export const ProductList = virtual(({ products }: ProductListProps) => {
  useStyles(unsafeCSS(styles));

  const renderProducts = useMemo(
    () =>
      products.map(
        ({ id, name, description }) => html`
        <mui-card key=${id}>
          <mui-card-header>
            ${name}
          </mui-card-header>
          <mui-card-footer>
            <span class="description">
              ${description}
            </span>
          </mui-card-footer>
        </mui-card>
      `,
      ),
    [products],
  );

  return html`
    <div class="container">
      ${renderProducts}
    </div>
  `;
});
