import { useEffect, useState } from 'haunted';
import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

import { validate } from '@/auth/auth.js';
import { useIsSignedInWatcher } from '@/auth/is-signed-in.js';
import { routeType } from '@/router/route-type.js';
import '@/auth/is-signed-in.js';
import '@/components/main/main.js';

import './header/header.js';
import './footer/footer.js';

const styles = css`
  :host {
    display: block;
    block-size: 100%;
    inline-size: 100%;
  }

  article{
    padding-block: 2rem 3rem;
    padding-inline: 3rem;
    background: var(--mui-palette-surface-a10);
    backdrop-filter: blur(10px);
    z-index: 1;
  }
`;

const Layout = () => {
  useStyles(styles);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isSignedIn } = useIsSignedInWatcher();

  // Is current user authenticated?
  useEffect(async () => {
    if (!(await validate())) {
      navigate(routeType.login);
    }
  }, []);

  return html`
    <app-main
      .drawerOpen=${drawerOpen}
      @drawer-close=${() => setDrawerOpen(false)}>
      <app-header
        .isSignedIn=${isSignedIn}
        .pageTitle=${title}
        @nav-button-clicked=${() => setDrawerOpen(true)}>
      </app-header>
      <article>${router.outlet}</article>
      <app-footer></app-footer>
    </app-main>
  `;
};

define('app-layout', Layout);

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': HTMLElement;
  }
}
