# **Angular Gravatar**

Angular gravatar directive for Angular 4 or above.

## **Install**
First you need to install the npm module:

    npm i --save @infinitycube/gravatar

**If you use SystemJS** to load your files from `node_modules`, you should edit your systemjs config file and add `'@infinitycube/gravatar': 'node_modules/@infinitycube/gravatar/scr'` in the map and `'@infinitycube/ng-gravatar' : { defaultExtension: 'js' }` in packages.

## **Usage**
### 1. Import to app.module

    import {Gravatar} from '@infinitycube/gravatar';

### 2. Now you can use the gravatar

    <img ng-gravatar [email]="user.email" [size]="16" [fallback]="mm">
    
The property `email` is mandatory. You may mention `size` or it will use the default size `16`. The default fallback image is the garvatar mistery man, `mm` and you can use the following :

   * `mm`: (mystery-man) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)
   * `identicon`: a geometric pattern based on an email hash
   * `monsterid`: a generated 'monster' with different colors, faces, etc
   * `wavatar`: generated faces with differing features and backgrounds
   * `retro`: awesome generated, 8-bit arcade-style pixelated faces
   * `blank`: a transparent PNG image (border added to HTML below for demonstration purposes)

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