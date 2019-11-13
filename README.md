<div style="text-align: center">
  <h2>@kken94/ngx-progress</h2>
  <br />
  A powerfull wrapper of the best progressbar existing -> [@ngx-loading-bar/core](./packages/core/README.md)
  <br /><br />
</div>
---

## Demo
- demo: 

Table of contents
=================
  * [Getting started](#getting-started)
    * [0. Improvements](#0-improvements)
    * [1. Install](#1-install)
    * [2. Import the installed libraries](#2-import-the-installed-libraries)
    * [3. Include `ngx-progress` where you want](#3-include-ngx-loading-bar-in-your-app-component)
  * [Emitters](#manage-loading-service)
  * [Manage loading service](#manage-loading-service)
  * [Credits](#credits)
  
  ## Getting started
  
#### 0. Improvements:

Some improvements:<br /><br />
• Start and finish emitters<br />
• Overlay<br />
• Only one (by choice) module import<br />
• New requests don't reset bar progress (when others are in progress)<br /><br />

#### 1. Install:

```bash
  npm install @kken94/ngx-progress --save
```
or
```bash
  yarn add @kken94/ngx-progress
```

#### 2. Import the installed library:

Just import a single Module from following:

<div style="margin-left: 5px;">
• NgxProgressHttpOnlyModule<br />
• NgxProgressOnlyRouterModule<br />
• NgxProgressOnlyBarModule<br />
• NgxProgressModule -> Progressbar will be shown when you perform a http request or when you change angular route or you can manage it by yourself<br /><br />
</div>

example:
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxProgressModule } from '@kken94/ngx-progress';

import { AppComponent } from './app';

@NgModule({
  ...
  imports: [
    ...

    NgxProgressModule
  ],
})
export class AppModule {}
```
#### 3. Include `ngx-progress` where you want:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    ...
    <ngx-progress></ngx-progress>
  `,
})
export class AppComponent {}
```
## Customize `ngx-progress`
Overlay...<br />
For customization and ignoring request see:<br />
https://github.com/aitboudad/ngx-loading-bar#3-include-ngx-loading-bar-in-your-app-component

# Credits 

- [@ngx-loading-bar/core](./packages/core/README.md)
- https://github.com/aitboudad/ngx-loading-bar
