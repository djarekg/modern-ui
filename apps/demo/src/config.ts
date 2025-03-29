import { getAuthToken } from './utils/cache-util.js';

/**
 * Apollo client configuration. Pass this to the `@mui/graphql` `useQuery` hook.
 */
export const clientConfig = {
  name: '@mui/demo',
  version: '1.0.0',
  uri: import.meta.env.VITE_GRAPHQL_API,
  token: getAuthToken(),
} as const;
