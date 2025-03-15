import { GraphQLError } from 'graphql';

/**
 * Throw an Unauthorized GraphQLError.
 *
 * @param message Error message.
 */
export const UnauthorizedError = (message = 'Unauthorized') => {
  throw new GraphQLError(message, {
    extensions: { code: 'UNAUTHORIZED', http: { status: 401 } },
  });
};

/**
 * Throw a Not Found GraphQLError.
 *
 * @param message Error message.
 */
export const NotFoundError = (message = 'Not Found') => {
  throw new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND', http: { status: 404 } },
  });
};

/**
 * Throw a Forbidden GraphQLError.
 */
export const ForbiddenError = (message = 'Forbidden') => {
  throw new GraphQLError(message, {
    extensions: { code: 'FORBIDDEN', http: { status: 403 } },
  });
};

/**
 * Throw a Bad Request GraphQLError.
 *
 * @param message Error message.
 */
export const BadRequestError = (message = 'Bad Request') => {
  throw new GraphQLError(message, {
    extensions: { code: 'BAD_REQUEST', http: { status: 400 } },
  });
};
