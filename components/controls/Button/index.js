/**
 * @format
 * @flow
 */

import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import {
  hoverScaleTransition,
  activeScaleTransition,
  spin,
} from 'styles/animations';
import SpinnerIcon from 'icons/Spinner';

const common = props => css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'Fira Mono', monospace;
  font-weight: 400;
  letter-spacing: 0.03em;
  border-radius: 18px;
  width: 190px;
  height: 50px;
  text-decoration: none;
  opacity: ${props.enabled ? 1 : 0.2};
  pointer-events: ${props.enabled ? 'all' : 'none'};
  ${hoverScaleTransition}
  ${activeScaleTransition}
`;

const Primary = styled.a`
  color: #fff;
  background: linear-gradient(#ff6b00, #ff2782);
  box-shadow: 0px 10px 34px rgba(240, 58, 99, 0.4);
  ${common}
`;
const Secondary = styled.a`
  border: 2px solid #f03a63;
  ${common}
`;

const PrimaryButton = styled.button`
  color: #fff;
  background: linear-gradient(#ff6b00, #ff2782);
  box-shadow: 0px 10px 34px rgba(240, 58, 99, 0.4);
  border: none;
  cursor: pointer;
  ${common}
`;
const SecondaryButton = styled.button`
  color: #f03a63;
  border: 2px solid #f03a63;
  cursor: pointer;
  ${common}
`;

const Spinner = styled(SpinnerIcon)`
  animation: ${spin} 1s linear infinite;
`;

type Props = {
  children: React.Node,
  href?: string,
  primary?: boolean,
  enabled?: boolean,
  pending?: boolean,
  css?: any,
  className?: string,
};

const Button = ({
  children,
  href,
  enabled = true,
  pending,
  primary,
  css,
  className,
  ...rest
}: Props) => {
  const content = pending ? <Spinner /> : children;
  return href ? (
    <Link href={href} passHref {...rest}>
      {primary ? (
        <Primary css={css} className={className} enabled={enabled}>
          {content}
        </Primary>
      ) : (
        <Secondary css={css} className={className} enabled={enabled}>
          {content}
        </Secondary>
      )}
    </Link>
  ) : primary ? (
    <PrimaryButton
      css={css}
      className={className}
      enabled={enabled}
      disabled={!enabled}
      {...rest}
    >
      {content}
    </PrimaryButton>
  ) : (
    <SecondaryButton
      css={css}
      className={className}
      enabled={enabled}
      disabled={!enabled}
      {...rest}
    >
      {content}
    </SecondaryButton>
  );
};

export default Button;
