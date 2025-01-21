import { type JWTPayloadSpec, jwt } from '@elysiajs/jwt';
import { Elysia } from 'elysia';

const TOKEN_MAX_AGE = 7 * 86400;

interface CustomJWTPayload extends JWTPayloadSpec {
  name: string;
}

export default new Elysia().group('/auth', app => {
  return app
    .use(
      jwt({
        name: 'jwt',
        secret: process.env.ACCESS_TOKEN_SECRET,
      }),
    )
    .get('/sign/:name', async ({ jwt, cookie: { auth }, params }) => {
      auth.set({
        value: await jwt.sign(params),
        httpOnly: true,
        maxAge: TOKEN_MAX_AGE,
        path: '/profile',
      });

      return `Sign in as ${auth.value}`;
    })
    .get('/profile', async ({ jwt, set, cookie: { auth } }) => {
      const profile = await jwt.verify(auth.value);

      if (!profile) {
        set.status = 401;
        return 'Unauthorized';
      }

      return `Hello ${(profile as CustomJWTPayload).name}`;
    });
});
