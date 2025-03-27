import { useQuery } from '@apollo/client';
import { html, useEffect, useState, virtual } from 'haunted';
import { css, unsafeCSS } from 'lit';

import { useStyles } from '@mui/core';

import { ProductTypeList } from '@/components/product-type-list/product-type-list.js';
import {
  GetProductsByProductTypeId,
  type ProductType as ProductTypeModel,
} from '@/types/graphql.js';

const styles = css``;

type ProductTypeProps = {
  id: string;
};

export const ProductType = virtual(({ id }: ProductTypeProps) => {
  useStyles(unsafeCSS(styles));

  const [productTypes, setProductTypes] = useState<ProductTypeModel[]>([]);

  useEffect(async () => {
    const { data: productTypes } = useQuery<ProductTypeModel[], { productTypeId: string }>(
      GetProductsByProductTypeId,
      {
        variables: {
          productTypeId: id,
        },
      },
    );
    setProductTypes(productTypes);
  }, []);

  return html`${ProductTypeList({ productTypes })}`;
});
