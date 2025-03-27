import { html, useCallback, virtual } from 'haunted';
import { unsafeCSS } from 'lit';

import { type ArrayElement, useStyles } from '@mui/core';
import { navigateTo } from '@mui/router';

import { routeType } from '@/router/route-type.js';
import type { GetProductTypesQuery } from '@/types/graphql.js';

import styles from './product-type-list.css?inline';

type ProductTypes = GetProductTypesQuery['productTypes'];

type ProductTypeListProps = {
  productTypes: ProductTypes;
};

/**
 * Product types component. Displays a list of product types with cards.
 *
 * @param {ProductListProps} ProductTypeList component properties.
 */
export const ProductTypeList = virtual(({ productTypes }: ProductTypeListProps) => {
  useStyles(unsafeCSS(styles));

  const handleOpenClick = useCallback((id: string) => {
    navigateTo(`${routeType.products}/${id}`);
  }, []);

  const renderCards = ({ id, name }: ArrayElement<ProductTypes>) => html`
    <mui-card>
      <mui-card-header>
        ${name}
        <div>
          <mui-icon-button id="openNew" @click=${() => handleOpenClick(id)}>open_in_new</mui-icon-button>
          <!-- <mui-tooltip anchor="openNew">Open product</mui-tooltip> -->
          <mui-icon-button id="preview" @click=${() => handleOpenClick(id)}>preview</mui-icon-button>
          <!-- <mui-tooltip anchor="preview">Preview product</mui-tooltip> -->
        </div>
      </mui-card-header>
      <mui-card-content>
        <img src="/img/products/${id}.jpeg" alt=${name} />
      </mui-card-content>
    </mui-card>
  `;

  return html`
    <div class="container">
      ${productTypes.map(renderCards)}
    </div>
  `;
});
