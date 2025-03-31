import { html, useCallback, useMemo, virtual } from 'haunted';
import { unsafeCSS } from 'lit';

import '@mui/components/card/index.js';
import '@mui/components/button/icon-button.js';
import '@mui/components/tooltip/tooltip.js';
import { useStyles } from '@mui/core';
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
    navigateTo(`${routeType.productTypes}/${id}/product-by-type`);
  }, []);

  const renderCards = useMemo(
    () =>
      productTypes.map(
        ({ id, name }) => html`
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
            <img src="/img/product-types/${id}.jpeg" alt=${name} />
          </mui-card-content>
        </mui-card>
      `,
      ),
    [productTypes],
  );

  return html`
    <div class="container">
      ${renderCards}
    </div>
  `;
});
