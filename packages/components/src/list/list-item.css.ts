import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    /* Set global defaults. This allows for using in calculations. */
    --mui-list-item-container-height: var(--mui-list-item-height, 42px);
    --mui-list-item-padding-inline: 8px;
    --mui-list-padding-inline: 8px;

    --_neutral-color: var(--mui-palette-surface-tonal-a40);
    --_container-height: var(--mui-list-item-container-height);
    --_container-color: var(--mui-list-item-container-color, transparent);
    --_container-on-color: var(--mui-color-text-damui-2, #ffffff);
    --_headline-font-size: var(--mui-list-item-headline-font-size, var(--mui-typescale-label-large-size));
    --_headline-font-weight: var(--mui-list-item-headline-font-weight, var(--mui-typescale-label-large-weight));
    --_headline-line-height: var(--mui-list-item-headline-line-height, var(--mui-typescale-label-large-line-height));
    --_container-padding-inline: var(--mui-list-padding-inline);
    --_start-end-padding-inline: var(var(--mui-list-item-padding-inline));
    --_container-hover-color: var(--mui-list-item-hover-container-color, transparent);
    --_container-hover-border-color: var(--mui-list-item-hover-container-border-color, var(--_neutral-color));
  }

  .list-item {
    position: relative;
    display: block;
    inline-size: 100%;
    block-size: var(--_container-height);
    padding-inline: var(--_container-padding-inline);
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--_container-hover-color);
      border: 1px solid var(--_neutral-color);
      inline-size: 100%;
      block-size: 100%;
      opacity: 0;
      z-index: -1;
      border-radius: 0.625rem;
      will-change: opacity;
      transition: opacity 50ms ease-out;
    }

    &:focus,
    &:hover {
      &::before {
        opacity: 1;
      }
    }

    &:focus {
      outline: none;
    }
  }

  .content,
  .body,
  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    block-size: 100%;
  }

  .content {
    gap: 18px;
    inline-size: 100%;
    background: var(--_container-color);
  }

  .body {
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }

  ::slotted([slot='start']) {
    --mui-icon-size: 20px;

    padding-inline-start: var(--_start-end-padding-inline);
  }

  ::slotted([slot='end']) {
    justify-content: flex-end;
    padding-inline-end: var(--_start-end-padding-inline);
  }

  .headline,
  .supporting-text {
    inline-size: 100%;
  }

  .headline {
    font-size: var(--_headline-font-size);
    font-weight: var(--_headline-font-weight);
    line-height: var(--_headline-line-height);
    color: var(--_container-on-color);
  }

  .supporting-text {
    font-size: calc(var(--_headline-font-size) * 0.8);
    line-height: calc(var(--_headline-line-height) * 0.8);
    color: var(--_neutral-color);
  }

  a {
    text-decoration: none;
  }
`;
