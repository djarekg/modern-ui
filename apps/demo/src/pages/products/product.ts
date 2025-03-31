import { html } from 'haunted';

import '@mui/components/card/card.js';

import { ProductDetail } from '@/components/product-detail/product-detail.js';
import { useQuery } from '@/hooks/use-query.js';
import { GetProductById } from '@/types/graphql.js';
import { define } from '@mui/core';

type ProductProps = {
  id: string;
};

export const ProductPage = ({ id }: ProductProps) => {
  const { data, loading } = useQuery(GetProductById, { id });

  if (!loading && !data) {
    return html`<div>Product not found</div>`;
  }

  return html`
    ${ProductDetail({ product: data.product })}
  `;
};

define('app-product-page', ProductPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-product-page': ProductProps;
  }
}
