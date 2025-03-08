import { html } from 'lit';

import { define, useHost, useStyles } from '@mui/core';
import { useEffect } from 'haunted';

import styles from './skeleton.css.js';

type SkeletonProps = {
  type: 'text' | 'rect' | 'dddecircle';
  width: string;
  height: string;
};

/**
 * The skeleton component is used to create a placeholder for loading content.
 *
 * @property {string} type - The type of the skeleton.
 * @property {string} width - The width of the skeleton.
 * @property {string} height - The height of the skeleton.
 *
 * @example
 * ```ts
 * import '@mui/components/skeleton.js';
 *
 * html`
 *   // Default skeleton
 *   <mui-skeleton width="100px" height="20px"></mui-skeleton>
 *
 *   // Set typescale. Use this for text skeletons
 *   // when you need the sizes to match.
 *   <mui-skeleton width="50px" height="20px" label large></mui-skeleton>
 *
 *   // Circle skeleton
 *   <mui-skeleton circle></mui-skeleton>
 *
 *   // Rectable skeleton
 *   <mui-skeleton rectable></mui-skeleton>
 * `;
 * ```
 */
const Skeleton = ({ type = 'text', width, height }: SkeletonProps) => {
  useStyles(styles);

  const _this = useHost<HTMLElement>();

  useEffect(() => {
    _this.setAttribute('type', type);
  }, [type]);

  useEffect(() => {
    _this.style.inlineSize = width;
  }, [width]);

  useEffect(() => {
    _this.style.blockSize = height;
  }, [height]);

  return html``;
};

define('mui-skeleton', Skeleton, { observedAttributes: ['type', 'width', 'height'] });

declare global {
  interface HTMLElementTagNameMap {
    'mui-skeleton': HTMLElement & SkeletonProps;
  }
}
