import { Router } from '@lit-labs/router';
import { type CSSResult, LitElement, type TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { routes } from '../router/index.js';
import css from './layout.css' with { type: 'css' };

@customElement('app-layout')
export class Layout extends LitElement {
  static override styles: CSSResult = css;

  readonly #router = new Router(this, routes);

  protected override render(): TemplateResult {
    return html`
      <main>
        <header>
          <h1>App Layout</h1>
        </header>
        <article>
            ${this.#router.outlet()}
        </article>
        <footer>
        </footer>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': Layout;
  }
}
