import { PrismaClient } from '@prisma/client';

import { createColors } from './colors.js';
import { createCustomers } from './customers.js';
import { createInventories } from './inventory.js';
import { createLoginHistories } from './login-histories.js';
import { createProductColors } from './product-color.js';
import { createProductSales } from './product-sales.js';
import { createProducts } from './products.js';
import { createUsers } from './users.js';

const prisma = new PrismaClient();

const load = async () => {
  await createUsers(prisma);
  await createLoginHistories(prisma);
  await createCustomers(prisma);
  await createProducts(prisma);
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
