import { LitElement, type PropertyValues, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { type ClassInfo, classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';

import { createListItemClickedEvent } from './events.js';
import styles from './list-item.css.js';

@customElement('mui-list-item')
export class ListItem extends LitElement {
  static styles = [styles];

  #isFirstUpdate = true;

  @property({ type: Boolean }) selected = false;
  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() headline = '';
  @property({ type: Number }) itemTabIndex = -1;
  @property({ type: Boolean, attribute: 'mui-list-item', reflect: true }) isListItem = true;
  @property() supportingText = '';
  @property() type = 'listitem';

  /**
   * The index of the list item in the list.
   */
  get index(): number {
    // The index must be calculated each time it is read because other list items
    // may have been inserted before this list item since its initial rendering.

    // We have to use `querySelectorAll('[mui-list-item]')` instead of
    // `parentElement.children` because there may be placeholder elements
    // in the DOM that were added by Lit.
    const listItems = this.parentElement?.querySelectorAll<ListItem>('[mui-list-item]');
    return listItems ? Array.from(listItems).indexOf(this) : -1;
  }

  /**
   * Only meant to be overridden by subclassing and not by the user. This is
   * so that we have control over focus on specific variants such as disabling
   * focus on <md-autocomplete-item> but enabling it for <md-menu-item>.
   */
  protected focusOnSelection = true;

  /**
   * The root element of the list item.
   */
  @query('.list-item') protected listItemRoot!: HTMLElement;

  /**
   * Whether the list item has focus.
   */
  @state() hasFocus = false;

  get text(): string {
    return this.headline;
  }

  override willUpdate(changed: PropertyValues<this>) {
    if (changed.has('active') && !this.disabled) {
      if (this.active) {
        this.itemTabIndex = 0;

        if (this.focusOnSelection) {
          this.hasFocus = true;
        }

        // Do not reset anything if it's the first render because user could
        // have set `itemTabIndex` manually.
      } else if (!this.#isFirstUpdate) {
        this.itemTabIndex = -1;
      }
    }
  }

  override updated(changed: PropertyValues<this>) {
    super.updated(changed);

    // will focus the list item root if it is selected but not on the first
    // update or else it may cause the page to jump on first load.
    if (changed.has('active') && !this.#isFirstUpdate && this.active && this.focusOnSelection) {
      this.focus();
    }

    this.#isFirstUpdate = false;
  }

  override render() {
    return this.renderListItem(html`
      <div class="content">${this.#renderStart()} ${this.#renderBody()} ${this.#renderEnd()}</div>
    `);
  }

  protected renderListItem(content: unknown) {
    return html`
      <li
        aria-selected=${this.selected}
        aria-checked=${this.checked}
        class="list-item ${classMap(this.getRenderListItemClasses())}"
        role="listbox"
        tabindex=${this.disabled ? -1 : this.itemTabIndex}
        @pointerdown=${this.onPointerdown}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}>
        ${content}
      </li>
    `;
  }

  #renderStart() {
    return html`
      <slot name="start"></slot>
    `;
  }

  #renderBody() {
    return html`
      <div class="body">
        <span class="headline">${this.headline}</span>
        ${when(this.supportingText, () => this.#renderSupportingText())}
      </div>
    `;
  }

  #renderSupportingText() {
    return html`
      <span class="supporting-text">${this.supportingText}</span>
    `;
  }

  #renderEnd() {
    return html`
      <slot name="end"></slot>
    `;
  }

  protected getRenderListItemClasses(): ClassInfo {
    return {
      'has-focus': this.hasFocus,
    };
  }

  override focus(): void {
    this.listItemRoot?.focus?.();
  }

  protected onPointerdown() {
    this.hasFocus = true;
  }

  protected onFocus() {
    this.hasFocus = true;
  }

  protected onBlur() {
    this.hasFocus = false;
  }

  protected onClick(): void {
    this.dispatchEvent(createListItemClickedEvent(this));
  }

  protected onKeydown(): void {}
  protected onPointerenter(): void {}
  protected onPointerleave(): void {}
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-list-item': ListItem;
  }
}
