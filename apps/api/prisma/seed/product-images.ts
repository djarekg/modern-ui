import { existsSync, mkdirSync } from 'node:fs';
import { type PhotosWithTotalResults, createClient } from 'pexels';

import type { PrismaClient } from '@prisma/client';
import { fileURLToPath, pathToFileURL } from 'bun';
import { ProductType } from '../enums/product-type.js';

export const createProductImages = async (prisma: PrismaClient) => {
  const pexelsClient = createClient(Bun.env.PEXELS_API_KEY);

  for (const [key, value] of Object.entries(ProductType)) {
    console.group(`Seeding images for ${key}...`);

    // Ensure image directory exists for the product type
    const dir = `./prisma/img/${key.toLocaleLowerCase()}`;
    console.log(`Image directory: ${dir}`);
    // if (!existsSync(dir)) {
    //   mkdirSync(dir, { recursive: true });
    //   console.log(`Created directory: ${dir}`);
    // } else {
    //   console.log(`Directory already exists: ${dir}`);
    // }

    // const products = await prisma.product.findMany({
    //   where: {
    //     productTypeId: value,
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     ProductColor: {
    //       select: {
    //         color: true,
    //       },
    //     },
    //   },
    // });

    // const photos = await pexelsClient.photos.search({
    //   query: key,
    //   per_page: products.length,
    // });

    // for (let i = 0, len = products.length; i < len; i++) {
    //   const { id, name } = products[i];
    //   const photo = (photos as PhotosWithTotalResults).photos[i];

    //   console.log(`Processing product ${name}...`);

    //   if (photo) {
    //     const { src } = photo;
    //     const { medium } = src;

    //     // Download the image and save it to the directory
    //     const response = await fetch(medium);
    //     const buffer = await response.arrayBuffer();
    //     const filePath = `${dir}/${id}.jpg`;

    //     // Save the image to the file system
    //     Bun.write(filePath, Buffer.from(buffer));

    //     console.log(`Saved image for product ${id} at ${filePath}`);
    //   }
    // }

    console.groupEnd();
  }
};
