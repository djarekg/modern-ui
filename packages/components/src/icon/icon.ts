import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  .material-symbols-sharp {
    --_size: var(--mui-icon-size, 24px);

    font-family: "Material Symbols Sharp", sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: var(--_size);
    inline-size: var(--_size);
    block-size: var(--_size);
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }
`;

@customElement('mui-icon')
export class Icon extends LitElement {
  static override styles = [styles];

  override render() {
    return html`<span class="material-symbols-sharp"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-icon': Icon;
  }
}
