/**x
 * Auth cache type is the structure of the auth cache
 */
export type AuthCache = {
  name: string;
  token: string;
};

/**
 * Key for storing and retrieving the auth cache
 */
export const authCacheKey = 'authCacheKey';
