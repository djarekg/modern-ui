import type { ComponentDocument, Variables } from '@apollo-elements/core';
import { useQuery as originalUseQuery } from '@apollo-elements/haunted';
import type { OperationVariables } from '@apollo/client/core';
import { useContext } from 'haunted';

import { useQueryAsync as originalUseQueryAsync } from '@mui/graphql';

import { ClientContext } from '@/client/client-context.js';
import { clientConfig } from '@/config.js';

/**
 * Apollo query operatiion hook. This is a wrapper around the
 * `@mui/graphql` useQuery hook
 *
 * @param {ComponentDocument<D, V>} query GraphQL query.
 * @param {Variables<D, V>} variables Query variables.
 * @returns {object} Query result object.
 */
export const useQuery = <V = OperationVariables, D = unknown>(
  query: ComponentDocument<D, V>,
  variables?: Variables<D, V>,
) => {
  const client = useContext(ClientContext);
  return originalUseQuery(query, { client, variables });
};

/**
 * Async Apollo query operation hook.
 *
 * @param {ComponentDocument<D, V>} query GraphQL query.
 * @param {Variables<D, V>} variables Query variables.
 * @returns {object} Query result object.
 */
export const useQueryAsync = async <V = OperationVariables, D = unknown>(
  query: ComponentDocument<D, V>,
  variables?: Variables<D, V>,
) => {
  const { data, loading, error } = await originalUseQueryAsync(clientConfig, query, { variables });
  return { data, loading, error };
};
