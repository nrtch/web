/* eslint-env jest */

import { platform } from './utils';

let platformGetter;
beforeEach(() => {
  platformGetter = jest.spyOn(window.navigator, 'platform', 'get');
});

describe('helpers/utils :: platform', () => {
  it('detects ios', () => {
    platformGetter.mockReturnValue('iPod');
    expect(platform()).toBe('ios');
    platformGetter.mockReturnValue('iPad');
    expect(platform()).toBe('ios');
    platformGetter.mockReturnValue('iPhone');
    expect(platform()).toBe('ios');
  });
  it('detects android', () => {
    platformGetter.mockReturnValue('Android');
    expect(platform()).toBe('android');
  });
  it('handles others', () => {
    platformGetter.mockReturnValue('MacIntel');
    expect(platform()).toBe(null);
    platformGetter.mockReturnValue('Linux');
    expect(platform()).toBe(null);
    platformGetter.mockReturnValue('Windows');
    expect(platform()).toBe(null);
  });
});
