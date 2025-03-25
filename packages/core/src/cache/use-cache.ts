import { signal } from '@lit-labs/signals';
import { effect } from 'signal-utils/subtle/microtask-effect';

/**
 * Hook to manage app cache
 */
export const useCache = () => {
  const cache = signal(new Map<string, unknown>());

  // Initialize cache from localStorage
  effect(() => {
    const data = localStorage.getItem('cache');
    if (data) {
      const parsedData = JSON.parse(data);
      const initialCache = new Map<string, unknown>();
      for (const key in parsedData) {
        initialCache.set(key, parsedData[key]);
      }
      cache.set(initialCache);
    }
  });

  // Serialize current cache and save cache to local storage
  const persistCache = () => {
    const data = JSON.stringify(Object.fromEntries(cache.get()));
    localStorage.setItem('cache', data);
  };

  /**
   * Get value from cache
   * @returns cache item stored at key
   */
  const get = <T = unknown>(key: string): T | undefined => cache.get().get(key) as T;

  /**
   * Set a value to cache
   * @param key key of the value
   * @param value value to be stored
   */
  const set = (key: string, value: unknown) => {
    cache.get().set(key, value);
    persistCache();
  };

  /**
   * Remove a value from cache
   * @param key key of the value
   */
  const remove = (key: string) => {
    const newCache = new Map(cache.get());
    newCache.delete(key);
    cache.set(newCache);
    persistCache();
  };

  return [get, set, remove] as const;
};
