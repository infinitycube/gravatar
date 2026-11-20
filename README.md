# **Angular Gravatar**

Gravatar directive and service for Angular.

## **Compatibility**

| Angular version | Package version |
| --------------- | --------------- |
| 16 – 22 (and later) | `3.x` |
| 6 – 15 | `2.0.6` |

`3.x` is published in the Ivy partial-compilation format, so it works with any Angular from 16 on, in both standalone and NgModule apps, with or without zone.js. Angular 14 and 15 cannot read the type metadata newer compilers emit, so stay on `2.0.6` there (it is processed by `ngcc`).

## **Install**

    npm i @infinitycube/gravatar

For Angular 6 – 15:

    npm i @infinitycube/gravatar@2.0.6

## **Usage**

### Standalone components

Import `GravatarDirective` straight into the component:

```ts
import { Component } from '@angular/core';
import { GravatarDirective } from '@infinitycube/gravatar';

@Component({
  selector: 'app-user',
  imports: [GravatarDirective],
  template: `<img gravatar [email]="user.email" [size]="64" fallback="identicon" />`,
})
export class UserComponent {
  user = { email: 'someone@example.com' };
}
```

### NgModule apps

Add `GravatarModule` to the module's `imports`, as before:

```ts
import { GravatarModule } from '@infinitycube/gravatar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GravatarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### The directive

```html
<img gravatar [email]="user.email" [size]="16" [fallback]="'mm'" />
```

`email` is required. `size` defaults to `16` and `fallback` to `mm`. A static value can be written without brackets, for example `fallback="retro"`. The `fallback` value can be one of Gravatar's built-in images or the URL of your own image:

- `mm`: (mystery-man) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)
- `identicon`: a geometric pattern based on an email hash
- `monsterid`: a generated 'monster' with different colors, faces, etc
- `wavatar`: generated faces with differing features and backgrounds
- `retro`: awesome generated, 8-bit arcade-style pixelated faces
- `robohash`: a generated robot with different colors, faces, etc
- `blank`: a transparent PNG image

### The service

Use `GravatarService` to build the URL yourself:

```ts
import { inject } from '@angular/core';
import { GravatarService } from '@infinitycube/gravatar';

const gravatarUrl = inject(GravatarService).url(user.email, 128, 'mm');
// //0.gravatar.com/avatar/<md5 of the email>?s=128&d=mm
```

Constructor injection (`constructor(private gravatar: GravatarService) {}`) works too. `size` and `fallback` have the same defaults as the directive.

## **Upgrading from 2.x**

The API is unchanged: `GravatarModule`, `GravatarDirective` and `GravatarService.url()` work as before. What changed:

- Needs Angular 16 or later (see the table above).
- `GravatarDirective` is standalone, so standalone components can import it directly. `GravatarModule` still exports it for NgModule apps.
- URLs use `//0.gravatar.com/avatar/...` instead of `//www.gravatar.com/avatar/...`.
- The email is trimmed before hashing, as Gravatar requires, so `' Me@Example.com '` and `'me@example.com'` give the same image.
- `fallback` is URL-encoded, so a custom image URL works.
- A `null` or `undefined` email no longer throws.
- The directive sets `src` through `Renderer2`, so it works with server-side rendering.

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
