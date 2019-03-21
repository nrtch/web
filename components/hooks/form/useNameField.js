/**
 * @format
 * @flow
 */

import * as React from 'react';

const { useState } = React;

const reasons = {
  empty: 'имя не может быть пустым',
};

const validate = (val: string) => {
  const value = val;
  if (value === '') {
    return { valid: false, reason: 'empty' };
  }
  return { valid: true, reason: null };
};
const clean = (val: string) =>
  val
    .replace(/[^a-zA-Zа-яА-Я-\s]/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/-\s-/g, '- ')
    .replace(/\s{2,}/g, ' ');

const useNameField = () => {
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

export default useNameField;
