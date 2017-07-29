import { NgModule } from "@angular/core";

import { GravatarDirective } from './gravatar.directive';

@NgModule({
    declarations:[GravatarDirective],
    exports:[GravatarDirective]
})
export class GravatarModule { }