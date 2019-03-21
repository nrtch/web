/**
 * @format
 * @flow
 */

import * as React from 'react';
import { css } from '@emotion/core';

import Section from 'controls/Section';
import Row from 'controls/Row';
import Fact from 'controls/Fact';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Facts = () => (
  <Section>
    <Row css={styles.content} wrapItems stretch>
      <Fact label="Средняя доходность" value="5% в месяц" />
      <Fact label="Максимальный объем сделки" value="0.1%" />
      <Fact label="Брокер" value="любой" />
      <Fact label="Прибыльных позиций" value="80%" />
      <Fact label="Инструментов" value="8" />
      <Fact label="Платформа" value="MT4" />
    </Row>
  </Section>
);

const styles = {
  content: css`
    ${mq[0]} {
      flex-wrap: wrap;
    }
  `,
};

export default Facts;
