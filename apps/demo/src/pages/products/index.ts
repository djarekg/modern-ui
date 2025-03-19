import { useEffect, useState } from 'haunted';
import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';
import { useClient } from '@mui/graphql';

import { clientConfig } from '@/config.js';
import { GetProductsDocument, type GetProductsQuery } from '@/types/graphql.js';
import '@/components/product-list/product-list.js';
import { ProductList } from '@/components/product-list/product-list.js';

const styles = css`
  .page-title {
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--mui-color-secondary);
    margin-block-end: 2rem;
  }
`;

const ProductsPage = () => {
  useStyles(styles);

  const { query } = useClient(clientConfig);
  const [products, setProducts] = useState<GetProductsQuery['products']>([]);

  useEffect(async () => {
    const { products } = await query(GetProductsDocument);
    setProducts(products);
  }, []);

  return html`
    <div>
      <div class="page-title">Products</div>
      ${ProductList({ products })}
    </div>
  `;
};

define('app-products-page', ProductsPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-products-page': HTMLElement;
  }
}
