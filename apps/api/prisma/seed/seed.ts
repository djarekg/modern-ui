import { PrismaClient } from '@prisma/client';

import { createColors } from './color.js';
import { createCustomers } from './customer.js';
import { createInventories } from './inventory.js';
import { createLoginHistories } from './login-history.js';
import { createProductColors } from './product-color.js';
import { createProductImages } from './product-image.js';
import { createProductSales } from './product-sale.js';
import { createProductTypes } from './product-type.js';
import { createProducts } from './product.js';
import { createUsers } from './user.js';

const prisma = new PrismaClient();

const load = async () => {
  await createUsers(prisma);
  await createLoginHistories(prisma);
  await createCustomers(prisma);
  await createProductTypes(prisma);
  await createProducts(prisma);
  await createProductImages(prisma);
  await createColors(prisma);
  await createProductColors(prisma);
  await createInventories(prisma);
  await createProductSales(prisma);
};

load()
  .then(() => console.log('Seed completed'))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
