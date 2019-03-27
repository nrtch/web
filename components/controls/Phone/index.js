/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

import framePng from './iphone.png';
import frame from './iphone.webp';

const Content = styled.div`
  overflow: hidden;
  height: 0;
  padding-top: ${(1726 / 862) * 100}%;
  background-position: center;
  background-size: contain, 87.5%;
  background-repeat: no-repeat;
  background-image: url(${frame}), url(${props => props.image});
  .no-webp & {
    background-image: url(${framePng}), url(${props => props.fallback});
  }
`;

type Props = {
  css?: any,
  className?: any,
};

const Phone = ({ css, className, ...rest }: Props) => (
  <div css={css} className={className}>
    <Content {...rest} />
  </div>
);

export default Phone;
