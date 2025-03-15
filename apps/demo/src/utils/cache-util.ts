import { useCache } from '@mui/core';

import { AUTH_CACHE_KEY } from '@/auth/auth-cache-key.js';
import type { AuthCache } from '@/auth/auth.js';
import { PROFILE_CACHE_KEY } from '@/auth/profile-cache-key.js';

/**
 * Get the username from the cache.
 *
 * @returns The username.
 */
export const getUserName = () => {
  const [cache] = useCache();
  const { name: username } = cache<AuthCache>(AUTH_CACHE_KEY);
  return username;
};

/**
 * Get the user id from the cache.
 *
 * @returns The user ID.
 */
export const getUserId = (): string | undefined => {
  const [cache] = useCache();
  const { id } = cache<{ id: string } | undefined>(PROFILE_CACHE_KEY);
  return id ?? undefined;
};

/**
 * Get the auth token from the cache.
 *
 * @returns The auth token.
 */
export const getAuthToken = () => {
  const [cache] = useCache();
  const { token } = cache<AuthCache>(AUTH_CACHE_KEY);
  return token;
};
