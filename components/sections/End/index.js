/**
 * @format
 * @flow
 */

import * as React from 'react';

import Section from 'controls/Section';
import SectionTitle from 'controls/SectionTitle';
import Text from 'controls/Text';
import Button from 'controls/Button';

const End = () => (
  <Section highlighted>
    <SectionTitle plain>Ну что, приступим?</SectionTitle>
    <Text>Инвестируйте с интеллектом. Подключайте NEXX!</Text>
    <Button
      href="/start"
      onClick={() => window.localStorage.setItem('start-section', 'end')}
      primary
    >
      Подключить
    </Button>
  </Section>
);

export default End;
