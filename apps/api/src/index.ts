import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

import auth from '@/routes/auth.js';
import login from '@/routes/login.js';
import user from '@/routes/user.js';

import type { getLoginHistory } from './db/login-history/index.js';
import type { getUser, getUsers } from './db/user/user.js';

const app = new Elysia() // format - force new line
  .use(swagger())
  .use(cors())
  .use(login)
  .use(auth)
  .use(user)
  .listen(process.env.PORT || 4000);

export type App = typeof app;
export type User = Awaited<ReturnType<typeof getUser>>;
export type Users = Awaited<ReturnType<typeof getUsers>>;
export type LoginHistories = Awaited<ReturnType<typeof getLoginHistory>>;
