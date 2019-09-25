/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

import _Section from '../controls/Section';
import SectionTitle from '../controls/SectionTitle';
import Text from '../controls/Text';
import Button from '../controls/Button';
import Phone from '../icons/Phone';
import Telegram from '../icons/Telegram';
import Whatsapp from '../icons/Whatsapp';
import Envelope from '../icons/Envelope';

const End = () => (
  <Section id="contacts" highlighted>
    <SectionTitle plain>Ну что, приступим?</SectionTitle>
    <Text>Оставьте заявку на&nbsp;подключение&nbsp;NEXX</Text>
    <Button
      href="/start"
      onClick={() => window.localStorage.setItem('start-section', 'end')}
      primary
    >
      Подключить
    </Button>
    <Text>
      или свяжитесь с нами
      <br />
      удобным вам способом:
    </Text>
    <Contacts>
      <Item>
        <Phone />
        <Link href="tel:+79052487757">+7-905-248-77-57</Link>
      </Item>
      <Item>
        <Telegram />
        <Link>
          @<wbr />
          atm4ppl
        </Link>
      </Item>
      <Item>
        <Whatsapp />
        <Link href="https://wa.me/79052487757">+7-905-248-77-57</Link>
      </Item>
      <Item>
        <Envelope />
        <Link href="mailto:welcome@nexx.me">welcome@nexx.me</Link>
      </Item>
    </Contacts>
  </Section>
);

const Section = styled(_Section)`
  text-align: center;
`;
const Contacts = styled.div`
  font-size: 1.4em;
  margin-top: 2em;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 18px;
  }
`;
const Link = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 10px;
`;

export default End;
