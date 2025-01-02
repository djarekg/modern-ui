import { type CSSResult, LitElement, type TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import css from './index.css' with { type: 'css' };
import './layout/layout.js';

@customElement('app-index')
export class Index extends LitElement {
  static override styles: CSSResult = css;

  override render(): TemplateResult {
    return html`<app-layout></app-layout>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-index': Index;
  }
}
