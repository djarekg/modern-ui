import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { User } from '@mui/api';

const styles = css`
  :host {
    display: block;
    inline-size: 100%;
    block-size: 100%;
  }
`;

@customElement('app-user-list')
export class UserList extends LitElement {
  static override styles = [styles];

  @property({ type: Array }) users: User[] = [];

  render() {
    return html`
      <mui-table>
        <mui-table-row header>
          <mui-table-header-cell>ID</mui-table-header-cell>
          <mui-table-header-cell>Name</mui-table-header-cell>
          <mui-table-header-cell>Email</mui-table-header-cell>
          <mui-table-header-cell>Address</mui-table-header-cell>
          <mui-table-header-cell>Phone</mui-table-header-cell>
        </mui-table-row>
        ${this.#renderRows()}
      </mui-table>
    `;
  }

  #renderRows() {
    return this.users.map(
      ({ id, firstName, lastName, email, address, phone }) => html`
        <mui-table-row>
          <mui-table-cell>${id}</mui-table-cell>
          <mui-table-cell>${firstName} ${lastName}</mui-table-cell>
          <mui-table-cell>${email}</mui-table-cell>
          <mui-table-cell>${address}</mui-table-cell>
          <mui-table-cell>${phone}</mui-table-cell>
        </mui-table-row>
      `,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-user-list': UserList;
  }
}
