import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './login.css?inline';
import '@mui/components/button/button.js';

@customElement('app-login')
export class Login extends LitElement {
  static override styles = [unsafeCSS(styles)];

  override render(): TemplateResult {
    return html`
      <section class="login">
        <span class="app-section-title">Login</span>
        <form>
          <fieldset>
            <label for="username">Username</label>
            <span>
              <input type="text" id="username" name="username" required />
            </span>
          </fieldset>
          <fieldset>
            <label for="password">Password</label>
            <span>
              <input type="password" id="password" name="password" required />
            </span>
          </fieldset>
          <fieldset>
            <mui-button type="Submit">Login</mui-button>
          </fieldset>
        </form>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-login': Login;
  }
}
