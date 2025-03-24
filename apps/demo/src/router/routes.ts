import type { RouteConfig } from '@lit-labs/router';
import { html } from 'lit';

import { ProductPage } from '@/pages/products/product.js';
import { routeType } from '@/router/route-type.js';

/**
 * Route configuration for the application.
 */
export const routes: RouteConfig[] = [
  {
    name: 'home',
    path: routeType.home,
    render: () => {
      import('../pages/home.js');
      return html`<app-home></app-home>`;
    },
  },
  {
    name: 'login',
    path: routeType.login,
    render: () => {
      import('../pages/auth/login.js');
      return html`<app-login-page></app-login-page>`;
    },
  },
  {
    name: 'user',
    path: `${routeType.users}/:id`,
    render: ({ id }) => {
      import('../pages/users/user.js');
      return html`<app-user-page .id=${id}></app-user-page>`;
    },
  },
  {
    name: 'users',
    path: `${routeType.users}`,
    render: () => {
      import('../pages/users/index.js');
      return html`<app-users-page></app-users-page>`;
    },
  },
  {
    name: 'accounting',
    path: routeType.accounting,
    render: () => {
      import('../pages/accounting/accounting.js');
      return html`<app-accounting-page></app-accounting-page>`;
    },
  },
  {
    name: 'accounting',
    path: routeType.accountingReports,
    render: () => {
      import('../pages/accounting/reports/index.js');
      return html`<app-accounting-reports-page></app-accounting-reports-page>`;
    },
  },
  {
    name: 'inventory',
    path: routeType.inventory,
    render: () => {
      import('../pages/inventory/inventory.js');
      return html`<app-inventory-page></app-inventory-page>`;
    },
  },
  {
    name: 'products',
    path: routeType.products,
    render: () => {
      import('../pages/products/index.js');
      return html`<app-products-page></app-products-page>`;
    },
  },
  {
    name: 'product',
    path: `${routeType.products}/:id`,
    render: ({ id }) => {
      import('../pages/products/product.js');
      return html`${ProductPage({ id })}`;
    },
  },
];
