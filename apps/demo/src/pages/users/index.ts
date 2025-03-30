import { html } from 'haunted';
import { css } from 'lit';

import '@mui/components/skeleton/skeleton-table.js';
import { define, useStyles } from '@mui/core';
import { useTitle } from '@mui/router';

import '@/components/user-list/user-list.js';
import { UserList } from '@/components/user-list/user-list.js';
import { useQuery } from '@/hooks/use-query.js';
import { GetUsers, type User } from '@/types/graphql.js';

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
  useTitle('users');

  const { data, loading } = useQuery(GetUsers);

  if (loading) {
    return html`<mui-skeleton-table rows="20" columns="5"></mui-skeleton-table>`;
  }

  return html`
    <article>
      <section class="app-container">
        ${UserList({ users: data.users as User[] })}
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
