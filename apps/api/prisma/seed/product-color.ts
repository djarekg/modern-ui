import { type PrismaClient, ProductType } from '@prisma/client';

export const createProductColors = async (prisma: PrismaClient) => {
  console.group('Seeding product colors...');

  const createProductColors = async () =>
    prisma.productColor.createMany({
      data: [
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.DRESS } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Black' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.HAT } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Green' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.HOODIE } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Blue' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.JACKET } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Pink' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.PANTS } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Blue' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.SHIRT } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Red' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.SHOES } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'White' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.SHORTS } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Yellow' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.SOCKS } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'White' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.SWEATER } })).id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Black' } })).id,
        },
        {
          productId: (await prisma.product.findFirst({ where: { type: ProductType.UNDERWEAR } }))
            .id,
          colorId: (await prisma.color.findFirst({ where: { name: 'Orange' } })).id,
        },
      ],
    });

  console.log('Adding dress product colors...');
  await createProductColors();

  console.groupEnd();
};
