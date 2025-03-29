import type {
  ApolloClient,
  ApolloError,
  ApolloQueryResult,
  DocumentNode,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
  TypedDocumentNode,
} from '@apollo/client/core';
import { useContext, useState } from 'haunted';
import type { Context } from 'haunted/lib/create-context.js';

import {
  type ClientOptions,
  type ClientQueryOptions,
  createApolloClient,
} from '../client/index.js';
import { unwrapQueryResult } from '../utils/operation-result-unwrapper.js';

/**
 * Infer the type of the query result data's first property, which
 * is the data returned from the query.
 */
type QueryResultData<T> = ApolloQueryResult<T> extends { data: infer D }
  ? D extends Record<string, unknown>
    ? D[keyof D]
    : never
  : never;

/**
 * Apollo query operation hook.
 *
 * @param {Context} clientContext Apollo client context.
 * @param {DocumentNode | TypedDocumentNode} query GraphQL query.
 * @param {ClientQueryOptions} options Query options.
 * @returns {object} Query result of type {data, loading, error}.
 */
export const useQuery = <R = unknown, V = OperationVariables>(
  clientContext: Context<ApolloClient<NormalizedCacheObject>>,
  query: DocumentNode | TypedDocumentNode<R, V>,
  options: ClientQueryOptions = {},
) => {
  const client = useContext(clientContext);
  const [data, setData] = useState<QueryResultData<R>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApolloError | null>(null);

  // Use Proimse+ to handle query operation and set data, loading and error state
  // when the query operation is completed.
  client
    .query({
      ...options,
      query,
    } as QueryOptions)
    .then(({ data, error }) => {
      setData(unwrapQueryResult(data));
      setError(error);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      setError(error);
    });

  return { data, loading, error };
};

/**
 * Async Apollo query operation hook.
 *
 * @param {ClientOptions} { name, version, uri, token } Apollo client options.
 * @param {DocumentNode | TypedDocumentNode} query GraphQL query.
 * @param {ClientQueryOptions} options Query options.
 * @returns {object} Query result of type {data, loading, error}.
 */
export const useQueryAsync = async <R = unknown, V = OperationVariables>(
  { name, version, uri, token }: ClientOptions,
  query: DocumentNode | TypedDocumentNode<R, V>,
  options: ClientQueryOptions = {},
) => {
  const client = createApolloClient({ name, version, uri, token });
  const result = await client.query({ ...options, query } as QueryOptions);
  const data = unwrapQueryResult<R>(result) as QueryResultData<R>;
  const error = result.error;
  const loading = false;

  return { data, loading, error };
};
