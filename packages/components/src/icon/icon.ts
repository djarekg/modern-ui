import { css, html } from 'lit';

import { define, useStyles } from '@mui/core';

const styles = css`
  .material-symbols-sharp {
    --_size: var(--mui-icon-size, 24px);
    --_color: var(--mui-icon-color, var(--mui-color-text));
    --_rotate: var(--mui-icon-rotate, 0deg);
    --_icon-weight: 400;
    --_box-shadow: var(--mui-icon-elevation, none);

    -webkit-transform: rotate(var(--_rotate));
    transform: rotate(var(--_rotate));
    transition: transform 100ms var(--mui-motion-standard-easing);

    font-family: "Material Symbols Sharp", sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: var(--_size);
    font-variation-settings: "wght" var(--_icon-weight);
    inline-size: var(--_size);
    block-size: var(--_size);
    color: var(--_color);
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: block;
    white-space: nowrap;
    word-wrap: normal;
    box-shadow: var(--_box-shadow);
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }
`;

/**
 * Icon component.
 * @cssprop --mui-icon-size - The size of the icon.
 * @cssprop --mui-icon-color - The color of the icon.
 * @cssprop --mui-icon-rotate - The rotation of the icon.
 */
const Icon = () => {
  useStyles(styles);

  return html`<span class="material-symbols-sharp"><slot></slot></span>`;
};

define('mui-icon', Icon, { observedAttributes: ['rotatable'] });

declare global {
  interface HTMLElementTagNameMap {
    'mui-icon': HTMLElement;
  }
}
