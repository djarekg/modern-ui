import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { apollo } from '@elysiajs/apollo';
import { cookie } from '@elysiajs/cookie';
import { cors } from '@elysiajs/cors';
import { type JWTPayloadSpec, jwt } from '@elysiajs/jwt';
import { swagger } from '@elysiajs/swagger';
import { resolvers } from '@prisma/generated/type-graphql/index.js';
import { Elysia } from 'elysia';
import { isNotEmpty } from 'elysia/utils';
import { buildSchema } from 'type-graphql';

// import { ForbiddenError, UnauthorizedError } from '@mui/graphql';

import type { Context } from '@/client/context.js';
import { prisma } from '@/client/index.js';
import { corsConfig, isDev, jwtConfig, port } from '@/config.js';
import { AuthResolver } from '@/resolvers/auth.js';

import { ForbiddenError } from './errors.js';

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

      context: async ({ cookie, jwt, request }) => {
        const authorization = request.headers.get('authorization');
        let userId: string | null = null;

        if (isNotEmpty(authorization)) {
          // Extract userId from token.
          const token = authorization.split(' ')[1];
          const { sub: storedUserId } = (await jwt.verify(token)) as JWTPayloadSpec;

          if (!storedUserId) {
            ForbiddenError('Access Token is invalid');
          }

          userId = storedUserId;
        }

        return { cookie, jwt, prisma, request, userId };
      },
      formatError: (formattedError, error) => {
        console.error(error);
        return formattedError;
      },
      persistedQueries: {
        ttl: 300, // 5 minutes (default)
      },
    }),
  )
  .listen(port, ({ hostname, port }) =>
    console.log(`🚀 Server is running on http://${hostname}:${port}`),
  );
