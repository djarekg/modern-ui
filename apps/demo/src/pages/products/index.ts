import { useEffect, useState } from 'haunted';
import { html } from 'lit';

import { define } from '@mui/core';

import { GetProductTypes } from '@/types/graphql.js';
import '@/components/product-list/product-list.js';
import { useQuery } from '@/hooks/use-query.js';

const ProductsPage = () => {
  const { data, loading } = useQuery(GetProductTypes);

  if (loading) {
    return html`<div>Loading...</div>`;
  }

  return html`
    <div>
    </div>
  `;
};

define('app-products-page', ProductsPage);

declare global {
  interface HTMLElementTagNameMap {
    'app-products-page': HTMLElement;
  }
}
