import type { TypedEvent } from '@mui/core';
import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@mui/components/button/outline-button.js';
import '@mui/components/text-field/text-field.js';

import { signIn } from '@/auth/auth.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';

import styles from './login.css?inline';

@customElement('app-login-page')
export class LoginPage extends LitElement {
  static override styles = [unsafeCSS(styles)];

  @state() protected userName = '';
  @state() protected password = '';

  override render(): TemplateResult {
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

  #renderUsernameControl(): TemplateResult {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Username"
        @change=${this.#onUsernameInputChange}>
      </mui-text-field>
    `;
  }

  #renderPasaswordControl(): TemplateResult {
    return html`
      <mui-text-field
        required
        appearance="round"
        label="Password"
        type="password"
        @change=${this.#onPasswordInputChange}>
      </mui-text-field>
    `;
  }

  #renderLoginButton(): TemplateResult {
    const disabled = this.userName.length === 0 || this.password.length === 0;

    return html`
      <mui-outline-button
        corner="round"
        .disabled=${disabled}
        @click=${this.#onSubmit}>Login</mui-outline-button>
    `;
  }

  #onUsernameInputChange({ target: { value } }: TypedEvent<HTMLInputElement>) {
    this.userName = value;
  }

  #onPasswordInputChange({ target: { value } }: TypedEvent<HTMLInputElement>) {
    this.password = value;
  }

  async #onSubmit(e: Event) {
    e.stopImmediatePropagation();

    const signedIn = signIn(this.userName, this.password);
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
