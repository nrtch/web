/**
 * @format
 * @flow
 */

import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import Section from '../controls/Section';
import Row from '../controls/Row';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Container = styled.div`
  ${mq[0]} {
    text-align: right;
  }
`;
const Copy = styled.div`
  margin-top: 10px;
  font-size: 0.8125em;
`;
const Column = styled.div`
  margin-top: 3em;
  ${mq[0]} {
    margin-top: 0;
  }
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
    text-align: left;
  }
`;

const Footer = () => (
  <Container>
    <Section last>
      <Row>
        <Address>
          <b>Офис разработки</b>
          <br />
          г. Калининград, ул. Театральная, 32
          <br />
          БЦ &laquo;Лондон&raquo;, офис 434
        </Address>
        <Column>
          <Link href="/privacy" passHref>
            <Privacy>
              Политика использования
              <br />
              персональных данных
            </Privacy>
          </Link>
          <Copy>&copy; nexx.me {new Date().getFullYear()}</Copy>
        </Column>
      </Row>
    </Section>
  </Container>
);

export default Footer;
