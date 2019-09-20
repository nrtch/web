/**
 * @format
 * @flow
 */

import * as React from 'react';
import Head from 'next/head';
// import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import BackBar from '../components/controls/BackBar';
import StartForm from '../components/sections/StartForm';

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
