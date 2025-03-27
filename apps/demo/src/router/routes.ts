import { type TemplateResult, html, type nothing } from 'lit';

import type { Routes } from '@mui/router';

import { ProductPage } from '@/pages/products/product.js';
import { routeType } from '@/router/route-type.js';

export const routes: Routes<TemplateResult | typeof nothing> = {
  [routeType.home]: () => {
    import('../pages/home.js');
    return html`<app-home></app-home>`;
  },
  [routeType.login]: () => {
    import('../pages/auth/login.js');
    return html`<app-login-page></app-login-page>`;
  },
  [`${routeType.users}/:id`]: ({ id }) => {
    import('../pages/users/user.js');
    return html`<app-user-page .id=${id}></app-user-page>`;
  },
  [routeType.users]: () => {
    import('../pages/users/index.js');
    return html`<app-users-page></app-users-page>`;
  },
  [routeType.accounting]: () => {
    import('../pages/accounting/accounting.js');
    return html`<app-accounting-page></app-accounting-page>`;
  },
  [routeType.accountingReports]: () => {
    import('../pages/accounting/reports/index.js');
    return html`<app-accounting-reports-page></app-accounting-reports-page>`;
  },
  [routeType.inventory]: () => {
    import('../pages/inventory/inventory.js');
    return html`<app-inventory-page></app-inventory-page>`;
  },
  [`${routeType.products}/:id`]: ({ id }) => {
    import('../pages/products/product.js');
    return html`${ProductPage({ id })}`;
  },
  [routeType.products]: () => {
    import('../pages/products/index.js');
    return html`<app-products-page></app-products-page>`;
  },
} as const;
