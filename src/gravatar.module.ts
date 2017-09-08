import { NgModule } from '@angular/core';

import { GravatarDirective } from './gravatar.directive';
import { GravatarService } from './gravatar.service';

@NgModule({
    declarations: [GravatarDirective],
    exports: [GravatarDirective],
    providers: [GravatarService]
})
export class GravatarModule { }
