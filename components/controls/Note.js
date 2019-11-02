/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 28px 22px 16px;
  position: relative;
`;
const LabelContainer = styled.div`
  position: absolute;
  top: -12px;
  text-align: center;
  left: 0;
  right: 0;
`;
const Label = styled.span`
  color: #999;
  /* font-weight: bold; */
  margin: 0 0 30px;
  background-color: #ddd;
  border-radius: 30px;
  padding: 5px 10px;
`;

type Props = {
  label: string,
  children: React.Node,
};

const Note = ({ label, children, ...rest }: Props) => (
  <Container {...rest}>
    {label && (
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
    )}
    <div>{children}</div>
  </Container>
);

export default Note;
