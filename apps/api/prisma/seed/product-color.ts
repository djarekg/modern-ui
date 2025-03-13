import type { PrismaClient } from '@prisma/client';

import { ProductType } from '../enums/product-type.js';

export const createProductColors = async (prisma: PrismaClient) => {
  console.group('Seeding product colors...');

  const createProductColors = async () =>
    prisma.productColor.createMany({
      data: [
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Dress } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Black' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Hat } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Green' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Hoodie } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Blue' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Jacket } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Pink' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Pants } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Blue' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Shirt } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Red' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Shoes } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'White' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Shorts } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Yellow' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Socks } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'White' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Sweater } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Black' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.Underwear } }))
            .id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Orange' } })).id,
        },
      ],
    });

  console.log('Adding dress product colors...');
  await createProductColors();

  console.groupEnd();
};
