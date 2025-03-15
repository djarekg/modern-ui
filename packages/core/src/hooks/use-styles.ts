import { useCallback, useLayoutEffect } from 'haunted';
import { type CSSResult, supportsAdoptingStyleSheets } from 'lit-element';

import { useHost } from './use-host.js';

/**
 * Applies styling to the element shadowRoot.
 * @param styles The styles to apply to the element shadowRoot.
 */
export function useStyles(styles: CSSResult | CSSResult[]) {
  const element = useHost();

  const adoptStyles = useCallback(
    (el: Element) => {
      // biome-ignore lint/style/noParameterAssign: <explanation>
      styles = Array.isArray(styles) ? styles : [styles];

      if (styles.length === 0) {
        return;
      }

      if (supportsAdoptingStyleSheets) {
        el.shadowRoot.adoptedStyleSheets = styles.map(style =>
          style instanceof CSSStyleSheet ? style : style.styleSheet,
        );
      } else {
        for (const style of styles) {
          const newStyle = document.createElement('style');
          newStyle.textContent = style.cssText;
          el.shadowRoot.appendChild(newStyle);
        }
      }
    },
    [styles],
  );

  useLayoutEffect(() => adoptStyles(element), [styles]);
}
