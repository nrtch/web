/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

import Section from '../controls/Section';
import SectionTitle from '../controls/SectionTitle';
import Member from '../controls/Member';
import pic from './keanu.jpg';

const breakpoints = [860, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const margin = 40;

const Team = () => (
  <Section>
    <SectionTitle>Команда</SectionTitle>
    <Content>
      <Member name="Алексей Афанасьев" role="CEO" image={pic}>
        профессиональный трейдер, автор алгоритма, 8 лет опыта в трейдинге, опыт
        управления капиталом $1М
      </Member>
      <Member name="Артём Титаренко" role="CTO" image={pic}>
        разработчик алгоритма, 10+ лет в разработке автоматических торговых
        систем
      </Member>
      <Member name="Иван Фирсов" role="DEV" image={pic}>
        разработчик сайта и мобильного приложения
      </Member>
      <Member name="Николай Гутыро" role="DEV" image={pic}>
        серверный разработчик
      </Member>
    </Content>
  </Section>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  ${mq[0]} {
    flex-direction: row;
    margin-left: ${margin}px;
    margin-right: ${margin}px;
    flex-wrap: wrap;
  }
  @media (min-width: ${breakpoints[1] + margin * 2}px) {
    margin-left: 0;
    margin-right: 0;
    width: ${breakpoints[1]}px;
  }
  @media (min-width: ${breakpoints[0]}px) and (max-width: 1071px) {
    align-self: ${props => (props.stretch ? 'stretch' : 'center')};
  }
`;

export default Team;
