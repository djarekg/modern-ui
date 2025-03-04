import { Hook, type State, hook } from 'haunted';

/**
 * A hook that returns the `this` of the current component.
 */
export const useHost = hook(
  class HostHook extends Hook<[], Element, Element> {
    constructor(
      id: number,
      private el: State<Element>,
    ) {
      super(id, el);
      this.el = el;
    }

    update() {
      return this.el.host;
    }
  },
);
