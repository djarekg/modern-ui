import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css`
  :host {
    --_background-color: var(--mui-card-background-color, var(--mui-color-background));

    display: flex;
    flex-direction: column;
    padding: 0.7rem 1rem;
    background: var(--_background-color);
    border-end-start-radius: var(--mui-shape-medium-inner);
    border-end-end-radius: var(--mui-shape-medium-inner);
  }
`;

const CardFooter = () => {
  useStyles(styles);

  return html`
    <slot></slot>
  `;
};

define('mui-card-footer', CardFooter);

declare global {
  interface HTMLElementTagNameMap {
    'mui-card-footer': HTMLElement;
  }
}
