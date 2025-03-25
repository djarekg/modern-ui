import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    /* Set global defaults. This allows for using in calculations. */
    --mui-list-padding-block: 8px;

    --_container-color: var(--mui-list-container-color, transparent);
    --_container-padding-block: var(--mui-list-padding-block);
  }

  ul {
    list-style: none;
    margin: 0;
    padding-inline: 8px;
    padding-block: var(--_container-padding-block);
    background: var(--_container-color);
  }
`;
