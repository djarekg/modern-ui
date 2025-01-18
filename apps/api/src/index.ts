import { auth } from '@/auth.js';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

const app = new Elysia() // format - force new line
  .use(swagger())
  .use(cors())
  .use(auth)
  .listen(process.env.PORT || 4000);

export type App = typeof app;
