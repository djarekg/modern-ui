import { html, useCallback, useMemo, virtual } from 'haunted';

import type { TableEvent } from '@mui/components/table/events.js';
import { navigateTo } from '@mui/router';

import { routeType } from '@/router/route-type.js';
import type { GetUsersQuery } from '@/types/graphql.js';

type UserListProps = {
  users: GetUsersQuery['users'];
};

/**
 * User list component.
 * @param UserListProps Component properties.
 */
export const UserList = virtual(({ users = [] }: UserListProps) => {
  const handleTableRowSelected = useCallback(({ detail: { row } }: TableEvent) => {
    console.log('UserList#handleTableRowSelected', row);
  }, []);

  const handleTableRowView = useCallback(({ detail: { row } }: TableEvent) => {
    const { id } = row;
    navigateTo(`${routeType.users}/${id}`);
  }, []);

  const renderRows = useMemo(
    () =>
      users.map(
        ({ id, firstName, lastName, email, address, phone }) => html`
        <mui-table-row .id=${id}>
          <!-- <mui-table-cell width="280px">${id}</mui-table-cell> -->
          <mui-table-cell>${firstName} ${lastName}</mui-table-cell>
          <mui-table-cell>${email}</mui-table-cell>
          <mui-table-cell>${address}</mui-table-cell>
          <mui-table-cell width="160px">${phone}</mui-table-cell>
          <mui-table-cell view></mui-table-cell>
        </mui-table-row>
      `,
      ),
    [users],
  );

  return html`
    <mui-table
      selectable
      @row-selected=${handleTableRowSelected}
      @row-view=${handleTableRowView}>
      <mui-table-row header>
        <!-- <mui-table-header-cell>ID</mui-table-header-cell> -->
        <mui-table-header-cell>Name</mui-table-header-cell>
        <mui-table-header-cell>Email</mui-table-header-cell>
        <mui-table-header-cell>Address</mui-table-header-cell>
        <mui-table-header-cell>Phone</mui-table-header-cell>
        <mui-table-header-cell view></mui-table-header-cell>
      </mui-table-row>
      ${renderRows}
    </mui-table>
  `;
});
