/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 150px;
  @media (max-width: 460px) {
    width: 50%;
  }
`;
const Label = styled.div`
  font-weight: bold;
`;
const Value = styled.div`
  font-weight: 200;
  font-size: 2em;
  letter-spacing: -0.03em;
  margin-top: 8px;
`;

type Props = {
  label: React.Node,
  children: React.Node,
};

const Stat = ({ label, children, ...rest }: Props) => (
  <Container {...rest}>
    {children && <Value>{children}</Value>}
    {label && <Label>{label}</Label>}
  </Container>
);

export default Stat;
