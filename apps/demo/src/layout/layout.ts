import { validate } from '@/auth/auth.js';
import { initNavigation, navigate, routes } from '@/router/index.js';
import { Router } from '@lit-labs/router';
import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import css from './layout.css?inline';
import './header/header.js';
import './footer/footer.js';

@customElement('app-layout')
export class Layout extends LitElement {
  static override styles = [unsafeCSS(css)];
  readonly #router = new Router(this, routes);

  async connectedCallback(): Promise<void> {
    super.connectedCallback();

    initNavigation(this.#router);

    // check if user is signed in and if not redirect to login page
    const valid = await validate();
    if (!valid) {
      console.log('User is not signed in');
      // TODO: use constants for routes
      navigate('/login');
    }

    console.log('User is signed in');
  }

  protected override render(): TemplateResult {
    return html`
      <main>
        <app-header>
          <!-- <nav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
          </nav> -->
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
