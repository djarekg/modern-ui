import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './login.css?inline';
import '@mui/components/button/outline-button.js';

@customElement('app-login')
export class Login extends LitElement {
  static override styles = [unsafeCSS(styles)];

  override render(): TemplateResult {
    return html`
      <article>

        <section>
          <span class="app-section-title">Welcome to the demo app</span>
          <p>
            This is a simple demo app that demonstrates how to use the MUI components in a LitElement project.
          </p>
        </section>

        <section>
          <div class="login">
            <span class="app-section-title">Login</span>
            <form>
              <fieldset>
                <label for="username">Username</label>
                <span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required />
                </span>
              </fieldset>
              <fieldset>
                <label for="password">Password</label>
                <span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required />
                </span>
              </fieldset>
              <fieldset>
                <mui-outline-button type="submit">Login</mui-outline-button>
              </fieldset>
            </form>
          </div>
        </section>

      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-login': Login;
  }
}
