/**
 * @format
 * @flow
 */

import * as React from 'react';

type Props = {
  color?: string,
};

const Spinner = ({ color = '#F03A63', ...rest }: Props) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M22.777 33.2703C19.9356 34.1591 16.9025 34.2376 14.019 33.4968C11.1354 32.756 8.51572 31.2254 6.45455 29.0771C4.39339 26.9288 2.9725 24.248 2.3517 21.3363C1.73091 18.4245 1.93483 15.3973 2.94053 12.5952C3.94623 9.79298 5.71382 7.32698 8.04449 5.47451C10.3752 3.62205 13.1765 2.45661 16.1333 2.10927C19.0902 1.76192 22.0853 2.24646 24.7818 3.50838C27.4783 4.7703 29.7693 6.75954 31.397 9.25237"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default Spinner;
