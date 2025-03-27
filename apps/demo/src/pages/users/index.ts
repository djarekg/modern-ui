import { html, useEffect, useState } from 'haunted';
import { css } from 'lit';

import '@mui/components/skeleton/skeleton-table.js';
import { define, delay, useStyles } from '@mui/core';
import { useClient } from '@mui/graphql';

import { clientConfig } from '@/config.js';
import '@/components/user-list/user-list.js';
import { UserList } from '@/components/user-list/user-list.js';
import { GetUsers, type GetUsersQuery } from '@/types/graphql.js';

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

  const { query } = useClient(clientConfig);
  const [users, setUsers] = useState<GetUsersQuery['users']>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users data.
  useEffect(async () => {
    // Simulate slower loading time.
    await delay(2000);
    const { users } = await query(GetUsers);
    setUsers(users);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return html`<mui-skeleton-table rows="20" columns="5"></mui-skeleton-table>`;
  }

  return html`
    <article>
      <section class="app-container">
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
