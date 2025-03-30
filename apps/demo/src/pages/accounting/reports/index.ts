import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';
import { useTitle } from '@mui/router';

const styles = css``;

const AccountingReportsPage = () => {
  useStyles(styles);
  useTitle('accounting reports');

  return html`<div>Accounting Reports</div>`;
};

define('app-accounting-reports-page', AccountingReportsPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-accounting-reports-page': HTMLElement;
  }
}
