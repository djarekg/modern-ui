import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  :host:not(:defined) {
    display: none
  }

  :host {
    display: grid;
    place-items: center;
    block-size: 300px;
  }

  span {
    font-size: 4.7rem;
    font-weight: 600;
    line-height: 4.7rem;
    /* background: linear-gradient(45deg, white, rgba(255, 255, 255, 0.3)); */
    background: linear-gradient(45deg, hsla(189, 100%, 50%, 1) 30%, hsla(321, 100%, 53%, 1) 90%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

@customElement('app-home')
export class Home extends LitElement {
  static styles = styles;

  override render() {
    return html`<span>Modern UI ~ by GriffiDi</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': Home;
  }
}
