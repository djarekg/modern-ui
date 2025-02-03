import type { User } from '@prisma/client';
import { Elysia } from 'elysia';

import { createUser, getUser, getUserById, getUsers, updateUser } from '@/db/user/user.js';

export default new Elysia().group('/users', app => {
  return app
    .get('/', async () => await getUsers())
    .get('/:username', async ({ params: { username } }) => await getUser(username))
    .get('/id/:id', async ({ params: { id } }) => await getUserById(id))
    .post('/', async ({ body }: { body: User }) => await createUser(body as User))
    .put('/', async ({ body }: { body: User }) => await updateUser(body));
});
