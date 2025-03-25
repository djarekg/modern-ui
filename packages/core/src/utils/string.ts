/**
 * Check if a string is empty.
 *
 * @param value The string to check.
 * @returns True if the string is empty, false otherwise.
 */
export const isEmpty = (value: string) => value?.trim().length === 0;

/**
 * Check if a string is not empty.
 *
 * @param value The string to check.
 * @returns True if the string is not empty, false otherwise.
 */
export const isNotEmpty = (value: string) => !isEmpty(value);
