import { LitElement, type TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import css from './index.css?inline';
import styles from './styles/styles.css?inline';
import './layout/header/header.js';
import './layout/footer/footer.js';
import './layout/layout.js';

@customElement('app-index')
export class Index extends LitElement {
  static override styles = [unsafeCSS(styles), unsafeCSS(css)];

  override render(): TemplateResult {
    return html`<app-layout></app-layout>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-index': Index;
  }
}
