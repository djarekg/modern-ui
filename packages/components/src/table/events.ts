import type { TableRow } from './table-row.js';

/**
 * @event internal-row-selected - Fired when a row is selected.
 */
export interface TableInternalRowSelectedEventDetail {
  row: TableRow;
}

export interface TableInternalRowSelectedEvent
  extends CustomEvent<TableInternalRowSelectedEventDetail> {}

export const createTableInternalRowSelectedEvent = (row: TableRow) => {
  return new CustomEvent<TableInternalRowSelectedEventDetail>('internal-row-selected', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event row-selected - Fired when a row is selected.
 */
export interface TableRowSelectedEventDetail {
  row: TableRow;
}

export interface TableRowSelectedEvent extends CustomEvent<TableRowSelectedEventDetail> {}

export const createTableRowSelectedEvent = (row: TableRow) => {
  return new CustomEvent<TableRowSelectedEventDetail>('row-selected', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event internal-row-view - Fired when a row is viewed.
 */
export interface TableInternalRowViewEventDetail {
  row: TableRow;
}

export interface TableInternalRowViewEvent extends CustomEvent<TableInternalRowViewEventDetail> {}

export const createTableInternalRowViewEvent = (row: TableRow) => {
  return new CustomEvent<TableInternalRowViewEventDetail>('internal-row-view', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event row-view - Fired when a row is viewed.
 */
export interface TableRowViewEventDetail {
  row: TableRow;
}

export interface TableRowViewEvent extends CustomEvent<TableRowViewEventDetail> {}

export const createTableRowViewEvent = (row: TableRow) => {
  return new CustomEvent<TableRowViewEventDetail>('row-view', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event internal-row-edit - Fired when a row is edited.
 */
export interface TableInternalRowEditEventDetail {
  row: TableRow;
}

export interface TableInternalRowEditEvent extends CustomEvent<TableInternalRowEditEventDetail> {}

export const createTableInternalRowEditEvent = (row: TableRow) => {
  return new CustomEvent<TableInternalRowEditEventDetail>('internal-row-edit', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};

/**
 * @event row-edit - Fired when a row is edited.
 */
export interface TableRowEditEventDetail {
  row: TableRow;
}

export interface TableRowEditEvent extends CustomEvent<TableRowEditEventDetail> {}

export const createTableRowEditEvent = (row: TableRow) => {
  return new CustomEvent<TableRowEditEventDetail>('row-edit', {
    detail: { row },
    bubbles: true,
    composed: true,
  });
};
