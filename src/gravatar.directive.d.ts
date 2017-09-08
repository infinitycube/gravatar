import { ElementRef, OnChanges, OnInit } from '@angular/core';

export declare class GravatarDirective implements OnInit, OnChanges {
    elementRef: ElementRef;
    email: string;
    size: number;
    fallback: string;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
}
