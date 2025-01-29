import { prisma } from '../../client/index.js';

/**
 * Get user
 * @param username Username of the user
 * @returns User object if user is found, null otherwise
 */
export const getUser = async (username: string) => {
  await prisma.$connect();
  try {
    return await prisma.user.findFirst({
      where: {
        email: username,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * Get all users
 * @returns Array of all users
 */
export const getUsers = async () => {
  await prisma.$connect();
  try {
    return await prisma.user.findMany();
  } finally {
    await prisma.$disconnect();
  }
};
