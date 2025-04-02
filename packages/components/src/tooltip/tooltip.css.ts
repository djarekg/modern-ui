import { css } from 'lit';

export default css`
  :host {
    position: absolute;
    display: contents;
    background: var(--mui-color-background);
    color: var(--mui-color-text);
    border-radius: var(--mui-shape-small);
    box-shadow: var(--mui-elevation-1);
    padding: 0.5rem;
    border: 1px solid var(--mui-color-border);
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin: 0;
    inline-size: max-content;
    z-index: 600;
    content-visibility: hidden;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease-in-out 0.7s;
  }

  :host(:popover-open) {
    content-visibility: visible;
    visibility: visible;
    opacity: 1;
  }
`;
