import { useCallback, useState } from 'haunted';

/**
 * Hook to manage app cache
 */
export const useCache = () => {
  const [cache, setCache] = useState(() => {
    const initialCache = new Map<string, unknown>();
    const data = localStorage.getItem('cache');
    if (data) {
      const parsedData = JSON.parse(data);
      for (const key in parsedData) {
        initialCache.set(key, parsedData[key]);
      }
    }
    return initialCache;
  });

  // serialize current cache and save cache to local storage
  const saveToLocal = useCallback(() => {
    const data = JSON.stringify(Object.fromEntries(cache));
    localStorage.setItem('cache', data);
  }, [cache]);

  /**
   * Get a value from cache
   * @returns cache item stored at key
   */
  const get = useCallback((key: string) => cache.get(key), [cache]);

  /**
   * Set a value to cache
   * @param key key of the value
   * @param value value to be stored
   */
  const set = useCallback(
    (key: string, value: unknown) => {
      setCache(prevCache => {
        const newCache = new Map(prevCache);
        newCache.set(key, value);
        return newCache;
      });
      saveToLocal();
    },
    [saveToLocal],
  );

  /**
   * Remove a value from cache
   * @param key key of the value
   */
  const remove = useCallback(
    (key: string) => {
      setCache(prevCache => {
        const newCache = new Map(prevCache);
        newCache.delete(key);
        return newCache;
      });
      saveToLocal();
    },
    [saveToLocal],
  );

  return [get, set, remove] as const;
};
