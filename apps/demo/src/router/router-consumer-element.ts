import type { Router } from '@lit-labs/router';
import { ContextConsumer } from '@lit/context';
import { html } from 'haunted';
import { LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { createRouterChangedEvent } from './events.js';
import { RouterContext } from './router-context.js';

/**
 * Router consumer element.
 *
 * The purpose of this element is to consume the router context and dispatch a router-changed
 * event when the router changes. Most of the applicaiton uses haunted components, but the Router
 * requires a LitElement host to work. This element is used to bridge the gap between haunted and
 * LitElement. By using a custon elememnt, we can include this element and a corresponding
 * `app-router-provider-element` in any haunted component to provide access to the router.
 *
 * @fires router-changed - Dispatched when the router changes.
 */
@customElement('app-router-consumer-element')
export class RouterConsumerElement extends LitElement {
  @property({ type: Object })
  value: Router | undefined;

  connectedCallback() {
    super.connectedCallback();

    new ContextConsumer(this, {
      context: RouterContext,
      callback: value => {
        this.value = value;
        this.dispatchEvent(createRouterChangedEvent(value));
      },
      subscribe: true,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-router-consumer-element': RouterConsumerElement;
  }
}
