import { useMemo } from 'haunted';
import { css, html } from 'lit';

import type { LoginHistory } from '@mui/api';
import { define, toDateTime, useStyles } from '@mui/core';
import '@mui/components/table/table.js';
import '@mui/components/table/table-cell.js';
import '@mui/components/table/table-row.js';

const styles = css`
  :host {
    display: block;
    border-radius: var(--mui-shape-medium);
    box-shadow: var(--mui-elevation-3);
  }
`;

type UserLoginHistoryProps = {
  loginHistories: LoginHistory[];
};

const UserLoginHistory = ({ loginHistories = [] }: UserLoginHistoryProps) => {
  useStyles(styles);

  const renderRows = useMemo(
    () =>
      loginHistories.map(
        ({ id, loginTime }) => html`
        <mui-table-row .id=${id}>
          <mui-table-cell>${id}</mui-table-cell>
          <mui-table-cell>${toDateTime(loginTime)}</mui-table-cell>
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
};

define('app-user-login-history', UserLoginHistory);

declare global {
  interface HTMLElementTagNameMap {
    'app-user-login-history': HTMLElement & UserLoginHistoryProps;
  }
}
