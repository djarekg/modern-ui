import { Signal, signal } from '@lit-labs/signals';
import { useState } from 'haunted';

/**
 * Signal that tracks the user's sign-in status. This signal is used with
 * `useIsSignedInWatcher` to track changes to the user's sign-in status.
 *
 * @returns {string} The signed in state of the user.
 */
export const isSignedInSignal = signal(false);

/**
 * Watch the `isSignedInSignal` and return a signal that can be used to track
 * changes to the user's sign-in status.
 */
export const useIsSignedInWatcher = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const watcher = new Signal.subtle.Watcher(async () => {
    await 0; // notify callbacks are not allowed to access signals synchronously
    setIsSignedIn(isSignedInSignal.get());
  });

  watcher.watch(isSignedInSignal);

  // computed signals are lazy, so we need to read it to run the
  // computation and notify watchers
  isSignedInSignal.get();

  return { isSignedIn };
};
