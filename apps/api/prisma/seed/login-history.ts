import type { PrismaClient } from '@prisma/client';

import { faker } from './init-faker.js';

export const createLoginHistories = async (prisma: PrismaClient) => {
  console.group('Seeding login histories');

  const createLoginHistories = async () =>
    prisma.loginHistory.create({
      data: {
        id: faker.string.uuid(),
        userId: (await prisma.user.findFirst()).id,
      },
    });

  console.log('Adding login histories...');
  await createLoginHistories();

  console.groupEnd();
};
