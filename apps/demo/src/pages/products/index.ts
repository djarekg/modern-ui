import { useEffect, useState } from 'haunted';
import { html } from 'lit';

import { define } from '@mui/core';
import { useClient } from '@mui/graphql';

import { clientConfig } from '@/config.js';
import { GetProductTypesDocument, type GetProductTypesQuery } from '@/types/graphql.js';
import '@/components/product-list/product-list.js';
import { ProductList } from '@/components/product-list/product-list.js';

const ProductsPage = () => {
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
