import { Md5 } from './md5';

describe('Md5', () => {
  it('hashes known values', () => {
    expect(Md5.hashStr('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
    expect(Md5.hashStr('hello')).toBe('5d41402abc4b2a76b9719d911017c592');
    expect(Md5.hashStr('myemailaddress@example.com')).toBe('0bc83cb571cd1c50ba6f3e8a78ef1346');
  });

  it('hashes strings longer than one block', () => {
    expect(Md5.hashStr('a'.repeat(100))).toBe('36a92cc94a9e0fa21f625f8bfb007adf');
  });
});
