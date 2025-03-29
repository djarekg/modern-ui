import { html, virtual } from 'haunted';

import { useQuery } from '@/hooks/use-query.js';
import { GetProductsByProductTypeId } from '@/types/graphql.js';

type ProductsByTypeProps = {
  productTypeId: string;
};

export const ProductsByType = virtual(({ productTypeId }: ProductsByTypeProps) => {
  const { data, loading } = useQuery(GetProductsByProductTypeId, {
    productTypeId,
  });

  if (loading) {
    return html`<div>Loading...</div>`;
  }

  return html``;
});
