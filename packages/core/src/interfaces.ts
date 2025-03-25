/**
 * Represents a callable type such as a function or an object with a "call" method.
 */
export type Callable = typeof Function.prototype.call | { call(): void };

/**
 * Represents a type which can be constructed with the new operator.
 */
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type Constructable<T = {}> = {
  new (...args: unknown[]): T;
};

/**
 * Represents a constructable class with a prototype.
 */
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type Class<T, C = {}> = C &
  Constructable<T> & {
    /**
     * The class's prototype;
     */
    readonly prototype: T;
  };

/**
 * Provides a mechanism for releasing resources.
 */
export interface Disposable {
  /**
   * Disposes the resources.
   */
  dispose(): void;
}

/**
 * A policy for use with the standard trustedTypes platform API.
 */
export type TrustedTypesPolicy = {
  /**
   * Creates trusted HTML.
   * @param html - The HTML to clear as trustworthy.
   */
  createHTML(html: string): string;
};

/**
 * Reverses all readonly members, making them mutable.
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * A temporary type as a workaround for the TS compiler's erroneous built-in ParameterDecorator type.
 */
export type ParameterDecorator = (
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  target: Object,
  propertyKey: string | undefined,
  parameterIndex: number,
) => void;

/**
 * Determines whether or not an object is a function.
 */
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export const isFunction = (object: unknown): object is Function => typeof object === 'function';

/**
 * Determines whether or not an object is a string.
 */
export const isString = (object: unknown): object is string => typeof object === 'string';

/**
 * A function which does nothing.
 */
export const noop = (): void => void 0;
