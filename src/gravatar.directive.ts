import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

import { Md5 } from './md5';

@Directive({
  selector: '[gravatar]'
})
export class GravatarDirective implements OnInit, OnChanges {
  @Input('email') email: string;
  @Input('size') size: number = 16;
  @Input('fallback') fallback: string = 'mm';

  constructor(public elementRef: ElementRef) {}

  ngOnInit() {
      let emailHash = Md5.hashStr(this.email);
      this.elementRef.nativeElement.src = `//www.gravatar.com/avatar/${emailHash}?s=${this.size}&d=${this.fallback}`;
  }

  ngOnChanges(){
    let emailHash = Md5.hashStr(this.email);
    this.elementRef.nativeElement.src = `//www.gravatar.com/avatar/${emailHash}?s=${this.size}&d=${this.fallback}`;
  }
}