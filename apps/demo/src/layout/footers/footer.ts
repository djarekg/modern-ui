import { type CSSResult, LitElement, type TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles: CSSResult = css`
  :host {
    display: block;
  }
`;

@customElement('app-footer')
export class Footer extends LitElement {
  static override styles: CSSResult = styles;

  override render(): TemplateResult {
    return html`
    <footer>

    </footer>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': Footer;
  }
}
