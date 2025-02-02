import { SignalWatcher, html, signal } from '@lit-labs/signals';
import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { effect } from 'signal-utils/subtle/microtask-effect';

import type { User } from '@mui/api';

import { useApi } from '@/hooks/use-api.js';
import '@/components/user-list/user-list.js';

const styles = css`
  :host {
    display: block;
    margin-inline: 2rem;
  }

  h2 {
    margin-block-start: 0;
  }
`;

@customElement('app-users-page')
export class UsersPage extends SignalWatcher(LitElement) {
  static override styles = [styles];

  #users = signal<User[]>([]);

  connectedCallback(): void {
    super.connectedCallback();

    effect(async () => {
      const { users } = useApi();
      const { data } = await users.index.get();
      this.#users.set(data);
    });
  }

  render() {
    return html`
      <article>
        <section class="app-container">
          <h2>Users</h2>
          <app-user-list .users=${this.#users.get()}></app-user-list>
        </section>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-users-page': UsersPage;
  }
}
