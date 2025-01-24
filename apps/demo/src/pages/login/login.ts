import { signIn } from '@/auth/auth.js';
import { navigate } from '@/router/index.js';
import { routeTypes } from '@/router/route-types.js';
import type { TypedEvent } from '@mui/core';
import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './login.css?inline';
import '@mui/components/button/outline-button.js';

@customElement('app-login')
export class Login extends LitElement {
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
          <div class="login">
            <span class="app-section-title">Login</span>
            <form>
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
      <label for="username">Username</label>
      <input
        required
        type="text"
        id="username"
        name="username"
        @change=${this.#onUsernameInputChange} />
    `;
  }

  #renderPasaswordControl(): TemplateResult {
    return html`
      <label for="password">Password</label>
      <input
        required
        type="password"
        id="password"
        name="password"
        @change=${this.#onPasswordInputChange} />
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
      navigate(routeTypes.home);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-login': Login;
  }
}
