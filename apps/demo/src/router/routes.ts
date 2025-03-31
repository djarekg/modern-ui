import { type TemplateResult, html, type nothing } from 'lit';

import type { Routes } from '@mui/router';

import { routeType } from '@/router/route-type.js';

export const routes: Routes<TemplateResult | typeof nothing> = {
  [routeType.home]: {
    name: 'home',
    entry: () => {
      import('../pages/index.js');
      return html`<app-home-page></app-home-page>`;
    },
  },
  [routeType.login]: {
    name: 'login',
    entry: () => {
      import('../pages/auth/login.js');
      return html`<app-login-page></app-login-page>`;
    },
  },
  [`${routeType.users}/:id`]: {
    name: 'user',
    entry: ({ id }) => {
      import('../pages/users/user.js');
      return html`<app-user-page .id=${id}></app-user-page>`;
    },
  },
  [routeType.users]: {
    name: 'users',
    entry: () => {
      import('../pages/users/index.js');
      return html`<app-users-page></app-users-page>`;
    },
  },
  [routeType.accounting]: {
    name: 'accounting',
    entry: () => {
      import('../pages/accounting/accounting.js');
      return html`<app-accounting-page></app-accounting-page>`;
    },
  },
  [routeType.accountingReports]: {
    name: 'accounting-reports',
    entry: () => {
      import('../pages/accounting/reports/index.js');
      return html`<app-accounting-reports-page></app-accounting-reports-page>`;
    },
  },
  [routeType.inventory]: {
    name: 'inventory',
    entry: () => {
      import('../pages/inventory/inventory.js');
      return html`<app-inventory-page></app-inventory-page>`;
    },
  },
  [`${routeType.products}/:id`]: {
    name: 'product',
    entry: ({ id }) => {
      import('../pages/products/product.js');
      return html`<app-product-page .id=${id}></app-product-page>`;
    },
  },
  [routeType.products]: {
    name: 'products',
    entry: () => {
      import('../pages/products/index.js');
      return html`<app-products-page></app-products-page>`;
    },
  },
  [`${routeType.productTypes}/:id`]: {
    name: 'product type',
    entry: ({ id }) => {
      import('../pages/product-types/product-type.js');
      return html`<app-product-type-page .id=${id}></app-product-type-page>`;
    },
  },
  [routeType.productTypes]: {
    name: 'product types',
    entry: () => {
      import('../pages/product-types/index.js');
      return html`<app-product-types-page></app-product-types-page>`;
    },
  },
  [`${routeType.productTypes}/:id/product-by-type`]: {
    name: 'product by type',
    entry: ({ id }) => {
      import('../pages/product-types/products-by-type.js');
      return html`<app-products-by-type-page .productTypeId=${id}></app-products-by-type-page>`;
    },
  },
} as const;
