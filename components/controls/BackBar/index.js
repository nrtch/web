/**
 * @format
 * @flow
 */

import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import BackButton from 'controls/BackButton';

const breakpoints = [768, 992, 1200, 1400, 1600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Container = styled.div`
  display: flex;
  padding: 26px 30px;
  ${mq[0]} {
    padding: 32px 48px;
  }
`;
const A = styled.a`
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 1.0625em;
  text-decoration: none;
  margin: 2px 0 0 2em;
`;

const BackBar = () => (
  <Container>
    <BackButton />
    <Link href="/" passHref>
      <A>На главную</A>
    </Link>
  </Container>
);

export default BackBar;
