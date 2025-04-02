import { html, virtual } from 'haunted';
import { unsafeCSS } from 'lit';

import '@mui/components/card/index.js';
import '@mui/components/button/icon-button.js';
import '@mui/components/tooltip/tooltip.js';
import { format, useStyles } from '@mui/core';

import type { GetProductsByProductTypeIdQuery } from '@/types/graphql.js';

import styles from './product-list.css?inline';

type ProductListProps = {
  products: GetProductsByProductTypeIdQuery['products'];
};

const IMAGE_URL = import.meta.env.VITE_PEXELS_PHOTO_URL_FORMAT;

export const ProductList = virtual(({ products }: ProductListProps) => {
  useStyles(unsafeCSS(styles));

  const renderProducts = products.map(
    ({ id, name, description, ProductImage: [{ imageId, ext }] }) => html`
        <mui-card key=${id}>
          <mui-card-header>
            ${name}
          </mui-card-header>
          <mui-card-content>
          <img src="${format(IMAGE_URL, imageId.toString(), ext)}?auto=compress&cs=tinysrgb&h=220&w=940"
            alt=${name} />
          </mui-card-content>
          <mui-card-footer>
            <span class="description">
              ${description}
            </span>
          </mui-card-footer>
        </mui-card>
      `,
  );

  return html`
    <div class="container">
      ${renderProducts}
    </div>
  `;
});
