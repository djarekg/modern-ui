import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  :host {
    display: block;
  }
`;

@customElement('app-header')
export class Header extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <header>

      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': Header;
  }
}
