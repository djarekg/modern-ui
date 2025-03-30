import { html } from 'haunted';

import { define } from '@mui/core';
import { useTitle } from '@mui/router';

import { ProductList } from '@/components/product-list/product-list.js';
import { useQuery } from '@/hooks/use-query.js';
import { GetProductsByProductTypeId, type Product } from '@/types/graphql.js';

type ProductsByTypeProps = {
  productTypeId: string;
};

const ProductsByType = ({ productTypeId }: ProductsByTypeProps) => {
  useTitle('products by Type');

  const { data, loading } = useQuery(GetProductsByProductTypeId, {
    productTypeId,
  });

  if (loading) {
    return html`<div>Loading...</div>`;
  }

  return html`${ProductList({ products: data?.products as Product[] })}`;
};

define('app-products-by-type-page', ProductsByType);

declare global {
  interface HTMLElementTagNameMap {
    'app-products-by-type-page': HTMLElement;
  }
}
