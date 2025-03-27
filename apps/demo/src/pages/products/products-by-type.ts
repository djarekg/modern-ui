import { useQuery } from '@apollo/client';
import { html, useEffect, useState, virtual } from 'haunted';

import { GetProductsByProductTypeId, type Product } from '@/types/graphql.js';

type ProductsByTypeProps = {
  productTypeId: string;
};

export const ProductsByType = virtual(({ productTypeId }: ProductsByTypeProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const { data } = useQuery<Product[], { productTypeId: string }>(GetProductsByProductTypeId, {
      variables: {
        productTypeId,
      },
    });
    setProducts(data);
  }, [productTypeId]);

  return html``;
});
