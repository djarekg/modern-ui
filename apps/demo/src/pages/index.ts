import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  :host:not(:defined) {
    display: none
  }
`;

@customElement('app-home')
export class Home extends LitElement {
  static styles = styles;

  override render() {
    return html`<div>HOME</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': Home;
  }
}
