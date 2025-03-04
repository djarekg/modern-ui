import { signal } from '@lit-labs/signals';
import type { TypedEvent } from '@mui/core';
import { component } from 'haunted';
import { type LitElement, html, unsafeCSS } from 'lit';

import '@mui/components/button/outline-button.js';
import '@mui/components/text-field/text-field.js';
import { useStyles } from '@mui/components';

import { signIn } from '@/auth/auth.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';

import styles from './login.css?inline';

const LoginPage = () => {
  useStyles([unsafeCSS(styles)]);

  const userName = signal('');
  const password = signal('');
  const disabled = userName.get().length === 0 || password.get().length === 0;

  const handleUsernameChange = ({ target: { value } }: TypedEvent<HTMLInputElement>) => {
    userName.set(value);
  };

  const handlePasswordChange = ({ target: { value } }: TypedEvent<HTMLInputElement>) => {
    password.set(value);
  };

  const onSubmit = async (e: Event) => {
    e.stopImmediatePropagation();

    const signedIn = await signIn(userName.get(), password.get());
    if (signedIn) {
      navigate(routes.home);
    }
  };

  const renderUsernameControl = () => {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Username"
        tabindex="0"
        .value=${userName.get()}
        @change=${handleUsernameChange}>
      </mui-text-field>
    `;
  };

  const renderPasaswordControl = () => {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Password"
        type="password"
        tabindex="1"
        .value=${password.get()}
        @change=${handlePasswordChange}>
      </mui-text-field>
    `;
  };

  const renderLoginButton = () => {
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
  };

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
              ${renderUsernameControl()}
            </fieldset>
            <fieldset>
              ${renderPasaswordControl()}
            </fieldset>
            <fieldset>
              ${renderLoginButton()}
            </fieldset>
          </form>
        </div>
      </section>

    </article>
  `;
};

customElements.define('app-login-page', component(LoginPage));

declare global {
  interface HTMLElementTagNameMap {
    'app-login-page': LitElement;
  }
}
