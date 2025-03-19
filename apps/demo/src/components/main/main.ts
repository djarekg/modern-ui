import { useCallback, useEffect } from 'haunted';
import { css, html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import type { NavigationDrawer, NavigationDrawerNavigateEvent } from '@mui/components';
import { define, useHost, useStyles } from '@mui/core';
import '@mui/components/navigation-drawer/navigation-drawer.js';

import { navigate } from '@/router/index.js';

import navItems from './nav-items.js';

const styles = css`
  :host {
    --mui-navigation-item-icon-color: var(--mui-palette-surface-tonal-a40);
    --mui-navigation-item-icon-hover-color: var(--mui-color-primary);
   }

  main {
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    block-size: 100%;
    inline-size: 100%;
  }
`;

type MainProps = {
  drawerOpen: boolean;
};

/**
 * Main component.
 *
 * @param {MainProps} Main properties.
 * @fires drawer-close - Dispatched when the drawer is closed.
 */
const Main = ({ drawerOpen }: MainProps) => {
  useStyles(styles);

  const _this = useHost();
  const drawer = createRef<NavigationDrawer>();

  const handleNavigate = ({
    detail: {
      item: { path },
    },
  }: NavigationDrawerNavigateEvent) => {
    /**
     * Since the navigation-drawer is outside the router context, we can't use native links.
     * We have to use this navigation function that under the hood use's the router's
     * navigation API. We need this to track navigation history and perform route transitions
     * on any navigation from the drawer.
     */
    navigate(path);
  };

  const handleDrawerClose = useCallback(() => {
    _this.dispatchEvent(new CustomEvent('drawer-close'));
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      drawer.value.show();
    }
  }, [drawerOpen]);

  return html`
    <mui-navigation-drawer
      ${ref(drawer)}
      headline="Main Menu"
      .items=${navItems}
      @close=${handleDrawerClose}
      @navigate=${handleNavigate}>
      <main role="main">
        <slot></slot>
      </main>
    </mui-navigation-drawer>
  `;
};

define('app-main', Main);

declare global {
  interface HTMLElementTagNameMap {
    'app-main': HTMLElement & MainProps;
  }
}
