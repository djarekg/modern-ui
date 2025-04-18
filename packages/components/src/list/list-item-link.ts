import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { ListItem } from './list-item.js';

type LinkTarget = '_blank' | '_parent' | '_self' | '_top';

@customElement('mui-list-item-link')
export class ListItemLink extends ListItem {
  @property() href: string | undefined;

  /**
   * Set the underlying `HTMLAnchorElement`'s `target` attribute.
   */
  @property() target!: string;

  protected override renderListItem(content: unknown) {
    return html`
      <a
        tabindex=${this.disabled ? -1 : this.itemTabIndex}
        aria-selected=${this.selected}
        aria-checked=${this.checked}
        class="list-item ${classMap(this.getRenderListItemClasses())}"
        href=${this.href}
        target=${(this.target as LinkTarget) || nothing}
        @pointerdown=${this.onPointerdown}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}>
        ${content}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-list-item-link': ListItemLink;
  }
}
