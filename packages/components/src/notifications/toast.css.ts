import { css } from 'lit';

export default css`
  :host {
    --_popover-background-color: var(--mui-palette-surface-a0);
  }

  :host([type=info]) {
    --_popover-background-color: var(--mui-color-alert-info);
  }

  :host([type=success]) {
    --_popover-background-color: var(--mui-color-alert-success);
  }

  :host([type=warning]) {
    --_popover-background-color: var(--mui-color-alert-warning);
  }

  :host([type=error]) {
    --_popover-background-color: var(--mui-color-alert-error);
  }

  [popover] {
    --mui-icon-size: 24px;

    content-visibility: hidden;
    visibility: hidden;
    min-block-size: 50px;
    z-index: 900;
    inset: 1rem 0 auto 0;
    background: var(--_popover-background-color);
    box-shadow: var(--mui-elevation-4);
    border-radius: var(--mui-shape-small);
    border: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0 1rem;
    opacity: 0;

    &:popover-open {
      content-visibility: visible;
      visibility: visible;
    }

    &:is([opened]) {
      opacity: 1;
    }

    &:is([opening]) {
      opacity: 1;
      transition: opacity 0.3s;
    }

    &:is([closing]) {
      opacity: 0;
      transition: opacity 0.5s;
    }
  }

  aside {
    color: var(--mui-color-text);

    mui-icon {
      color: var(--mui-color-text);
    }
  }
`;
