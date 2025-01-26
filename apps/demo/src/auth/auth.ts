import { isSignedInSignal } from '@/auth/is-signed-in.js';
import { useApi } from '@/hooks/use-api.js';
import { useCache } from '@mui/core';
import { type AuthCache, authCacheKey } from './auth-cache.js';

/**
 * Sign in using the provided username and password
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
    isSignedInSignal.set(true);
    return true;
  }

  return false;
};

/**
 * Sign out current user
 * @returns True if the user is signed out, false otherwise
 */
export const signOut = async () => {
  const { auth } = useApi();
  const { data: signedOut } = await auth.signout.get();
  if (signedOut) {
    const [_, setCache] = useCache();
    setCache(authCacheKey, null);
    isSignedInSignal.set(false);
    return true;
  }

  return false;
};

/**
 * Validate user
 * @returns True if the user is signed in, false otherwise
 */
export const validate = async () => {
  const [cache] = useCache();
  const cachedAuth = cache(authCacheKey) as AuthCache;

  // if there is no cached auth, the user is not signed in
  if (!cachedAuth) {
    isSignedInSignal.set(false);
    return false;
  }

  const { name, token } = cachedAuth;

  // fetch the user's name from the server token for comparison
  const { auth } = useApi();
  const { data, status } = await auth.validate.post(token);
  if (status === 401 || !data || typeof data === 'string') {
    isSignedInSignal.set(false);
    return false;
  }

  // check if the user is the same as what is stored in the auth token
  isSignedInSignal.set(name === data.name);
  return isSignedInSignal.get();
};
