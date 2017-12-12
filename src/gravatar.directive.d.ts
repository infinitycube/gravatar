import { ElementRef, OnChanges, OnInit } from '@angular/core';
import { GravatarService } from './gravatar.service';
export declare class GravatarDirective implements OnInit, OnChanges {
    elementRef: ElementRef;
    private _gravatar;
    email: string;
    size: number;
    fallback: string;
    constructor(elementRef: ElementRef, _gravatar: GravatarService);
    ngOnInit(): void;
    ngOnChanges(): void;
    private setSrcUrl();
}
