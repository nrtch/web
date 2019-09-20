/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';

import Section from '../controls/Section';
import QA from '../controls/QA';
import SectionTitle from '../controls/SectionTitle';
import Stat from '../controls/Stat';
import Note from '../controls/Note';
import TableRow from '../controls/TableRow';
import External from '../icons/External';
import chart from './chart.png';
// import Button from '../controls/Button';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const mql = breakpoints.map(bp => `@media (max-width: ${bp - 1}px)`);
const margin = 40;

const Faq = () => (
  <Section>
    <Container>
      <SectionTitle>Все, что нужно знать о&nbsp;NEXX</SectionTitle>
      <Content>
        <QA title="Что такое NEXX?">
          <Text max="600px">
            Софт на основе технологии искусственного интеллекта для
            автоматической торговли на международном валютном рынке.
          </Text>
        </QA>
        <QA title="Что делает NEXX?">
          <Text>Совершает около 25 сделок в месяц.</Text>
          <Text>Все сделки совершаются небольшими объемами.</Text>
          <Text>Каждая сделка имеет TP и SL.</Text>
          <Text>Доходность от 40% годовых.</Text>
          <Text>Уровень риска не превышает 5%*</Text>
          <SideNote>
            Уровень риска выбирается индивидуально клиентом. Увеличение риска
            увеличивает доходность.
            <br />
            При риске, не превышающем 5%, годовой доход составляет 40%.
          </SideNote>
        </QA>
        <QA title="Что делает команда?">
          <Text>Настраивает и подключает NEXX.</Text>
          <Text>Совершенствует алгоритм.</Text>
          <Text>Оказывает консультации клиентам 24/7.</Text>
        </QA>
        <QA title="На чем мы зарабатываем?">
          <Text>Мы не берём никаких денег, пока не заработаем их вам!</Text>
          <Facts>
            <Stat label="за вход">0%</Stat>
            <Stat label="за выход">0%</Stat>
            <Stat
              label={
                <>
                  ежемесячная
                  <br />
                  комиссия
                </>
              }
            >
              0%
            </Stat>
            <Stat
              label={
                <>
                  с заработанной
                  <br />
                  суммы
                </>
              }
            >
              30%
            </Stat>
          </Facts>
          <Example label="Пример">
            <TableRow start="Вклад" end="1 000 000 ₽" />
            <TableRow
              start={
                <>
                  Доход
                  <br />
                  депозита
                </>
              }
              end="400&nbsp;000&nbsp;₽"
              endLabel="40% в год ="
            />
            <TableRow
              start={
                <>
                  Наш
                  <br />
                  бонус
                </>
              }
              end="120 000 ₽"
              endLabel="30% от 400&nbsp;000&nbsp;₽&nbsp;="
            />
          </Example>
        </QA>
        <QA title="Вам нужно отдавать деньги?">
          <Text>
            Вы напрямую размещаете средства у российских брокеров с лицензией.
          </Text>
          <Text>Мы подключаем к вашему счёту торгового робота.</Text>
          <Text>
            Только <Mark>вы</Mark> можете снять и положить деньги на счёт.
          </Text>
        </QA>
        <QA title="Какие риски?">
          <b>А вдруг вы «спустите» весь мой депозит?</b>
          <Text item>
            У нас установлен максимальный уровень риска в 7% от депозита. Каждая
            сделка имеет маленький объём и значения для автоматической фиксации
            убытка или прибыли.
          </Text>
          <b>Я могу снять деньги в любое время?</b>
          <Text item>Да, никаких дополнительных комиссий.</Text>
          <b>Как мне наблюдать за торговлей?</b>
          <Text item>
            Вы видите состояние счёта и все сделки в режиме онлайн через
            мобильное приложение MetaTrader.
          </Text>
        </QA>
        <QA title="Покажите, кто уже вложил">
          <Text>Пример реального счёта</Text>
          <Pic src={chart} alt="Изображение графика дохода 40% за 4 месяца" />
          <Text item>За 4 месяца рост на 50%</Text>
          Посмотреть данные по счёту в реальном времени:
          <br />
          <Buttons>
            <ExternalLink
              href="https://alpari.com/ru/invest/pamm/442945/#pamm-return"
              target="_blank"
            >
              Просто
              <LinkIcon width="16" height="16" />
            </ExternalLink>
            <ExternalLink
              href="https://www.myfxbook.com/members/COLOR/nexx-1/3493742/wEPFfl7T20PRBrsbgTCT"
              target="_blank"
            >
              Сложно, но подробно
              <LinkIcon width="16" height="16" />
            </ExternalLink>
          </Buttons>
        </QA>
      </Content>
    </Container>
  </Section>
);

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
  ${mq[0]} {
    justify-content: flex-start;
  }
`;
const ExternalLink = styled.a`
  position: relative;
  font-size: 18px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-weight: 400;
  letter-spacing: 0.03em;
  border-radius: 18px;
  text-decoration: none;
  padding: 12px 24px;
  border: 2px solid #f03a63;
  margin-top: 15px;
  & + & {
    margin-left: 20px;
    @media (max-width: 480px) {
      margin-left: 0;
    }
  }
`;
const LinkIcon = styled(External)`
  position: absolute;
  top: 5px;
  right: 5px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 30px;
  @media (max-width: 460px) {
    text-align: left;
  }
  ${mq[0]} {
    padding: 0;
    margin-left: ${margin}px;
    margin-right: ${margin}px;
  }
  @media (min-width: ${breakpoints[1] + margin * 2}px) {
    margin-left: 0;
    margin-right: 0;
    width: ${breakpoints[1]}px;
  }
  @media (min-width: ${breakpoints[0]}px) and (max-width: 1071px) {
    align-self: stretch;
  }
`;
const Content = styled.div`
  margin-top: 3em;
`;
const Mark = styled.span`
  color: #000;
`;
const A = styled.a`
  color: #ff2782;
  /* border-bottom: 1px solid;
   */
`;
const Pic = styled.img`
  width: 100%;
  margin: 30px 0;
`;
const Text = styled.div`
  margin: ${p => (p.item ? '10px 0 30px' : 0)};
  ${mq[0]} {
    font-size: 1.6em;
    font-weight: 500;
    color: #999;
    max-width: ${p => p.max || '100%'};
  }
`;
const Facts = styled.div`
  display: flex;
  margin: 1em 0 3em;
  ${mql[0]} {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 460px) {
    justify-content: flex-start;
  }
`;
const Example = styled(Note)`
  max-width: 340px;
  ${mql[0]} {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
`;
const SideNote = styled.p`
  margin-top: 20px;
  font-size: 12px;
  font-style: italic;
  padding-left: 12px;
  position: relative;
  left: -12px;
  &:before {
    display: block;
    content: '*';
    position: absolute;
    left: 0;
  }
`;

export default Faq;
