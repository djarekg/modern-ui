import { useMemo } from 'haunted';
import { css, html } from 'lit';

import type { TableEvent } from '@mui/components/table/events.js';
import { define, useStyles } from '@mui/core';

import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';
import type { GetUsersQuery } from '@/types/graphql.js';

const styles = css`
  :host {
    display: block;
    inline-size: 100%;
    block-size: 100%;
  }
`;

type UserListProps = {
  users: GetUsersQuery['users'];
};

/**
 * User list component.
 * @param UserListProps Component properties.
 */
const UserList = ({ users = [] }: UserListProps) => {
  useStyles(styles);

  const handleTableRowSelected = ({ detail: { row } }: TableEvent) => {
    console.log('UserList#handleTableRowSelected', row);
  };

  const handleTableRowView = ({ detail: { row } }: TableEvent) => {
    const { id } = row;
    navigate(`${routes.users}/${id}`);
  };

  const renderRows = useMemo(
    () =>
      users.map(
        ({ id, firstName, lastName, email, address, phone }) => html`
        <mui-table-row .id=${id}>
          <mui-table-cell>${id}</mui-table-cell>
          <mui-table-cell>${firstName} ${lastName}</mui-table-cell>
          <mui-table-cell>${email}</mui-table-cell>
          <mui-table-cell>${address}</mui-table-cell>
          <mui-table-cell>${phone}</mui-table-cell>
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
        <mui-table-header-cell>ID</mui-table-header-cell>
        <mui-table-header-cell>Name</mui-table-header-cell>
        <mui-table-header-cell>Email</mui-table-header-cell>
        <mui-table-header-cell>Address</mui-table-header-cell>
        <mui-table-header-cell>Phone</mui-table-header-cell>
        <mui-table-header-cell view></mui-table-header-cell>
      </mui-table-row>
      ${renderRows}
    </mui-table>
  `;
};

define('app-user-list', UserList);

declare global {
  interface HTMLElementTagNameMap {
    'app-user-list': HTMLElement & UserListProps;
  }
}
