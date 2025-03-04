import { Hook, type State, hook } from 'haunted';

/**
 * A hook that returns the `this` of the current component.
 */
export const useHost = hook(
  class HostHook extends Hook {
    constructor(
      id: number,
      private el: State<unknown>,
    ) {
      super(id, el);
      this.el = el;
    }

    update() {
      return this.el.host;
    }
  },
);
