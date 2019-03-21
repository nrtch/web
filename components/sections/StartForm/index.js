/**
 * @format
 * @flow
 */

import * as React from 'react';
import styled from '@emotion/styled';

import Input from 'controls/Input';
import Button from 'controls/Button';

import { mediaQueries } from 'styles';
import useEmailField from 'hooks/form/useEmailField';
import usePhoneField from 'hooks/form/usePhoneField';
import useNameField from 'hooks/form/useNameField';
import { fadeIn } from 'styles/animations';

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
const Mark = styled.span`
  color: #000;
`;
const Submit = styled(Button)`
  align-self: center;
  margin-top: 32px;
`;

const validateForm = (fields: { validSync: boolean }[]) => {
  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];
    if (f.validSync !== true) return false;
  }
  return true;
};

const StartForm = () => {
  const name = useNameField();
  const phone = usePhoneField();
  const email = useEmailField();
  const canSubmit = validateForm([name, phone, email]);

  return (
    <Form>
      <Input placeholder="Имя" {...name} />
      <Input
        label={
          <>
            <Mark>телефон</Mark> необходим для связи
          </>
        }
        placeholder="+7"
        type="phone"
        {...phone}
      />
      <Input
        label={
          <>
            <Mark>email</Mark> понадобится для важных уведомлений
          </>
        }
        placeholder="Email"
        type="email"
        {...email}
      />
      <Submit enabled={canSubmit}>Отправить</Submit>
    </Form>
  );
};

export default StartForm;
