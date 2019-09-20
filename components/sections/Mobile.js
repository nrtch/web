/**
 * @format
 * @flow
 */

import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { platform } from '../utils';
import Section from '../controls/Section';
import Row from '../controls/Row';
import CouplaPhones from '../controls/CouplaPhones';
import SectionTitle from '../controls/SectionTitle';
import Text from '../controls/Text';
import AppStoreButton from '../controls/AppStoreButton';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq[0]} {
    box-sizing: border-box;
    align-items: flex-start;
    padding-left: 50px;
  }
  ${mq[2]} {
    padding-left: 80px;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    width: 180px;
    margin-bottom: 10px;
  }
`;

const Mobile = () => (
  <Section>
    <Row stretch>
      <CouplaPhones style={styles.phones} />
      <Column>
        <SectionTitle css={styles.title}>Всегда под рукой</SectionTitle>
        <Text short>
          Мы работаем открыто и честно. Вся торговая история а также текущие
          открытые сделки доступны в приложениях NEXX, MetaTrader и портале
          Myfxbook
        </Text>
        <Buttons>
          {platform !== 'android' && <AppStoreButton />}
          {platform !== 'ios' && <AppStoreButton google />}
        </Buttons>
      </Column>
    </Row>
  </Section>
);

const styles = {
  phones: css`
    @media (max-width: 767px) {
      width: 100%;
    }
    ${mq[0]} {
      margin: 0;
      width: calc(50% - 50px);
    }
  `,
};

export default Mobile;
