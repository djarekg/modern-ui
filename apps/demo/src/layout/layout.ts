import { Router } from '@lit-labs/router';
import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { initNavigation, routes } from '../router/index.js';
import css from './layout.css?inline';
import './header/header.js';
import './footer/footer.js';

@customElement('app-layout')
export class Layout extends LitElement {
  static override styles = [unsafeCSS(css)];

  readonly #router = new Router(this, routes);

  connectedCallback(): void {
    super.connectedCallback();
    initNavigation(this.#router);
  }

  protected override render(): TemplateResult {
    return html`
      <main>
        <qpp-header>
          <nav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
          </nav>
        </qpp-header>
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
