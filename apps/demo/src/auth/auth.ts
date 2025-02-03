import { useCache } from '@mui/core';

import { isSignedInSignal } from '@/auth/is-signed-in.js';
import { PROFILE_CACHE_KEY } from '@/auth/profile-cache-key.js';
import { useApi } from '@/hooks/use-api.js';

import { AUTH_CACHE_KEY } from './auth-cache-key.js';

/**
 * Auth cache type is the structure of the auth cache
 */
export type AuthCache = {
  name: string;
  token: string;
};

/**
 * Sign in using the provided username and password
 * @param username The username of the user attempting to sign in
 * @param password The password of the user attempting to sign in
 * @returns True if the user is signed in, false otherwise
 */
export const signIn = async (username: string, password: string) => {
  const { auth, sign, users } = useApi();

  const { data: signedIn } = await sign.in.post({
    username,
    password,
  });

  if (signedIn) {
    const [_, setCache] = useCache();

    // sign-in and store the user's auth token in the cache
    const { data: token } = await auth.sign({ name: username }).get();
    const authCache: AuthCache = {
      name: username,
      token,
    };
    setCache(AUTH_CACHE_KEY, authCache);

    // store the user's profile in the cache
    const { data: user } = await users({ username }).get();
    setCache(PROFILE_CACHE_KEY, user);

    // set the signed in signal to true. this will trigger the user to be signed in
    // to any components that are watching the signal
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
    setCache(AUTH_CACHE_KEY, null);
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
  const cachedAuth = cache(AUTH_CACHE_KEY) as AuthCache;

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
