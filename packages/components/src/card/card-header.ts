import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css`
  :host {
    --_background-color: var(--mui-card-background-color, var(--mui-color-background));
    --_color: var(--mui-card-header-color, var(--mui-color-text));

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--_background-color);
    color: var(--_color);
    padding: 0.7rem 1rem;
    border-top-left-radius: var(--mui-shape-medium-inner);
    border-top-right-radius: var(--mui-shape-medium-inner);
  }
`;

const CardHeader = () => {
  useStyles(styles);

  return html`
    <slot></slot>
  `;
};

define('mui-card-header', CardHeader);

declare global {
  interface HTMLElementTagNameMap {
    'mui-card-header': HTMLElement;
  }
}
