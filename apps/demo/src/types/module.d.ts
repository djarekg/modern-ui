// CSS modules

declare module '*.module.css' {
  interface CSSModuleClasses {
    readonly [key: string]: string;
  }
  const classes: CSSModuleClasses;
  export default classes;
}

// CSS
declare module '*.css' {
  import type { CSSResult } from 'lit';
  export const css: CSSResult;
  export default css;
}
