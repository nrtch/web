/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

import { fadeIn } from 'styles/animations';
import SectionTitle from 'controls/SectionTitle';

const breakpoints = [768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

type Props = {
  done?: boolean,
};

const Fade = styled.div`
  transition: opacity 0.5s ease-in-out 0s;
  opacity: ${props => (props.on ? 1 : 0)};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  animation: ${fadeIn} 0.5s ease-out;
  pointer-events: none;
`;
const Content = styled.div`
  margin: 20px;
  max-width: 400px;
  padding: 40px 50px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 10px 64px rgba(240, 58, 99, 0.2);
`;
const Emoji = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2.5em;
  margin: 30px 0 20px;
  transform: rotate(-5deg);
`;
const Min = styled.span`
  transform: scale(0.6) rotate(${props => props.rotate || 0}deg)
    translateY(${props => props.y || 0}px);
`;
const Max = styled.span`
  transform: rotate(${props => props.rotate || 0}deg)
    translateY(${props => props.y || 0}px);
`;
const Mid = styled.span`
  transform: scale(0.7) rotate(${props => props.rotate || 0}deg)
    translateY(${props => props.y || 0}px);
`;

const Thanks = ({ done, ...rest }: Props) => (
  <Fade on={!done} {...rest}>
    <Container>
      <Content>
        <SectionTitle plain>Спасибо за интерес!</SectionTitle>
        <Emoji>
          <Min y={-10}>🚀</Min>
          <Mid y={10}>😍</Mid>
          <Max y={-10}>🎉</Max>
          <Mid y={10}>🔥</Mid>
          <Min y={-10}>🤙</Min>
        </Emoji>
        <div>Свяжемся с вами как можно скорее</div>
      </Content>
    </Container>
  </Fade>
);

export default Thanks;
