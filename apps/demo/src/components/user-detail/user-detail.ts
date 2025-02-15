import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import type { User } from '@mui/api';
import '@mui/components/button/icon-button.js';

import { createSaveEvent } from './events.js';

const styles = css`
  :host {
    display: block;
  }

  form {
    display: flex;
    flex-direction: row;
    /* gap: 0.5rem; */
    inline-size: 100%;
    /* max-inline-size: 400px; */
    margin-block-end: 1rem;
  }

  fieldset {
    border: none;
    inline-size: 50%;

    > h4 {
      --mui-icon-size: 16px;

      display: flex;
      align-items: center;
      margin-block-start: 0;
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
    inline-size: 70%;
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
          <h4>
            ${this.user.id}<mui-icon-button>content_copy</mui-icon-button>
          </h4>
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
        </fieldset>
        <fieldset>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
          <path fill="currentColor" d="M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0M1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2c-.54.61-1.28 1-2.09 1s-1.55-.39-2.09-1" />
        </svg>
        </fieldset>
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
    // TODO: not dispatching the changed user values. the original is being passed
    this.dispatchEvent(createSaveEvent(this.user));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-user-detail': UserDetail;
  }
}
