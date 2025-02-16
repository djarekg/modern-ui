import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import type { User } from '@mui/api';
import { toast } from '@mui/components';
import '@mui/components/button/icon-button.js';

import { createSaveEvent } from './events.js';

const styles = css`
  :host {
    display: block;
  }

  form {
    display: flex;
    flex-direction: row;
    inline-size: 100%;
    margin-block-end: 1rem;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    inline-size: 50%;
    border: none;


    > h4 {
      --mui-icon-size: 16px;

      display: flex;
      align-items: center;
      margin-block: 0;
      color: var(--mui-color-text-2);

      mui-icon-button {
        margin-inline-start: 4px;
      }
    }

    &:has(svg) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  svg {
    inline-size: 80%;
    color: var(--mui-color-secondary);
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

  /**
   * User object.
   */
  @property({ type: Object }) user: User = {} as User;

  /**
   * Whether the user is being edited.
   */
  @property({ type: Boolean }) editing = false;

  override render() {
    const action = this.editing
      ? html`<mui-outline-button corner="round" @click=${this.#handleSave}>Save</mui-outline-button>`
      : html`<mui-outline-button corner="round" @click=${this.#handleEdit}>Edit</mui-outline-button>`;

    return html`
      <form>
        <fieldset>
          ${this.#renderUserId()}
          ${this.#renderInputs()}
        </fieldset>
        <fieldset>
          ${this.#renderImage()}
        </fieldset>
      </form>
      <footer>
        ${action}
      </footer>
    `;
  }

  #renderUserId() {
    const { id } = this.user;
    // TODO: add tooltip
    return html`
      <h4>
        ${id}<mui-icon-button @click=${this.#handleCopyId}>content_copy</mui-icon-button>
      </h4>
    `;
  }

  #renderInputs() {
    const { editing, user } = this;

    return html`
      <mui-text-field
        label="First name"
        appearance="filled"
        .disabled=${!editing}
        .value=${live(user.firstName)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Last name"
        .disabled=${!editing}
        .value=${live(user.lastName)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Email"
        .disabled=${!editing}
        .value=${live(user.email)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Address"
        .disabled=${!editing}
        .value=${live(user.address)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Phone"
        .disabled=${!editing}
        .value=${live(user.phone)}>
      </mui-text-field>
    `;
  }

  #renderImage() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M1.5 2.09c.9.91 2.37 1.64 4.19 2.16A9.92 9.92 0 0 1 12 2c2.39 0 4.59.84 6.31 2.25C20.13 3.73 21.6 3 22.5 2.09c-.03 1.63-.85 3.12-2.22 4.31A9.9 9.9 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-2.08.63-4 1.72-5.6C2.35 5.21 1.53 3.72 1.5 2.09M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m-9.5-2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V8.5zm6 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5l3-1.5zM12 17.23c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81" />
      </svg>
    `;
  }

  async #handleCopyId() {
    const { id } = this.user;
    navigator.clipboard.writeText(id);

    await toast({ message: 'Copied to clipboard !!!', type: 'success' });
  }

  #handleEdit() {
    this.editing = true;
  }

  #handleSave(e: Event) {
    e.stopImmediatePropagation();

    this.editing = false;
    // TODO: not dispatching the changed user values. the original is being passed
    this.dispatchEvent(createSaveEvent(this.user));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-user-detail': UserDetail;
  }
}
