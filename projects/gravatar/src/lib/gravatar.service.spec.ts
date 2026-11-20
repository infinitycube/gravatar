import { TestBed } from '@angular/core/testing';

import { GravatarService } from './gravatar.service';

describe('GravatarService', () => {
  let service: GravatarService;
  const hash = '0bc83cb571cd1c50ba6f3e8a78ef1346';

  beforeEach(() => {
    service = TestBed.inject(GravatarService);
  });

  it('uses default size and fallback', () => {
    expect(service.url('myemailaddress@example.com')).toBe(
      `//0.gravatar.com/avatar/${hash}?s=16&d=mm`,
    );
  });

  it('trims and lower-cases the email', () => {
    expect(service.url('  MyEmailAddress@example.com ', 80, 'identicon')).toBe(
      `//0.gravatar.com/avatar/${hash}?s=80&d=identicon`,
    );
  });

  it('falls back to defaults for null size and fallback', () => {
    expect(service.url('myemailaddress@example.com', null, null)).toBe(
      `//0.gravatar.com/avatar/${hash}?s=16&d=mm`,
    );
  });

  it('URL-encodes a custom fallback image URL', () => {
    expect(service.url('myemailaddress@example.com', 32, 'https://x.test/a.png')).toBe(
      `//0.gravatar.com/avatar/${hash}?s=32&d=https%3A%2F%2Fx.test%2Fa.png`,
    );
  });

  it('does not throw for a missing email', () => {
    expect(service.url(undefined)).toBe(
      '//0.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=16&d=mm',
    );
  });
});
