/**
 * @format
 * @flow
 */

import * as React from 'react';

type Props = {
  color?: string,
};

const Close = ({ color = '#F03A63', ...rest }: Props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <line
      x1="1.5"
      y1="14.5"
      x2="14.5"
      y2="1.5"
      stroke={color}
      strokeWidth="2"
    />
    <line
      x1="14.5"
      y1="14.5"
      x2="1.5"
      y2="1.5"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

export default Close;
