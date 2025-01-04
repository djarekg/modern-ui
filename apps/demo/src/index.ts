import { type CSSResult, LitElement, type TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './layout/layout.js';
import css from './index.css' with { type: 'css' };
import styles from './styles/styles.css' with { type: 'css' };

@customElement('app-index')
export class Index extends LitElement {
  static override styles: CSSResult[] = [styles, css];

  override render(): TemplateResult {
    return html`<app-layout></app-layout>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-index': Index;
  }
}
