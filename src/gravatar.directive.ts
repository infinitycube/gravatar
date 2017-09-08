import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { DefaultGravatarFallback, DefaultGravatarSize } from 'src/gravatar.constants';
import { GravatarService } from 'src/gravatar.service';

@Directive({
  selector: '[gravatar]'
})
export class GravatarDirective implements OnInit, OnChanges {
  @Input('email') email: string;
  @Input('size') size: number = DefaultGravatarSize;
  @Input('fallback') fallback: string = DefaultGravatarFallback;

  constructor(public elementRef: ElementRef, private _gravatar: GravatarService) { }

  ngOnInit() {
    this.setSrcUrl();
  }

  ngOnChanges() {
    this.setSrcUrl();
  }

  private setSrcUrl() {
    this.elementRef.nativeElement.src = this._gravatar.url(this.email, this.size, this.fallback);
  }
}
