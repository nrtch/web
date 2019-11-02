/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const container = css`
  & + & {
    margin-top: 40px;
  }
  ${mq[0]} {
    width: 50%;
    & + & {
      margin-top: 68px;
    }
    &:nth-of-type(2) {
      margin-top: 0;
    }
  }
  ${mq[1]} {
    width: 33.3%;
    &:nth-of-type(3) {
      margin-top: 0;
    }
  }
`;

const Label = styled.div`
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-weight: bold;
  letter-spacing: 0.05em;
  ${mq[0]} {
    letter-spacing: 0;
  }
`;
const BottomLabel = styled.div`
  /* font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-weight: bold;
  letter-spacing: 0.05em;
  ${mq[0]} {
    letter-spacing: 0;
  } */
`;
const Value = styled.div`
  font-weight: 200;
  font-size: 2.625em;
  letter-spacing: -0.03em;
  margin-top: 8px;
`;

type Props = {
  label?: string,
  value: string,
  bottomLabel?: string,
  style?: any,
};

const Fact = ({ label, value, bottomLabel, style, ...rest }: Props) => (
  <div css={[container, style]} {...rest}>
    {label && <Label>{label}</Label>}
    <Value>{value}</Value>
    {bottomLabel && <BottomLabel>{bottomLabel}</BottomLabel>}
  </div>
);

export default Fact;
