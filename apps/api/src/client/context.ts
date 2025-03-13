import type { JWTPayloadSpec } from '@elysiajs/jwt';
import type { PrismaClient, User } from '@prisma/client';
import type { Cookie } from 'elysia/cookies';

type jwt = {
  readonly sign: (morePayload: JWTPayloadSpec) => Promise<string>;
  readonly verify: (jwt?: string) => Promise<false | JWTPayloadSpec>;
};

export type Context = {
  cookie: Record<string, Cookie<string> & string>;
  jwt: jwt;
  request: Request;
  prisma: PrismaClient;
  user: User;
};
