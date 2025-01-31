import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --_input-font-size: var(--mui-typescale-label-large-size);
    --_input-font-weight: var(--mui-typescale-label-large-weight);
    --_label-on-color: var(--mui-color-text-3);
    --_label-populated-color: var(--mui-text-field-label-populated-color, var(--mui-color-primary));
    --_label-inset-block-start: -2px;
    --_input-font-size: var(--mui-typescale-label-large-size);
    --_label-font-weight: var(--mui-typescale-label-large-weight);

    outline: none;
  }

  :host([appearance=standard]) {
    --_input-on-color: var(--mui-text-field-on-color, #ffffff);
    --_input-border-color: var(--mui-text-field-border-color, #ffffff);

    label {
      position: absolute;
      inset-block-start: var(--_label-inset-block-start);
      inset-inline-start: 0;
      padding-block: 10px;
      padding-inline: 0;
      transition: 0.4s;
    }

    input {
      padding: 10px 0;
      margin: 0 0 20px 0;
      background: transparent;
      border: none;
      border-block-end: 1px solid var(--_input-border-color);
    }

    .populated label,
    input:is(:active, :focus) + label {
      --_label-inset-block-start: -28px;
      --_label-on-color: var(--_label-populated-color);
      --_label-font-size: 12px;
    }
  }

  :host([appearance=filled]) {
    --_input-on-color: var(--mui-text-field-on-color, var(--mui-color-text-light-2));

    .text-field {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    input {
      inline-size: 100%;
      padding: 0.8rem 1rem;
      border: none;
      border-radius: var(--mui-shape-round);
      background: #fff;
      box-shadow: var(--mui-elevation-1);
    }
  }

  .text-field {
    position: relative;
  }

  input {
    outline: none;
    inline-size: 100%;
    color: var(--_input-on-color);
    font-size: var(--_input-font-size);
    font-weight: var(--_input-font-weight);
  }

  label {
    pointer-events: none;
    font-size: var(--_label-font-size);
    font-weight: var(--_label-font-weight);
    color: var(--_label-on-color);
  }
`;
