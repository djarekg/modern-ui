import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --_label-on-color: var(--mui-color-text-3);
    --_label-populated-color: var(--mui-text-field-label-populated-color, var(--mui-color-primary));
    --_label-inset-block-start: -2px;
    --_label-font-weight: var(--mui-typescale-label-large-weight);
    --_input-font-weight: var(--mui-typescale-label-large-weight);
    --_label-font-size: var(--mui-typescale-label-large-size);
    --_input-font-size: var(--mui-typescale-label-large-size);
    --_input-border-radius: none;
    --_input-padding-inline: 0;
    --_input-color-disabled: var(--mui-color-text-disabled);

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

  :host([appearance=filled]),
  :host([appearance=round]) {
    --_input-on-color: var(--mui-text-field-on-color, var(--mui-color-text-light-1));

    .text-field {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    input {
      inline-size: 100%;
      border: none;
      background: #fff;
      box-shadow: var(--mui-elevation-1);
    }
  }

  :host([appearance=filled]) {
    --_input-border-radius: var(--mui-shape-small);
    --_input-padding-inline: 0.3rem;
  }

  :host([appearance=round]) {
    --_input-border-radius: var(--mui-shape-round);
    --_input-padding-inline: 0.9rem;
  }

  :host([disabled]) {
    --_input-on-color: var(--_input-color-disabled);
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
    border-radius: var(--_input-border-radius);
    padding: 0.6rem var(--_input-padding-inline)
  }

  label {
    pointer-events: none;
    font-size: var(--_label-font-size);
    font-weight: var(--_label-font-weight);
    color: var(--_label-on-color);
  }
`;
