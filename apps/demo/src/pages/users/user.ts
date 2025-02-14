import { SignalWatcher, html, signal } from '@lit-labs/signals';
import { LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import type { LoginHistory, User } from '@mui/api';
import '@mui/components/text-field/text-field.js';
import '@mui/components/tabs/tabs.js';
import '@mui/components/tabs/tab.js';

import type { SaveEvent } from '@/components/user-detail/events.js';
import { useApi } from '@/hooks/use-api.js';
import { getUserId } from '@/utils/cache-util.js';
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
        <mui-tabs>
          <mui-tab id="tab-1" aria-controls="tabpanel-1">
            Profile
            <section slot="panel">
              ${this.#renderForm()}
            </section>
          </mui-tab>
          <mui-tab id="tab-2" aria-controls="tabpanel-2">
            Login History
            <section slot="panel">
              ${this.#renderLoginHistory()}
            </section>
          </mui-tab>
        </mui-tabs>
      </article>
    `;
  }

  #renderForm() {
    const user = this.#user.get();

    if (!user) {
      return nothing;
    }

    return html`
      <app-user-detail .user=${user} @save=${this.#onProfileSave}></app-user-detail>
    `;
  }

  #renderLoginHistory() {
    const loginHistories = this.#loginHistories.get();

    if (!loginHistories) {
      return nothing;
    }

    return html`
      <app-user-login-history .loginHistories=${loginHistories}></app-user-login-history>
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
