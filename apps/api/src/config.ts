import type { cors } from '@elysiajs/cors';
import type { JWTOption } from '@elysiajs/jwt';

export const isDev = process.env.NODE_ENV !== 'production';
export const corsOrigin = process.env.CORS_ORIGIN;
export const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
export const port = process.env.PORT || 4000;

export const corsConfig = {
  methods: ['POST'],
  preflight: true,
  origin: [corsOrigin, 'localhost:7095'],
} as const satisfies Parameters<typeof cors>[0];

export const jwtConfig = {
  name: 'jwt',
  secret: accessTokenSecret,
} as const satisfies JWTOption;
