import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { apollo } from '@elysiajs/apollo';
import { cookie } from '@elysiajs/cookie';
import { cors } from '@elysiajs/cors';
import { type JWTPayloadSpec, jwt } from '@elysiajs/jwt';
import { swagger } from '@elysiajs/swagger';
import { resolvers } from '@prisma/generated/type-graphql/index.js';
import { Elysia } from 'elysia';
import { buildSchema } from 'type-graphql';

import type { Context } from '@/client/context.js';
import { corsConfig, isDev, jwtConfig, port } from '@/config.js';
import { getUserById } from '@/db/user/user.js';
import { ForbiddenError, UnauthorizedError } from '@/errors.js';
import { AuthResolver } from '@/resolvers/auth.js';

const schema = await buildSchema({
  resolvers: [...resolvers, AuthResolver],
  emitSchemaFile: './prisma/schema.graphql',
  validate: false,
});

new Elysia()
  .use(swagger())
  .use(cors(corsConfig))
  .use(jwt(jwtConfig))
  .use(cookie())
  .use(
    apollo<'/graphql', Context>({
      cache: new InMemoryLRUCache(),
      schema,
      enablePlayground: isDev,
      introspection: isDev,
      context: async ({ cookie, jwt, request, prisma }) => {
        const token = request.headers.get('authorization');
        if (!token) {
          UnauthorizedError('Token is missing');
        }

        // Extract userId from token.
        const { sub: userId } = (await jwt.verify(token)) as JWTPayloadSpec;
        if (!userId) {
          ForbiddenError('Access Token is invalid');
        }

        const user = await getUserById(userId);
        if (!user) {
          UnauthorizedError('User is not authenticated');
        }

        return { cookie, jwt, request, prisma, user };
      },
    }),
  )
  .listen(port, ({ hostname, port }) =>
    console.log(`🚀 Server is running on http://${hostname}:${port}`),
  );
