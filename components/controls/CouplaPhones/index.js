/**
 * @format
 * @flow
 */

import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Phone from '../Phone';
import detailsPng from './details.png';
import ordersPng from './orders.png';
import details from './details.webp';
import orders from './orders.webp';

const screens = [
  { image: details, fallback: detailsPng },
  { image: orders, fallback: ordersPng },
];
const alternateScreens = screens.concat();
alternateScreens.reverse();

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Container = styled.div`
  position: relative;
  margin: 0 50px;
  max-width: 392px;
`;

const styles = {
  phones: [
    css`
      width: 73%;
    `,
    css`
      width: 73%;
      position: absolute;
      top: 0;
      right: 0;
    `,
  ],
  phonesAlternate: [
    css`
      ${mq[0]} {
        width: 78%;
        transform: rotate(-3.39deg);
      }
    `,
    css`
      ${mq[0]} {
        width: 78%;
        transform: rotate(3.41deg) translateY(60px);
      }
    `,
  ],
};

type Props = {
  alternate?: boolean,
  style?: any,
};

const CouplaPhones = ({ alternate, style, ...rest }: Props) => (
  <Container css={style} alternate={alternate} {...rest}>
    {(alternate ? alternateScreens : screens).map((screen, i) => (
      <Phone
        key={screen.image}
        css={[styles.phones[i], alternate ? styles.phonesAlternate[i] : null]}
        {...screen}
      />
    ))}
  </Container>
);

export default CouplaPhones;
