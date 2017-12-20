"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gravatar_directive_1 = require("./gravatar.directive");
var gravatar_service_1 = require("./gravatar.service");
var GravatarModule = /** @class */ (function () {
    function GravatarModule() {
    }
    GravatarModule = __decorate([
        core_1.NgModule({
            declarations: [gravatar_directive_1.GravatarDirective],
            exports: [gravatar_directive_1.GravatarDirective],
            providers: [gravatar_service_1.GravatarService]
        })
    ], GravatarModule);
    return GravatarModule;
}());
exports.GravatarModule = GravatarModule;
//# sourceMappingURL=gravatar.module.js.map