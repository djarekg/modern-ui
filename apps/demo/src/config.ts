import { getAuthToken } from './utils/cache-util.js';

/**
 * Apollo client configuration. Pass this to the `useClient` hook.
 *
 * @example
 * ```ts
 * import { useClient } from '@mui/core';
 * import { apolloClientConfig } from '@/config.ts';
 *
 * const { query } = useClient(apolloClientConfig);
 * ```
 */
export const clientConfig = {
  name: '@mui/demo',
  version: '1.0.0',
  uri: import.meta.env.GRAPHQL_API,
  token: getAuthToken(),
} as const;
