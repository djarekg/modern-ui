import { theme } from '@mui/web';
import { LitElement, type TemplateResult, html } from 'lit';

export class Button extends LitElement {
  override render(): TemplateResult {
    const color = theme.colors.primary;

    return html`<button>${color}</button>`;
  }
}

customElements.define('app-button', Button);

declare global {
  interface HTMLElementTagNameMap {
    'app-button': Button;
  }
}
