import { SignalWatcher, html, signal } from '@lit-labs/signals';
import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import type { User } from '@mui/api';
import '@mui/components/text-field/text-field.js';

import { useApi } from '@/hooks/use-api.js';
import { getUserName } from '@/utils/cache-util.js';
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
        <mui-text-field
         appearance="filled"
         label="First name"
         .value=${firstName}>
        </mui-text-field>
        <mui-text-field
         appearance="filled"
         label="Last name"
         .value=${lastName}>
        </mui-text-field>
        <mui-text-field
         appearance="filled"
         label="Email"
         .value=${email}>
        </mui-text-field>
        <mui-text-field
         appearance="filled"
         label="Address"
         .value=${address}>
        </mui-text-field>
        <mui-text-field
         appearance="filled"
         label="Phone"
         .value=${phone}>
        </mui-text-field>
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
