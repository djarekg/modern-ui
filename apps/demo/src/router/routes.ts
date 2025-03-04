export const routes = {
  home: '/',
  login: '/auth/login',
  users: '/users',
  user: '/users/:id',
  accounting: '/accounting',
  accountingReports: '/accounting/reports',
  inventory: '/inventory',
  products: '/products',
  product: '/products/:id',
} as const;
