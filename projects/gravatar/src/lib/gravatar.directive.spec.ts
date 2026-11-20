import { Component, NgModule, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { GravatarDirective } from './gravatar.directive';
import { GravatarModule } from './gravatar.module';

const hash = '0bc83cb571cd1c50ba6f3e8a78ef1346';

@Component({
  imports: [GravatarDirective],
  template: `<img gravatar [email]="email()" [size]="size()" [fallback]="fallback()" />`,
})
class StandaloneHost {
  email = signal('myemailaddress@example.com');
  size = signal(64);
  fallback = signal('retro');
}

@Component({
  standalone: false,
  template: `<img gravatar email="myemailaddress@example.com" />`,
})
class ModuleHost {}

@NgModule({
  declarations: [ModuleHost],
  imports: [GravatarModule],
})
class HostModule {}

describe('GravatarDirective', () => {
  it('sets src when used as a standalone import', () => {
    const fixture = TestBed.createComponent(StandaloneHost);
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(`//0.gravatar.com/avatar/${hash}?s=64&d=retro`);
  });

  it('updates src when inputs change', () => {
    const fixture = TestBed.createComponent(StandaloneHost);
    fixture.detectChanges();
    fixture.componentInstance.size.set(128);
    fixture.componentInstance.fallback.set('identicon');
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(`//0.gravatar.com/avatar/${hash}?s=128&d=identicon`);
  });

  it('works through GravatarModule in an NgModule app', () => {
    TestBed.configureTestingModule({ imports: [HostModule] });
    const fixture = TestBed.createComponent(ModuleHost);
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(`//0.gravatar.com/avatar/${hash}?s=16&d=mm`);
  });
});
