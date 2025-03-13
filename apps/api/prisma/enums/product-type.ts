export const ProductType = {
  Dress: Bun.randomUUIDv7(),
  Hat: Bun.randomUUIDv7(),
  Hoodie: Bun.randomUUIDv7(),
  Jacket: Bun.randomUUIDv7(),
  Pants: Bun.randomUUIDv7(),
  Shirt: Bun.randomUUIDv7(),
  Shoes: Bun.randomUUIDv7(),
  Shorts: Bun.randomUUIDv7(),
  Socks: Bun.randomUUIDv7(),
  Sweater: Bun.randomUUIDv7(),
  Underwear: Bun.randomUUIDv7(),
} as const;

export type ProductType = (typeof ProductType)[keyof typeof ProductType];
