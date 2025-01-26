import { signOut } from '@/auth/auth.js';
import { isSignedInContext } from '@/auth/is-signed-in.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';
import { SignalWatcher } from '@lit-labs/signals';
import { consume } from '@lit/context';
import { log } from '@mui/core';
import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import styles from './header.css?inline';

@customElement('app-header')
export class Header extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  @consume({ context: isSignedInContext, subscribe: true }) isSignedIn: boolean;

  @query('menu') protected userMenu!: HTMLElement;

  @log()
  override render() {
    return html`
      <header>
        <nav>
          <a href="/">
            <img
              src="../../../public/img/token-branded--idia.svg"
              loading="lazy"
              alt="Home"
              width="28"
              height="28" />
          </a>
        </nav>
        <section>
          ${this.#renderUserMenu()}
        </section>
      </header>
    `;
  }

  #renderUserMenu() {
    if (!this.isSignedIn) {
      return nothing;
    }

    return html`
      <button type="button" popovertarget="userMenu">
        <span class="material-symbols-sharp">account_circle</span>
      </button>
      <menu id="userMenu" popover>
        <ul>
          <li>
            <a class="link" href="/profile">
              <span class="material-symbols-sharp">user_attributes</span>
              Profile
            </a>
          </li>
          <li>
            <a class="link" href="#" @click=${this.#signOut}>
              <span class="material-symbols-sharp">logout</span>
              Logout
            </a>
          </li>
        </ul>
      </menu>
    `;
  }

  async #signOut() {
    // TODO: use a dialog component
    if (window.confirm('Are you sure you want to sign out?')) {
      if (await signOut()) {
        navigate(routes.login);
        this.userMenu.togglePopover();
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}
