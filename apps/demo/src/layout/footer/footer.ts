import { useCallback } from 'haunted';
import { html, unsafeCSS } from 'lit';

import { define, useStyles } from '@mui/core';

import styles from './footer.css?inline';

type Link = {
  text: string;
  className: string;
  href: string;
};

const resourceLinks: Link[] = [
  {
    text: 'GitHub',
    className: 'github',
    href: 'https://github.com/djarekg/modern-ui',
  },
  {
    text: 'Docs',
    className: 'docs',
    href: 'https://github.com/djarekg/modern-ui/blob/main/docs/getting-started/quick-start.md',
  },
] as const;

const workspaceLinks: Link[] = [
  {
    text: 'core',
    className: 'project',
    href: 'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/packages/core',
  },
  {
    text: 'components',
    className: 'project',
    href: 'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/packages/components',
  },
  {
    text: 'graphql',
    className: 'project',
    href: 'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/packages/graphql',
  },
  {
    text: 'api',
    className: 'project',
    href: 'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/apps/api',
  },
  {
    text: 'demo',
    className: 'project',
    href: 'https://github.com/djarekg/modern-ui/blob/feature/add-prisma/apps/demo',
  },
];

const projectLinks: Link[] = [
  {
    text: 'Feature Considerations',
    className: 'rnd',
    href: 'https://github.com/djarekg/modern-ui/blob/main/docs/features/feature_considerations.md',
  },
  {
    text: 'Roadmap',
    className: 'roadmap',
    href: 'https://github.com/djarekg/modern-ui/blob/main/docs/roadmap.md',
  },
  {
    text: 'Organization',
    className: 'org',
    href: 'https://github.com/djarekg/modern-ui/blob/main/LICENSE',
  },
  {
    text: 'License',
    className: 'license',
    href: 'https://github.com/djarekg/modern-ui/blob/main/LICENSE',
  },
];

const Footer = () => {
  useStyles(unsafeCSS(styles));

  const renderLink = useCallback(({ text, className, href }: Link) => {
    return html`
      <li class="logo ${className}">
        <a class="link"
          target="_blank"
          href="${href}">
          ${text}
        </a>
      </li>
    `;
  }, []);

  return html`
    <footer>
      <section class="links">
        <div>
          <h5>Resources</h5>
          <ul>
            ${resourceLinks.map(renderLink)}
          </ul>
        </div>
        <div>
          <h5>Workspace Projects</h5>
          <ul>
            ${workspaceLinks.map(renderLink)}
          </ul>
        </div>
        <div>
          <h5>Project</h5>
          <ul>
          ${projectLinks.map(renderLink)}
          </ul>
        </div>
      </section>
      <section class="copyright">
        <span>&copy; ${new Date().getFullYear()} GriffiDi. All rights reserved.</span>
      </section>
    </footer>`;
};

define('app-footer', Footer);

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': HTMLElement;
  }
}
