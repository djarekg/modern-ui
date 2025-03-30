import { html } from 'lit';

import { define } from '@mui/core';
import { useTitle } from '@mui/router';

import { GetProductTypes } from '@/types/graphql.js';
import '@/components/product-list/product-list.js';
import { ProductTypeList } from '@/components/product-type-list/product-type-list.js';
import { useQuery } from '@/hooks/use-query.js';

const ProductsPage = () => {
  useTitle('products');

  const { data, loading } = useQuery(GetProductTypes);

  if (loading) {
    return html`<div>Loading...</div>`;
  }

  return html`
    <div>
        ${ProductTypeList({ productTypes: data?.productTypes })}
    </div>
  `;
};

define('app-products-page', ProductsPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-products-page': HTMLElement;
  }
}
