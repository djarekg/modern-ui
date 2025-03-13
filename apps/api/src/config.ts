import type { cors } from '@elysiajs/cors';
import type { JWTOption } from '@elysiajs/jwt';

export const corsOrigin = process.env.CORS_ORIGIN;
export const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
export const isDev = process.env.NODE_ENV !== 'production';
export const port = process.env.PORT || 4000;

export const corsConfig = {
  methods: ['POST'],
  preflight: true,
  origin: corsOrigin,
} satisfies Parameters<typeof cors>[0];

export const jwtConfig = {
  name: 'jwt',
  secret: accessTokenSecret,
} satisfies JWTOption;
