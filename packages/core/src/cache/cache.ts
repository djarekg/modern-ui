type CacheKeyGetter = (key: string) => string;
type CacheKeySetter = (key: string, value: string) => Map<string, string>;

export const cache = (): (CacheKeyGetter | CacheKeySetter)[] => {
  const _cache = new Map<string, string>();

  const get = (key: string): string => {
    const value = _cache.get(key);

    if (value) {
      return value;
    }

    const item = localStorage.getItem(key);

    if (item) {
      _cache.set(key, item);

      return item;
    }

    return '';
  };

  const set = (key: string, value: string): Map<string, string> => {
    _cache.set(key, value);

    localStorage.setItem(key, value);

    return _cache;
  };

  return [get, set];
};
