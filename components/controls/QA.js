/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

// const { useState } = React;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & + & {
    margin-top: 50px;
  }
  /* position: relative; */
  /* border: 1px solid red; */
`;
// const Title = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 15px 0;
//   /* background-color: #ddd; */
//   /* cursor: pointer; */
// `;
const Label = styled.h3`
  font-size: 38px;
  font-weight: 100;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`;
const Content = styled.div`
  display: block;
  /* ${props => (props.expanded ? 'block' : 'none')}; */
  padding-top: 1em;
  line-height: 1.5;
`;
// const Button = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 30px;
//   height: 30px;
//   border-radius: 15px;
//   box-shadow: 0px 4px 10px #ddd;
// `;

type Props = {
  title: React.Node,
  children: React.Node,
};

const QA = ({ title, children }: Props) => {
  // const [expanded, setExpanded] = useState(true);
  return (
    <Container>
      <Label>{title}</Label>
      <Content>{children}</Content>
    </Container>
  );
};
export default QA;
