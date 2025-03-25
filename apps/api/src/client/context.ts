import type { JWTPayloadSpec } from '@elysiajs/jwt';
import type { PrismaClient } from '@prisma/client/extension';
import type { Cookie } from 'elysia/cookies';

type jwt = {
  readonly sign: (morePayload: JWTPayloadSpec) => Promise<string>;
  readonly verify: (jwt?: string) => Promise<false | JWTPayloadSpec>;
};

export type Context = {
  cookie: Record<string, Cookie<string> & string>;
  jwt: jwt;
  prisma: PrismaClient;
  request: Request;
  userId: string;
};
