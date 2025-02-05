import type { NavItem } from '@mui/components';

import { routes } from '@/router/routes.js';

export default [
  {
    path: routes.home,
    icon: 'home',
    label: 'Home',
    // cssColorVar: '--mui-palette-color-green',
  },
  {
    path: routes.users,
    icon: 'groups',
    label: 'Users',
    // cssColorVar: '--mui-palette-color-hot-pink',
  },
  // {
  //   path: routes.products,
  //   icon: 'widgets',
  //   label: 'Products',
  //   cssColorVar: '--md-sys-color-purple',
  // },
  // {
  //   path: routes.settings,
  //   icon: 'settings',
  //   label: 'Settings',
  //   cssColorVar: '--md-sys-color-gray',
  // },
] as const satisfies ReadonlyArray<Readonly<NavItem>>;
