import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { type Ref, createRef, ref } from 'lit/directives/ref.js';

import type { NavigationDrawer, NavigationDrawerNavigateEvent } from '@mui/components';
import '@mui/components/navigation-drawer/navigation-drawer.js';

import { navigate } from '@/router/index.js';

import navItems from './nav-items.js';

const styles = css`
  .items {
    list-style-type: none;
    inline-size: 100%;
  }
`;

@customElement('app-nav')
export class Nav extends LitElement {
  static override styles = [styles];

  #drawer: Ref<NavigationDrawer> = createRef();

  render() {
    return html`
      <mui-navigation-drawer
        ${ref(this.#drawer)}
        headline="Site Navigation"
        .items=${navItems}
        @navigate=${this.#handleNavigate}>
        <slot></slot>
      </mui-navigation-drawer>
    `;
  }

  show(): void {
    this.#drawer.value.show();
  }

  #handleNavigate({
    detail: {
      item: { path },
    },
  }: NavigationDrawerNavigateEvent) {
    navigate(path);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-nav': Nav;
  }
}
