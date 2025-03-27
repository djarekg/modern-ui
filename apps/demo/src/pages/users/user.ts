import { html, useEffect, useMemo, useState } from 'haunted';
import { nothing, unsafeCSS } from 'lit';

import { define, useStyles } from '@mui/core';
import { useClient } from '@mui/graphql';
import '@mui/components/text-field/text-field.js';
import '@mui/components/tabs/tabs.js';
import '@mui/components/tabs/tab.js';

import { UserLoginHistory } from '@/components/login-history/user-login-history.js';
import { UserDetail } from '@/components/user-detail/user-detail.js';
import { clientConfig } from '@/config.js';
import {
  GetLoginHistoryByUserId,
  type GetLoginHistoryByUserIdQuery,
  GetUserById,
  type GetUserByIdQuery,
} from '@/types/graphql.js';
import { getUserId } from '@/utils/cache-util.js';

import styles from './user.css?inline';

type LoginHistories = GetLoginHistoryByUserIdQuery['loginHistories'];

type UserPageProps = {
  id: string;
};

const UserPage = ({ id = getUserId() }: UserPageProps) => {
  useStyles(unsafeCSS(styles));

  const { query } = useClient(clientConfig);
  const [user, setUser] = useState<GetUserByIdQuery['user']>(null);
  const [loginHistories, setLoginHistories] = useState<LoginHistories>([]);

  // Fetch the user data.
  useEffect(async () => {
    const { user } = await query(GetUserById, { variables: { id } });
    setUser(user);
  }, []);

  // Fetch the login history and user data.
  useEffect(async () => {
    const userId = getUserId();
    const { loginHistories } = await query(GetLoginHistoryByUserId, {
      variables: { userId },
    });
    setLoginHistories(loginHistories);
  }, []);

  // const onProfileSave = useCallback(async ({ detail: { user } }: SaveEvent) => {
  //   // const { users } = useApi();
  //   // await users.index.put(user);
  // }, []);

  // <app-user-detail .user=${user} @save=${onProfileSave}></app-user-detail>

  const renderForm = useMemo(() => (user ? html`${UserDetail({ user })}` : nothing), [user]);

  const renderAddress = useMemo(() => html`<div>Address</div>`, []);

  const renderLoginHistory = useMemo(
    () => (loginHistories ? html`${UserLoginHistory({ loginHistories })}` : nothing),
    [loginHistories],
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
