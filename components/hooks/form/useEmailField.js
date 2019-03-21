/**
 * @format
 * @flow
 */

import * as React from 'react';

const { useState } = React;
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const reasons = {
  empty: 'email-адрес не может быть пустым',
  incorrect: 'неверный email-адрес',
};

const validate = (val: string) => {
  const value = val.trim();
  if (value === '') {
    return { valid: false, reason: 'empty' };
  }
  if (emailRegEx.test(value)) {
    return { valid: true, reason: null };
  }
  return { valid: false, reason: 'incorrect' };
};

const useEmailField = () => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(null);
  const [validSync, setValidSync] = useState(false);
  const [reason, setReason] = useState(null);

  return {
    value,
    valid,
    reason,
    validSync,
    invalidMessage: reason ? reasons[reason] : null,
    onChange: (e: SyntheticInputEvent<HTMLInputElement>) => {
      if (reason === 'empty') {
        setReason(null);
        setValid(null);
      }
      setValue(e.target.value);
      setValidSync(!!validate(e.target.value).valid);
    },
    onBlur: (e: SyntheticInputEvent<HTMLInputElement>) => {
      const { valid, reason } = validate(e.target.value);
      setValid(valid);
      setValidSync(!!valid);
      setReason(reason);
    },
    onClear: () => {
      setReason(null);
      setValid(null);
      setValue('');
    },
  };
};

export default useEmailField;
