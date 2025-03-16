import { useCache } from '@mui/core';
import { useClient } from '@mui/graphql';

import { isSignedInSignal } from '@/auth/is-signed-in.js';
import { PROFILE_CACHE_KEY } from '@/auth/profile-cache-key.js';
import { clientConfig } from '@/config.js';
import {
  GetUserByUserNameDocument,
  SignInDocument,
  SignOutDocument,
  ValidateDocument,
} from '@/types/graphql.js';

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
 * @param username The username of the user attempting to sign in.
 * @param password The password of the user attempting to sign in.
 * @returns True if the user is signed in, false otherwise.
 */
export const signIn = async (username: string, password: string) => {
  const { query } = useClient(clientConfig);
  const { signIn: token } = await query(SignInDocument, { variables: { username, password } });

  if (token) {
    const [_, setCache] = useCache();

    // Store username and token in the cache.
    const authCache: AuthCache = {
      name: username,
      token,
    };
    setCache(AUTH_CACHE_KEY, authCache);

    // Store the user's profile in the cache
    const { user } = await query(GetUserByUserNameDocument, { variables: { username } });
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
  const { query } = useClient(clientConfig);
  const { signOut } = await query(SignOutDocument);

  if (signOut) {
    const [_, setCache] = useCache();
    setCache(AUTH_CACHE_KEY, null);
    isSignedInSignal.set(false);
    return true;
  }

  return false;
};

/**
 * Validate user.
 *
 * @returns True if the user is signed in, false otherwise.
 */
export const validate = async () => {
  const [cache] = useCache();
  const cachedAuth = cache(AUTH_CACHE_KEY) as AuthCache;

  // If there is no cached auth, the user is not signed in.
  if (!cachedAuth) {
    isSignedInSignal.set(false);
    return false;
  }

  // Validate cached token with the server.
  const { token } = cachedAuth;
  const { query } = useClient(clientConfig);
  const { validate } = await query(ValidateDocument, { variables: { token } });

  if (!validate) {
    isSignedInSignal.set(false);
    return false;
  }

  // This user is signed in...wooohooo!!!
  isSignedInSignal.set(true);
  return true;
};
