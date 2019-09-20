/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    margin-top: 2em;
  }
`;
const Start = styled.div`
  max-width: 160px;
  line-height: 1;
  font-size: 1.6em;
  font-weight: 500;
  color: #999;
  @media (max-width: 420px) {
    font-size: 1em;
  }
`;
const End = styled.div`
  text-align: right;
`;
const EndValue = styled.div`
  font-weight: 200;
  font-size: 2em;
  letter-spacing: -0.03em;
  @media (max-width: 420px) {
    font-size: 1.4em;
  }
`;
const EndLabel = styled.div`
  /* font-size: 2em; */
  /* color: #bbb;
  margin-bottom: 10px; */
  font-weight: bold;
  text-align: right;
`;

type Props = {
  start: React.Node,
  end: React.Node,
  endLabel?: React.Node,
};

const TableRow = ({ start, end, endLabel, ...rest }: Props) => (
  <Container {...rest}>
    {start && <Start>{start}</Start>}
    {end && (
      <End>
        {endLabel && <EndLabel>{endLabel}</EndLabel>}
        <EndValue>{end}</EndValue>
      </End>
    )}
  </Container>
);

export default TableRow;
