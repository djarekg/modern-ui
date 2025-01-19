import { prisma } from '@/client/index.js';

await prisma.$connect();

/**
 * Verify user
 * @param email Email of the user
 * @param password Password of the user
 * @returns User object if user is found, null otherwise
 */
export const verifyUser = async (email: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

  return user;
};
