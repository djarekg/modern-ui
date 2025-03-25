import { Router } from '@lit-labs/router';
import { provide } from '@lit/context';
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { subscribeToPushState } from '@/router/push-state.js';
import { RouterContext } from './router-context.js';
import { routes } from './routes.js';

/**
 * Router provider element.
 *
 * The purpose of this element is to consume the router context and dispatch a router-changed
 * event when the router changes. Most of the applicaiton uses haunted components, but the Router
 * requires a LitElement host to work. This element is used to bridge the gap between haunted and
 * LitElement. By using a custon elememnt, we can include this element and a corresponding
 * `app-router-consumer-element` in any haunted component to provide access to the router.
 */
@customElement('app-router-provider-element')
export class RouterProviderElement extends LitElement {
  @provide({ context: RouterContext })
  @property({ type: Object })
  value = new Router(this, routes);

  connectedCallback(): void {
    super.connectedCallback();

    subscribeToPushState(this.value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-router-provider-element': RouterProviderElement;
  }
}
