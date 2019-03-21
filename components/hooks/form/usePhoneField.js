/**
 * @format
 * @flow
 */

import * as React from 'react';

const { useState } = React;
const regEx = /^\d{5,15}$/;

const reasons = {
  empty: 'номер телефона не может быть пустым',
  incorrect: 'неверный номер телефона',
};

const validate = (val: string) => {
  const value = val.replace(/[^\d]+/g, '');
  if (value === '') {
    return { valid: false, reason: 'empty' };
  }
  if (regEx.test(value)) {
    return { valid: true, reason: null };
  }
  return { valid: false, reason: 'incorrect' };
};
const clean = (val: string) => {
  const clear = /^\+/.test(val)
    ? '+' + val.replace(/[^\d]/g, '')
    : val.replace(/[^\d]/g, '');
  return clear.slice(0, /^\+/.test(clear) ? 16 : 15);
};

const usePhoneField = () => {
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
      const val = clean(e.target.value);
      setValue(val);
      setValidSync(!!validate(val).valid);
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

export default usePhoneField;
