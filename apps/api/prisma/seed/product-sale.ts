import type { PrismaClient } from '@prisma/client';

import { ProductType } from '../../src/enums/product-type.js';
import { Role } from '../../src/enums/role.js';

export const createProductSales = async (prisma: PrismaClient) => {
  console.group('Seeding product sales...');

  // Cache product IDs to avoid querying the database multiple times
  const productIdCache: Record<ProductType, string> = {} as Record<ProductType, string>;
  const getProductId = async (type: ProductType) => {
    if (!productIdCache[type]) {
      productIdCache[type] = (
        await prisma.product.findFirst({ where: { productTypeId: type } })
      ).id;
    }
    return productIdCache[type];
  };

  const customerIds = (await prisma.customer.findMany()).map(({ id }) => id);
  const salesUserIds = (await prisma.user.findMany({ where: { role: Role.Sales } })).map(
    ({ id }) => id,
  );

  const createProductSales = async () =>
    prisma.productSales.createMany({
      data: [
        {
          productId: await getProductId(ProductType.Dress),
          customerId: customerIds[0],
          userId: salesUserIds[0],
          quantity: 10,
          price: 50.0,
        },
        {
          productId: await getProductId(ProductType.Dress),
          customerId: customerIds[1],
          userId: salesUserIds[0],
          quantity: 10,
          price: 50.0,
        },
        {
          productId: await getProductId(ProductType.Hat),
          customerId: customerIds[0],
          userId: salesUserIds[1],
          quantity: 10,
          price: 20.0,
        },
      ],
    });

  console.log('Adding product sales...');
  await createProductSales();

  console.groupEnd();
};
