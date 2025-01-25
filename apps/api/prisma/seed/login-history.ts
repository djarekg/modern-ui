import type { PrismaClient } from '@prisma/client';
import { randomUUIDv7 } from 'bun';

export const createLoginHistory = async (prisma: PrismaClient) => {
  const createLoginHistory = async () => {
    return await prisma.loginHistory.create({
      data: {
        id: randomUUIDv7(),
        userId: (await prisma.user.findFirst()).id,
      },
    });
  };

  createLoginHistory();
};
