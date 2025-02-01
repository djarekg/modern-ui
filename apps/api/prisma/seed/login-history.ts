import type { PrismaClient } from '@prisma/client';

import { faker } from './init-faker.js';

export const createLoginHistory = async (prisma: PrismaClient) => {
  const createLoginHistory = async () => {
    return await prisma.loginHistory.create({
      data: {
        id: faker.string.uuid(),
        userId: (await prisma.user.findFirst()).id,
      },
    });
  };

  createLoginHistory();
};
