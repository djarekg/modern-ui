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
      border: 1px solid var(--mui-color-text);
    }
  }

  :host([corner='small']) button {
    border-radius: var(--mui-shape-small);
  }
  :host([corner='medium']) button {
    border-radius: var(--mui-shape-medium);
  }

  :host([corner='large']) button {
    border-radius: var(--mui-shape-large);
  }

  :host([corner='round']) button {
    border-radius: var(--mui-shape-round);
  }

  [inert] :host,
  :host[disabled] {
    pointer-events: none;
  }
`;
