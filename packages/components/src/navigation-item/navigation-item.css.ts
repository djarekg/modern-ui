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
    --_border-color: transparent;
    --mui-icon-size: 21px;
  }

  a {
    --_anchor-block-size: 44px;
    --mui-icon-color: var(--_on-color);

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

    &:hover,
    &:focus {
      --_active-indicator-opacity: 1;
      --_active-indicator-visibility: visible;
      --mui-icon-color: var(--_color);
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
    border: 2px solid var(--_active-indicator-color);
    /* background: var(--_active-indicator-color); */
    z-index: -1;
    will-transform: opacity;
    transition: opacity 350ams var(--mui-motion-acceleration-easing);
  }
`;
