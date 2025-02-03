import { SignalWatcher, html, signal } from '@lit-labs/signals';
import { LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import type { LoginHistory, User } from '@mui/api';
import '@mui/components/text-field/text-field.js';

import type { SaveEvent } from '@/components/user-detail/events.js';
import { useApi } from '@/hooks/use-api.js';
import { getUserId, getUserName } from '@/utils/cache-util.js';
import '@/components/login-history/user-login-history.js';
import '@/components/user-detail/user-detail.js';

import styles from './user.css?inline';

@customElement('app-user-page')
export class UserPage extends SignalWatcher(LitElement) {
  static override styles = [unsafeCSS(styles)];

  #loginHistories = signal<LoginHistory[]>([]);
  #user = signal<User | null>(null);

  /**
   * The user id passed in from the route params.
   */
  @property() id = '';

  connectedCallback(): void {
    super.connectedCallback();

    const id = this.id ?? getUserId();

    effect(async () => {
      const { sign } = useApi();
      const { data } = await sign.history({ id }).get();
      this.#loginHistories.set(data);
    });

    effect(async () => {
      const { users } = useApi();
      const { data } = await users.id({ id }).get();
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
      <section>
        <h2>Profile</h2>
        <app-user-detail
          class="app-container"
          .user=${user}
          @save=${this.#onProfileSave}>
        </app-user-detail>
      </section>
    `;
  }

  #renderLoginHistory() {
    const loginHistories = this.#loginHistories.get();

    if (!loginHistories) {
      return html`<div>Loading...</div>`;
    }

    return html`
      <section>
        <h2>Login History</h2>
        <app-user-login-history .loginHistories=${loginHistories}>
        </app-user-login-history>
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
    'app-user-page': UserPage;
  }
}
