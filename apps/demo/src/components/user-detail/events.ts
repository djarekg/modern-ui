import type { GetUserByIdQuery } from '@/types/graphql.js';

/**
 * @event save - Fired when user detail save button is clicked.
 */
export interface SaveEventDetail {
  user: GetUserByIdQuery['user'];
}

export interface SaveEvent extends CustomEvent<SaveEventDetail> {}

export const createSaveEvent = (user: GetUserByIdQuery['user']) => {
  return new CustomEvent<SaveEventDetail>('save', {
    detail: { user },
    bubbles: true,
    composed: true,
  });
};
