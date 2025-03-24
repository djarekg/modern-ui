import type { PrismaClient } from '@prisma/client';

import { ProductType } from '../enums/product-type.js';

export const createProductTypes = async (prisma: PrismaClient) => {
  console.group('Seeding product types...');

  const productTypes = Object.entries(ProductType).map(([key, value]) => ({
    id: value,
    name: key,
  }));

  const createProductType = ({ id, name }: { id: string; name: string }) =>
    prisma.productType.create({
      data: {
        id,
        name,
      },
    });

  console.log('Adding product types...');
  await Promise.all(productTypes.map(productType => createProductType(productType)));

  console.groupEnd();
};
