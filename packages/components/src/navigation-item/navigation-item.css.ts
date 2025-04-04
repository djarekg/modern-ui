import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --_color: var(--mui-navigation-item-color, var(--mui-color-text));
    --_on-color: var(--mui-navigation-item-hover-color, var(--mui-color-background-hover));
    --_icon-color: var(--mui-navigation-item-icon-color, var(--mui-color-text));
    --_icon-on-color: var(--mui-navigation-item-icon-hover-color, var(--mui-color-background-hover));
    --_font-weight: 400;
    --_active-indicator-opacity: 0;
    --_active-indicator-visibility: hidden;
    --_active-indicator-color: var(--mui-navigation-item-hover-color, var(--mui-color-background-hover));
    --_active-indicator-background-color: var(--mui-navigation-item-active-indicator-background-color, transparent);
    --_active-indicator-border-radius: var(--mui-navigation-item-active-indicator-border-radius, var(--mui-shape-round));
    --_border-color: transparent;
    --mui-icon-size: 18px;
  }

  a {
    --_anchor-block-size: 40px;
    --mui-icon-color: var(--_icon-color);

    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    block-size: var(--_anchor-block-size);
    inline-size: 100%;
    padding-inline: 18px;
    font-weight: 600;
    font-weight: var(--_font-weight);
    text-decoration: none;
    color: var(--_color);
    outline: none;

    &:hover,
    &:focus {
      --_active-indicator-opacity: 1;
      --_active-indicator-visibility: visible;
      --mui-icon-color: var(--_icon-on-color);
    }
  }

  .active-indicator {
    position: absolute;
    inset: 0;
    cursor: pointer;
    content-visibility: hidden;
    visibility: var(--_active-indicator-visibility);
    opacity: var(--_active-indicator-opacity);
    border-radius: var(--_active-indicator-border-radius);
    border: 2px solid var(--_active-indicator-color);
    background: var(--_active-indicator-background-color);
    z-index: -1;
    will-transform: opacity;
    transition: opacity 350ams var(--mui-motion-acceleration-easing);
  }
`;
