/**
 * Delay function that returns a promise that resolves after a specified time.
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the specified time.
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
