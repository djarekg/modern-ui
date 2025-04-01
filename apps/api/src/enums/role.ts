export const Role = {
  Admin: Bun.randomUUIDv7(),
  User: Bun.randomUUIDv7(),
  Sales: Bun.randomUUIDv7(),
  Accounting: Bun.randomUUIDv7(),
} as const;

export type Role = (typeof Role)[keyof typeof Role];
