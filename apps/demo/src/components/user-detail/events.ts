import type { User } from '@mui/api';

/**
 * @event save - Fired when user detail save button is clicked.
 */
export interface SaveEventDetail {
  user: User;
}

export interface SaveEvent extends CustomEvent<SaveEventDetail> {}

export const createSaveEvent = (user: User) => {
  return new CustomEvent<SaveEventDetail>('save', {
    detail: { user },
    bubbles: true,
    composed: true,
  });
};
