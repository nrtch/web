/**
 * @format
 * @flow
 */

import * as React from 'react';
import Router from 'next/router';
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
  font-family: 'Fira Mono', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
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

const Link = styled.a`
  ${common}
`;
const NativeButton = styled.button`
  ${common}
`;
const styles = {
  primary: css`
    color: #fff;
    background: linear-gradient(#ff6b00, #ff2782);
    box-shadow: 0px 10px 34px rgba(240, 58, 99, 0.4);
  `,
  secondary: css`
    border: 2px solid #f03a63;
  `,
  primaryButton: css`
    color: #fff;
    background: linear-gradient(#ff6b00, #ff2782);
    box-shadow: 0px 10px 34px rgba(240, 58, 99, 0.4);
    border: none;
    cursor: pointer;
  `,
  secondaryButton: css`
    color: #f03a63;
    border: 2px solid #f03a63;
    cursor: pointer;
  `,
};

const Spinner = styled(SpinnerIcon)`
  animation: ${spin} 1s linear infinite;
`;

type Props = {
  children: React.Node,
  href?: string,
  onClick?: any => any,
  primary?: boolean,
  enabled?: boolean,
  pending?: boolean,
  css?: any,
  className?: string,
};

const Button = ({
  children,
  href,
  onClick,
  enabled = true,
  pending,
  primary,
  css,
  className,
  ...rest
}: Props) => {
  const content = pending ? <Spinner /> : children;
  return href ? (
    <Link
      css={[primary ? styles.primary : styles.secondary, css]}
      href={href}
      onClick={e => {
        e.preventDefault();
        onClick && onClick();
        Router.push(href);
      }}
      className={className}
      enabled={enabled}
    >
      {content}
    </Link>
  ) : (
    <NativeButton
      css={[primary ? styles.primaryButton : styles.secondaryButton, css]}
      className={className}
      enabled={enabled}
      disabled={!enabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </NativeButton>
  );
};

export default Button;
