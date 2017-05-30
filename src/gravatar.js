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
var md5 = require('md5');
var Gravatar = (function () {
    function Gravatar(elementRef) {
        this.elementRef = elementRef;
        this.size = 16;
        this.fallback = 'mm';
    }
    Gravatar.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.src = "//www.gravatar.com/avatar/" + md5(this.email) + "?s=" + this.size + "&d=" + this.fallback;
    };
    Gravatar.prototype.ngOnChanges = function () {
        this.elementRef.nativeElement.src = "//www.gravatar.com/avatar/" + md5(this.email) + "?s=" + this.size + "&d=" + this.fallback;
    };
    return Gravatar;
}());
__decorate([
    core_1.Input('email'),
    __metadata("design:type", String)
], Gravatar.prototype, "email", void 0);
__decorate([
    core_1.Input('size'),
    __metadata("design:type", Number)
], Gravatar.prototype, "size", void 0);
__decorate([
    core_1.Input('fallback'),
    __metadata("design:type", String)
], Gravatar.prototype, "fallback", void 0);
Gravatar = __decorate([
    core_1.Directive({
        selector: '[gravatar]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Gravatar);
exports.Gravatar = Gravatar;
