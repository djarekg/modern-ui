import type { RouteConfig } from '@lit-labs/router';
import { html } from 'lit';

export const navigate = (path: string): void => {
  globalThis.history.pushState({}, '', path);
};

export const routes: RouteConfig[] = [
  {
    name: 'home',
    path: '/home',
    render: () => {
      import('../pages/index.js');
      return html`<app-home></app-home>`;
    },
  },
  {
    name: 'login',
    path: '/',
    render: () => {
      import('../pages/login/login.js');
      return html`<app-login></app-login>`;
    },
  },
];
