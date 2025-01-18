import { css } from 'lit';

export default css`
  :host {
    button {
      all: unset;
      cursor: pointer;
      padding: .5rem 1.5rem;
      border-radius: var(--mui-shape-small);
      color: var(--mui-color-text);
      text-align: center;
      transition: background 0.3s;
      box-shadow: var(--shadow-button);
    }
  }

  [inert] :host button,
  :host button[disabled] {
    pointer-events: none;
  }
`;
