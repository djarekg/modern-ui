import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './login.css?inline';

@customElement('app-login')
export class Login extends LitElement {
  static override styles = [unsafeCSS(styles)];

  override render(): TemplateResult {
    return html`
      <section class="login">
        <h2>Login</h2>
        <form>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
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
