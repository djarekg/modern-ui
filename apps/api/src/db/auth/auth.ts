import { prisma } from '../../client/index.js';
import { compareHash } from '../../crypto/hash.js';

/**
 * Verify user
 * @param email Email of the user
 * @param password Password of the user
 * @returns User object if user is found, null otherwise
 */
export const verifyUser = async (email: string, password: string) => {
  await prisma.$connect();
  try {
    const { password: userPassword } = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        password: true,
      },
    });

    if (!userPassword) {
      throw new Error('User not found');
    }

    return compareHash(password, userPassword);
  } finally {
    await prisma.$disconnect();
  }
};
