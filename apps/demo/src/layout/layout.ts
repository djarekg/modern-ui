import type { Router } from '@lit-labs/router';
import { html } from '@lit-labs/signals';
import { useEffect, useState } from 'haunted';
import { css } from 'lit';

import { define, useStyles } from '@mui/core';

import { validate } from '@/auth/auth.js';
import { useIsSignedInWatcher } from '@/auth/is-signed-in.js';
import { navigate } from '@/router/index.js';
import { routePaths } from '@/router/route-path.js';
import '@/auth/is-signed-in.js';
import '@/router/router-provider.js';
import '@/components/main/main.js';
import type { RouterChangedEvent } from '@/router/events.js';

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
  const [router, setRouter] = useState<Router>();
  const [title, setTitle] = useState('');
  const { isSignedIn } = useIsSignedInWatcher();

  const handleRouterChanged = ({ detail }: RouterChangedEvent) => {
    setRouter(detail.router);

    // Override every route's enter method to set the page title.
    detail.router.routes.map(route => {
      route.enter = () => {
        setTitle(route.name);
        return true;
      };
    });
  };

  // Is current user authenticated?
  useEffect(async () => {
    if (!(await validate())) {
      navigate(routePaths.login);
    }
  }, []);

  return html`
    <app-router-provider @router-changed=${handleRouterChanged}>
      <app-main
        .drawerOpen=${drawerOpen}
        @drawer-close=${() => setDrawerOpen(false)}>
        <app-header
          .isSignedIn=${isSignedIn}
          .pageTitle=${title}
          @nav-button-clicked=${() => setDrawerOpen(true)}>
        </app-header>
        <article>${router?.outlet()}</article>
        <app-footer></app-footer>
      </app-main>
    </app-router-provider>
  `;
};

define('app-layout', Layout);

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': HTMLElement;
  }
}
