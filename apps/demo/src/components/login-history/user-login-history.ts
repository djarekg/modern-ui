import { useMemo, virtual } from 'haunted';
import { css, html } from 'lit';

import { toDateTime, useStyles } from '@mui/core';
import '@mui/components/table/table.js';
import '@mui/components/table/table-cell.js';
import '@mui/components/table/table-row.js';

import type { GetLoginHistoryByUserIdQuery } from '@/types/graphql.js';

const styles = css`
  .container {
    display: block;
    border-radius: var(--mui-shape-medium);
    box-shadow: var(--mui-elevation-3);
  }
`;

type UserLoginHistoryProps = {
  loginHistories: GetLoginHistoryByUserIdQuery['loginHistories'];
};

export const UserLoginHistory = virtual(({ loginHistories = [] }: UserLoginHistoryProps) => {
  useStyles(styles);

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
    <div class="container">
      <mui-table>
        <mui-table-row header>
          <mui-table-header-cell>ID</mui-table-header-cell>
          <mui-table-header-cell>Time</mui-table-header-cell>
        </mui-table-row>
        ${renderRows}
      </mui-table>
    </div>
  `;
});
