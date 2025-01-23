import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  :host {
    display: block;

    footer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      color: white;
      block-size: 100px;
      background-color: var(--color-primary);
    }
  }
`;

@customElement('app-footer')
export class Footer extends LitElement {
  static override styles = styles;

  override render() {
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
