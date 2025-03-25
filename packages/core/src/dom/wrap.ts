/**
 * Wrap an element with a new element.
 *
 * @param {Element} element The element to wrap.
 * @param {string} className The class name to apply to the wrapper.
 * @returns {Element} The wrapper element.
 */
export const wrap = (element: Element, className: string) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add(className);
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);
  return wrapper;
};
