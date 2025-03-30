import { html } from '@lit-labs/signals';
import { useCallback, useMemo, useState } from 'haunted';
import { nothing, unsafeCSS } from 'lit';

import { define, useHost, useStyles } from '@mui/core';
import { navigateTo } from '@mui/router';

import { signOut } from '@/auth/auth.js';
import { useIsSignedInWatcher } from '@/auth/is-signed-in.js';
import { routeType } from '@/router/route-type.js';
import { getUserId } from '@/utils/cache-util.js';
import { confirm } from '@mui/components';

import styles from './header.css?inline';

const Header = (element: HTMLElement) => {
  useStyles(unsafeCSS(styles));

  const { isSignedIn } = useIsSignedInWatcher();
  const [pageTitle] = useState(document.title);

  const handleSignOut = useCallback(async () => {
    if (await confirm({ title: 'Sign out', content: 'Are you sure you want to sign out?' })) {
      if (await signOut()) {
        navigateTo(routeType.login);
      }
    }
  }, []);

  const handleMenuClick = useCallback(() => {
    element.dispatchEvent(
      new CustomEvent('nav-button-clicked', {
        bubbles: true,
        composed: true,
      }),
    );
  }, []);

  const renderNavButton = useMemo(() => {
    return isSignedIn
      ? html`
        <mui-icon-button id="siteMenu" @click=${handleMenuClick}>
          menu
        </mui-icon-button>
        <!-- <mui-tooltip anchor="siteMenu" inline-start-offset="40">Open site menu</mui-tooltip> -->
      `
      : nothing;
  }, [isSignedIn]);

  const renderSearch = useMemo(
    () =>
      html`<mui-command-palette logoSrc="../../../public/img/token-branded--idia.svg"></mui-command-palette>`,
    [],
  );

  const renderUserMenu = useMemo(
    () =>
      isSignedIn
        ? html`
          <mui-menu id="profileMenu" icon="account_circle">
            <ul>
              <li>
                <a class="link" href=${`${routeType.users}/${getUserId()}`}>
                  <mui-icon>user_attributes</mui-icon>
                  Profile
                </a>
              </li>
              <li>
                <a class="link" href="#" @click=${handleSignOut}>
                  <mui-icon>logout</mui-icon>
                  Logout
                </a>
              </li>
            </ul>
          </mui-menu>
          <!-- <mui-tooltip anchor="profileMenu" inline-end-offset="10">User profile</mui-tooltip> -->
        `
        : nothing,
    [isSignedIn],
  );

  return html`
    <header>
      <nav>
        ${renderNavButton}
        <a href=${routeType.home}>
          <img
            src="../../../public/img/token-branded--idia.svg"
            loading="lazy"
            alt="Home"
            width="28"
            height="28" />
        </a>
      </nav>
      <span class="title">${pageTitle}</span>
      <section>
        ${renderSearch}
        ${renderUserMenu}
      </section>
    </header>
  `;
};

define('app-header', Header);

declare global {
  interface HTMLElementTagNameMap {
    'app-header': HTMLElement;
  }
}
