import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  :host {
    display: block;
    color: white;
  }
`;

@customElement('app-footer')
export class Footer extends LitElement {
  static override styles = styles;

  override render() {
    return html`
    <footer>
test
    </footer>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': Footer;
  }
}
