import { prisma } from '../../client/index.js';

export const createLoginHistory = async (userId: string) => {
  await prisma.$connect();
  try {
    return await prisma.loginHistory.create({
      data: {
        userId,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};
