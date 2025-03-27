import type { Hook } from 'haunted';

interface RouterHook extends Hook {
  matches(pathname: string): string | undefined;
}

const hookPath = new Map<RouterHook, string | undefined>();
// TODO: should this be scoped to the methods it's used in?
let farthestPath = window.location.pathname;

/**
 * Add the current hook to the hook path.
 *
 * @param {RouterHook} hook Hook to add.
 */
const addCurrent = (hook: RouterHook) => {
  if (hookPath.has(hook)) {
    return;
  }

  const match = hook.matches(farthestPath);

  hookPath.set(hook, match);

  if (match) {
    farthestPath = farthestPath.slice(match.length);
  }
};

/**
 * Remove the current hook from the hook path.
 *
 * @param {RouterHook} hook Hook to remove.
 */
const removeCurrent = (hook: RouterHook) => {
  hookPath.delete(hook);
};

/**
 * Update the hook path.
 */
const update = () => {
  let match: string | undefined;
  farthestPath = window.location.pathname;

  for (const [hook, oldHook] of hookPath.entries()) {
    match = hook.matches(farthestPath);

    if (oldHook !== match) {
      hook.state.update();

      if (match === undefined) {
        hookPath.set(hook, match);
      }
    }

    if (match) {
      farthestPath = farthestPath.slice(match.length);
    }
  }

  // Update the last item of hook path anyways 😉
  const lastHook = [...hookPath.keys()].pop();
  if (lastHook) {
    lastHook.state.update();
  }
};

export { addCurrent, removeCurrent, update };
