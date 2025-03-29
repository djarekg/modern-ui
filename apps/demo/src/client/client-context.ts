import { createContext } from 'haunted';

import { createApolloClient } from '@mui/graphql';

import { clientConfig } from '@/config.js';

/**
 * Apollo client context. This is used to pass with the Apollo client
 * operation hooks.
 */
export const ClientContext = createContext(createApolloClient(clientConfig));
