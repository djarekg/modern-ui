import { type StateUpdater, useCallback, useMemo, useState } from 'haunted';
import { html, unsafeCSS } from 'lit';

import '@mui/components/button/outline-button.js';
import '@mui/components/text-field/text-field.js';
import { type TypedEvent, define, useStyles } from '@mui/core';

import { signIn } from '@/auth/auth.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';

import styles from './login.css?inline';

/**
 * On input event handler update the state.
 * @param setter The state setter.
 */
const input =
  (setter: StateUpdater<string>) =>
  ({ target: { value } }: TypedEvent<HTMLInputElement>) =>
    setter(value);

const LoginPage = () => {
  useStyles(unsafeCSS(styles));

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [disabled] = useState(() => userName.length === 0 || password.length === 0);

  const onSubmit = useCallback(
    async (e: Event) => {
      e.stopImmediatePropagation();

      const signedIn = await signIn(userName, password);
      if (signedIn) {
        navigate(routes.home);
      }
    },
    [userName, password],
  );

  const renderUsernameControl = useMemo(() => {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Username"
        .value=${userName}
        @input=${input(setUserName)}>
      </mui-text-field>
    `;
  }, [userName]);

  const renderPasaswordControl = useMemo(() => {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Password"
        type="password"
        .value=${password}
        @input=${input(setPassword)}>
      </mui-text-field>
    `;
  }, [password]);

  const renderLoginButton = useMemo(() => {
    return html`
      <button @click=${onSubmit}>Working Submit</button>
      <mui-outline-button
        corner="round"
        .disabled=${disabled}
        @mouseup=${onSubmit}
        @click=${onSubmit}>
        Login
      </mui-outline-button>
    `;
  }, [disabled]);

  return html`
    <article>

      <section>
        <span class="app-section-title">Welcome to the demo {app}</span>
        <p>
          This is a demo app that demonstrates using a monorepo setup with workspace projects, an API project that includes a SQLite databae, and a frontend project all using Web Components.
        </p>
      </section>

      <section>
        <div class="app-container login">
          <span class="app-section-title">Login</span>
          <form method="post" @submit=${onSubmit}>
            <fieldset>
              ${renderUsernameControl}
            </fieldset>
            <fieldset>
              ${renderPasaswordControl}
            </fieldset>
            <fieldset>
              ${renderLoginButton}
            </fieldset>
          </form>
        </div>
      </section>

    </article>
  `;
};

define('app-login-page', LoginPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-login-page': HTMLElement;
  }
}
