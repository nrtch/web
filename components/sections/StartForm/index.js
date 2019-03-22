/**
 * @format
 * @flow
 */

import * as React from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import Input from 'controls/Input';
import Button from 'controls/Button';

import { mediaQueries } from 'styles';
import { fadeIn, appearFromTop } from 'styles/animations';
import useStartForm from 'hooks/form/useStartForm';

const failColor = '#F03A63';
const failBgColor = '#FDE1E8';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 50px;
  margin-bottom: 50px;
  animation: ${fadeIn} 0.5s ease-out;
  ${mediaQueries[0]} {
    margin-top: 0;
    width: 500px;
  }
`;
const Error = styled.div`
  padding: 13px 30px 15px;
  color: ${failColor};
  background-color: ${failBgColor};
  margin-bottom: 30px;
  animation: ${appearFromTop} 150ms ease;
`;
const Mark = styled.span`
  color: #000;
`;
const Submit = styled(Button)`
  align-self: center;
  margin-top: 32px;
`;

const goHome = () => {
  Router.push('/');
  return;
};

const StartForm = () => {
  const [fields, form] = useStartForm(goHome);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        form.canSubmit && form.onSubmit();
      }}
    >
      {form.error && (
        <Error>
          Ошибка. Попробуйте еще раз, или звоните нам на
          +7&nbsp;(4012)&nbsp;5222-87
        </Error>
      )}
      <Input placeholder="Имя" {...fields.name} />
      <Input
        label={
          <>
            <Mark>телефон</Mark> необходим для связи
          </>
        }
        placeholder="+7"
        type="phone"
        {...fields.phone}
      />
      <Input
        label={
          <>
            <Mark>email</Mark> понадобится для важных уведомлений
          </>
        }
        placeholder="Email"
        type="email"
        {...fields.email}
      />
      <Submit enabled={form.canSubmit} pending={form.pending}>
        Отправить
      </Submit>
    </Form>
  );
};

export default StartForm;
