import { verifyUser } from '@/db/auth/auth.js';
import { createLoginHistory } from '@/db/login-history/index.js';
import { getUser } from '@/db/user/user.js';
import { Elysia, t } from 'elysia';

export default new Elysia().group('/sign', app => {
  return app.post(
    '/in',
    async ({ body: { username, password } }: { body: { username: string; password: string } }) => {
      const verified = await verifyUser(username, password);

      if (!verified) {
        return 'Unauthorized';
      }

      // get usesr id to log login history
      const { id } = await getUser(username);
      await createLoginHistory(id);

      return verified;
    },
    {
      body: t.Object({
        username: t.String(),
        password: t.String(),
      }),
    },
  );
});
