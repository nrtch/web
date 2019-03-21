/**
 * @format
 * @flow
 */

import * as React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';

import Intro from 'sections/Intro';
import Facts from 'sections/Facts';
import Mobile from 'sections/Mobile';
import Support from 'sections/Support';
import End from 'sections/End';
import Contacts from 'sections/Contacts';

const Home = () => (
  <>
    <Head>
      <title>NEXX — инвестиции с интеллектом</title>
    </Head>
    <Global
      styles={css`
        html,
        body {
          width: 100%;
          overflow-x: hidden;
        }
        body {
          font-size: 16px;
          color: #000000;
          font-family: 'Fira Sans', sans-serif;
          font-weight: normal;
          text-align: center;
          background-color: #f1f1f1;
          margin: 0;
          font-display: swap;
          @media (min-width: 768px) {
            text-align: left;
          }
        }
      `}
    />
    <Intro />
    <Facts />
    <Mobile />
    <Support />
    <End />
    <Contacts />
  </>
);

export default Home;
