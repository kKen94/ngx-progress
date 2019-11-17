# @kken94/ngx-progress
[![Status](https://travis-ci.org/kKen94/ngx-progress.svg?branch=master)](https://travis-ci.org/kKen94/ngx-progress)
[![npm version](https://img.shields.io/npm/v/@kken94/ngx-progress.svg?style=flat)](https://www.npmjs.com/package/@kken94/ngx-progress "View this project on npm")
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/github/license/kKen94/ngx-progress)](http://opensource.org/licenses/MIT)

NgxProgress is customizable Angular library for showing a progress bar during http request and/or routing change (or all you want) and prevent user interaction.

## Changelog

[Please read the changelog](CHANGELOG.md)

## Installation

If you use [npm](https://www.npmjs.com/package/npm)

```bash
npm install @kken94/ngx-progress --save
```

If you use [yarn](https://yarnpkg.com/)

```bash
yarn add @kken94/ngx-progress
```

## Usage

Choose the most suitable module for you.  

There are four modules:  
- **NgxProgressModule** (intercept both http requests and router changes)  
- **NgxProgressOnlyHttpModule** (intercept only http requests)  
- **NgxProgressOnlyRouterModule** (intercept only router changes)  
- **NgxProgressOnlyBar** (manage progress bar by yourself)  

Import one of this in your **app.module.ts**

```
import { NgxProgressModule } from '@kken94/ngx-progress';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    NgxProgressModule,
    ...
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
and place it at the beginning of your **app.component.html**
```
<ngx-progress></ngx-progress>
<div>
...
</div>
```

**Note:** NgxProgress supports multiple requests. If during the bar progress another request is fired, bar will not reset and keep going until all requests are completed.

## Configuration

### Customization

| Input                  | Description        | Default value   |
| ---------------------- | ------------------ | --------------- |
| ```barColor```         |                    | ```#0984e3```   |
| ```showSpinner```      |                    | ```false```     |
| ```showBar```          |                    | ```true```      |
| ```height```           | Height of bar      | ```1px```       |
| ```spinnerDiameter```  |                    | ```10px```      |
| ```initialValue```     | From 1 to 100      | ```undefined``` |
| ```overlay```          | Show overlay that prevent user click | ```true```      |
| ```spinnerSpeed```     | From 1 to 10       | ```4```         |


### Emitters  

NgxProgress provides also some emitters.  
You have to inject ```NgxProgressService``` and subscribe ```$end``` or ```start```

### Manually show and hide progress

In ```NgxProgressService``` there are four methods:  
- ```start()```: start bar if no request is in progress or add new request to queue of the bar already shown
- ```end()```: complete the bar if all requests are finished
- ```reset()```: force bar to start from zero
- ```terminate()```: force bar to terminate even if some requests are in progress

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Credits

Inspired by [Aitboudad](https://github.com/aitboudad), the awesome creator of [ngx-loading-bar](https://github.com/aitboudad/ngx-loading-bar)
