import type { RouteConfig } from '@lit-labs/router';
import { html } from 'lit';

import { ProductPage } from '@/pages/products/product.js';
import { routePaths } from '@/router/route-path.js';

/**
 * Route configuration for the application.
 */
export const routes: RouteConfig[] = [
  {
    name: 'home',
    path: routePaths.home,
    render: () => {
      import('../pages/home.js');
      return html`<app-home></app-home>`;
    },
  },
  {
    name: 'login',
    path: routePaths.login,
    render: () => {
      import('../pages/auth/login.js');
      return html`<app-login-page></app-login-page>`;
    },
  },
  {
    name: 'user',
    path: `${routePaths.users}/:id`,
    render: ({ id }) => {
      import('../pages/users/user.js');
      return html`<app-user-page .id=${id}></app-user-page>`;
    },
  },
  {
    name: 'users',
    path: `${routePaths.users}`,
    render: () => {
      import('../pages/users/index.js');
      return html`<app-users-page></app-users-page>`;
    },
  },
  {
    name: 'accounting',
    path: routePaths.accounting,
    render: () => {
      import('../pages/accounting/accounting.js');
      return html`<app-accounting-page></app-accounting-page>`;
    },
  },
  {
    name: 'accounting',
    path: routePaths.accountingReports,
    render: () => {
      import('../pages/accounting/reports/index.js');
      return html`<app-accounting-reports-page></app-accounting-reports-page>`;
    },
  },
  {
    name: 'inventory',
    path: routePaths.inventory,
    render: () => {
      import('../pages/inventory/inventory.js');
      return html`<app-inventory-page></app-inventory-page>`;
    },
  },
  {
    name: 'products',
    path: routePaths.products,
    render: () => {
      import('../pages/products/index.js');
      return html`<app-products-page></app-products-page>`;
    },
  },
  {
    name: 'product',
    path: `${routePaths.products}/:id`,
    render: ({ id }) => {
      import('../pages/products/product.js');
      return html`${ProductPage({ id })}`;
    },
  },
];
