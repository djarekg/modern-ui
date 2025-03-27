import { html, virtual } from 'haunted';
import { css } from 'lit';

import '@mui/components/card/index.js';
import '@mui/components/button/icon-button.js';
import '@mui/components/tooltip/tooltip.js';
import { useStyles } from '@mui/core';

import type { Product } from '@/types/graphql.js';

const styles = css`

`;

type ProductListProps = {
  products: Product[];
};

export const ProductList = virtual(({ products }: ProductListProps) => {
  useStyles(styles);

  return products.map(
    ({ id, name }: Product) => html`
    <div>
      <h1>${id}</h1>
      <p>${name}</p>
    </div>
  `,
  );
});
