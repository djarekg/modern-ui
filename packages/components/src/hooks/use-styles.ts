import { useLayoutEffect } from 'haunted';
import { type CSSResult, supportsAdoptingStyleSheets } from 'lit-element';

import { useHost } from '@mui/core';

/**
 * Applies styling to the element shadowRoot.
 * @param styles The styles to apply to the element shadowRoot.
 */
export function useStyles(styles: CSSResult[]) {
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOMx
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */
  const el = useHost() as Element;

  const adoptStyles = (el: Element) => {
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
  };

  useLayoutEffect(() => {
    adoptStyles(el);
  }, [styles]);
}
