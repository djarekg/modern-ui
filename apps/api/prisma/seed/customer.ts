import { faker } from '@faker-js/faker';
import type { PrismaClient } from '@prisma/client';

export const createCustomers = async (prisma: PrismaClient) => {
  console.group('Seeding customers');

  const createCustomer = () =>
    prisma.customer.create({
      data: {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.lorem.words(5),
        phone: faker.phone.number(),
      },
    });

  console.log('Adding customers...');
  Array.from({ length: 10 }).map(async () => await createCustomer());

  console.groupEnd();
};
