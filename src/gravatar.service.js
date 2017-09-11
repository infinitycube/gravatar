"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gravatar_constants_1 = require("./gravatar.constants");
var md5_1 = require("./md5");
var GravatarService = (function () {
    function GravatarService() {
    }
    /**
     * Returns the url for a user's gravatar image.
     *
     * @param {string} email email associated with gravatar account
     * @param {number} size size of gravatar image returned
     * @param {string} fallback fallback in case something goes wrong
     * @returns {string}
     * @memberof GravatarService
     */
    GravatarService.prototype.url = function (email, size, fallback) {
        if (size === void 0) { size = gravatar_constants_1.DefaultGravatarSize; }
        if (fallback === void 0) { fallback = gravatar_constants_1.DefaultGravatarFallback; }
        var emailHash = md5_1.Md5.hashStr(email.toLowerCase());
        return "//www.gravatar.com/avatar/" + emailHash + "?s=" + size + "&d=" + fallback;
    };
    return GravatarService;
}());
GravatarService = __decorate([
    core_1.Injectable()
], GravatarService);
exports.GravatarService = GravatarService;
//# sourceMappingURL=gravatar.service.js.map