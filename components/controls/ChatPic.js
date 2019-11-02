/**
 * @format
 * @flow
 */

import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import ChatBubble from './ChatBubble';

const margin = 20;

const Container = styled.div`
  display: ${props => (props.ready ? 'block' : 'none')};
  position: relative;
  width: calc(100% - ${margin}px * 2);
  margin: 0 ${margin};
  min-width: 300px;
  max-width: 350px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;
const Bg = styled.div`
  position: absolute;
  top: 26px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  border-radius: 22px;
  background-color: #e6e6e8;
`;
const Fg = styled.div`
  position: relative;
`;

type Props = {
  dialog: React.Node[],
};

const ChatPic = ({ dialog, ...rest }: Props) => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <Container ready={ready} {...rest}>
      <Bg />
      <Fg>
        {dialog.map((message, i) => (
          <ChatBubble key={i} my={i % 2 === 0} message={message} />
        ))}
      </Fg>
    </Container>
  );
};

export default ChatPic;
