import auth from '@/routes/auth.js';
import login from '@/routes/login.js';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

const app = new Elysia() // format - force new line
  .use(swagger())
  .use(cors())
  .use(login)
  .use(auth)
  .listen(process.env.PORT || 4000);

export type App = typeof app;
