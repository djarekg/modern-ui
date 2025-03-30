import { html } from 'haunted';

import { ProductTypeList } from '@/components/product-type-list/product-type-list.js';
import { useQuery } from '@/hooks/use-query.js';
import { GetProductTypes } from '@/types/graphql.js';
import { define } from '@mui/core';

export const ProductTypes = () => {
  const { data, loading } = useQuery(GetProductTypes);

  if (loading) {
    return html`<div>Loading...</div>`;
  }

  return html`${ProductTypeList({ productTypes: data.productTypes })}`;
};

define('app-product-types', ProductTypes);

declare global {
  interface HTMLElementTagNameMap {
    'app-product-types-page': HTMLElement;
  }
}
