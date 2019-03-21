/**
 * @format
 * @flow
 */

import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import Section from 'controls/Section';
import Row from 'controls/Row';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Column = styled.div`
  margin-bottom: 3em;
  ${mq[0]} {
    margin-bottom: 0;
  }
`;
const Phone = styled.a`
  font-family: Fira Mono, monospace;
  font-weight: normal;
  font-size: 1.5625em;
  letter-spacing: -0.07em;
  text-decoration: none;
  color: #000;
`;
const EmailContainer = styled.div`
  margin: 0.5em 0 0.7em;
`;
const Email = styled.a`
  margin-top: 0.8em;
  font-family: Fira Mono, monospace;
  font-weight: normal;
  font-size: 1.125em;
`;
const Privacy = styled.a`
  font-size: 0.8125em;
  color: #9b9b9b;
`;
const Address = styled.address`
  display: block;
  font-size: 0.8125em;
  font-style: normal;
  color: #9b9b9b;
  line-height: 1.5;
  ${mq[0]} {
    text-align: right;
  }
`;

const Contacts = () => (
  <Section last>
    <Row>
      <Column>
        <Phone href="tel:+74012522287">+7 (4012) 5222-87</Phone>
        <EmailContainer>
          <Email href="mailto:welcome@nexx.me">welcome@nexx.me</Email>
        </EmailContainer>
        <Link href="/privacy" passHref>
          <Privacy>Политика использования персональных данных</Privacy>
        </Link>
      </Column>
      <Address>
        ООО &laquo;Нейротек&raquo; {new Date().getFullYear()}
        <br />
        ИНН 3906377185, КПП 390601001
        <br />
        г. Калининград, ул. Театральная, 32
        <br />
        БЦ &laquo;Лондон&raquo;, офис 434
      </Address>
    </Row>
  </Section>
);

export default Contacts;
