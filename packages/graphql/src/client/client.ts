import type {
  DocumentNode,
  MutationOptions,
  OperationVariables,
  QueryOptions,
  TypedDocumentNode,
} from '@apollo/client/core';

import { assert } from '@mui/core';

import { BadRequestError } from '../errors.js';
import {
  extractDataFromQueryResult,
  unwrapMutateResult,
} from '../utils/operation-result-unwrapper.js';
import { createApolloClient } from './create-apollo-client.js';
import type { ClientQueryOptions } from './index.js';

/**
 * Client options type.
 */
export type ClientOptions = {
  name: string;
  version: string;
  uri: string;
  token: string;
};

/**
 * Use Apollo client mutation and query options.
 *
 * @param {ClientOptions} options Client options.
 * @returns {Client} Client object.
 *
 * @example
 * ```ts
 * const { mutate, query } = useClient();
 * ```
 */
export const useClient = ({ name, version, uri, token }: ClientOptions) => {
  assert.notEmpty(uri, () => BadRequestError('ApolloClient requires a uri'));
  assert.notEmpty(token, () => BadRequestError('ApolloClient requires a token'));

  const client = createApolloClient({ name, version, uri, token });

  /**
   * Execute a mutate operation.
   *
   * @param {MutationOptions} options Mutate options.
   * @returns {Promise<FetchResult<R>>} Result from mutate operation.
   */
  const mutate = async <R = unknown>(options: MutationOptions) => {
    const result = await client.mutate(options);
    return unwrapMutateResult<R>(result);
  };

  /**
   * Execute a query operation.
   *
   * @param {QueryOptions} options Query options.
   * @returns {Promise<ApolloQueryResult<R>>} Result from query operation.
   */
  const query = async <V = OperationVariables, R = unknown>(
    query: DocumentNode | TypedDocumentNode<R, V>,
    options: ClientQueryOptions = {},
  ): Promise<R> => {
    const result = await client.query({
      ...options,
      query,
    } as QueryOptions);
    return extractDataFromQueryResult<R>(result);
  };

  return { mutate, query };
};
