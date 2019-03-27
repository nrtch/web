/**
 * @format
 * @flow
 */

import styled from '@emotion/styled';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const margin = 40;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.align ? 'flex-start' : 'center')};
  ${mq[0]} {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    margin-left: ${margin}px;
    margin-right: ${margin}px;
    & > * {
      flex: ${props => (props.wrapItems ? 'auto' : 1)};
    }
  }
  @media (min-width: ${breakpoints[1] + margin * 2}px) {
    margin-left: 0;
    margin-right: 0;
    width: ${breakpoints[1]}px;
  }
  @media (min-width: ${breakpoints[0]}px) and (max-width: 1071px) {
    align-self: ${props => (props.stretch ? 'stretch' : 'center')};
  }
`;

export default Row;
