/**
 * @format
 * @flow
 */

import * as React from 'react';

type Props = {
  color?: string,
};

const Close = ({ color = '#00A3FF', ...rest }: Props) => (
  <svg
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M1 5.55L6.96078 11.4L17 1" stroke={color} strokeWidth="2" />
  </svg>
);

export default Close;
