import { existsSync, mkdirSync } from 'node:fs';
import { type PhotosWithTotalResults, createClient } from 'pexels';

import type { PrismaClient } from '@prisma/client';

import { Gender, ProductType } from '@/enums/index.js';

export const createProductImages = async (prisma: PrismaClient) => {
  const pexelsClient = createClient(Bun.env.PEXELS_API_KEY);

  console.group('Seeding product images...');

  const imgDir = './prisma/img';
  if (!existsSync(imgDir)) {
    mkdirSync(imgDir, { recursive: true });
    console.log(`Created directory: ${imgDir}`);
  } else {
    console.log(`Directory already exists: ${imgDir}`);
  }

  for (const [genderKey, genderId] of Object.entries(Gender)) {
    for (const [productTypeKey, productTypeId] of Object.entries(ProductType)) {
      console.group(`Seeding images for ${productTypeKey}...`);

      const dir = `./prisma/img/${productTypeKey.toLocaleLowerCase()}/${genderKey.toLocaleLowerCase()}`;

      // Ensure image directory exists for the product type.
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
      } else {
        console.log(`Directory already exists: ${dir}`);
      }

      // Fetch products for gender and type.
      const products = await prisma.product.findMany({
        where: {
          productTypeId,
          genderId,
        },
        select: {
          id: true,
          name: true,
          ProductColor: {
            select: {
              color: true,
            },
          },
        },
      });

      // Fetch all photos from Pexels API.
      // Note: Pexels API has a limit on the number of results per page of 80.
      // https://www.pexels.com/api/documentation/?language=javascript#photos-search__parameters__per_page
      const photos = await pexelsClient.photos.search({
        query: `${genderKey} modeling ${productTypeKey}`,
        per_page: products.length,
      });

      // Downlaod images and save them to the directory for each product using the product ID.
      for (let i = 0, len = products.length; i < len; i++) {
        const { id, name } = products[i];
        const photo = (photos as PhotosWithTotalResults).photos[i];

        console.log(`Processing product ${name}...`);

        if (photo) {
          const { src } = photo;
          const { medium } = src;

          // Download the image and save it to the directory
          const response = await fetch(medium);
          const buffer = await response.arrayBuffer();
          const filePath = `${dir}/${id}.jpg`;

          // Save the image to the file system
          Bun.write(filePath, Buffer.from(buffer));

          console.log(`Saved image for product ${id} at ${filePath}`);
        }
      }
    }
  }

  console.groupEnd();
};
