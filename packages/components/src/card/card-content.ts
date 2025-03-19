import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css`
  :host {
    --_background-color: var(--mui-card-content-background-color, var(--md-ref-palette-neutral-variant70));
    --_color: var(--mui-card-content-color, var(--mui-color-background));

    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    background: var(--_background-color);
    color: var(--mui-card-content-color, var(--_color ));
    padding: 1.1rem 1rem;

    &:not(:has(+ mui-card-footer)) {
      border-end-start-radius: var(--mui-shape-medium-inner);
      border-end-end-radius: var(--mui-shape-medium-inner);
    }
  }
`;

const CardContent = () => {
  useStyles(styles);

  return html`
    <slot></slot>
  `;
};

define('mui-card-content', CardContent);

declare global {
  interface HTMLElementTagNameMap {
    'mui-card-content': HTMLElement;
  }
}
