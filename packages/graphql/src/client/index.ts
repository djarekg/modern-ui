import type { QueryOptions } from '@apollo/client/core';

export * from './client.js';
export * from './create-apollo-client.js';

export interface ClientQueryOptions extends Omit<QueryOptions, 'query'> {}
