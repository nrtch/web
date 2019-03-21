/**
 * @format
 * @flow
 */

import * as React from 'react';
import { Global, css } from '@emotion/core';
import Case from 'case';

type FontProps = {
  family: string,
  name: string,
  weight: number,
};
type Props = {
  list: FontProps[],
};

const Fonts = ({ list }: Props) => (
  <Global
    styles={css`
      ${list.map(
        ({ family, name, weight }) => `@font-face {
          font-family: '${family}';
          font-style: normal;
          font-weight: ${weight};
          src: local('${Case.capital(name)}'),
              local('${Case.header(name)}'),
              url(/static/fonts/${Case.kebab(name)}.woff2) format('woff2'),
              url(/static/fonts/${Case.kebab(name)}.woff) format('woff'),
              url(/static/fonts/${Case.kebab(name)}.ttf) format('truetype');
        }`
      )}
    `}
  />
);

export default Fonts;
