import { validate } from '@/auth/auth.js';
import { initNavigation, navigate, routes } from '@/router/index.js';
import { Router } from '@lit-labs/router';
import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './header/header.js';
import './footer/footer.js';
import { routeTypes } from '@/router/route-types.js';

const styles = css`
  :host,
  main,
  article {
    block-size: 100%;
    inline-size: 100%;
  }

  :host {
    display: block;
  }

  main {
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
  }
`;

@customElement('app-layout')
export class Layout extends LitElement {
  static override styles = [styles];
  readonly #router = new Router(this, routes);

  async connectedCallback(): Promise<void> {
    super.connectedCallback();

    initNavigation(this.#router);

    // check if user is signed in and if not redirect to login page
    const valid = await validate();
    if (!valid) {
      console.log('User is not signed in');
      navigate(routeTypes.login);
    }

    console.log('User is signed in');
  }

  protected override render(): TemplateResult {
    return html`
      <main>
        <app-header></app-header>
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
