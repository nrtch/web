/**
 * @format
 * @flow
 */

import * as React from 'react';

type Props = {
  style?: any,
};

const Logo = ({ style }: Props) => (
  <svg
    css={style}
    viewBox="0 0 192 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M172.843 31.0187L190.927 0H164.326L156.818 13.696L149.309 0H117.989L110.48 13.696L102.972 0H38.6145V23.8933L19.3073 0H0V64H24.6704V40.2347L43.9777 64H101.899L110.48 48.3627L119.061 64H148.237L156.818 48.3627L165.399 64H192L172.843 31.0187ZM85.617 44.8H63.2849V41.6H83.6648V22.4H63.2849V19.2H86.6896L93.1683 31.0187L85.617 44.8ZM126.505 31.0187L133.199 19.52L139.506 31.0187L133.199 42.5387L126.505 31.0187Z"
      fill="black"
    />
  </svg>
);
export default Logo;
