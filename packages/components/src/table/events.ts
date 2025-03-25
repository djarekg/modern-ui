import type { TableRow } from './table-row.js';

export interface TableEventDetail {
  row: TableRow;
}

export interface TableEvent extends CustomEvent<TableEventDetail> {}

/**
 * @event internal-row-selected - Fired when a row is selected.
 */
export const createTableInternalRowSelectedEvent = (row: TableRow) => {
  return new CustomEvent<TableEventDetail>('internal-row-selected', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event row-selected - Fired when a row is selected.
 */
export const createTableRowSelectedEvent = (row: TableRow) => {
  return new CustomEvent<TableEventDetail>('row-selected', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event internal-row-view - Fired when a row is viewed.
 */
export const createTableInternalRowViewEvent = (row: TableRow) => {
  return new CustomEvent<TableEventDetail>('internal-row-view', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event row-view - Fired when a row is viewed.
 */
export const createTableRowViewEvent = (row: TableRow) => {
  return new CustomEvent<TableEventDetail>('row-view', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event internal-row-edit - Fired when a row is edited.
 */
export const createTableInternalRowEditEvent = (row: TableRow) => {
  return new CustomEvent<TableEventDetail>('internal-row-edit', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event row-edit - Fired when a row is edited.
 */
export const createTableRowEditEvent = (row: TableRow) => {
  return new CustomEvent<TableEventDetail>('row-edit', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};
