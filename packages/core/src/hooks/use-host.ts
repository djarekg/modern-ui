import { Hook, type State, hook } from 'haunted';

/**
 * A hook that returns the `this` of the current component.
 */
export const useHost = hook(
  class HostHook<T extends Element> extends Hook<[], T, T> {
    constructor(
      id: number,
      private el: State<T>,
    ) {
      super(id, el);
      this.el = el;
    }

    update() {
      return this.el.host;
    }
  },
) as <T extends Element>() => T;
