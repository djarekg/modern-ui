import { faker } from '@faker-js/faker';
import type { PrismaClient } from '@prisma/client';

import { ProductType } from '../enums/product-type.js';

export const createProducts = async (prisma: PrismaClient) => {
  console.group('Seeding products');

  const createDressProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Silk Dress',
        description: 'A beautiful silk dress with a floral pattern.',
        price: 50.0,
        type: ProductType.Dress,
      },
    });

  const createCamoHatProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Camo Hat',
        description: 'An adjustable hat with a camouflage pattern.',
        price: 24.5,
        type: ProductType.Hat,
      },
    });

  const createHoodieProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Pullover Hoodie',
        description: 'A comfortable hoodie with a kangaroo pocket.',
        price: 45.0,
        type: ProductType.Hoodie,
      },
    });

  const createJacketProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Jean Jacket',
        description: 'A warm jacket with a zip-up front and hood.',
        price: 75.0,
        type: ProductType.Jacket,
      },
    });

  const createPantsProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Cargo Pants',
        description: 'A pair of durable cargo pants with multiple pockets.',
        price: 30.0,
        type: ProductType.Pants,
      },
    });

  const createShirtProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Graphic T-Shirt',
        description: 'A soft cotton t-shirt with a graphic print.',
        price: 15.0,
        type: ProductType.Shirt,
      },
    });

  const createShoesProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Running Shoes',
        description: 'A pair of lightweight running shoes with cushioned soles.',
        price: 60.0,
        type: ProductType.Shoes,
      },
    });

  const createShortsProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Athletic Shorts',
        description: 'A pair of breathable athletic shorts with an elastic waistband.',
        price: 20.0,
        type: ProductType.Shorts,
      },
    });

  const createSocksProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Ankle Socks',
        description: 'A pack of six pairs of ankle socks in assorted colors.',
        price: 10.0,
        type: ProductType.Socks,
      },
    });

  const createSweaterProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Crewneck Sweater',
        description: 'A cozy crewneck sweater with ribbed cuffs and hem.',
        price: 35.0,
        type: ProductType.Sweater,
      },
    });

  const createUnderwearProduct = () =>
    prisma.product.create({
      data: {
        id: faker.string.uuid(),
        name: 'Boxer Briefs',
        description: 'A pack of three boxer briefs in assorted colors.',
        price: 18.0,
        type: ProductType.Underwear,
      },
    });

  console.log('Adding dressses...');
  await createDressProduct();

  console.log('Adding hats...');
  await createCamoHatProduct();

  console.log('Adding hoodies...');
  await createHoodieProduct();

  console.log('Adding jackets...');
  await createJacketProduct();

  console.log('Adding pants...');
  await createPantsProduct();

  console.log('Adding shirts...');
  await createShirtProduct();

  console.log('Adding shoes...');
  await createShoesProduct();

  console.log('Adding shorts...');
  await createShortsProduct();

  console.log('Adding socks...');
  await createSocksProduct();

  console.log('Adding sweaters...');
  await createSweaterProduct();

  console.log('Adding underwear...');
  await createUnderwearProduct();

  console.groupEnd();
};
