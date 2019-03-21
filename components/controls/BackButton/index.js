/**
 * @format
 * @flow
 */

import * as React from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

type Props = {
  label?: string,
};

const Button = styled.a`
  display: flex;
  align-items: center;
  font-family: Fira Sans, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 1.0625em;
  cursor: pointer;
`;
const Label = styled.div`
  margin: 2px 0 0 10px;
`;

const BackButton = ({ label = 'Назад', ...rest }: Props) => (
  <Button
    onClick={() => {
      Router.back();
      return;
    }}
    {...rest}
  >
    <svg
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="2" y1="10" x2="26" y2="10" stroke="#F03A63" strokeWidth="2" />
      <path d="M11 1L2 10L11 19" stroke="#F03A63" strokeWidth="2" />
    </svg>
    <Label>{label}</Label>
  </Button>
);

export default BackButton;
