import { useApi } from '@/hooks/use-api.js';
import { useCache } from '@mui/core';
import { type AuthCache, authCacheKey } from './auth-cache.js';

/**
 * Sign in using JWT
 * @param username The username of the user attempting to sign in
 * @param password The password of the user attempting to sign in
 * @returns True if the user is signed in, false otherwise
 */
export const signIn = async (username: string, password: string) => {
  const { sign, auth } = useApi();

  const { data: signedIn } = await sign.in.post({
    username,
    password,
  });

  if (signedIn) {
    const { data: token } = await auth.sign({ name: username }).get();
    const [_, setCache] = useCache();
    const authCache: AuthCache = {
      name: username,
      token,
    };
    setCache(authCacheKey, authCache);
    return true;
  }

  return false;
};

/**
 * Validate user
 * @returns True if the user is signed out, false otherwise
 */
export const validate = async () => {
  const [cache] = useCache();
  const cachedAuth = cache(authCacheKey) as AuthCache;

  // if there is no cached auth, the user is not signed in
  if (!cachedAuth) {
    return false;
  }

  const { name, token } = cachedAuth;

  // fetch the user's name from the server token for comparison
  const { auth } = useApi();
  const { data, status } = await auth.validate.post(token);
  if (status === 401 || !data || typeof data === 'string') {
    return false;
  }

  // check if the user is the same as what is stored in the auth token
  return name === data.name;
};
