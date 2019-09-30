/**
 * @format
 * @flow
 */

import * as React from 'react';

type Props = {
  color?: string,
};

const External = ({ color = 'currentColor', ...rest }: Props) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M6.44629 12.5742C9.73062 12.5742 12.4463 9.8585 12.4463 6.57416C12.4463 3.28403 9.72482 0.568359 6.44049 0.568359C3.15615 0.568359 0.446289 3.28403 0.446289 6.57416C0.446289 9.8585 3.16196 12.5742 6.44629 12.5742ZM6.44629 11.373C3.78285 11.373 1.64745 9.2318 1.64745 6.57416C1.64745 3.91072 3.77704 1.76952 6.44049 1.76952C9.10393 1.76952 11.2451 3.91072 11.2509 6.57416C11.2509 9.2318 9.10973 11.373 6.44629 11.373ZM8.08846 8.08867C8.37859 8.08867 8.57008 7.87397 8.57008 7.56062V4.86236C8.57008 4.46198 8.34377 4.27629 7.9724 4.27629H5.26254C4.94339 4.27629 4.74029 4.46198 4.74029 4.75791C4.74029 5.04805 4.94919 5.23374 5.26834 5.23374H6.24319L7.03236 5.1467L6.17936 5.92426L4.14842 7.95521C4.04977 8.05385 3.98594 8.19312 3.98594 8.32658C3.98594 8.63993 4.20064 8.84302 4.49658 8.84302C4.65906 8.84302 4.78671 8.78499 4.89116 8.68055L6.91631 6.6612L7.68807 5.81401L7.60683 6.64379V7.56643C7.60683 7.88557 7.79252 8.08867 8.08846 8.08867Z"
      fill={color}
    />
  </svg>
);

export default External;