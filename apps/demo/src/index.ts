import { html, unsafeCSS } from 'lit';

import { define, useStyles } from '@mui/core';
import '@mui/components/theme/theme.css';

import './layout/header/header.js';
import './layout/footer/footer.js';
import './layout/layout.js';
import styles from './styles/styles.css?inline';

import css from './index.css?inline';

const Index = () => {
  useStyles([unsafeCSS(styles), unsafeCSS(css)]);

  return html`<app-layout></app-layout>`;
};

define('app-index', Index);

declare global {
  interface HTMLElementTagNameMap {
    'app-index': HTMLElement;
  }
}
