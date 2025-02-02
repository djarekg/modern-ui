import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { LoginHistory } from '@mui/api';
import { toDateTime } from '@mui/core';
import '@mui/components/table/table.js';
import '@mui/components/table/table-cell.js';
import '@mui/components/table/table-row.js';

const styles = css`
  :host {
    --mui-color-table-row-hover: #fff;

    display: block;
    inline-size: 100%;
    block-size: 100%;
  }
`;

@customElement('app-user-login-history')
export class UserLoginHistory extends LitElement {
  static override styles = [styles];

  @property({ type: Array }) loginHistories: LoginHistory[] = [];

  override render() {
    return html`
      <mui-table>
        <mui-table-row header>
          <mui-table-header-cell>ID</mui-table-header-cell>
          <mui-table-header-cell>Time</mui-table-header-cell>
        </mui-table-row>
        ${this.#renderRows()}
      </mui-table>
    `;
  }

  #renderRows() {
    return this.loginHistories.map(
      ({ id, loginTime }) => html`
        <mui-table-row .id=${id}>
          <mui-table-cell>${id}</mui-table-cell>
          <mui-table-cell>${toDateTime(loginTime)}</mui-table-cell>
        </mui-table-row>
      `,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-user-login-history': UserLoginHistory;
  }
}
