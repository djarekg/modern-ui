import { PrismaClient } from '@prisma/client';
import { createLoginHistory } from './login-history.js';
import { createUsers } from './users.js';

const prisma = new PrismaClient();

const load = async () => {
  createUsers(prisma);
  createLoginHistory(prisma);
};

load()
  .then(() => console.log('Seed completed'))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
