import { html, useEffect, useMemo, useState } from 'haunted';
import { nothing, unsafeCSS } from 'lit';

import { define, useStyles } from '@mui/core';
import '@mui/components/text-field/text-field.js';
import '@mui/components/tabs/tabs.js';
import '@mui/components/tabs/tab.js';
import { useTitle } from '@mui/router';

import { UserLoginHistory } from '@/components/login-history/user-login-history.js';
import { UserDetail } from '@/components/user-detail/user-detail.js';
import { useQuery } from '@/hooks/use-query.js';
import {
  GetLoginHistoryByUserId,
  type GetLoginHistoryByUserIdQuery,
  GetUserById,
} from '@/types/graphql.js';
import { getUserId } from '@/utils/cache-util.js';

import styles from './user.css?inline';

type LoginHistories = GetLoginHistoryByUserIdQuery['loginHistories'];

type UserPageProps = {
  id: string;
};

const UserPage = ({ id = getUserId() }: UserPageProps) => {
  useStyles(unsafeCSS(styles));
  useTitle('user');

  // Fetch the user data.
  const { data: userData } = useQuery(GetUserById, { id });

  // Fetch the login history and user data.
  const { data: loginHistoriesData } = useQuery(GetLoginHistoryByUserId, { userId: getUserId() });

  // const onProfileSave = useCallback(async ({ detail: { user } }: SaveEvent) => {
  //   // const { users } = useApi();
  //   // await users.index.put(user);
  // }, []);

  // <app-user-detail .user=${user} @save=${onProfileSave}></app-user-detail>

  const renderForm = useMemo(
    () => (userData?.user ? html`${UserDetail({ user: userData?.user })}` : nothing),
    [userData],
  );

  const renderAddress = useMemo(() => html`<div>Address</div>`, []);

  const renderLoginHistory = useMemo(
    () =>
      loginHistoriesData?.loginHistories
        ? html`${UserLoginHistory({ loginHistories: loginHistoriesData?.loginHistories })}`
        : nothing,
    [loginHistoriesData],
  );

  return html`
    <article>
      <mui-tabs>
        <mui-tab id="tab-1" aria-controls="tabpanel-1">
          Profile
          <section slot="panel">
            ${renderForm}
          </section>
        </mui-tab>
        <mui-tab id="tab-2" aria-controls="tabpanel-2">
          Address
          <section slot="panel">
            ${renderAddress}
          </section>
        </mui-tab>
        <mui-tab id="tab-3" aria-controls="tabpanel-3">
          Login History
          <section slot="panel">
            ${renderLoginHistory}
          </section>
        </mui-tab>
      </mui-tabs>
    </article>
  `;
};

define('app-user-page', UserPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-user-page': HTMLElement & UserPageProps;
  }
}
