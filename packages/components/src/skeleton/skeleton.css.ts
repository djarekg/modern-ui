import { css } from 'lit';

export default css`
  :host {
    --mui-skeleton-background: var(--mui-palette-surface-a50);
    --mui-skeleton-line-height: normal;
    --mui-skeleton-margin: 1px;
    --mui-skeleton-shape: var(--mui-shape-small);
    --mui-shape-circle-size: 40px;
    --mui-shape-rectangle-size: 160px;

    pointer-events: none;
    margin-block: var(--mui-skeleton-margin);
    box-sizing: border-box;
    line-height: var(--mui-skeleton-line-height);
    display: block;
    overflow: hidden;
    inline-size: var(--mui-skeleton-width, auto);
    block-size: calc(var(--mui-skeleton-block-size, 20px) - calc(var(--mui-skeleton-margin) * 2));
    background-color: var(--mui-skeleton-background);
    border-radius: var(--mui-skeleton-shape);
    animation: pulse 1.2s var(--mui-motion-standard-easing) infinite;

    &::before {
      content: "";
      display: inline-block;
      opacity: 0.1;
      inline-size: 300%;
      block-size: 300%;
      margin-block-end: 20px;
      background-color: rgb(55 65 81/1);
      animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      animation-duration: 3s;
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      animation-delay-start: 0s;
      animation-delay-end: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: pulse;
      animation-timeline: auto;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  :host([circle]) {
    --mui-skeleton-inline-size: var(--mui-shape-circle-size);
    --mui-skeleton-block-size: var(--mui-shape-circle-size);

    border-radius: 50%;
  }

  :host([rectangle]) {
    --mui-skeleton-inline-size: var(--mui-shape-rectangle-size);
    --mui-skeleton-block-size: var(--mui-shape-rectangle-size);
  }

  :host([button]) {
    --mui-skeleton-block-size: 34px;
    --mui-skeleton-shape: 9999px;
  }

  :host([label][small]) {
    --mui-skeleton-block-size: var(--mui-typescale-label-small-line-height);
  }
  :host([label][medium]) {
    --mui-skeleton-block-size: var(--mui-typescale-label-medium-line-height);
  }
  :host([label][large]) {
    --mui-skeleton-block-size: var(--mui-typescale-label-xlarge-line-height);
  }

  :host([body][small]) {
    --mui-skeleton-block-size: var(--mui-typescale-body-small-line-height);
  }
  :host([body][medium]) {
    --mui-skeleton-block-size: var(--mui-typescale-body-medium-line-height);
  }
  :host([body][large]) {
    --mui-skeleton-block-size: var(--mui-typescale-body-xlarge-line-height);
  }

  :host([headline][small]) {
    --mui-skeleton-block-size: var(--mui-typescale-headline-small-line-height);
  }
  :host([headline][medium]) {
    --mui-skeleton-block-size: var(--mui-typescale-headline-medium-line-height);
  }
  :host([headline][large]) {
    --mui-skeleton-block-size: var(--mui-typescale-headline-xlarge-line-height);
  }

  :host([title][small]) {
    --mui-skeleton-block-size: var(--mui-typescale-title-small-line-height);
  }
  :host([title][medium]) {
    --mui-skeleton-block-size: var(--mui-typescale-title-medium-line-height);
  }
  :host([title][large]) {
    --mui-skeleton-block-size: var(--mui-typescale-title-xlarge-line-height);
  }

  :host([display][small]) {
    --mui-skeleton-block-size: var(--mui-typescale-display-small-line-height);
  }
  :host([display][medium]) {
    --mui-skeleton-block-size: var(--mui-typescale-display-medium-line-height);
  }
  :host([display][large]) {
    --mui-skeleton-block-size: var(--mui-typescale-display-xlarge-line-height);
  }
`;
