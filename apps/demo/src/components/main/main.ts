import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { type Ref, createRef, ref } from 'lit/directives/ref.js';

import type { NavigationDrawer, NavigationDrawerNavigateEvent } from '@mui/components';
import '@mui/components/navigation-drawer/navigation-drawer.js';

import { navigate } from '@/router/index.js';

import navItems from './nav-items.js';

const styles = css`
  main {
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    block-size: 100%;
    inline-size: 100%;
    /* padding: 1rem; */
  }
`;

@customElement('app-main')
export class Main extends LitElement {
  static override styles = [styles];

  #drawer: Ref<NavigationDrawer> = createRef();

  render() {
    return html`
      <mui-navigation-drawer
        ${ref(this.#drawer)}
        headline="Main Menu"
        .items=${navItems}
        @navigate=${this.#handleNavigate}>
        <main role="main">
          <slot></slot>
        </main>
      </mui-navigation-drawer>
    `;
  }

  /**
   * Show the navigation drawer.
   */
  show(): void {
    this.#drawer.value.show();
  }

  #handleNavigate({
    detail: {
      item: { path },
    },
  }: NavigationDrawerNavigateEvent) {
    /**
     * Since the navigation-drawer is outside the router context, we can't use native links.
     * We have to use this navigation function that under the hood use's the router's
     * navigation API. We need this to track navigation history and perform route transitions
     * on any navigation from the drawer.
     */
    navigate(path);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-main': Main;
  }
}
