import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const styles = css`
  :host {
    display: block;

    footer {
      display: flex;
      flex-direction: column;
      color: white;
      block-size: 300px;
      border-top: 2px solid var(--mui-palette-surface-a40);
    }

    .links {
      display: flex;
      justify-content: space-evenly;
      padding-block: 24px;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h5 {
          text-transform: uppercase;
          margin-block-end: 0;
        }
      }
    }

    .copyright {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      block-size: 100%;
      padding-inline: 24px;
      padding-block: 16px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-block-end: 12px;
      cursor: pointer;
    }

    .logo {
      &::before {
        display: inline-block;
        width: 24px;
        height: 24px;
        vertical-align: top;
        margin-inline-end: 12px;
        background-size: contain;
        background-repeat: no
      }

      &.github::before {
        content: url(../../../public/img/logo-github-outline.svg);
      }

      &.docs::before {
        content: url(../../../public/img/read-outline.svg);
      }

      &.roadmap::before {
        content: url(../../../public/img/map-trifold.svg);
      }

      &.license::before {
        content: url(../../../public/img/license-line.svg);
      }
    }
  }
`;

@customElement('app-footer')
export class Footer extends LitElement {
  static override styles = styles;

  override render() {
    return html`
    <footer>
      <section class="links">
        <div>
          <h5>Resources</h5>
          <ul>
            <li class="logo github">
              <a class="link"
                target="_blank"
                href="https://github.com/djarekg/modern-ui">
                GitHub
              </a>
            </li>
            <li class="logo docs">Docs</li>
          </ul>
        </div>
        <div>
          <h5>TBD</h5>
          <ul>
          </ul>
        </div>
        <div>
          <h5>Project</h5>
          <ul>
            <li class="logo roadmap">Roadmap</li>
            <li class="logo license">License</li>
          </ul>
        </div>
      </section>
      <section class="copyright">
        <span>&copy; ${new Date().getFullYear()} GriffiDi. All rights reserved.</span>
      </section>
    </footer>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': Footer;
  }
}
