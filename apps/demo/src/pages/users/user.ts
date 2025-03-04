import { html, nothing, unsafeCSS } from 'lit';

import type { LoginHistory, User } from '@mui/api';
import { define, useStyles } from '@mui/core';
import '@mui/components/text-field/text-field.js';
import '@mui/components/tabs/tabs.js';
import '@mui/components/tabs/tab.js';

import type { SaveEvent } from '@/components/user-detail/events.js';
import { useApi } from '@/hooks/use-api.js';
import { getUserId } from '@/utils/cache-util.js';
import '@/components/login-history/user-login-history.js';
import '@/components/user-detail/user-detail.js';

import { useCallback, useEffect, useMemo, useState } from 'haunted';
import styles from './user.css?inline';

type UserPageProps = {
  id: string;
};

const UserPage = ({ id = getUserId() }: UserPageProps) => {
  useStyles(unsafeCSS(styles));

  const [user, setUser] = useState<User | null>(null);
  const [loginHistories, setLoginHistories] = useState<LoginHistory[]>([]);

  // Fetch the user data
  useEffect(async () => {
    const { users } = useApi();
    const { data } = await users.id({ id }).get();
    setUser(data);
  }, []);

  // Fetch the login history and user data
  useEffect(async () => {
    const { sign } = useApi();
    const { data } = await sign.history({ id }).get();
    setLoginHistories(data);
  }, []);

  const onProfileSave = useCallback(async ({ detail: { user } }: SaveEvent) => {
    const { users } = useApi();
    await users.index.put(user);
  }, []);

  const renderForm = useMemo(
    () =>
      user
        ? html`<app-user-detail .user=${user} @save=${onProfileSave}></app-user-detail>`
        : nothing,
    [user],
  );

  const renderAddress = useMemo(() => html`<div>Address</div>`, []);

  const renderLoginHistory = useMemo(
    () =>
      loginHistories
        ? html`<app-user-login-history .loginHistories=${loginHistories}></app-user-login-history>`
        : nothing,
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
