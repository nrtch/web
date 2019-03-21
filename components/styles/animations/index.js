/**
 * @format
 * @flow
 */

import { css, keyframes } from '@emotion/core';

export const hoverScaleTransition = css`
  transition: transform 150ms ease-in-out 0s;
  &:hover {
    transform: scale(1.04);
  }
`;

export const activeScaleTransition = css`
  transition: transform 150ms ease-in-out 0s;
  -webkit-tap-highlight-color: transparent;
  &:active {
    transform: scale(0.96);
  }
`;

export const appearFromTop = keyframes`
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(358deg);
  }
`;
