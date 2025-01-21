import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './login.css?inline';
import '@mui/components/button/flat-button.js';
import { useApi } from '@/hooks/use-api.js';
import type { TypedEvent } from '@mui/core';

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
            This is a simple demo app that demonstrates how to use the MUI components in a LitElement project.
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
      <span>
        <input
          required
          type="text"
          id="username"
          name="username"
          @change=${this.#onUsernameInputChange} />
      </span>
    `;
  }

  #renderPasaswordControl(): TemplateResult {
    return html`
      <label for="password">Password</label>
      <span>
        <input
          required
          type="password"
          id="password"
          name="password"
          @change=${this.#onPasswordInputChange} />
      </span>
    `;
  }

  #renderLoginButton(): TemplateResult {
    const disabled = this.userName.length === 0 || this.password.length === 0;

    return html`
      <mui-flat-button
        .disabled=${disabled}
        @click=${this.#onSubmit}>Login</mui-flat-button>
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

    const { sign } = useApi();

    const didItWork = await sign.in.post({
      username: this.userName,
      password: this.password,
    });

    console.log('didItWork', didItWork);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-login': Login;
  }
}
