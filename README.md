# @kken94/ngx-progress
[![Status](https://travis-ci.org/kKen94/ngx-progress.svg?branch=master)](https://travis-ci.org/kKen94/ngx-progress)
[![npm version](https://img.shields.io/npm/v/@kken94/ngx-progress.svg?style=flat)](https://www.npmjs.com/package/@kken94/ngx-progress "View this project on npm")
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fbe1a29dad2448c8a1dfd9661eea7d79)](https://www.codacy.com/manual/kKen94/ngx-progress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kKen94/ngx-progress&amp;utm_campaign=Badge_Grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/github/license/kKen94/ngx-progress)](http://opensource.org/licenses/MIT)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](paypal.me/nicolataddei)

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

Import one of this in your **module.ts**

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
and place it into the element you want to cover.  

**Note:** If you want to use overlay be sure that the parent element has position:relative
Overlay works with ```position:absolute```, ```top:0```, ```left:0```
```
<div style="position: relative">
  <ngx-progress [overlay]="true"></ngx-progress>
  <table></table>
</div>
```

## Feature

- NgxProgress supports multiple requests. If during the bar progress another request is fired, bar will not reset and keep going until all requests are completed.  
- NgxProgress can be instantiated multiple times. Only the deepest one will be displayed

## Configuration

### Customization

| Input                  | Description        | Default value   |
| ---------------------- | ------------------ | --------------- |
| ```color```         |                    | ```#0984e3```   |
| ```showSpinner```      |                    | ```false```     |
| ```showBar```          |                    | ```true```      |
| ```barHeight```        |                    | ```1px```       |
| ```spinnerDiameter```  |                    | ```10px```      |
| ```initialValue```     | From 1 to 100      | ```undefined``` |
| ```overlay```          | Show overlay that prevent user click | ```true```      |
| ```spinnerSpeed```     | From 1 to 10       | ```4```         |


### Emitters  

NgxProgress provides also some emitters.  
You have to inject ```NgxProgressService``` and subscribe ```end$``` or ```start$```

### Manually show and hide progress

In ```NgxProgressService``` there are four methods:  
- ```start()```: start bar if no request is in progress or add new request to queue of the bar already shown
- ```end()```: complete the bar if all requests are finished
- ```reset()```: force bar to start from zero
- ```terminate()```: force bar to terminate even if some requests are in progress

### Enable and disable progress bar

In ```NgxProgressService```:  
- ```enable()```: enable bars if it has been previously disabled 
- ```disable()```: disables all the bars that will not be shown until the next enabling 

and provide ```isEnabled``` variable to know if progress bar is enabled.  
Enabled by default.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Donate

Offer me a coffee ☺

![donate](donate.png)
