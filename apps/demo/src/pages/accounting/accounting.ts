import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';
import { useTitle } from '@mui/router';

const styles = css``;

const AccountingPage = () => {
  useStyles(styles);
  useTitle('accounting');

  return html`<div>Accounting</div>`;
};

define('app-accounting-page', AccountingPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-accounting-page': HTMLElement;
  }
}
