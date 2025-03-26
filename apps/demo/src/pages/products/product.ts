import { html, useEffect, useState, virtual } from 'haunted';

import '@mui/components/card/card.js';
import { useClient } from '@mui/graphql';

import { ProductDetail } from '@/components/product-detail/product-detail.js';
import { clientConfig } from '@/config.js';
import { GetProductByIdDocument, type GetProductByIdQuery } from '@/types/graphql.js';

type ProductProps = {
  id: string;
};

export const ProductPage = virtual(({ id }: ProductProps) => {
  const { query } = useClient(clientConfig);
  const [product, setProduct] = useState<GetProductByIdQuery['product']>(null);

  useEffect(async () => {
    const { product } = await query(GetProductByIdDocument, { variables: { id } });
    setProduct(product);
  }, [id]);

  if (!product) return html`<div>Loading...</div>`;

  return html`
    ${ProductDetail({ product })}
  `;
});
