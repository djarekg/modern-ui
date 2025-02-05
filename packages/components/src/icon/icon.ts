import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const styles = css`
  .material-symbols-sharp {
    --_size: var(--mui-icon-size, 24px);
    --_color: var(--mui-icon-color, var(--mui-color-text));
    --_rotate: var(--mui-icon-rotate, 0deg);

    -webkit-transform: rotate(var(--_rotate));
    transform: rotate(var(--_rotate));
    transition: transform var(--mui-motion-duration-100) var(--mui-motion-standard-easing);

    font-family: "Material Symbols Sharp", sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: var(--_size);
    inline-size: var(--_size);
    block-size: var(--_size);
    color: var(--_color);
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }
`;

@customElement('mui-icon')
export class Icon extends LitElement {
  static override styles = [styles];

  @property({ type: Boolean, reflect: true }) rotatable = false;

  override render() {
    return html`<span class="material-symbols-sharp"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-icon': Icon;
  }
}
