import { css, html } from 'lit';

import { useStyles } from '@mui/core';

import type { GetProductByIdQuery } from '@/types/graphql.js';
import { virtual } from 'haunted';

type ProductDetailProps = {
  product: GetProductByIdQuery['product'];
};

const styles = css``;

export const ProductDetail = virtual(({ product }: ProductDetailProps) => {
  useStyles(styles);

  return html`
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" value="${product.name}">
      <label for="description">Description</label>
      <textarea id="description" name="description">${product.description}</textarea>
      <label for="price">Price</label>
      <input type="number" id="price" name="price" value="${product.price}">
      <button type="submit">Save</button>
    </form>
  `;
});
