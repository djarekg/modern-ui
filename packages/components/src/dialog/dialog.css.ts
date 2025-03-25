import { css } from 'lit';

export default css`
  :host {
    --_dialog-inline-size: var(--mui-dialog-inline-size, 320px);
    --_dialog-block-size: var(--mui-dialog-block-size, 50px);
    --_dialog-inset: var(--mui-dialog-inset, 0);
    --_dialog-background-color: var(--mui-dialog-background-color, var(--mui-palette-surface-a10));
    --_dialog-border-color: var(--mui-dialog-border-color, var(--mui-palette-surface-a20));
    --_dialog-border-width: var(--mui-dialog-border-width, 1px);
    --_dialog-padding: var(--mui-dialog-padding, 1rem);

    margin: auto;
  }

  .scrim {
    position: fixed;
    inset: 0;
    display: none;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    &.open {
      display: block;
    }
  }

  dialog {
    content-visibility: hidden;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    inline-size: var(--_dialog-inline-size);
    min-block-size: var(--_dialog-block-size);
    inset: var(--_dialog-inset);
    background: var(--_dialog-background-color);
    box-shadow: var(--mui-elevation-5);
    border-radius: var(--mui-shape-large);
    border-color: var(--_dialog-border-color);
    border-width: var(--_dialog-border-width);
    border-style: solid;
    color: var(--mui-color-text);
    padding: var(--_dialog-padding);
    z-index: 1001;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.7s ease-in-out, block-size 0.4s ease-in-out 0.5s;

    &[open] {
      content-visibility: visible;
      visibility: visible;
      opacity: 1;
    }
  }
`;
