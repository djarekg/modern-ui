import { type CSSResult, LitElement, type TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles: CSSResult = css`
  :host {
    display: block;
  }
`;

@customElement('app-header')
export class Header extends LitElement {
  static override styles: CSSResult = styles;

  override render(): TemplateResult {
    return html`
    <header>

    </header>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}
