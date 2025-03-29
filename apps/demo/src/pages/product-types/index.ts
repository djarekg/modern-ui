import { html, virtual } from 'haunted';

import { ProductTypeList } from '@/components/product-type-list/product-type-list.js';
import { useQuery } from '@/hooks/use-query.js';
import { GetProductTypes } from '@/types/graphql.js';

export const ProductTypes = virtual(() => {
  const { data, loading } = useQuery(GetProductTypes);

  if (loading) {
    return html`<div>Loading...</div>`;
  }

  return html`${ProductTypeList({ productTypes: data.productTypes })}`;
});
