import { connectApolloClientToVSCodeDevTools } from '@apollo/client-devtools-vscode';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  type TypePolicies,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { sha256 } from 'crypto-hash';

import { assert, isDev } from '@mui/core';

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
 * Create Apollo links with error handling, persisted queries, and authorization.
 *
 * @param {string} token Authorization token.
 * @param {string} uri GraphQL endpoint.
 * @returns {ApolloLink} Apollo link.
 */
const createLinks = (token: string, uri: string) => {
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

  const httpLink = new HttpLink({
    fetchOptions: {
      mode: 'cors',
    },
    uri,
    headers: {
      'Access-Control-Allow-Origin': 'true',
    },
  });

  const persistedQueryLink = createPersistedQueryLink({
    sha256,
    disable: () => !isDev,
    useGETForHashedQueries: true,
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

  const link = authLink.concat(ApolloLink.from([errorLink, httpLink, persistedQueryLink]));

  return link;
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
  assert.notEmpty(uri, () => BadRequestError('ApolloClient requires a uri'));

  const cache = new InMemoryCache({ typePolicies: typePolicies || {} });
  const link = createLinks(token, uri);
  const client = new ApolloClient({
    name,
    version,
    link,
    cache,
  });

  if (isDev) {
    const { onCleanup } = connectApolloClientToVSCodeDevTools(client, 'ws://localhost:7095');

    onCleanup(reason => {
      console.log(
        'disconnected',
        reason,
        /* Referencing client here prevents in from getting garabage collected */ client.version,
      );
    });
  }

  return client;
};
