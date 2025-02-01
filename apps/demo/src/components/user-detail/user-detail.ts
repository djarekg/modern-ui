import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import type { User } from '@mui/api';

import { createSaveEvent } from './events.js';

const styles = css`
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    inline-size: 100%;
    max-inline-size: 400px;
    margin-block-end: 1rem;
  }

  header,
  footer {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    inline-size: 100%;
  }
`;

/**
 * @fires save - Dispatched when the user clicks the save button.
 *
 * @element app-user-detail
 */
@customElement('app-user-detail')
export class UserDetail extends LitElement {
  static override styles = [styles];

  @property({ type: Object }) user: User = {} as User;

  @property({ type: Boolean }) editing = false;

  override render() {
    const action = this.editing
      ? html`<mui-outline-button corner="round" @click=${this.#handleSave}>Save</mui-outline-button>`
      : html`<mui-outline-button corner="round" @click=${this.#handleEdit}>Edit</mui-outline-button>`;

    return html`
      <form>
        <mui-text-field
          label="First name"
          appearance="filled"
          .disabled=${!this.editing}
          .value=${live(this.user.firstName)}>
        </mui-text-field>
        <mui-text-field
          appearance="filled"
          label="Last name"
          .disabled=${!this.editing}
          .value=${live(this.user.lastName)}>
        </mui-text-field>
        <mui-text-field
          appearance="filled"
          label="Email"
          .disabled=${!this.editing}
          .value=${live(this.user.email)}>
        </mui-text-field>
        <mui-text-field
          appearance="filled"
          label="Address"
          .disabled=${!this.editing}
          .value=${live(this.user.address)}>
        </mui-text-field>
        <mui-text-field
          appearance="filled"
          label="Phone"
          .disabled=${!this.editing}
          .value=${live(this.user.phone)}>
        </mui-text-field>
      </form>
      <footer>
        ${action}
      </footer>
    `;
  }

  #handleEdit() {
    this.editing = true;
  }

  #handleSave(e: Event) {
    e.stopImmediatePropagation();

    this.editing = false;
    this.dispatchEvent(createSaveEvent(this.user));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-user-detail': UserDetail;
  }
}
