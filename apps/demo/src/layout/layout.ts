import { useEffect, useMemo, useState } from 'haunted';
import { css, html, nothing } from 'lit';

import { define, useStyles } from '@mui/core';
import { navigateTo, useRoutes } from '@mui/router';

import { validate } from '@/auth/auth.js';
import { routeType } from '@/router/route-type.js';
import { routes } from '@/router/routes.js';
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

/**
 * Validate the user session and redirect to login if not valid.
 */
if (!(await validate())) {
  navigateTo(routeType.login);
}

/**
 * Layout component for the application.
 *
 * This component is responsible for rendering the main layout of the application,
 * including the header, footer, and main content area. The
 * @returns
 */
const Layout = () => {
  useStyles(styles);

  const route = useRoutes(routes, nothing);

  const [drawerOpen, setDrawerOpen] = useState(false);

  return html`
    <app-main
      .drawerOpen=${drawerOpen}
      @drawer-close=${() => setDrawerOpen(false)}>
      <app-header @nav-button-clicked=${() => setDrawerOpen(true)}>
      </app-header>
      <article>${route.outlet}</article>
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
