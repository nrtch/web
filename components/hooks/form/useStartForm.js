/**
 * @format
 * @flow
 */

import * as React from 'react';
import axios from 'axios';

import useEmailField from './useEmailField';
import usePhoneField from './usePhoneField';
import useNameField from './useNameField';

const { useState, useRef, useEffect } = React;

const start = (
  name: string,
  phone: string,
  email: string,
  params: { [string]: any }
) => axios.post('/api/register', { name, phone, email, ...params });

const validateForm = (fields: { validSync: boolean }[]) => {
  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];
    if (f.validSync !== true) return false;
  }
  return true;
};

const useStartForm = (onSuccess?: any => any, params?: { [string]: any }) => {
  const name = useNameField();
  const phone = usePhoneField();
  const email = useEmailField();
  const canSubmit = validateForm([name, phone, email]);

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = useRef();

  useEffect(() => {
    onSubmit.current = async () => {
      setError(null);
      setPending(true);

      try {
        const result = await start(
          name.value,
          phone.value,
          email.value,
          params
        );
        onSuccess && onSuccess(result.data);
      } catch (error) {
        setError(error.Message || error.message || error);
      }

      setPending(false);
    };
  }, [email, name, onSuccess, params, phone]);

  return [
    { name, phone, email },
    { pending, error, canSubmit, onSubmit: onSubmit.current },
  ];
};

export default useStartForm;
