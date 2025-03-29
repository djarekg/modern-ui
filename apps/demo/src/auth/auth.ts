import { useCache } from '@mui/core';

import { isSignedInSignal } from '@/auth/is-signed-in.js';
import { PROFILE_CACHE_KEY } from '@/auth/profile-cache-key.js';
import { useQueryAsync } from '@/hooks/use-query.js';
import { GetUserByUserName, SignIn, SignOut, Validate } from '@/types/graphql.js';

import { AUTH_CACHE_KEY } from './auth-cache-key.js';

/**
 * Auth cache type is the structure of the auth cache.
 */
export type AuthCache = {
  name: string;
  token: string;
};

/**
 * Sign in using the provided username and password.
 *
 * @param userName The username of the user attempting to sign in.
 * @param password The password of the user attempting to sign in.
 * @returns True if the user is signed in, false otherwise.
 */
export const signIn = async (userName: string, password: string) => {
  const { data: token } = await useQueryAsync(SignIn, { userName, password });

  if (token) {
    const [_, setCache] = useCache();

    // Store username and token in the cache.
    const authCache: AuthCache = {
      name: userName,
      token,
    };
    setCache(AUTH_CACHE_KEY, authCache);

    // Store the user's profile in the cache
    const { data: user } = await useQueryAsync(GetUserByUserName, { userName });
    setCache(PROFILE_CACHE_KEY, user);

    // set the signed in signal to true. this will trigger the user to be signed in
    // to any components that are watching the signal
    isSignedInSignal.set(true);

    return true;
  }

  return false;
};

/**
 * Sign out current user.
 *
 * @returns True if the user is signed out, false otherwise.
 */
export const signOut = async () => {
  const { data: signOut } = await useQueryAsync(SignOut);

  if (signOut) {
    const [_, setCache] = useCache();
    setCache(AUTH_CACHE_KEY, null);
    isSignedInSignal.set(false);
    return true;
  }

  return false;
};

/**
 * Validate current user session.
 *
 * @returns True if the user is signed in, false otherwise.
 */
export const validate = () => {
  const { promise, resolve } = Promise.withResolvers<boolean>();
  const [cache] = useCache();
  const cachedAuth = cache(AUTH_CACHE_KEY) as AuthCache;

  // 🤓 Ensure signal is set after the current event loop. This will
  // allow any pending renders or updates to be processed first.
  const updateIsSignedInSignal = (isSignedIn: boolean) => {
    setTimeout(() => isSignedInSignal.set(isSignedIn));
  };

  if (cachedAuth) {
    const { token } = cachedAuth;

    // Validate cached token with the server.
    useQueryAsync(Validate, { token })
      .then(({ data: valid }) => {
        if (valid) {
          // This user is signed in...wooohooo 🎉.
          updateIsSignedInSignal(true);
          resolve(true);
          return;
        }

        // If the token is invalid, the user is not signed in.
        isSignedInSignal.set(false);
        updateIsSignedInSignal(false);
        resolve(false);
      })
      .catch(error => {
        console.error('Error validating token:', error);
        updateIsSignedInSignal(false);
        resolve(false);
      });
  } else {
    // If there is no cached auth, the user is not signed in.
    updateIsSignedInSignal(false);
    resolve(false);
  }

  return promise;
};
