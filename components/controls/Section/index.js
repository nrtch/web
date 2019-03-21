/**
 * @format
 * @flow
 */

import styled from '@emotion/styled';

const breakpoints = [768, 992, 1200, 1400, 1600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.highlighted ? '#fff' : 'none')};
  padding: ${props => (props.highlighted ? '15vw 0' : 0)};
  margin-bottom: 100px;
  margin-top: ${props => (props.last ? '90px' : 0)};
  ${mq[0]} {
    margin-bottom: ${props =>
      props.last ? '80px' : props.highlighted ? 0 : '180px'};
    margin-top: ${props => (props.last ? '70px' : 0)};
  }
  ${mq[1]} {
    padding: ${props => (props.highlighted ? '148px 0' : 0)};
  }
  ${mq[4]} {
    padding: ${props => (props.highlighted ? '180px 0 0' : 0)};
  }
`;

export default Section;
