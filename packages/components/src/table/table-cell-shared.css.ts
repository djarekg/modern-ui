import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --mui-table-cell-padding-inline: 16px;
    --mui-table-cell-padding-block: 12px;

    --_container-min-width: var(--mui-table-cell-min-width, 100px);
    --_container-padding-inline: var(--mui-table-cell-padding-inline);
    --_container-padding-block: var(--mui-table-cell-padding-block);

    display: table-cell;
    padding-inline: var(--_container-padding-inline);
    padding-block: var(--_container-padding-block);
    vertical-align: middle;
    min-inline-size: var(--_container-min-width);
  }

  :host(:not(:last-child)) {
    border-inline-end: 1px solid var(--mui-color-border);
  }

  :host([edit]) {
    --mui-icon-size: 20px;
    --_container-width: calc(calc(var(--mui-table-cell-padding-inline) * 2) + var(--mui-icon-size));

    min-inline-size: var(--_container-width);
    inline-size: var(--_container-width);
  }

  :host(:is([edit], [add])) > div {
    --_padding: 2px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-inline: var(--_padding);
    padding-block: var(--_padding);
  }

  :host(:is([edit], [add])) mui-icon {
    cursor: pointer;
  }
`;
