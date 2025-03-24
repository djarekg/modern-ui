import type { NavItem } from '@mui/components';

import { routePaths } from '@/router/route-path.js';

export default [
  {
    path: routePaths.home,
    icon: 'home',
    label: 'Home',
    // cssColorVar: '--mui-palette-color-green',
  },
  {
    path: routePaths.users,
    icon: 'groups',
    label: 'Users',
    // cssColorVar: '--mui-palette-color-hot-pink',
  },
  {
    path: routePaths.accounting,
    icon: 'account_balance',
    label: 'Accounting',
    // cssColorVar: '--md-sys-color-purple',
  },
  {
    path: routePaths.accountingReports,
    icon: 'analytics',
    label: 'Accounting Reports',
    // cssColorVar: '--md-sys-color-purple',
  },
  {
    path: routePaths.products,
    icon: 'shopping_cart',
    label: 'Products',
    // cssColorVar: '--md-sys-color-gray',
  },
  {
    path: routePaths.inventory,
    icon: 'inventory',
    label: 'Inventory',
    // cssColorVar: '--md-sys-color-gray',
  },
] as const satisfies ReadonlyArray<Readonly<NavItem>>;
