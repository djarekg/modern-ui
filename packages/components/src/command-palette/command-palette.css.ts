import { css } from 'lit';

export default css`
  :host {
    --mui-dialog-inset: -250px 0 0 0;
    --mui-dialog-border-width: 2px;
    --mui-dialog-border-color: var(--mui-palette-surface-a20);
    --mui-dialog-padding: 8px;
    --mui-navigation-item-active-indicator-border-radius: var(--mui-shape-xsmall);
    --mui-navigation-item-active-indicator-background-color: var(--mui-palette-surface-a10);
    --_neutral-color: var(--mui-palette-surface-tonal-a40);
    --_dialog-content-block-size: 40px;
    --mui-list-item-height: 42px;
    --mui-dialog-inline-size: 55%;
    --_result-item-height: var(--mui-list-item-height);
    --_footer-block-size: var(--mui-list-item-height);
    --_dialog-min-block-size: calc(
      var(--_dialog-content-block-size) +
      var(--_footer-block-size) +
      var(--mui-dialog-padding) +
      (var(--mui-dialog-padding) / 2));
    --mui-dialog-block-size: var(--_dialog-min-block-size);
  }

  :host(:is([opening])) {
    mui-list {
      display: none;
      opacity: 0;
    }
  }

  :host([open]) {
    mui-list {
      content-visibility: visible;
      visibility: visible;
      display: block;
      opacity: 1;
    }

    mui-dialog {
      --mui-dialog-block-size: calc(
        var(--_result-item-height) *
        var(--_result-item-count) +
        var(--_dialog-min-block-size));
    }
  }

  mui-dialog {
    inline-size: var(--mui-dialog-inline-size);
    block-size: var(--mui-dialog-block-size);
  }

  .search-input,
  .shortcut-tip {
    border-color: var(--mui-color-secondary);
    border-style: solid;
    border-radius: var(--mui-shape-small);
  }

  .search-input {
    --mui-icon-size: 1.4rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-width: 2px;
    padding-inline: 0.5rem 1rem;

    &,
    input {
      background: transparent;
    }

    input {
      inline-size: 100%;
      block-size: 36px;
      line-height: 36px;
      font-size: 1.1rem;
      outline: none;
      border: none;
      color: var(--mui-color-text);
      padding: 0;

      &::placeholder {
        font-size: 1rem;
        color: var(--_neutral-color);
        opacity: 0.4;
      }
    }

    .prepend-text {
      display: none;
    }
  }

  .shortcut-tip {
    --mui-icon-size: 1.2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.2rem 4rem 0.2rem 0.4rem;
    border-width: 1px;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--mui-color-text);
    background: var(--mui-palette-surface-a20);
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 8px var(--mui-color-secondary);
    }
  }

  .icon-like {
    font-weight: 900;
    border: 1px solid var(--mui-color-text);
    padding: 0 0.4rem;
    line-height: 1.2;
    border-radius: var(--mui-shape-xsmall);
    vertical-align: middle;
  }

  mui-list {
    content-visibility: hidden;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.6s ease-in 1s;
  }

  mui-list-item-link {
    --mui-icon-color: var(--_neutral-color);
    --_icon-filter: brightness(75%);
    --mui-list-item-headline-font-size: var(--mui-typescale-label-large-size);
    --mui-list-item-headline-font-weight: var(--mui-typescale-body-small-weight);
    --mui-list-item-headline-line-height: var(--mui-typescale-label-medium-line-height);

    & [slot='end'] {
      --_result-item-text-opacity: 0;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: var(--_neutral-color);
      font-size: 0.8em;
      opacity: var(--_result-item-text-opacity);
    }

    &[active],
    &:hover {
      --mui-icon-color: var(--mui-color-primary);

      & [slot='end'] {
        --_result-item-text-opacity: 1;
      }
    }
  }

  footer,
  .instructions,
  .search-by {
    display: flex;
    align-items: center;
  }

  footer {
    justify-content: space-between;
  }

  .instructions,
  .search-by {
    > div {
      block-size: var(--mui-list-item-height);
    }
  }

  .instructions {
    gap: 1.1rem;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--mui-color-text-secondary);

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .instructions-keyboard {
      gap: 0;
    }
  }

  .search-by {
    gap: 0.5rem;
  }
`;
