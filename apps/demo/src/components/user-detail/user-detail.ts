import { useMemo } from 'haunted';
import { html, unsafeCSS } from 'lit';
import { live } from 'lit/directives/live.js';

import type { User } from '@mui/api';
import { toast } from '@mui/components';
import { define, useHost, useStyles } from '@mui/core';
import '@mui/components/button/icon-button.js';

import { createSaveEvent } from './events.js';

import styles from './user-detail.css?inline';

type UserDetailProps = {
  user: User;
  editing: boolean;
};

/**
 * User detail component.
 * @param {UserDetailProps} UserDetail properties.
 * @fires save - Dispatched when the user clicks the save button.
 */
const UserDetail = ({ user, editing }: UserDetailProps) => {
  useStyles(unsafeCSS(styles));

  const _this = useHost();

  const handleCopyId = async () => {
    const { id } = user;
    navigator.clipboard.writeText(id);

    await toast({ message: 'Copied to clipboard !!!', type: 'success' });
  };

  const handleEdit = () => (editing = true);

  const handleSave = () => {
    editing = false;

    // TODO: not dispatching the changed user values. the original is being passed
    _this.dispatchEvent(createSaveEvent(user));
  };

  const action = useMemo(
    () =>
      editing
        ? html`<mui-outline-button corner="round" @click=${handleSave}>Save</mui-outline-button>`
        : html`<mui-outline-button corner="round" @click=${handleEdit}>Edit</mui-outline-button>`,
    [editing],
  );

  const renderUserId = useMemo(() => {
    const { id } = user;
    // TODO: add tooltip
    return html`
      <h4>
        ${id}<mui-icon-button @click=${handleCopyId}>content_copy</mui-icon-button>
      </h4>
    `;
  }, [user]);

  const renderInputs = useMemo(() => {
    const { firstName, lastName, email, address, phone } = user;

    return html`
      <mui-text-field
        label="First name"
        appearance="filled"
        .disabled=${!editing}
        .value=${live(firstName)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Last name"
        .disabled=${!editing}
        .value=${live(lastName)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Email"
        .disabled=${!editing}
        .value=${live(email)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Address"
        .disabled=${!editing}
        .value=${live(address)}>
      </mui-text-field>
      <mui-text-field
        appearance="filled"
        label="Phone"
        .disabled=${!editing}
        .value=${live(phone)}>
      </mui-text-field>
    `;
  }, [user, editing]);

  const renderImage = useMemo(() => {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M1.5 2.09c.9.91 2.37 1.64 4.19 2.16A9.92 9.92 0 0 1 12 2c2.39 0 4.59.84 6.31 2.25C20.13 3.73 21.6 3 22.5 2.09c-.03 1.63-.85 3.12-2.22 4.31A9.9 9.9 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-2.08.63-4 1.72-5.6C2.35 5.21 1.53 3.72 1.5 2.09M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m-9.5-2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V8.5zm6 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5l3-1.5zM12 17.23c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81" />
      </svg>
    `;
  }, []);

  return html`
      <form>
        <fieldset>
          ${renderUserId}
          ${renderInputs}
        </fieldset>
        <fieldset>
          ${renderImage}
        </fieldset>
      </form>
      <footer>
        ${action}
      </footer>
    `;
};

define('app-user-detail', UserDetail);

declare global {
  interface HTMLElementTagNameMap {
    'app-user-detail': HTMLElement & UserDetailProps;
  }
}
