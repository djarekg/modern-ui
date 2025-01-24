import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './footer.css?inline';

@customElement('app-footer')
export class Footer extends LitElement {
  static override styles = [unsafeCSS(styles)];

  override render() {
    return html`
    <footer>
      <section class="links">
        <div>
          <h5>Resources</h5>
          <ul>
            ${this.#renderLink('GitHub', 'github', 'https://github.com/djarekg/modern-ui')}
            ${this.#renderLink(
              'Docs',
              'docs',
              'https://github.com/djarekg/modern-ui/blob/main/docs/getting-started/quick-start.md',
            )}
          </ul>
        </div>
        <div>
          <h5>Projects</h5>
          <ul>
            ${this.#renderLink(
              'core',
              'project',
              'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/packages/core',
            )}
            ${this.#renderLink(
              'web',
              'project',
              'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/packages/web',
            )}
            ${this.#renderLink(
              'components',
              'project',
              'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/packages/components',
            )}
            ${this.#renderLink(
              'api',
              'project',
              'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/apps/api',
            )}
            ${this.#renderLink(
              'demo',
              'project',
              'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/apps/demo',
            )}
          </ul>
        </div>
        <div>
          <h5>Project</h5>
          <ul>
          ${this.#renderLink(
            'Feature Considerations',
            'rnd',
            'https://github.com/djarekg/modern-ui/blob/main/docs/features/feature_considerations.md',
          )}
            ${this.#renderLink(
              'Roadmap',
              'roadmap',
              'https://github.com/djarekg/modern-ui/blob/main/docs/roadmap.md',
            )}
            ${this.#renderLink('Organization', 'org', 'https://github.com/griffidi')}
            ${this.#renderLink(
              'License',
              'license',
              'https://github.com/djarekg/modern-ui/blob/main/LICENSE',
            )}
          </ul>
        </div>
      </section>
      <section class="copyright">
        <span>&copy; ${new Date().getFullYear()} GriffiDi. All rights reserved.</span>
      </section>
    </footer>`;
  }

  #renderLink(text: string, className: string, href: string) {
    return html`
      <li class="logo ${className}">
        <a class="link"
          target="_blank"
          href="${href}">
          ${text}
        </a>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': Footer;
  }
}
