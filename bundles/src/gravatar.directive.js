var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
import { DefaultGravatarFallback, DefaultGravatarSize } from './gravatar.constants';
import { GravatarService } from './gravatar.service';
let GravatarDirective = class GravatarDirective {
    constructor(elementRef, _gravatar) {
        this.elementRef = elementRef;
        this._gravatar = _gravatar;
        this.size = DefaultGravatarSize;
        this.fallback = DefaultGravatarFallback;
    }
    ngOnInit() {
        this.setSrcUrl();
    }
    ngOnChanges() {
        this.setSrcUrl();
    }
    setSrcUrl() {
        this.elementRef.nativeElement.src = this._gravatar.url(this.email, this.size, this.fallback);
    }
};
__decorate([
    Input('email'),
    __metadata("design:type", String)
], GravatarDirective.prototype, "email", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", Number)
], GravatarDirective.prototype, "size", void 0);
__decorate([
    Input('fallback'),
    __metadata("design:type", String)
], GravatarDirective.prototype, "fallback", void 0);
GravatarDirective = __decorate([
    Directive({
        selector: '[gravatar]'
    }),
    __metadata("design:paramtypes", [ElementRef, GravatarService])
], GravatarDirective);
export { GravatarDirective };
//# sourceMappingURL=gravatar.directive.js.map