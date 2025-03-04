import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css``;

const AccountingPage = () => {
  useStyles(styles);

  return html`<div>Accounting</div>`;
};

define('app-accounting-page', AccountingPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-accounting-page': HTMLElement;
  }
}
