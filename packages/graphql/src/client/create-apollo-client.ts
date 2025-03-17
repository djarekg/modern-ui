import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  type TypePolicies,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';

import { BadRequestError } from '../errors.js';

type ApolloClientOptions = {
  name: string;
  version: string;
  uri: string;
  token: string;
  typePolicies?: TypePolicies;
  validateVariables?: boolean;
};

/**
 * Create an Apollo client with the ApolloLink, HttpLink, and InMemoryCache
 * and error handling.
 *
 * @param {ApolloClientOptions} options Apollo client options.
 * @returns {ApolloClient} Apollo client.
 */
export const createApolloClient = ({
  name,
  version,
  uri,
  token,
  typePolicies,
}: ApolloClientOptions) => {
  if (!uri) {
    BadRequestError('ApolloClient requires a uri');
  }

  // if (!token) {
  //   BadRequestError('ApolloClient requires a token');
  // }

  const cache = new InMemoryCache({
    typePolicies: typePolicies || {},
  });

  const httpLink = new HttpLink({
    fetchOptions: {
      mode: 'cors',
    },
    uri,
    headers: {
      'Access-Control-Allow-Origin': 'true',
    },
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }));

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const link = ApolloLink.from([errorLink, httpLink]);
  const client = new ApolloClient({
    name,
    version,
    link: authLink.concat(link),
    cache,
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: 'cache-and-network',
    //   },
    // },
    // devtools: {
    //   enabled: true
    // }
  });

  return client;
};
