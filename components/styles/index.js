/**
 * @format
 * @flow
 */

export const breakpoints = [768, 992, 1200, 1400, 1600];
export const mediaQueries = breakpoints.map<string>(
  bp => `@media (min-width: ${bp}px)`
);
