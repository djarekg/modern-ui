import { cookie } from '@elysiajs/cookie';
import { jwt } from '@elysiajs/jwt';
import { Elysia, t } from 'elysia';

const TOKEN_MAX_AGE = 7 * 86400;

export default new Elysia().group('/auth', app => {
  return app
    .use(
      jwt({
        name: 'jwt',
        secret: process.env.ACCESS_TOKEN_SECRET,
      }),
    )
    .use(cookie())
    .get('/sign/:name', async ({ jwt, cookie: { auth }, params }) => {
      auth.set({
        value: await jwt.sign(params),
        httpOnly: true,
        maxAge: TOKEN_MAX_AGE,
        path: '/profile',
      });

      return auth.value;
    })
    .get('/signout', async ({ cookie: { auth } }) => {
      auth.set({
        value: '',
        maxAge: 0,
      });

      return true;
    })
    .post(
      '/validate',
      async ({ jwt, set, body }): Promise<{ name: string } | string> => {
        const profile = await jwt.verify(body as string);

        if (!profile) {
          set.status = 401;
          return 'Unauthorized';
        }

        // biome-ignore lint/suspicious/noExplicitAny: OOB not returning correct type
        return profile as any;
      },
      {
        body: t.String(),
      },
    );
});
