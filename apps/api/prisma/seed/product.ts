import { faker } from '@faker-js/faker';
import type { PrismaClient } from '@prisma/client';

import { ProductType } from '../enums/product-type.js';

export const createProducts = async (prisma: PrismaClient) => {
  console.group('Seeding products');

  const createDressProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()} Dress`,
        description: `${faker.commerce.productDescription()} dress`,
        price: faker.commerce.price({ min: 10, max: 100 }),
        productTypeId: ProductType.Dress,
      },
    });

  const createCamoHatProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()}} Hat`,
        description: `${faker.commerce.productDescription()} hat`,
        price: faker.commerce.price({ min: 10, max: 50 }),
        productTypeId: ProductType.Hat,
      },
    });

  const createHoodieProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()} Hoodie`,
        description: `${faker.commerce.productDescription()} hoodie`,
        price: faker.commerce.price({ min: 20, max: 80 }),
        productTypeId: ProductType.Hoodie,
      },
    });

  const createJacketProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()} Jacket`,
        description: `${faker.commerce.productDescription()} jacket`,
        price: faker.commerce.price({ min: 30, max: 120 }),
        productTypeId: ProductType.Jacket,
      },
    });

  const createPantsProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()} ${faker.word.interjection()} Pants`,
        description: `${faker.commerce.productDescription()} pants`,
        price: faker.commerce.price({ min: 15, max: 90 }),
        productTypeId: ProductType.Pants,
      },
    });

  const createShirtProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()}} Shirt`,
        description: `${faker.commerce.productDescription()} shirt`,
        price: faker.commerce.price({ min: 10, max: 70 }),
        productTypeId: ProductType.Shirt,
      },
    });

  const createShoesProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()}} Shoes`,
        description: `${faker.commerce.productDescription()} shoes`,
        price: faker.commerce.price({ min: 25, max: 150 }),
        productTypeId: ProductType.Shoes,
      },
    });

  const createShortsProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()}} Shorts`,
        description: `${faker.commerce.productDescription()} shorts`,
        price: faker.commerce.price({ min: 15, max: 80 }),
        productTypeId: ProductType.Shorts,
      },
    });

  const createSocksProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()}} Socks`,
        description: `${faker.commerce.productDescription()} socks`,
        price: faker.commerce.price({ min: 5, max: 30 }),
        productTypeId: ProductType.Socks,
      },
    });

  const createSweaterProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()}} Sweater`,
        description: `${faker.commerce.productDescription()} sweater`,
        price: faker.commerce.price({ min: 20, max: 100 }),
        productTypeId: ProductType.Sweater,
      },
    });

  const createUnderwearProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: `${faker.commerce.productAdjective()}} Underwear`,
        description: `${faker.commerce.productDescription()} underwear`,
        price: faker.commerce.price({ min: 5, max: 50 }),
        productTypeId: ProductType.Underwear,
      },
    });

  console.log('Adding dressses...');
  Array.from({ length: 10 }).map(async () => await createDressProduct());

  console.log('Adding hats...');
  Array.from({ length: 5 }).map(async () => await createCamoHatProduct());

  console.log('Adding hoodies...');
  Array.from({ length: 7 }).map(async () => await createHoodieProduct());

  console.log('Adding jackets...');
  Array.from({ length: 20 }).map(async () => await createJacketProduct());

  console.log('Adding pants...');
  Array.from({ length: 15 }).map(async () => await createPantsProduct());

  console.log('Adding shirts...');
  Array.from({ length: 34 }).map(async () => await createShirtProduct());

  console.log('Adding shoes...');
  Array.from({ length: 55 }).map(async () => await createShoesProduct());

  console.log('Adding shorts...');
  Array.from({ length: 27 }).map(async () => await createShortsProduct());

  console.log('Adding socks...');
  Array.from({ length: 33 }).map(async () => await createSocksProduct());

  console.log('Adding sweaters...');
  Array.from({ length: 12 }).map(async () => await createSweaterProduct());

  console.log('Adding underwear...');
  Array.from({ length: 18 }).map(async () => await createUnderwearProduct());

  console.groupEnd();
};
