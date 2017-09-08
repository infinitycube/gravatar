import { Injectable } from '@angular/core';
import { DefaultGravatarFallback, DefaultGravatarSize } from './gravatar.constants';

import { Md5 } from './md5';

@Injectable()
export class GravatarService {
    /**
     * Returns the url for a user's gravatar image.
     *
     * @param {string} email email associated with gravatar account
     * @param {number} size size of gravatar image returned
     * @param {string} fallback fallback in case something goes wrong
     * @returns {string}
     * @memberof GravatarService
     */
    public url(email: string, size: number = DefaultGravatarSize, fallback: string = DefaultGravatarFallback): string {
        if (!email) { throw new Error('Email is required') }
        const emailHash = Md5.hashStr(email);
        return `//www.gravatar.com/avatar/${emailHash}?s=${size}&d=${fallback}`;
    }
}
