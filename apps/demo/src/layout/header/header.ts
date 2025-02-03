import { SignalWatcher } from '@lit-labs/signals';
import { consume } from '@lit/context';
import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { confirm } from '@mui/components';
import '@mui/components/icon/icon.js';

import { signOut } from '@/auth/auth.js';
import { isSignedInContext } from '@/auth/is-signed-in.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';
import { getUserId } from '@/utils/cache-util.js';

import styles from './header.css?inline';

@customElement('app-header')
export class Header extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  @consume({ context: isSignedInContext, subscribe: true }) isSignedIn: boolean;

  @query('menu') protected userMenu!: HTMLElement;

  render() {
    return html`
      <header>
        <nav>
          ${this.#renderNavButton()}
          <a href=${routes.home}>
            <img
              src="../../../public/img/token-branded--idia.svg"
              loading="lazy"
              alt="Home"
              width="28"
              height="28" />
          </a>
          <navigation-drawer headline="Navigation"> </navigation-drawer>
        </nav>
        <section>
          ${this.#renderUserMenu()}
        </section>
      </header>
    `;
  }

  #renderNavButton() {
    if (!this.isSignedIn) {
      return nothing;
    }

    return html`
      <mui-icon @click=${this.#handleMenuClick}>
        menu
      </mui-icon>
    `;
  }

  #renderUserMenu() {
    if (!this.isSignedIn) {
      return nothing;
    }

    const userProfilePath = `${routes.users}/${getUserId()}`;

    return html`
      <button type="button" popovertarget="userMenu">
        <mui-icon>account_circle</mui-icon>
      </button>
      <menu id="userMenu" popover>
        <ul>
          <li>
            <a class="link" href=${userProfilePath} @click=${this.close}>
              <mui-icon>user_attributes</mui-icon>
              Profile
            </a>
          </li>
          <li>
            <a class="link" href="#" @click=${this.#signOut}>
              <mui-icon>logout</mui-icon>
              Logout
            </a>
          </li>
        </ul>
      </menu>
    `;
  }

  async #signOut() {
    this.close();

    if (await confirm({ title: 'Sign out', content: 'Are you sure you want to sign out?' })) {
      if (await signOut()) {
        navigate(routes.login);
      }
    }
  }

  close() {
    this.userMenu.hidePopover();
  }

  #handleMenuClick(): void {
    this.dispatchEvent(
      new CustomEvent('nav-button-clicked', {
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}
