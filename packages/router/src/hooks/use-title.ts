import { useEffect } from 'haunted';

/**
 * Update the title of the document.
 *
 * @param {string} newTitle New title.
 */
export const useTitle = (newTitle: string) => {
  useEffect(() => {
    const { title = '' } = document;
    document.title = newTitle;
    return () => (document.title = title);
  });
};
