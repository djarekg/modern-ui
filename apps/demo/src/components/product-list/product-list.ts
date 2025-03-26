import { html, useCallback, virtual } from 'haunted';
import { css } from 'lit';

import { type ArrayElement, useStyles } from '@mui/core';
import '@mui/components/card/index.js';
import '@mui/components/button/icon-button.js';
import '@mui/components/tooltip/tooltip.js';

import { navigate } from '@/router/index.js';
import { routeType } from '@/router/route-type.js';
import type { GetProductTypesQuery } from '@/types/graphql.js';

type ProductTypes = GetProductTypesQuery['productTypes'];

type ProductListProps = {
  productTypes: ProductTypes;
};

const styles = css`
  .container {
    --mui-card-header-color: var(--mui-color-secondary);

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 2.5rem;
  }

  mui-card {
    &:hover {
      --mui-card-elevation: var(--mui-elevation-3);

      transform: scale(1.03);
      transition: transform 0.3s;
    }
  }

  mui-card-header {
    --mui-icon-color: var(--mui-card-header-color);
    --mui-icon-size: 1.25rem;
  }

  mui-card-content {
    padding: 0;
    align-items: flex-end;

    img {
      width: 100%;
      height: 100%;
      object-fit: fit;
    }
  }

  mui-card-footer {
    .description {
      font-size: 0.8rem;
      font-weight: 600;
    }

    .price {
      font-size: 0.7rem;
    }
  }
`;

/**
 * Product list component. Displays a list of product types with
 * @mui/card components.
 *
 * @param {ProductListProps} ProductList component properties.
 */
export const ProductList = virtual(({ productTypes }: ProductListProps) => {
  useStyles(styles);

  const handleOpenClick = useCallback((id: string) => {
    navigate(`${routeType.products}/${id}`);
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
