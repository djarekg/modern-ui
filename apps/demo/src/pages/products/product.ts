import { html, virtual } from 'haunted';

import '@mui/components/card/card.js';

import { ProductDetail } from '@/components/product-detail/product-detail.js';
import { useQuery } from '@/hooks/use-query.js';
import { GetProductById } from '@/types/graphql.js';

type ProductProps = {
  id: string;
};

export const ProductPage = virtual(({ id }: ProductProps) => {
  const { data, loading } = useQuery(GetProductById, { id });

  if (!loading && !data) {
    return html`<div>Product not found</div>`;
  }

  return html`
    ${ProductDetail({ product: data.product })}
  `;
});
