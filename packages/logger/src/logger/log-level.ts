export const LogLevel = {
  Debug: 0,
  Info: 1,
  Warning: 2,
  Error: 3,
} as const;
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];
