import { html, useEffect, useState } from 'haunted';
import { css } from 'lit';

import { define, useStyles } from '@mui/core';
import { useClient } from '@mui/graphql';

import { clientConfig } from '@/config.js';
import '@/components/user-list/user-list.js';
import { UserList } from '@/components/user-list/user-list.js';
import { GetUsersDocument, type GetUsersQuery } from '@/types/graphql.js';

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

  const [users, setUsers] = useState<GetUsersQuery['users']>([]);
  const { query } = useClient(clientConfig);

  // Fetch users data.
  useEffect(async () => {
    const { users } = await query(GetUsersDocument);
    setUsers(users);
  }, []);

  return html`
    <article>
      <section class="app-container">
        <h2>Users</h2>
        ${UserList({ users })}
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
