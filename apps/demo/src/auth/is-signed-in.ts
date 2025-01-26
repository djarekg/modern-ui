import { signal } from '@lit-labs/signals';
import { createContext } from '@lit/context';

/**
 * Context to indicate if the user is signed in. This can be used to determine
 * if the user is signed in from any part of the application.
 */
export const isSignedInContext = createContext<boolean>(Symbol.for('isSignedInContext'));

/**
 * Signal used to track changes to user sign-in.
 */
export const isSignedInSignal = signal(false);
