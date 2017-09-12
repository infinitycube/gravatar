"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gravatar_constants_1 = require("./gravatar.constants");
var gravatar_service_1 = require("./gravatar.service");
var GravatarDirective = (function () {
    function GravatarDirective(elementRef, _gravatar) {
        this.elementRef = elementRef;
        this._gravatar = _gravatar;
        this.size = gravatar_constants_1.DefaultGravatarSize;
        this.fallback = gravatar_constants_1.DefaultGravatarFallback;
    }
    GravatarDirective.prototype.ngOnInit = function () {
        this.setSrcUrl();
    };
    GravatarDirective.prototype.ngOnChanges = function () {
        this.setSrcUrl();
    };
    GravatarDirective.prototype.setSrcUrl = function () {
        this.elementRef.nativeElement.src = this._gravatar.url(this.email, this.size, this.fallback);
    };
    return GravatarDirective;
}());
__decorate([
    core_1.Input('email'),
    __metadata("design:type", String)
], GravatarDirective.prototype, "email", void 0);
__decorate([
    core_1.Input('size'),
    __metadata("design:type", Number)
], GravatarDirective.prototype, "size", void 0);
__decorate([
    core_1.Input('fallback'),
    __metadata("design:type", String)
], GravatarDirective.prototype, "fallback", void 0);
GravatarDirective = __decorate([
    core_1.Directive({
        selector: '[gravatar]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, gravatar_service_1.GravatarService])
], GravatarDirective);
exports.GravatarDirective = GravatarDirective;
//# sourceMappingURL=gravatar.directive.js.map