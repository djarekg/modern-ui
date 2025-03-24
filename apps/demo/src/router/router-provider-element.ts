import { Router } from '@lit-labs/router';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { createRouterChangedEvent } from './events.js';
import { subscribeToPushState } from './push-state.js';
import { routes } from './routes.js';

/**
 * Router provider element.
 *
 * Dispatches a router changed event with a new router instance.
 * This is needed because the app mostly is using haunted components and
 * the router requires its owner, a ReactiveControllerHost to be
 * passed in the constructor of the router. By instantiating the router
 * in this custom element, we can use this element in any haunted component
 * and have access to the router instance via the router-changed event.
 *
 * @fires router-changed - Dispatched when the router instance is changed.
 *
 * @example
 * ```html
 * <app-router-provider /@router-changed="..."></app-router-provider>
 * ```
 */
@customElement('app-router-provider-element')
export class RouterProviderElement extends LitElement {
  constructor() {
    super();

    const router = new Router(this, routes);
    subscribeToPushState(router);
    this.dispatchEvent(createRouterChangedEvent(router));
  }

  render = () => html`<slot></slot>`;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-router-provider-element': RouterProviderElement;
  }
}
