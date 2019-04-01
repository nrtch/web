/**
 * @format
 * @flow
 */

import * as React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import BackBar from 'controls/BackBar';
import StartForm from 'sections/StartForm';

const breakpoints = [768, 992, 1200, 1400, 1600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  ${mq[0]} {
    align-items: center;
    justify-content: center;
  }
`;

const Home = () => (
  <>
    <Head>
      <title>Подключить NEXX</title>
    </Head>
    <Global
      styles={css`
        body {
          font-size: 16px;
          color: #000000;
          font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
          font-weight: normal;
          background-color: #fff;
          margin: 0;
          font-display: swap;
          @media (min-width: 768px) {
            text-align: left;
          }
        }
      `}
    />
    <Container>
      <BackBar />
      <Content>
        <StartForm
          section={
            typeof window !== 'undefined'
              ? window.localStorage.getItem('start-section')
              : undefined
          }
        />
      </Content>
    </Container>
  </>
);

export default React.memo<{}>(Home);
