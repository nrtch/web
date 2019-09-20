/**
 * @format
 * @flow
 */

import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const bg = '#fff';
const accent = '#0A86F9';
const text = '#000';
const textAccent = '#fff';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
const Content = styled.div`
  color: ${props => (props.accent ? textAccent : text)};
  background-color: ${props => (props.accent ? accent : bg)};
  padding: 6.5px 18px 7.5px;
  align-self: ${props => (props.accent ? 'flex-end' : 'auto')};
  border-radius: 17px;
  margin: 12px 6px 0 6px;
  max-width: 234px;
  text-align: left;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
`;

type Props = {
  message: React.Node,
  my?: boolean,
};

const ChatBubble = ({ message, my }: Props) => (
  <Container>
    <Content accent={my}>{message}</Content>
    <svg
      width="13"
      height="19"
      viewBox="0 0 13 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={[
        css`
          position: absolute;
          bottom: 0;
          ${my ? 'right' : 'left'}: 0;
        `,
        my
          ? null
          : css`
              transform: scaleX(-1);
            `,
      ]}
    >
      <path
        d="M7.00019 10.0001C7.02497 13.8669 9.59985 17.1669 13 18.4995C8.39604 18.4714 3.91378 17.2467 0.172666 15.1207L7.00016 0.5L7.00019 10.0001Z"
        fill={my ? accent : bg}
      />
    </svg>
  </Container>
);

export default ChatBubble;
