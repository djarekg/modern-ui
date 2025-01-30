import { useApi } from '@/hooks/use-api.js';
import { getUserName } from '@/utils/cache-util.js';
import { SignalWatcher, html, signal } from '@lit-labs/signals';
import type { LoginHistories } from '@mui/api';
import { DateTime } from '@mui/core';
import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import '@mui/components/table/table.js';
import '@mui/components/table/table-cell.js';
import '@mui/components/table/table-row.js';

const styles = css`
  :host {
    display: block;
    inline-size: 100%;
    block-size: 100%;
  }
`;

@customElement('app-login-history')
export class LoginHistory extends SignalWatcher(LitElement) {
  static override styles = [styles];

  #loginHistories = signal<LoginHistories>([]);

  connectedCallback() {
    super.connectedCallback();

    effect(async () => {
      const username = getUserName();
      const { sign } = useApi();
      const { data } = await sign.history({ username }).get();
      this.#loginHistories.set(data);
    });
  }

  override render() {
    return html`
      <mui-table>
        <mui-table-row header>
          <mui-table-header-cell>ID</mui-table-header-cell>
          <mui-table-header-cell>User ID</mui-table-header-cell>
          <mui-table-header-cell>Time</mui-table-header-cell>
        </mui-table-row>
        ${this.#renderRows()}
      </mui-table>
    `;
  }

  #renderRows() {
    return this.#loginHistories.get().map(
      ({ id, loginTime, userId }) => html`
        <mui-table-row .id=${id}>
          <mui-table-cell>${id}</mui-table-cell>
          <mui-table-cell>${userId}</mui-table-cell>
          <mui-table-cell>${DateTime.toISODate(loginTime)}</mui-table-cell>
        </mui-table-row>
      `,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-login-history': LoginHistory;
  }
}
