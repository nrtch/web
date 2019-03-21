/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

import CloseIcon from 'icons/Close';
import CheckIcon from 'icons/Check';
import { appearFromTop, appearFromRight } from 'styles/animations';

const successColor = '#00A3FF';
const failColor = '#F03A63';
const failBgColor = '#FDE1E8';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: stretch;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-content: stretch;
`;
const LabelValue = styled.div`
  font-family: Fira Sans, monospace;
  font-size: 0.875em;
  font-weight: normal;
  padding: 30px 30px 10px;
  color: #9c9c9c;
`;
const NativeInput = styled.input`
  font-family: Fira Mono, monospace;
  font-size: 1.125em;
  font-weight: 400;
  padding: 13px 30px;
  color: #000;
  background-color: #f7f7f7;
  background-image: none !important;
  border: 0;
  border-bottom: 2px solid
    ${props => (props.invalid ? failColor : 'transparent')};
  &:focus {
    outline: none;
    border-bottom: 2px solid
      ${props => (props.invalid ? failColor : successColor)};
  }
  &::placeholder {
    color: #9c9c9c;
  }
`;
const Message = styled.div`
  font-size: 0.875em;
  padding: 13px 30px 15px;
  color: ${failColor};
  background-color: ${failBgColor};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  animation: ${appearFromTop} 150ms ease;
`;
const Close = styled(CloseIcon)`
  position: absolute;
  top: 8px;
  right: 18px;
  padding: 10px;
  animation: ${appearFromRight} 300ms ease-out;
`;
const Check = styled(CheckIcon)`
  position: absolute;
  top: 10px;
  right: 16px;
  padding: 10px;
  animation: ${appearFromRight} 300ms ease-out;
`;

type Props = {
  onClear?: () => any,
  label?: React.Node,
  invalidMessage?: React.Node,
  reason?: ?string,
  valid?: ?boolean,
  css?: any,
};

const Input = ({
  label,
  invalidMessage,
  valid,
  reason,
  validSync,
  css,
  onClear,
  ...rest
}: Props) => {
  return (
    <Container css={css}>
      <Label>
        {label && <LabelValue>{label}</LabelValue>}
        <Wrapper>
          <NativeInput invalid={!!invalidMessage} {...rest} />
          {invalidMessage && <Close onClick={onClear} />}
          {valid && <Check />}
        </Wrapper>
      </Label>
      {invalidMessage && <Message>{invalidMessage}</Message>}
    </Container>
  );
};

export default Input;
