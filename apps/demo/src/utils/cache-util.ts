import { type AuthCache, authCacheKey } from '@/auth/auth-cache.js';
import { useCache } from '@mui/core';

/**
 * Get the username from the cache
 * @returns The username
 */
export const getUserName = () => {
  const [cache] = useCache();
  const { name: username } = cache(authCacheKey) as AuthCache;
  return username;
};
