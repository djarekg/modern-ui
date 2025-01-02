const defineShim: typeof customElements.define = customElements.define;

const define = (
  name: string,
  ctor: CustomElementConstructor,
  options?: ElementDefinitionOptions,
): void => {
  if (!customElements.get(name)) {
    defineShim(name, ctor, options);
  }
};

export { define };
