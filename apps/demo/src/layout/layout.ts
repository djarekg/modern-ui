import { Router } from '@lit-labs/router';
import { type CSSResult, LitElement, type TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { routes } from '../router/index.js';
import css from './layout.css' with { type: 'css' };
import './header/header.js';
import './footer/footer.js';

@customElement('app-layout')
export class Layout extends LitElement {
  static override styles: CSSResult = css;

  readonly #router = new Router(this, routes);

  protected override render(): TemplateResult {
    return html`
      <main>
        <qpp-header></qpp-header>
        <article>
            ${this.#router.outlet()}
        </article>
        <qpp-footer></qpp-footer>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': Layout;
  }
}
