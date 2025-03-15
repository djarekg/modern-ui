/**
 * True if the environment is development, false otherwise
 */
export const isDev = process.env.NODE_ENV !== 'production';

/**
 * True if the environment is production, false otherwise
 */
export const isProd = !isDev;

/**
 * True if the environment is test, false otherwise
 */
export const isTest = process.env.NODE_ENV === 'test';
