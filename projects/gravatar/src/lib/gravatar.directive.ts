import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

import { GravatarService } from './gravatar.service';

/**
 * Sets the `src` of an `<img>` to the Gravatar URL for an email address.
 *
 * ```html
 * <img gravatar [email]="user.email" [size]="64" fallback="identicon" />
 * ```
 *
 * Standalone, so it can be imported directly into a standalone component, or used
 * through `GravatarModule` in NgModule-based apps.
 */
@Directive({
  selector: '[gravatar]',
  standalone: true,
})
export class GravatarDirective implements OnInit, OnChanges {
  @Input() email: string | null | undefined;
  @Input() size: number | null | undefined;
  @Input() fallback: string | null | undefined;

  constructor(
    public elementRef: ElementRef,
    public _gravatar: GravatarService,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.setSrcUrl();
  }

  ngOnChanges(): void {
    this.setSrcUrl();
  }

  setSrcUrl(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'src',
      this._gravatar.url(this.email, this.size, this.fallback),
    );
  }
}
