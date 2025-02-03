import type { User } from '@mui/api';
import { useCache } from '@mui/core';

import { AUTH_CACHE_KEY } from '@/auth/auth-cache-key.js';
import type { AuthCache } from '@/auth/auth.js';
import { PROFILE_CACHE_KEY } from '@/auth/profile-cache-key.js';

/**
 * Get the username from the cache
 * @returns The username
 */
export const getUserName = () => {
  const [cache] = useCache();
  const { name: username } = cache(AUTH_CACHE_KEY) as AuthCache;
  return username;
};

/**
 * Get the user id from the cache
 * @returns The user id
 */
export const getUserId = () => {
  const [cache] = useCache();
  const user = cache(PROFILE_CACHE_KEY) as User | undefined;
  return user?.id;
};
