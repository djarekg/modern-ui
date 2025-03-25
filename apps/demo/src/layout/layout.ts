import type { Router } from '@lit-labs/router';
import { html } from '@lit-labs/signals';
import { useCallback, useEffect, useState } from 'haunted';
import { css } from 'lit';

import { define, useStyles } from '@mui/core';

import { validate } from '@/auth/auth.js';
import { useIsSignedInWatcher } from '@/auth/is-signed-in.js';
import { getCurrentRoute, navigate } from '@/router/index.js';
import { routeType } from '@/router/route-type.js';
import '@/auth/is-signed-in.js';
import '@/router/router-provider-element.js';
import '@/router/router-consumer-element.js';
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

  const handleRouterChanged = useCallback(
    ({ detail }: RouterChangedEvent) => {
      const _router = detail.router;

      setRouter(_router);

      // Set the page title.
      const { name = '' } = getCurrentRoute(_router);
      setTitle(name);

      // Override every route's enter method to set the page title.
      _router.routes.map(route => {
        // In case the route already has an enter method defined,
        // we need to call it frist and then set the page title.
        const origEnter = route.enter;

        route.enter = async params => {
          let enterResult = true;

          if (origEnter) {
            enterResult = await origEnter(params);
          }

          setTitle(route.name);
          return enterResult;
        };
      });
    },
    [router],
  );

  // Is current user authenticated?
  useEffect(async () => {
    if (!(await validate())) {
      navigate(routeType.login);
    }
  }, []);

  return html`
    <app-router-provider-element>
      <app-router-consumer-element @router-changed=${handleRouterChanged}>
      </app-router-consumer-element>
    </app-router-provider-element>
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
  `;
};

define('app-layout', Layout);

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': HTMLElement;
  }
}
