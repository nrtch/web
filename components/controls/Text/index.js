/**
 * @format
 * @flow
 */

import styled from '@emotion/styled';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Text = styled.p`
  font-size: 1em;
  line-height: 1.5;
  max-width: 300px;
  margin: 20px 0 28px;
  ${mq[0]} {
    font-size: 1.125em;
    max-width: ${props => (props.short ? '450px' : 'none')};
  }
`;

export default Text;
