/**
 * @format
 * @flow
 */

export const platform =
  typeof navigator !== 'undefined'
    ? /^iP(hone|od|ad)/.test(navigator.platform)
      ? 'ios'
      : /^Android/.test(navigator.platform)
      ? 'android'
      : null
    : null;
