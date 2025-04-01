export const Size = {
  XSmall: Bun.randomUUIDv7(),
  Small: Bun.randomUUIDv7(),
  Medium: Bun.randomUUIDv7(),
  Large: Bun.randomUUIDv7(),
  XLarge: Bun.randomUUIDv7(),
  XXLarge: Bun.randomUUIDv7(),
  XXXLarge: Bun.randomUUIDv7(),
  Onesize: Bun.randomUUIDv7(),
} as const;

export type Size = (typeof Size)[keyof typeof Size];
