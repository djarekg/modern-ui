import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css`
  :host {
    --_background-color: var(--mui-card-background-color, var(--mui-color-background));
    --_color: var(--mui-card-color, var(--mui-color-text));
    --_elevation: var(--mui-card-elevation, var(--mui-elevation-2));

    display: flex;
    flex-direction: column;
    inline-size: minmax(300px, 100%);
    border: 2px solid var(--_background-color);
    border-radius: var(--mui-shape-medium);
    box-shadow: var(--_elevation);
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
