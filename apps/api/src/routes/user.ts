import { getUser, getUsers } from '@/db/user/user.js';
import { Elysia } from 'elysia';

export default new Elysia().group('/profile', app => {
  return app
    .get('/', async () => await getUsers())
    .get('/:username', async ({ params: { username } }) => await getUser(username));
});
