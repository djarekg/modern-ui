import type { PrismaClient } from '@prisma/client';

import { generateHash } from '../../src/crypto/hash.js';
import { Role } from '../enums/role.js';

import { faker } from './init-faker.js';

export const createUsers = async (prisma: PrismaClient) => {
  console.group('Seeding users');

  const createAdminUser = () =>
    prisma.user.create({
      data: {
        id: faker.string.uuid(),
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@fu.com',
        address: '123 Admin St',
        phone: '123-456-7890',
        role: Role.Admin,
        password: generateHash('admin'),
      },
    });

  const createUser = () =>
    prisma.user.create({
      data: {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.lorem.words(5),
        phone: faker.phone.number(),
        role: Role.User,
        password: generateHash(faker.internet.password()),
      },
    });

  const createSalesUser = () =>
    prisma.user.create({
      data: {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.lorem.words(5),
        phone: faker.phone.number(),
        role: Role.Sales,
        password: generateHash(faker.internet.password()),
      },
    });

  const createAccountingUser = () =>
    prisma.user.create({
      data: {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.lorem.words(5),
        phone: faker.phone.number(),
        role: Role.Accounting,
        password: generateHash(faker.internet.password()),
      },
    });

  console.log('Adding admin user...');
  await createAdminUser();

  console.log('Adding user users...');
  Array.from({ length: 10 }).map(async () => await createUser());

  console.log('Adding sales users...');
  Array.from({ length: 10 }).map(async () => await createSalesUser());

  console.log('Adding accounting users...');
  Array.from({ length: 5 }).map(async () => await createAccountingUser());

  console.groupEnd();
};
