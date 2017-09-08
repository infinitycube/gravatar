import { NgModule } from '@angular/core';
import { GravatarService } from 'src/gravatar.service';

import { GravatarDirective } from './gravatar.directive';

@NgModule({
    declarations: [GravatarDirective],
    exports: [GravatarDirective],
    providers: [GravatarService]
})
export class GravatarModule { }
