import { SignalWatcher, html, signal } from '@lit-labs/signals';
import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import type { LoginHistories, User } from '@mui/api';
import '@mui/components/text-field/text-field.js';

import type { SaveEvent } from '@/components/user-detail/events.js';
import { useApi } from '@/hooks/use-api.js';
import { getUserName } from '@/utils/cache-util.js';
import '@/components/login-history/login-history.js';
import '@/components/user-detail/user-detail.js';

import styles from './profile.css?inline';

@customElement('app-profile')
export class Profile extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  #loginHistories = signal<LoginHistories>([]);
  #user = signal<User | null>(null);

  connectedCallback(): void {
    super.connectedCallback();

    const username = getUserName();

    effect(async () => {
      const { sign } = useApi();
      const { data } = await sign.history({ username }).get();
      this.#loginHistories.set(data);
    });

    effect(async () => {
      const { users } = useApi();
      const { data } = await users({ username }).get();
      this.#user.set(data);
    });
  }

  render() {
    return html`
      <article>
        ${this.#renderForm()}
        ${this.#renderLoginHistory()}
      </article>
    `;
  }

  #renderForm() {
    const user = this.#user.get();

    if (!user) {
      return html`<div>Loading...</div>`;
    }

    return html`
      <section class="app-container">
        <h2>Profile</h2>
        <app-user-detail .user=${user} @save=${this.#onProfileSave}></app-user-detail>
      </section>
    `;
  }

  #renderLoginHistory() {
    const loginHistories = this.#loginHistories.get();

    if (!loginHistories) {
      return html`<div>Loading...</div>`;
    }

    return html`
      <section class="app-container">
        <h2>Login History</h2>
        <app-login-history .loginHistories=${loginHistories}></app-login-history>
      </section>
    `;
  }

  async #onProfileSave({ detail: { user } }: SaveEvent) {
    const { users } = useApi();
    await users.index.put(user);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-profile': Profile;
  }
}
