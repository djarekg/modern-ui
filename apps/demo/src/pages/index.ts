import { type CSSResult, LitElement, type TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  :host:not(:defined) {
    display: none
  }
`;

@customElement('app-home')
export class Home extends LitElement {
  static styles: CSSResult = styles;

  override render(): TemplateResult {
    return html`<div>

      Home

      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': Home;
  }
}
