var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { DefaultGravatarFallback, DefaultGravatarSize } from './gravatar.constants';
import { Md5 } from './md5';
let GravatarService = class GravatarService {
    /**
     * Returns the url for a user's gravatar image.
     *
     * @param {string} email email associated with gravatar account
     * @param {number} size size of gravatar image returned
     * @param {string} fallback fallback in case something goes wrong
     * @returns {string}
     * @memberof GravatarService
     */
    url(email, size = DefaultGravatarSize, fallback = DefaultGravatarFallback) {
        const emailHash = Md5.hashStr(email.toLowerCase());
        return `//www.gravatar.com/avatar/${emailHash}?s=${size}&d=${fallback}`;
    }
};
GravatarService = __decorate([
    Injectable()
], GravatarService);
export { GravatarService };
//# sourceMappingURL=gravatar.service.js.map