/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  padding: 30px 30px 10px;
`;
const NativeInput = styled.input`
  margin-right: 10px;
`;
const LabelValue = styled.span`
  font-size: 0.875em;
  font-weight: normal;
  flex: 1;
`;

type Props = {
  children?: React.Node,
  css?: any,
  className?: any,
};

const Checkbox = ({ children, css, className, ...rest }: Props) => {
  return (
    <Label css={css} className={className}>
      <NativeInput type="checkbox" {...rest} />
      <LabelValue>{children}</LabelValue>
    </Label>
  );
};

export default Checkbox;
