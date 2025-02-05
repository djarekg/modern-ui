import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --_color: var(--mui-navigation-item-color, var(--mui-color-text));
    --_on-color: var(--mui-navigation-item-hover-color, var(--mui-color-background-hover));
    --_font-weight: 400;
    --_active-indicator-opacity: 0;
    --_active-indicator-color: var(--mui-navigation-item-hover-color, var(--mui-color-background-hover));
    --_active-indicator-visibility: hidden;
    --_icon-weight: var(--_font-weight);
    --md-icon-size: 22px;
  }

  a {
    --_anchor-block-size: 44px;
    --md-icon-color: var(--_on-color);

    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    block-size: var(--_anchor-block-size);
    padding-inline: 18px;
    font-weight: 600;
    text-decoration: none;
    inline-size: 100%;
    color: var(--_color);
    font-weight: var(--_font-weight);
    outline: none;
    transition:  0.3s;

    &:hover,
    &:focus {
      --_active-indicator-opacity: 1;
      --_active-indicator-visibility: visible;

    }
  }

  .active-indicator {
    position: absolute;
    inset: 0;
    cursor: pointer;
    content-visibility: hidden;
    visibility: var(--_active-indicator-visibility);
    opacity: var(--_active-indicator-opacity);
    border-radius: var(--mui-shape-round);
    background: var(--_active-indicator-color);
    z-index: -1;
    will-transform: opacity;
    transition: opacity 0.8s
  }

  .logo {
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 10px var(--md-sys-color-light-blue-alpha));
  }

  md-icon {
    font-variation-settings: "wght" var(--_icon-weight);
  }
`;
