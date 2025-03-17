import { html, signal } from '@lit-labs/signals';
import { type StateUpdater, useCallback, useMemo, useState } from 'haunted';
import { unsafeCSS } from 'lit';

import '@mui/components/button/outline-button.js';
import '@mui/components/text-field/text-field.js';
import { type TypedEvent, define, isEmpty, useStyles } from '@mui/core';
import { useLogger } from '@mui/logger';

import { signIn } from '@/auth/auth.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';

import styles from './login.css?inline';

const logger = useLogger({ ui: true });
/**
 * On input event handler update the state.
 * @param setter The state setter.
 */
const input = (setter: StateUpdater<string>) => {
  return ({ target: { value } }: TypedEvent<HTMLInputElement>) => {
    logger.info('input', value);
    setter(value);
  };
};

const LoginPage = () => {
  useStyles(unsafeCSS(styles));

  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  // const [disabled] = useState(() => userName.length === 0 || password.length === 0);

  const userName = signal('');
  const password = signal('');
  const disabled = signal(() => isEmpty(userName.get()) || isEmpty(password.get()));

  const onSubmit = async (e: Event) => {
    e.preventDefault();

    if (isEmpty(userName.get()) || isEmpty(password.get())) {
      return;
    }

    const signedIn = await signIn(userName.get(), password.get());
    if (signedIn) {
      navigate(routes.home);
    }
  };

  const renderUsernameControl = useMemo(
    () => html`
      <mui-text-field
        required
        appearance="round"
        label="Username"
        .value=${userName.get()}
        @change=${({ target: { value } }: TypedEvent<HTMLInputElement>) => userName.set(value)}>
      </mui-text-field>
    `,
    [userName],
  );

  const renderPasaswordControl = useMemo(
    () => html`
      <mui-text-field
        required
        appearance="round"
        label="Password"
        type="password"
        .value=${password.get()}
        @change=${({ target: { value } }: TypedEvent<HTMLInputElement>) => password.set(value)}>
      </mui-text-field>
    `,
    [password],
  );

  const renderLoginButton = useMemo(
    () => html`
      <button @click=${onSubmit}>Working Submit</button>
      <mui-outline-button
        type="submit"
        corner="round"
        .disabled=${disabled.get()()}
        @click=${onSubmit}>
        Login
      </mui-outline-button>
    `,
    [disabled],
  );

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
          <form>
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
