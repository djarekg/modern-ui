import { validate } from '@/auth/auth.js';
import { isSignedInContext, isSignedInSignal } from '@/auth/is-signed-in.js';
import { createRouter, initNavigation, navigate } from '@/router/index.js';
import { routes } from '@/router/routes.js';
import { Signal, SignalWatcher } from '@lit-labs/signals';
import { provide } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './header/header.js';
import './footer/footer.js';

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
    /* flex: 1 1 100%; */
    overflow: hidden auto;
  }

  article {
    padding-block: 3rem;
    background: linear-gradient(
      45deg,
      hsla(189, 100%, 50%, 0.4),
      hsla(321, 100%, 53%, 0.4) 80%
    );
    /* background: linear-gradient(
      45deg,
      hsla(222, 23%, 15%, 0.4) 10%,
      hsla(321, 100%, 53%, 0.4)
    ); */
    backdrop-filter: blur(10px);
  }
`;

@customElement('app-layout')
export class Layout extends SignalWatcher(LitElement) {
  static override styles = [styles];

  readonly #router = createRouter(this);
  #watcher: Signal.subtle.Watcher;

  @provide({ context: isSignedInContext }) isSignedIn = isSignedInSignal.get();

  async connectedCallback() {
    super.connectedCallback();

    initNavigation(this.#router);

    this.#watchIsSignedIn();

    // check if user is signed in and if not redirect to login page
    const valid = await validate();
    if (!valid) {
      navigate(routes.login);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#watcher.unwatch();
  }

  override render() {
    return html`
      <main>
        <app-header></app-header>
        <article>${this.#router.outlet()}</article>
        <app-footer></app-footer>
      </main>
    `;
  }

  /**
   * Watch the isSignedIn signal and update the isSignedIn property
   */
  #watchIsSignedIn() {
    // TODO: a utility method should be created to handle this pattern (i.e. computed(() => ...))

    const isSignedIn = new Signal.Computed(() => isSignedInSignal.get());

    this.#watcher = new Signal.subtle.Watcher(async () => {
      // notify callbacks are not allowed to access signals synchronously
      await 0;
      this.isSignedIn = isSignedIn.get();
      // watchers have to be re-enabled after they run:
      this.#watcher.watch();
    });

    this.#watcher.watch(isSignedIn);

    // computed signals are lazy, so we need to read it to run the computation
    // and notify watchers
    isSignedIn.get();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': Layout;
  }
}
