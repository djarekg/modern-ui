import type { NavItem } from '@mui/components';

import { routeType } from '@/router/route-type.js';

export default [
  {
    path: routeType.home,
    icon: 'home',
    label: 'Home',
    // cssColorVar: '--mui-palette-color-green',
  },
  {
    path: routeType.users,
    icon: 'groups',
    label: 'Users',
    // cssColorVar: '--mui-palette-color-hot-pink',
  },
  {
    path: routeType.accounting,
    icon: 'account_balance',
    label: 'Accounting',
    // cssColorVar: '--md-sys-color-purple',
  },
  {
    path: routeType.products,
    icon: 'shopping_cart',
    label: 'Products',
    // cssColorVar: '--md-sys-color-gray',
  },
  {
    path: routeType.inventory,
    icon: 'inventory',
    label: 'Inventory',
    // cssColorVar: '--md-sys-color-gray',
  },
] as const satisfies ReadonlyArray<Readonly<NavItem>>;
