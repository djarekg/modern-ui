import { type AuthCache, authCacheKey } from '@/auth/auth-cache.js';
import { useApi } from '@/hooks/use-api.js';
import { SignalWatcher, html, signal } from '@lit-labs/signals';
import type { User } from '@mui/api';
import { useCache } from '@mui/core';
import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import styles from './profile.css?inline';

@customElement('app-profile')
export class Profile extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  #user = signal<User | null>(null);

  connectedCallback(): void {
    super.connectedCallback();

    effect(async () => {
      const [cache] = useCache();
      const { name: username } = cache(authCacheKey) as AuthCache;
      const { profile } = useApi();
      const { data: user } = await profile({ username }).get();
      this.#user.set(user);
    });
  }

  render() {
    const user = this.#user.get();

    if (!user) {
      return html`<div>Loading...</div>`;
    }

    const { firstName, lastName, email, address, phone } = user;

    return html`
      <form class="app-container">
        <label for="firstName">First name</label>
        <input id="firstName" name="firstName" type="text" .value=${firstName} />
        <label for="lastName">Last name</label>
        <input id="lastName" name="lastName" type="text" .value=${lastName} />
        <label for="email">Last name</label>
        <input id="email" name="email" type="text" .value=${email} />
        <label for="address">Last name</label>
        <input id="address" name="address" type="text" .value=${address} />
        <label for="phone">Last name</label>
        <input id="phone" name="phone" type="text" .value=${phone} />
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-profile': Profile;
  }
}
