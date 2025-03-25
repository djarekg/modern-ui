import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css``;

const AccountingReportsPage = () => {
  useStyles(styles);

  return html`<div>Accounting Reports</div>`;
};

define('app-accounting-reports-page', AccountingReportsPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-accounting-reports-page': HTMLElement;
  }
}
