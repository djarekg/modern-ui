import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './tooltip.css.js';

type TooltipPosition = 'start' | 'center' | 'end';

@customElement('mui-tooltip')
export class Tooltip extends LitElement {
  static styles = [styles];

  /**
   * The ID of the element to anchor the tooltip to.
   */
  @property() anchor: string | undefined;

  /**
   * Indicates whether the tooltip is inert. Making the tooltip inert prevents
   * it from being focused by the user.
   */
  @property({ type: Boolean, reflect: true }) readonly inert = true;

  @property({ reflect: true }) readonly popover = '';

  /**
   * The inline position of the tooltip relative to the anchor element.
   */
  @property({ attribute: 'inline-position' }) inlinePosition: TooltipPosition = 'center';

  /**
   * The inline start offset of the tooltip relative to the anchor element.
   */
  @property({ type: Number, attribute: 'inline-start-offset' }) inlineStartOffset = 0;

  /**
   * The inline end offset of the tooltip relative to the anchor element.
   */
  @property({ type: Number, attribute: 'inline-end-offset' }) inlineEndOffset = 0;

  /**
   * The block position of the tooltip relative to the anchor element.
   */
  @property({ attribute: 'block-position' }) blockPosition: TooltipPosition = 'end';

  /**
   * The block start offset of the tooltip relative to the anchor element.
   */
  @property({ type: Number, attribute: 'block-start-offset' }) blockStartOffset = 10;

  /**
   * The block end offset of the tooltip relative to the anchor element.
   */
  @property({ type: Number, attribute: 'block-end-offset' }) blockEndOffset = 0;

  /**
   * Reference to the anchor element
   * @internl
   */
  get #anchorElement(): HTMLElement | null {
    const rootNode = this.getRootNode();
    return (rootNode instanceof ShadowRoot ? rootNode : document).getElementById(this.anchor ?? '');
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.setAttribute('role', 'tooltip');
    this.setAttribute('aria-hidden', 'true');
    this.#setPosition();

    const anchorElement = this.#anchorElement;

    if (!anchorElement || !this.anchor) {
      return;
    }

    // Use anchorName to associate the tooltip with its anchor element.
    const anchorName = `--${this.anchor}`;
    this.style.positionAnchor = anchorName;
    anchorElement.style.anchorName = anchorName;

    anchorElement.setAttribute('aria-labelledby', this.id);

    // Add event listeners to show and hide the tooltip.
    anchorElement.addEventListener('focus', this.#handleFocus);
    anchorElement.addEventListener('blur', this.#handleBlur);
    anchorElement.addEventListener('mouseenter', this.#handleMouseEnter);
    anchorElement.addEventListener('mouseleave', this.#handleMouseLeave);

    document.addEventListener('keydown', this.#handleDocumentKeydown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    const anchorElement = this.#anchorElement;
    anchorElement?.removeEventListener('focus', this.#handleFocus);
    anchorElement?.removeEventListener('blur', this.#handleBlur);
    anchorElement?.removeEventListener('mouseenter', this.#handleMouseEnter);
    anchorElement?.removeEventListener('mouseleave', this.#handleMouseLeave);
  }

  render() {
    return html`<slot></slot>`;
  }

  /**
   * Show the tooltip.
   */
  show() {
    this.setAttribute('aria-hidden', 'false');
    this.showPopover();
  }

  /**
   * Hide the tooltip.
   */
  hide() {
    this.setAttribute('aria-hidden', 'true');
    this.hidePopover();
  }

  /**
   * Set the tooltip position.
   */
  #setPosition() {
    this.style.positionArea = `${this.blockPosition} ${this.inlinePosition}`;

    if (this.blockStartOffset) {
      this.style.marginBlockStart = `${this.blockStartOffset}px`;
    }
    if (this.blockEndOffset) {
      this.style.marginBlockEnd = `${this.blockEndOffset}px`;
    }
    if (this.inlineStartOffset) {
      this.style.marginInlineStart = `${this.inlineStartOffset}px`;
    }
    if (this.inlineEndOffset) {
      this.style.marginInlineEnd = `${this.inlineEndOffset}px`;
    }
  }

  #handleFocus = () => this.show();

  #handleBlur = () => this.hide();

  #handleMouseEnter = () => this.show();

  #handleMouseLeave = () => this.hide();

  #handleDocumentKeydown = ({ key }: KeyboardEvent) => key === 'Escape' && this.hide();
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-tooltip': Tooltip;
  }
}
