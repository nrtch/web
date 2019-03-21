/**
 * @format
 * @flow
 */

import * as React from 'react';
import { css } from '@emotion/core';

import frame from './iphone.png';

const container = css`
  position: relative;
`;

type Props = {
  image: string,
  alt: string,
  style?: any,
};

const Phone = ({ image, alt, style, ...rest }: Props) => (
  <div css={[container, style]} {...rest}>
    <img
      src={image}
      alt={alt}
      css={css`
        position: absolute;
        top: 0;
        left: 6.5%;
        width: 87%;
        transform: translateY(3%);
      `}
    />
    <img
      src={frame}
      alt="iPhone X"
      css={css`
        position: relative;
        pointer-events: none;
        width: 100%;
      `}
    />
  </div>
);

export default Phone;
