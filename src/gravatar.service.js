"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const gravatar_constants_1 = require("./gravatar.constants");
const md5_1 = require("./md5");
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
    url(email, size = gravatar_constants_1.DefaultGravatarSize, fallback = gravatar_constants_1.DefaultGravatarFallback) {
        const emailHash = md5_1.Md5.hashStr(email.toLowerCase());
        return `//www.gravatar.com/avatar/${emailHash}?s=${size}&d=${fallback}`;
    }
};
GravatarService = __decorate([
    core_1.Injectable()
], GravatarService);
exports.GravatarService = GravatarService;
