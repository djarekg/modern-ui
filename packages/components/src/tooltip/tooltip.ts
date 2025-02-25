import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type TooltipPosition = 'start' | 'center' | 'end' | 'self-start' | 'self-end';

const ElementInternalsKey = 'ElementInternals';
/**
 * @alpha
 */
export const supportsElementInternals =
  ElementInternalsKey in window && 'setFormValue' in window[ElementInternalsKey].prototype;

const InternalsMap = new WeakMap();

const styles = css`
  :host {
    position: absolute;
    position-area: block-start;
    position-try-options: flip-block;
    display: inline-block;
    inset-block-start: anchor(end);
    background: var(--mui-color-background);
    color: var(--mui-color-text);
    border-radius: var(--mui-shape-small);
    box-shadow: var(--mui-elevation-1);
    padding: 0.5rem;
    border: 1px solid var(--mui-color-border);
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin: 0;
    inline-size: max-content;
    z-index: 600;
    content-visibility: hidden;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease-in-out 0.7s;
    position-area: bottom center;
  }

  :host(:popover-open) {
    content-visibility: visible;
    visibility: visible;
    opacity: 1;
  }
`;

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
   * The horizontal position of the tooltip relative to the anchor element.
   */
  @property({ attribute: 'horizontal-position' }) horizontalPosition: TooltipPosition = 'start';

  /**
   * The horizontal offset of the tooltip relative to the anchor element.
   */
  @property({ type: Number, attribute: 'horizontal-offset' }) horizontalOffset = 0;

  /**
   * The vertical position of the tooltip relative to the anchor element.
   */
  @property({ attribute: 'vertical-position' }) verticalPosition: TooltipPosition = 'self-end';

  /**
   * The vertical offset of the tooltip relative to the anchor element.
   */
  @property({ type: Number, attribute: 'vertical-offset' }) verticalOffset = -35;

  /**
   * Reference to the anchor element
   * @internal
   */
  get #anchorElement(): HTMLElement | null {
    const rootNode = this.getRootNode();
    return (rootNode instanceof ShadowRoot ? rootNode : document).getElementById(this.anchor ?? '');
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.setAttribute('role', 'tooltip');
    this.setAttribute('aria-hidden', 'true');

    const anchorElement = this.#anchorElement;

    if (!anchorElement || !this.anchor) {
      return;
    }

    // Get or set the anchor name from the anchor component. We need this
    // to so we can set the positionAnchor on the tooltip.
    const anchorName = anchorElement.style.anchorName || `--${this.anchor}`;
    this.style.positionAnchor = anchorName;

    // The anchorName and positionAnchor must match.
    if (anchorElement.style.anchorName !== anchorName) {
      anchorElement.style.anchorName = anchorName;
    }

    anchorElement.setAttribute('aria-labelledby', this.id);
    anchorElement.parentElement.style.anchorScope = anchorName;

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
    this.#setPosition();
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
   * Set the position of the tooltip.
   *
   * This method should be called every time the tooltip is shown to ensure
   * that the position is correct.
   */
  #setPosition(): void {
    const anchorElement = this.#anchorElement;
    const { anchor } = this;

    if (!anchorElement) {
      return;
    }

    console.group(`Tooltip: ${this.anchor}`);
    console.log('Anchor:', anchorElement);
    console.log('Tooltip:', this);
    console.log('Anchor parent', anchorElement.parentElement);
    console.log('Anchor parent parent', anchorElement.parentElement.parentElement);
    console.groupEnd();

    // Calculate the position of the tooltip based on the horizontalPosition,
    // verticalPosition, offsets, anchor element demensions and the tooltip demensions.
    // this.style.insetInlineStart = `calc(anchor(--${anchor} ${this.horizontalPosition}) - ${this.offsetWidth}px) + (${this.horizontalOffset}px)`;
    // this.style.insetBlockStart = `calc(anchor(--${anchor} ${this.verticalPosition}) + (${this.verticalOffset}px))`;
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
