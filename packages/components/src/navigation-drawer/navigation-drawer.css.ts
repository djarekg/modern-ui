import { css } from 'lit';

export default css`
  :host {
    --_drawer-color: var(--mui-navigation-drawer-color, var(--mui-color-background));

    display: block;
    inline-size: 100%;
    block-size: 100%;
  }

  aside {
    --_drawer-inline-size: 260px;

    content-visibility: hidden;
    visibility: hidden;
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    inline-size: var(--_drawer-inline-size);
    block-size: 100%;
    inset-block: 0;
    inset-inline-start: 0;
    background: var(--_drawer-color);
    box-shadow: var(--mui-elevation-3);
    border-inline-end: 1px solid var(--mui-border-color);
    border-start-end-radius: var(--mui-shape-large);
    border-end-end-radius: var(--mui-shape-large);
    z-index: 999;
    transform: translateX(calc(var(--_drawer-inline-size) * -1));
    will-change: transform;
    transition: transform var(--mui-motion-duration-500) var(--mui-motion-standard-easing), visibility
      0s linear var(--mui-motion-duration-500);
  }

  :host([opened]) aside {
    content-visibility: visible;
    visibility: visible;
    transform: translateX(0);
    transition: transform var(--mui-motion-duration-200) var(--mui-motion-standard-easing);
  }

  .scrim {
    --_scrim-opacity: 0;

    position: absolute;
    inset: 0;
    content-visibility: hidden;
    visibility: hidden;
    overscroll-behavior: contain;
    background: var(--mui-color-scrim);
    background-color: var(--mui-color-scrim);
    opacity: var(--_scrim-opacity);
    transition: opacity var(--mui-motion-duration-200) linear var(--mui-motion-duration-100);
  }

  :host([opened]) .scrim {
    --_scrim-opacity: 0.2;

    visibility: visible;
  }

  nav {
    position: relative;
    block-size: 100%;
    padding-inline: 16px;
    padding-block: 20px;

    & h4 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline-start: 22px;
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 9px;
    box-sizing: border-box;
    inline-size: 100%;
    block-size: 66px;
    /* block-size: 100%; */
    padding-inline: 30px;
  }

  .close-button {
    cursor: pointer;
  }

  /* md-standard-icon-button {
    outline: none;
  } */
`;
