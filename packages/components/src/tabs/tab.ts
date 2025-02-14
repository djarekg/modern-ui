import { LitElement, css, html, isServer, nothing } from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  queryAssignedNodes,
  state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Symbol for tabs to use to animate their indicators based off another tab's
 * indicator.
 */
const INDICATOR = Symbol('indicator');

/**
 * Symbol used by the tab bar to request a tab to animate its indicator from a
 * previously selected tab.
 */
export const ANIMATE_INDICATOR = Symbol('animateIndicator');

const styles = css`
  :host {
    --_border-raidus: var(--mui-tabs-tab-border-radius , var(--mui-shape-medium));
    --_indicator-background-color: var(--mui-tabs-tab-indicator-active-background-color, var(--mui-color-secondary));
  }

  :host(:is(:first-child)) {
    button {
      border-start-start-radius: var(--_border-raidus);
    }
  }

  :host(:is(:last-child)) {
    button {
      border-start-end-radius: var(--_border-raidus);
    }
  }

  :host(:is(:hover)) {
    .indicator {
      visibility: visible;
      opacity: 1;
      transform: scaleX(1);
    }
  }

  :host(:is([active])) {
    .indicator {
      visibility: visible;
      opacity: 1;
      transform: scaleX(1);
      filter: brightness(1);
      box-shadow: 0 0 8px var(--mui-color-secondary);
    }
  }

  :host(:not([active])) ::slotted([slot="panel"]) {
    display: none;
  }

  button {
    all: unset;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1.2rem;
    background-color: var(--mui-tab-background-color, var(--mui-color-background));
    color: var(--mui-tab-color, var(--mui-color-text));
  }

  .indicator {
    content-visibility: hidden;
    visibility: hidden;
    opacity: 0;
    background-color: var(--_indicator-background-color);
    height: 0.2rem;
    border-radius: var(--mui-shape-round);
    margin: 0 auto;
    transform: scaleX(0.5);
    transition: transform 0.4s ease-in-out, opacity 0.3s, filter 0.3s, box-shadow 0.3s;
    filter: brightness(0.7);
    box-shadow: 0 0 5px var(--mui-color-secondary);
  }
`;

@customElement('mui-tab')
export class Tab extends LitElement {
  static styles = [styles];

  /**
   * Cast to HTMLElement needed for closure.
   */
  readonly #internals = (this as HTMLElement).attachInternals();

  /**
   * Whether or not the element is a tab. The `mui-tab` attribute indicates
   * that the element is a tab for the `mui-tabs` component.
   */
  @property({ type: Boolean, reflect: true, attribute: 'mui-tab' })
  readonly isTab = true;

  /**
   * Whether or not the tab is selected.
   **/
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * In SSR, set this to true when an icon is present.
   */
  @property({ type: Boolean, attribute: 'has-icon' })
  hasIcon = false;

  /**
   * In SSR, set this to true when there is no label and only an icon.
   */
  @property({ type: Boolean, attribute: 'icon-only' })
  iconOnly = false;

  @query('.indicator')
  readonly [INDICATOR]!: HTMLElement | null;

  @queryAssignedNodes({ flatten: true })
  private readonly assignedDefaultNodes!: Node[];

  @queryAssignedElements({ slot: 'icon', flatten: true })
  private readonly assignedIcons!: HTMLElement[];

  @state()
  protected fullWidthIndicator = false;

  constructor() {
    super();

    if (!isServer) {
      this.#internals.role = 'tab';
      this.addEventListener('keydown', this.#handleKeydown.bind(this));
    }
  }

  render() {
    const classes = {
      'has-icon': this.hasIcon,
      'has-label': !this.iconOnly,
    };
    const indicator = html`<div class="indicator"></div>`;

    return html`
      <button
        id=${this.id}
        aria-selected=${this.active}
        role="tab"
        @click=${this.#handleContentClick}>

          <div role="presentation" class="content ${classMap(classes)}">
            <slot name="icon" @slotchange=${this.#handleIconSlotChange}></slot>
            <slot @slotchange=${this.#handleSlotChange}></slot>
            ${this.fullWidthIndicator ? nothing : indicator}
          </div>

          ${this.fullWidthIndicator ? indicator : nothing}

      </button>
      <slot name="panel"></slot>
    `;
  }

  async #handleKeydown(e: KeyboardEvent) {
    // allow event to bubble
    await 0;

    if (e.defaultPrevented) {
      return;
    }

    if (['Enter', ' '].includes(e.key)) {
      // prevent default behavior such as scrolling when pressing spacebar
      e.preventDefault();
      this.click();
    }
  }

  #handleContentClick(e: Event) {
    e.stopPropagation();
    this.click();
  }

  #handleSlotChange() {
    // Check if there is label text or elements and if not,
    // then there is only an icon.
    const hasTextOrElement = (node: Node) =>
      node.nodeType === Node.ELEMENT_NODE ||
      (node.nodeType === Node.TEXT_NODE && !!(node as Text).wholeText.match(/\S/));

    this.iconOnly = !this.assignedDefaultNodes.some(hasTextOrElement);
  }

  #handleIconSlotChange() {
    this.hasIcon = this.assignedIcons.length > 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mui-tab': Tab;
  }
}
