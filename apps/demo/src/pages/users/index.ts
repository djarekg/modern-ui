import { html, useEffect, useState } from 'haunted';
import { css } from 'lit';

import type { User } from '@mui/api';
import { define, useStyles } from '@mui/core';

import '@/components/user-list/user-list.js';
import { useApi } from '@/hooks/use-api.js';

const styles = css`
  :host {
    display: block;
    margin-inline: 2rem;
  }

  h2 {
    margin-block-start: 0;
  }
`;

const UsersPage = () => {
  useStyles(styles);

  const [users, setUsers] = useState<User[]>([]);

  // Fetch users data.
  useEffect(async () => {
    const { users: api } = useApi();
    const { data } = await api.index.get();
    setUsers(data);
  }, []);

  return html`
    <article>
      <section class="app-container">
        <h2>Users</h2>
        <app-user-list .users=${users}></app-user-list>-
      </section>
    </article>
  `;
};

define('app-users-page', UsersPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-users-page': HTMLElement;
  }
}
