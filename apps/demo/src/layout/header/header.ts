import { SignalWatcher } from '@lit-labs/signals';
import { consume } from '@lit/context';
import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import { confirm } from '@mui/components';
import '@mui/components/button/icon-button.js';
import '@mui/components/command-palette/command-palette.js';
import '@mui/components/menu/menu.js';
import '@mui/components/tooltip/tooltip.js';

import { signOut } from '@/auth/auth.js';
import { isSignedInContext } from '@/auth/is-signed-in.js';
import { navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';
import { getUserId } from '@/utils/cache-util.js';

import styles from './header.css?inline';

@customElement('app-header')
export class Header extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  /**
   * Indicates whether the user is signed in. When the user signs in or out,
   * this property is updated.
   */
  @consume({ context: isSignedInContext, subscribe: true }) isSignedIn: boolean;

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
        </nav>
        <section>
          ${this.#renderSearch()}
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
      <mui-icon-button id="siteMenu" @click=${this.#handleMenuClick}>
        menu
      </mui-icon-button>
      <mui-tooltip anchor="siteMenu">Open site menu</mui-tooltip>
    `;
  }

  #renderSearch() {
    return html`
      <mui-command-palette logoSrc="../../../public/img/token-branded--idia.svg"></mui-command-palette>
    `;
  }

  #renderUserMenu() {
    if (!this.isSignedIn) {
      return nothing;
    }

    const userProfilePath = `${routes.users}/${getUserId()}`;

    return html`
      <mui-menu id="profileMenu" icon="account_circle">
        <ul>
          <li>
            <a class="link" href=${userProfilePath}>
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
      </mui-menu>
      <mui-tooltip anchor="profileMenu">User profile</mui-tooltip>
    `;
  }

  async #signOut() {
    if (await confirm({ title: 'Sign out', content: 'Are you sure you want to sign out?' })) {
      if (await signOut()) {
        navigate(routes.login);
      }
    }
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
