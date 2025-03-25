import type { ListItem } from './list-item.js';

export interface ListEventDetail {
  item: ListItem;
}

export type ListActiveListItemChangeEvent = CustomEvent<ListEventDetail>;

export const createListActiveListItemChange = (item: ListItem) => {
  return new CustomEvent<ListEventDetail>('active-list-item-change', {
    detail: { item },
    bubbles: true,
    composed: true,
  });
};

export const createListItemClickedEvent = (item: ListItem) => {
  return new CustomEvent<ListEventDetail>('clicked', {
    detail: { item },
    bubbles: true,
    composed: true,
  });
};
