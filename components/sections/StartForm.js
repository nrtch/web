/**
 * @format
 * @flow
 */

import * as React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';

import Input from '../controls/Input';
import Button from '../controls/Button';
import Checkbox from '../controls/Checkbox';

import { mediaQueries } from '../styles';
import { fadeIn, appearFromTop } from '../styles/animations';
import useStartForm from '../hooks/form/useStartForm';

const { useState } = React;

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
const Agreement = styled(Checkbox)`
  margin: 0;
`;
const Submit = styled(Button)`
  align-self: center;
  margin-top: 32px;
`;
const Privacy = styled.a`
  color: inherit;
`;

const onSuccess = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('start-sent', '1');
    window.localStorage.setItem('start-section', 'direct');
  }
  Router.push('/');
  return;
};

type Props = {
  section?: string,
};

const StartForm = ({ section }: Props) => {
  const [fields, form] = useStartForm(onSuccess, { section });
  const [agreed, setAgreed] = useState(false);

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
      <Agreement onChange={e => setAgreed(e.currentTarget.checked)}>
        Я соглашаюсь с{' '}
        <Link href="/privacy" passHref>
          <Privacy target="_blank">
            политикой использования персональных данных
          </Privacy>
        </Link>
      </Agreement>
      <Submit
        enabled={form.canSubmit && !form.pending && agreed}
        pending={form.pending}
      >
        Отправить
      </Submit>
    </Form>
  );
};

export default StartForm;
