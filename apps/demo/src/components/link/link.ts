import { html, useCallback, virtual } from 'haunted';
import { css } from 'lit';

import { useStyles } from '@mui/core';

import { navigate } from '@/router/navigate.js';

type LinkProps = {
  href: string;
  label: string;
  newWindow?: boolean;
};

const styles = css``;

/**
 * Link virtual component.
 *
 * This component overides the default behavior of anchor tags
 * and uses the router's navigation API.
 *
 * *IMPORTANT* - This component can only be used in haunted components.
 *
 * @param {LinkProps} - Link properties.
 */
export const Link = virtual(({ href, label, newWindow }: LinkProps) => {
  useStyles(styles);

  const handleClick = useCallback(
    (event: Event) => {
      event.preventDefault();
      navigate(href);
    },
    [href],
  );

  return html`
    <a
      class="app-link"
      target=${newWindow ? '_blank' : '_self'}
      href=${href}
      @click=${handleClick}>
      ${label}
    </a>
  `;
});
