import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css`
  :host {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Card = () => {
  useStyles(styles);

  return html`<slot></slot>`;
};

define('mui-card', Card);

declare global {
  interface HTMLElementTagNameMap {
    'mui-card': HTMLElement;
  }
}
