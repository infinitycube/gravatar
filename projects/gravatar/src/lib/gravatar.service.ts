import { Injectable } from '@angular/core';

import { Md5 } from './md5';

@Injectable({
  providedIn: 'root',
})
export class GravatarService {
  public DefaultGravatarSize: number = 16;
  public DefaultGravatarFallback: string = 'mm';

  /**
   * Builds a Gravatar image URL for an email address.
   *
   * @param email The email address. It is trimmed and lower-cased before hashing.
   * @param size Image size in pixels (defaults to 16).
   * @param fallback Default image when no Gravatar exists (defaults to `mm`).
   */
  public url(
    email: string | null | undefined,
    size: number | null | undefined = this.DefaultGravatarSize,
    fallback: string | null | undefined = this.DefaultGravatarFallback,
  ): string {
    const emailHash = Md5.hashStr((email ?? '').trim().toLowerCase());
    const s = size ?? this.DefaultGravatarSize;
    const d = encodeURIComponent(fallback ?? this.DefaultGravatarFallback);
    return `//0.gravatar.com/avatar/${emailHash}?s=${s}&d=${d}`;
  }
}
