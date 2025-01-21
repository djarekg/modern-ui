import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { randomUUIDv7 } from 'bun';
import { generateHash } from '../src/crypto/hash.js';

const prisma = new PrismaClient();

const load = async () => {
  // create admin user
  await prisma.user.create({
    data: {
      id: randomUUIDv7(),
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@fu.com',
      address: '123 Admin St',
      phone: '123-456-7890',
      password: generateHash('admin'),
    },
  });

  const createUser = async () => {
    return await prisma.user.create({
      data: {
        id: randomUUIDv7(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.lorem.words(5),
        phone: faker.phone.number(),
        password: generateHash(faker.internet.password()),
      },
    });
  };

  Array.from({ length: 10 }).map(async () => createUser());
};

load()
  .then(() => console.log('Seed completed'))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
