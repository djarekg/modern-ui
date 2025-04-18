import { html, useMemo, virtual } from 'haunted';

import { toDateTime } from '@mui/core';
import '@mui/components/table/table.js';
import '@mui/components/table/table-cell.js';
import '@mui/components/table/table-row.js';

import type { GetLoginHistoryByUserIdQuery } from '@/types/graphql.js';

type UserLoginHistoryProps = {
  loginHistories: GetLoginHistoryByUserIdQuery['loginHistories'];
};

export const UserLoginHistory = virtual(({ loginHistories = [] }: UserLoginHistoryProps) => {
  const renderRows = useMemo(
    () =>
      loginHistories.map(
        ({ id, loginTime }) => html`
        <mui-table-row .id=${id}>
          <mui-table-cell>${id}</mui-table-cell>
          <mui-table-cell>${toDateTime(loginTime as string)}</mui-table-cell>
        </mui-table-row>
      `,
      ),
    [loginHistories],
  );

  return html`
    <mui-table>
      <mui-table-row header>
        <mui-table-header-cell>ID</mui-table-header-cell>
        <mui-table-header-cell>Time</mui-table-header-cell>
      </mui-table-row>
      ${renderRows}
    </mui-table>
  `;
});
