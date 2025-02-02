import { AUTH_CACHE_KEY } from '@/auth/auth-cache-key.js';
import type { AuthCache } from '@/auth/auth.js';
import { useCache } from '@mui/core';

/**
 * Get the username from the cache
 * @returns The username
 */
export const getUserName = () => {
  const [cache] = useCache();
  const { name: username } = cache(AUTH_CACHE_KEY) as AuthCache;
  return username;
};
