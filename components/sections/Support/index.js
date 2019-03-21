/**
 * @format
 * @flow
 */

import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Section from 'controls/Section';
import Row from 'controls/Row';
import SectionTitle from 'controls/SectionTitle';
import Text from 'controls/Text';
import ChatPic from 'controls/ChatPic';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const dialog = [
  <>Есть ограничения по срокам?</>,
  'Нет. Заработали — вывели, потратили',
  <>
    А это повлияет на процент
    <br />
    доходности?
  </>,
  'Конечно же нет 🤓',
  '👍',
];

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq[0]} {
    box-sizing: border-box;
    align-items: flex-start;
    padding-right: 50px;
  }
  ${mq[2]} {
    padding-right: 80px;
  }
`;

const Support = () => (
  <Section>
    <Row reverse align stretch>
      <ChatPic dialog={dialog} css={styles.pic} />
      <Column>
        <SectionTitle>Расскажем, покажем</SectionTitle>
        <Text short>
          Пишите нам в любое время в любой день по любому вопросу. Мы рады
          пообщаться и помочь.
        </Text>
      </Column>
    </Row>
  </Section>
);

const styles = {
  pic: css`
    ${mq[1]} {
      margin-right: 100px;
    }
  `,
};

export default Support;
