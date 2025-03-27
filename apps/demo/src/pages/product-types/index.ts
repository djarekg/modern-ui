import { html, useEffect, useState, virtual } from 'haunted';

import { useClient } from '@mui/graphql';

import { ProductTypeList } from '@/components/product-type-list/product-type-list.js';
import { clientConfig } from '@/config.js';
import { GetProductTypes, type GetProductTypesQuery } from '@/types/graphql.js';

export const ProductTypes = virtual(() => {
  const { query } = useClient(clientConfig);
  const [productTypes, setProductTypes] = useState<GetProductTypesQuery['productTypes']>([]);

  useEffect(async () => {
    const { productTypes } = await query(GetProductTypes);
    setProductTypes(productTypes);
  }, []);

  return html`${ProductTypeList({ productTypes })}`;
});
