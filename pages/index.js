/**
 * @format
 * @flow
 */

import * as React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';

import Intro from '../components/sections/Intro';
import Facts from '../components/sections/Facts';
import Mobile from '../components/sections/Mobile';
import Support from '../components/sections/Support';
import End from '../components/sections/End';
import Footer from '../components/sections/Footer';
import Thanks from '../components/controls/Thanks';
import Faq from '../components/sections/Faq';
import Team from '../components/sections/Team';

const { useState, useEffect } = React;

const Home = () => {
  const [thanks, setThanks] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timer0;
    let timer1;
    if (
      typeof window !== 'undefined' &&
      window.localStorage.getItem('start-sent') === '1'
    ) {
      setThanks(true);
      window.localStorage.setItem('start-sent', '0');
      timer0 = setTimeout(() => setDone(true), 3000);
      timer1 = setTimeout(() => setThanks(false), 4000);
    }
    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
    };
  }, []);

  return (
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
            background-color: #f1f1f1;
          }
        `}
      />
      <Intro />
      <Facts />
      <Mobile />
      <Support />
      <Faq />
      <Team />
      <End />
      <Footer />
      {thanks && <Thanks done={done} />}
    </>
  );
};

export default Home;
