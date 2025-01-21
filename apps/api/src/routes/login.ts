import { verifyUser } from '@/auth/auth.js';
import { Elysia, t } from 'elysia';

export default new Elysia().group('/sign', app => {
  return app.post(
    '/in',
    async ({ body: { username, password } }: { body: { username: string; password: string } }) => {
      const verified = await verifyUser(username, password);

      if (!verified) {
        return 'Unauthorized';
      }

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
