import { useEffect, useState } from 'haunted';
import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';
import { useClient } from '@mui/graphql';

import { clientConfig } from '@/config.js';
import { GetProductTypesDocument, type GetProductTypesQuery } from '@/types/graphql.js';
import '@/components/product-list/product-list.js';
import { ProductList } from '@/components/product-list/product-list.js';

const styles = css`

`;

const ProductsPage = () => {
  useStyles(styles);

  const { query } = useClient(clientConfig);
  const [productTypes, setProductTypes] = useState<GetProductTypesQuery['productTypes']>([]);

  useEffect(async () => {
    const { productTypes } = await query(GetProductTypesDocument);
    setProductTypes(productTypes);
  }, []);

  return html`
    <div>
      ${ProductList({ productTypes })}
    </div>
  `;
};

define('app-products-page', ProductsPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-products-page': HTMLElement;
  }
}
