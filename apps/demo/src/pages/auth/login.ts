import { SignalWatcher, signal } from '@lit-labs/signals';
import type { TypedEvent } from '@mui/core';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@mui/components/button/outline-button.js';
import '@mui/components/text-field/text-field.js';

import { signIn } from '@/auth/auth.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';

import styles from './login.css?inline';

@customElement('app-login-page')
export class LoginPage extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  userName = signal('');
  password = signal('');

  render() {
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
            <form method="post" @submit=${this.#onSubmit}>
              <fieldset>
                ${this.#renderUsernameControl()}
              </fieldset>
              <fieldset>
                ${this.#renderPasaswordControl()}
              </fieldset>
              <fieldset>
                ${this.#renderLoginButton()}
              </fieldset>
            </form>
          </div>
        </section>

      </article>
    `;
  }

  #renderUsernameControl() {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Username"
        tabindex="0"
        .value=${this.userName.get()}
        @change=${this.#handleUsernameChange}>
      </mui-text-field>
    `;
  }

  #renderPasaswordControl() {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Password"
        type="password"
        tabindex="1"
        .value=${this.password.get()}
        @change=${this.#handlePasswordChange}>
      </mui-text-field>
    `;
  }

  #renderLoginButton() {
    const disabled = this.userName.get().length === 0 || this.password.get().length === 0;

    return html`
      <mui-outline-button
        corner="round"
        .disabled=${disabled}
        @click=${this.#onSubmit}>
        Login
      </mui-outline-button>
    `;
  }

  #handleUsernameChange({ target: { value } }: TypedEvent<HTMLInputElement>) {
    this.userName.set(value);
  }

  #handlePasswordChange({ target: { value } }: TypedEvent<HTMLInputElement>) {
    this.password.set(value);
  }

  async #onSubmit(e: Event) {
    e.stopImmediatePropagation();

    const signedIn = await signIn(this.userName.get(), this.password.get());
    if (signedIn) {
      navigate(routes.home);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-login-page': LoginPage;
  }
}
