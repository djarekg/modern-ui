import { existsSync, mkdirSync } from 'node:fs';
import { type PhotosWithTotalResults, createClient } from 'pexels';

import type { PrismaClient } from '@prisma/client';

import { Gender, ProductType } from '@/enums/index.js';

/**
 * Extracts the file extension from a URL string. If there is not extenison
 * in the URL, it returns an empty string. If the URL ends with a slash or
 * ends with a query string, it can still extract the extension.
 *
 * @param {string} url The URL string.
 * @returns {string} The file extension, or an empty string if none is found.
 */
const getFileExtension = (url: string) => {
  const index = url.lastIndexOf('.');
  return index !== -1 ? url.substring(index + 1) : '';
};

export const createProductImages = async (prisma: PrismaClient) => {
  const pexelsClient = createClient(Bun.env.PEXELS_API_KEY);

  console.group('Seeding product images...');

  for (const [genderKey, genderId] of Object.entries(Gender)) {
    for (const [productTypeKey, productTypeId] of Object.entries(ProductType)) {
      console.group(`Seeding images for ${productTypeKey}...`);

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

      // Insert image identifiers and metedata for each product.
      for (let i = 0, len = products.length; i < len; i++) {
        const { id: productId, name } = products[i];
        const photo = (photos as PhotosWithTotalResults).photos[i];

        console.log(`Processing product ${name}...`);

        if (photo) {
          const {
            id: imageId,
            width,
            height,
            avg_color: avgColor,
            src: { original },
          } = photo;
          const ext = getFileExtension(original);

          await prisma.productImage.create({
            data: {
              productId,
              imageId,
              ext,
              width,
              height,
              avgColor,
            },
          });

          console.log(`Saved image for product ${productId}.`);
        }
      }
    }
  }

  console.groupEnd();
};
