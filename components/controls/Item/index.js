/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

const { Children } = React;

const tab = 20;

const Container = styled.div`
  border: 1px solid #000;
  margin-left: ${tab}px;
`;
const Content = styled.div`
  /* border: 1px solid #000; */
  margin-left: ${tab}px;
`;

type Props = {
  children: React.Node,
  prefix: any,
};

const Item = ({ children, prefix, ...rest }: Props) => {
  let list = Children.toArray(children);
  // console.log(list[0], list[0].type, list[0].props);
  // const label = current ? `${prev ? `${prev}.` : ''}${current}` : '';
  // const text = current ? `${label}. ${list[0]}` : '';
  // list = current ? list.slice(1) : list;
  // const inc = current ? 1 : 0;
  return (
    <div {...rest}>
      {prefix || null}
      {list.length > 1
        ? list.map((item, i) => (
            <Content key={i}>
              <Item prefix={i}>{item}</Item>
            </Content>
          ))
        : list[0]}
    </div>
  );
};

export default Item;
