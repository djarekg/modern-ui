/**
 * Check if value is empty.
 *
 * @param {string | object | Array<unknown> | unknown} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export const isEmpty = (value: string | object | Array<unknown> | unknown) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  if (typeof value === 'string') {
    return value?.trim().length === 0;
  }

  return value === null || value === undefined;
};

/**
 * Check if value is not empty.
 *
 * @param {string | object | Array<unknown> | unknown} value The value to check.
 * @returns {boolean} True if the value is not empty, false otherwise.
 */
export const isNotEmpty = (value: string | object | Array<unknown>) => !isEmpty(value);
