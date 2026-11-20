import { NgModule } from '@angular/core';

import { GravatarDirective } from './gravatar.directive';

/** For NgModule-based apps. Standalone components can import `GravatarDirective` directly. */
@NgModule({
  imports: [GravatarDirective],
  exports: [GravatarDirective],
})
export class GravatarModule {}
