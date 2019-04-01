/**
 * @format
 * @flow
 */

import styled from '@emotion/styled';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const PageTitle = styled.h1`
  font-size: 1.375em;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-weight: 600;
  /* letter-spacing: -0.02em; */
  margin: 35px 0 0;
  ${mq[0]} {
    font-size: 2em;
  }
`;

export default PageTitle;
