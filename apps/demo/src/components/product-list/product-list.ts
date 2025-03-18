import { html, virtual } from 'haunted';

import '@mui/components/table/index.js';
import type { TableEvent } from '@mui/components/table/events.js';

import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';
import type { GetProductsQuery } from '@/types/graphql.js';

type ProductListProps = {
  products: GetProductsQuery['products'];
};

/**
 * Product list component. Displays a list of products in a table.
 * The table rows are clickable and can navigate to the product
 * detail page.
 *
 * @param {ProductListProps} ProductList component properties.
 */
export const ProductList = virtual(({ products }: ProductListProps) => {
  const handleRowView = ({ detail: { row } }: TableEvent) => {
    const { id } = row;
    navigate(`${routes.users}/${id}`);
  };

  const renderRows = products.map(
    ({ id, name, description }) => html`
    <mui-table-row .id=${id}>
      <mui-table-cell>${id}</mui-table-cell>
      <mui-table-cell>${name}</mui-table-cell>
      <mui-table-cell>${description}</mui-table-cell>
    </mui-table-row>
  `,
  );

  return html`
    <div>
      <mui-table
        selectable
        @row-view=${handleRowView}>
        <mui-table-row header>
          <mui-table-header-cell>ID</mui-table-header-cell>
          <mui-table-header-cell>Name</mui-table-header-cell>
          <mui-table-header-cell>Description</mui-table-header-cell>
        </mui-table-row>
        ${renderRows}
      </mui-table>
    </div>
  `;
});
