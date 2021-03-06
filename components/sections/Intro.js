/**
 * @format
 * @flow
 */

import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Section from '../controls/Section';
import Row from '../controls/Row';
import Logo from '../controls/Logo';
import PageTitle from '../controls/PageTitle';
import Text from '../controls/Text';
import Button from '../controls/Button';

import CouplaPhones from '../controls/CouplaPhones';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const mh = h =>
  `@media (orientation: landscape) and (min-width: ${
    breakpoints[0]
  }px) and (max-height: ${h}px)`;

const Br = styled.br`
  display: block;
  ${mq[0]} {
    display: none;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq[0]} {
    box-sizing: border-box;
    align-items: flex-start;
  }
`;

const Intro = () => (
  <Section css={styles.container} first>
    <Row stretch>
      <Column>
        <Logo style={styles.logo} />
        <PageTitle>
          Инвестиции
          <br />c интеллектом
        </PageTitle>
        <Text css={styles.text}>
          Технологии искусственного интеллекта для трейдинга
          <Br /> и анализа финансовых рынков
          <Br /> с доходом от 40% в год.
        </Text>
        <Button
          href="/start"
          onClick={() => window.localStorage.setItem('start-section', 'intro')}
          primary
        >
          Подключить
        </Button>
      </Column>
      <CouplaPhones style={styles.phones} alternate />
    </Row>
  </Section>
);

const styles = {
  container: css`
    padding-top: 66px;
    ${mq[0]} {
      align-self: stretch;
    }
    @media (orientation: landscape) and (min-width: ${breakpoints[0]}px) {
      padding-top: 0;
      height: 100vh;
      margin-bottom: 80px;
      & > * {
        height: 100vh;
      }
    }
    @media (orientation: portrait) and (min-width: ${breakpoints[1]}px) {
      margin-bottom: 180px;
    }
  `,
  text: css`
    ${mq[0]} {
      font-size: 1.125em;
      width: 340px;
    }
  `,
  logo: css`
    width: 53%;
    max-width: 288px;
  `,
  phones: css`
    @media (max-width: 767px) {
      margin-top: 40px;
      width: 100%;
    }
    ${mq[0]} {
      top: -30px;
      left: 40px;
    }
    ${mh(720)} {
      transform: scale(0.9) translateY(1%);
    }
    ${mh(650)} {
      transform: scale(0.8) translateY(1%);
    }
    ${mh(580)} {
      transform: scale(0.7) translateY(1%);
    }
  `,
};

export default Intro;
