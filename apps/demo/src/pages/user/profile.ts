import { useApi } from '@/hooks/use-api.js';
import { getUserName } from '@/utils/cache-util.js';
import { SignalWatcher, html, signal } from '@lit-labs/signals';
import type { User } from '@mui/api';
import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import '@/components/login-history.js';

import styles from './profile.css?inline';

@customElement('app-profile')
export class Profile extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  #user = signal<User | null>(null);

  connectedCallback(): void {
    super.connectedCallback();

    effect(async () => {
      const username = getUserName();
      const { profile } = useApi();
      const { data } = await profile({ username }).get();
      this.#user.set(data);
    });
  }

  render() {
    const user = this.#user.get();

    if (!user) {
      return html`<div>Loading...</div>`;
    }

    return html`
      <article>
        ${this.#renderForm(user)}
        ${this.#renderLoginHistory()}
      </article>
    `;
  }

  #renderForm(user: User) {
    const { firstName, lastName, email, address, phone } = user;

    return html`
      <form class="app-container">
        <label for="firstName">First name</label>
        <input id="firstName" name="firstName" type="text" .value=${firstName} />
        <label for="lastName">Last name</label>
        <input id="lastName" name="lastName" type="text" .value=${lastName} />
        <label for="email">Email</label>
        <input id="email" name="email" type="text" .value=${email} />
        <label for="address">Address</label>
        <input id="address" name="address" type="text" .value=${address} />
        <label for="phone">Phone</label>
        <input id="phone" name="phone" type="text" .value=${phone} />
      </form>
    `;
  }

  #renderLoginHistory() {
    return html`
      <section class="app-container">
        <h2>Login History</h2>
        <app-login-history></app-login-history>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-profile': Profile;
  }
}
