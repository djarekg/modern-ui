import { initNavigation, routes } from '@/router/index.js';
import { Router } from '@lit-labs/router';
import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import css from './layout.css?inline';
import './header/header.js';
import './footer/footer.js';
import { useApi } from '@/hooks/use-api.js';
import { StatusMap } from 'elysia';

@customElement('app-layout')
export class Layout extends LitElement {
  static override styles = [unsafeCSS(css)];
  readonly #router = new Router(this, routes);

  async connectedCallback(): Promise<void> {
    super.connectedCallback();

    initNavigation(this.#router);

    const api = useApi();
    const { status, error } = await api.client.auth.profile.get();

    if (status === StatusMap.Unauthorized || error) {
      this.#router.goto('/login');
    }
  }

  protected override render(): TemplateResult {
    return html`
      <main>
        <app-header>
          <nav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
          </nav>
        </app-header>
        <article>
            ${this.#router.outlet()}
        </article>
        <app-footer></app-footer>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': Layout;
  }
}
