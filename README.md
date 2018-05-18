# **Angular Gravatar**

Angular gravatar directive for Angular 6 or above.

## **Install**
First you need to install the npm module:

    npm i --save @infinitycube/gravatar

**If you use SystemJS** to load your files from `node_modules`, you should edit your systemjs config file and add `'@infinitycube/gravatar': 'node_modules/@infinitycube/gravatar'` in the map and `'@infinitycube/gravatar' : { defaultExtension: 'js' }` in packages.

## **Usage**
### 1. Import to module
Use the below import statement in the app.module or any other module you need to have gravatar image.

    import {GravatarModule} from '@infinitycube/gravatar';

### 2. Declare Gravatar in module
In the imports inside @NgModule decoration, add GravatarModule.

    @NgModule({
        declarations: [
            AppComponent,
            ...
        ],
        imports: [
            ...,
            GravatarModule
        ],
        providers: [
            ...
        ],
        bootstrap: [AppComponent]
    })

### 3. Use the gravatar
You can use the gravatar as shown below in any components which are declared in app.module or the module you imported the GravatarModule to.

    <img gravatar [email]="user.email" [size]="16" [fallback]="'mm'">
    
The property `email` is mandatory. You may mention `size` or it will use the default size `16`. The default fallback image is the garvatar mistery man, `mm` and you can use the following :

   * `mm`: (mystery-man) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)
   * `identicon`: a geometric pattern based on an email hash
   * `monsterid`: a generated 'monster' with different colors, faces, etc
   * `wavatar`: generated faces with differing features and backgrounds
   * `retro`: awesome generated, 8-bit arcade-style pixelated faces
   * `blank`: a transparent PNG image (border added to HTML below for demonstration purposes)

*Note: You should keep the fallback value within a single quote inside the double quotes, if assigning directly to the element.*

You can declare a variable as well `fallback:string = "mm"` in your component and use like:

    <img gravatar [email]="user.email" [size]="16" [fallback]="fallback">

### 4. Use the service
You can use the service to just generate the url in your component or service.
You need to import the `GaravatarService` as below:

    import { GravatarService } from '@infinitycube/gravatar'; 

And assign it like `_gravatar:GravatarService` and you can use to generate url with:

    let gravatarUrl = _gravatar.url(this.user.email, 128, 'mm');

The `email` parameter is required.  `size` and `fallback` will have the same defaults when using the service as they do when using the directive (`16` and `mm` respectively).

## **License**
### The MIT License (MIT)

Copyright © 2017 [infinitycu.be](http://infinitycu.be) 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.