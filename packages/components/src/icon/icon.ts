import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const styles = css`
  .material-symbols-sharp {
    --_size: var(--mui-icon-size, 24px);
    --_color: var(--mui-icon-color, var(--mui-color-text));
    --_rotate: var(--mui-icon-rotate, 0deg);
    --_icon-weight: 400;
    --_box-shadow: var(--mui-icon-elevation, none);

    -webkit-transform: rotate(var(--_rotate));
    transform: rotate(var(--_rotate));
    transition: transform 100ms var(--mui-motion-standard-easing);

    font-family: "Material Symbols Sharp", sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: var(--_size);
    font-variation-settings: "wght" var(--_icon-weight);
    inline-size: var(--_size);
    block-size: var(--_size);
    color: var(--_color);
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: block;
    white-space: nowrap;
    word-wrap: normal;
    box-shadow: var(--_box-shadow);
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }
`;

@customElement('mui-icon')
/**
 * @cssprop --mui-icon-size - The size of the icon.
 * @cssprop --mui-icon-color - The color of the icon.
 * @cssprop --mui-icon-rotate - The rotation of the icon.
 */
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
