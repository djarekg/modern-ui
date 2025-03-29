// import { html, useEffect, useState, virtual } from 'haunted';
// import { css, unsafeCSS } from 'lit';

// import { useStyles } from '@mui/core';

// import { ProductTypeList } from '@/components/product-type-list/product-type-list.js';
// import { useQuery } from '@/hooks/use-query.js';
// import {
//   type ProductType as ProductTypeModel,
// } from '@/types/graphql.js';

// const styles = css``;

// type ProductTypeProps = {
//   id: string;
// };

// export const ProductType = virtual(({ id }: ProductTypeProps) => {
//   useStyles(unsafeCSS(styles));

//   const { data, loading } = useQuery<ProductTypeModel[], { productTypeId: string }>(
//     GetPro,
//     {
//       productTypeId: id,
//     },
//   );

//   if (loading) {
//     return html`<div>Loading...</div>`;
//   }

//   return html`${ProductTypeList({ productTypes: data.productTypes })}`;
// });
