import { type GenericRenderer, component } from 'haunted';
import type { Component } from 'haunted/lib/component.js';

interface Renderer<P extends object> extends GenericRenderer<HTMLElement, P> {
  (this: Component<P>, host: Component<P>): unknown | undefined;
  observedAttributes?: (keyof P)[];
}

type Constructor<P extends object> = new (...args: unknown[]) => Component<P>;

interface Options<P> {
  baseElement?: Constructor<object>;
  observedAttributes?: (keyof P)[];
  useShadowDOM?: boolean;
  shadowRootInit?: ShadowRootInit;
}

/**
 * Define a custom element with Haunted component.
 * @param name Name of the custom element to define.
 * @param renderer The component function to render.
 */
export function define<P extends object>(name: string, renderer: Renderer<P>): void;
/**
 * Define a custom element with Haunted component.
 * @param name Name of the custom element to define.
 * @param renderer The component function to render.
 * @param options Options for the custom element.
 */
export function define<P extends object>(
  name: string,
  renderer: Renderer<P>,
  baseElement: Constructor<object>,
): void;
/**
 * Define a custom element with Haunted component.
 * @param name Name of the custom element to define.
 * @param renderer The component function to render.
 * @param baseElement The base element to extend.
 * @param options Options for the custom element.
 */
export function define<P extends object>(
  name: string,
  renderer: Renderer<P>,
  baseElement?: Constructor<object>,
  options?: Omit<Options<P>, 'baseElement'>,
): void {
  customElements.define(name, component(renderer, baseElement, options));
}
