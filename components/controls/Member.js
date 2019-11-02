/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  box-sizing: border-box;
  width: 100%;
  @media (min-width: 860px) {
    width: 45%;
    &:nth-of-type(2n) {
      margin-left: 40px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const Pic = styled.div`
  background-image: ${p => (p.image ? `url(${p.image})` : 'none')};
  background-size: cover;
  background-position: center;
  width: 160px;
  height: 160px;
  border-radius: 150px;
`;
const Content = styled.div`
  /* flex: 1; */
  @media (max-width: 480px) {
    max-width: 280px;
    margin-top: 20px;
  }
  @media (min-width: 481px) {
    margin-left: 30px;
    flex: 1;
    text-align: left;
    /* flex-direction: center; */
  }
`;
const Info = styled.div`
  margin-top: 10px;
`;
const Name = styled.div`
  font-weight: bold;
`;
const Role = styled.div`
  /* font-weight: 200;
  font-size: 2em;
  letter-spacing: -0.03em;
  margin-top: 8px; */
`;

type Props = {
  name: string,
  role: string,
  image?: string,
  children: React.Node,
};

const Member = ({ name, role, image, children, ...rest }: Props) => (
  <Container {...rest}>
    <Pic image={image} />
    <Content>
      <Name>{name}</Name>
      <Role>{role}</Role>
      <Info>{children}</Info>
    </Content>
  </Container>
);

export default Member;
