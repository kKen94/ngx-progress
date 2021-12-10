## [2.3.1](https://github.com/kKen94/ngx-progress/compare/v2.3.0...v2.3.1) (2021-12-10)


### Bug Fixes

* **peer deps:** update rxjs peer deps ([67a4fe2](https://github.com/kKen94/ngx-progress/commit/67a4fe234eb30f2f2ca5682e3e5aa3366819dc63))
* **rxjs:** typed Subject to avoid argument error ([86d8b1d](https://github.com/kKen94/ngx-progress/commit/86d8b1d46310563c330a83b1223bc766c4a86263))

# [2.3.0](https://github.com/kKen94/ngx-progress/compare/v2.2.0...v2.3.0) (2021-12-09)


### Features

* **trigger publish:** bump version ([9e75c3f](https://github.com/kKen94/ngx-progress/commit/9e75c3fc5f2c678eeecb15f0af87d86bb2b6771a))

# [2.2.0](https://github.com/kKen94/ngx-progress/compare/v2.1.2...v2.2.0) (2021-08-07)


### Bug Fixes

* **interceptor:** Fix [#14](https://github.com/kKen94/ngx-progress/issues/14) ([5faca89](https://github.com/kKen94/ngx-progress/commit/5faca89c910395beb08d00c860feb22952acd35f))


### Features

* **angular:** update core to v12 ([8c68edd](https://github.com/kKen94/ngx-progress/commit/8c68edd1ff1ca0b910e88943ea8e27603e4d0aae))
* **flex-layout:** update to v12 ([1dc3d54](https://github.com/kKen94/ngx-progress/commit/1dc3d54796a764241844eebd526bedcc80fed98c))
* **material:** update to v12 ([46c0ce1](https://github.com/kKen94/ngx-progress/commit/46c0ce10a529341cdd5114cf1d78322974114c9b))

## [2.1.2](https://github.com/kKen94/ngx-progress/compare/v2.1.1...v2.1.2) (2021-01-26)


### Bug Fixes

* **angular:** update version and fix package.json ([6996638](https://github.com/kKen94/ngx-progress/commit/6996638ff81b4d06686928163b9915deeb7d0985))

## [2.1.1](https://github.com/kKen94/ngx-progress/compare/v2.1.0...v2.1.1) (2021-01-10)


### Bug Fixes

* **dev dep:** angular 11 ([e43b806](https://github.com/kKen94/ngx-progress/commit/e43b806d078c8f7e7feae34d3e3acd81747e9434))

# [2.1.0](https://github.com/kKen94/ngx-progress/compare/v2.0.0...v2.1.0) (2020-10-02)


### Features

* **typescript:** support v4.0 ([92150b5](https://github.com/kKen94/ngx-progress/commit/92150b55d9480c4145719db225933fc865d2b6c3))

# [2.0.0](https://github.com/kKen94/ngx-progress/compare/v1.7.1...v2.0.0) (2020-08-18)


### Bug Fixes

* **bar:** overlay not disappear ([8282af3](https://github.com/kKen94/ngx-progress/commit/8282af31969afbb7ac9a5a27756c1b97e91b0781))
* **promises:** handle errors ([9e6f87a](https://github.com/kKen94/ngx-progress/commit/9e6f87a6a9e390645a1db56143cfa371c87f4c8d))
* **yarn.lock:** correct registry ([0b0a1bd](https://github.com/kKen94/ngx-progress/commit/0b0a1bdcc137656c906d636370e02ae9ac6c48ca))


### Performance Improvements

* **progress bar:** when progress ended there's a better animation ([713158f](https://github.com/kKen94/ngx-progress/commit/713158f4442a02a7e0a9b56b2033be9ebbf48bd8))


* refactor(whitelist and modules)!: change whitelist declaration ([8496eeb](https://github.com/kKen94/ngx-progress/commit/8496eeb9f30cabc6b8b0ae0cfb380424d8d705e5))


### BREAKING CHANGES

* whitelist now must be declared with .forRoot() in module
BREAKING CHANGES: remove router module for better management
BREAKING CHANGES: NgxProgressModule is now the old NgxProgressOnlyBarModule

## [1.7.1](https://github.com/kKen94/ngx-progress/compare/v1.7.0...v1.7.1) (2020-08-17)


### Bug Fixes

* **peer dependencies:** update ([353267a](https://github.com/kKen94/ngx-progress/commit/353267a0f1f30785fdbb8f42d07757d0d6f0154f))
* **yarn.lock:** set correct registry ([1b37ce1](https://github.com/kKen94/ngx-progress/commit/1b37ce14174d1a828e09b1db4e9ea32c812c142c))

# [1.7.0](https://github.com/kKen94/ngx-progress/compare/v1.6.1...v1.7.0) (2020-08-07)


### Features

* **indeterminate bar:** add property to enable indeterminate bar style ([d701dc3](https://github.com/kKen94/ngx-progress/commit/d701dc395d19269868398995d808472c45cdc0a0))
* **request filtering:** now some url can be whitlisted ([82cf63c](https://github.com/kKen94/ngx-progress/commit/82cf63c23d2eec0d2c922f69d5b7b106db663cbf))

## [1.6.1](https://github.com/kKen94/ngx-progress/compare/v1.6.0...v1.6.1) (2020-08-06)


### Performance Improvements

* **demo:** add overlay value input ([aff22b4](https://github.com/kKen94/ngx-progress/commit/aff22b4e24738aa9d742b485668c26d76a9bf8ff))

# [1.6.0](https://github.com/kKen94/ngx-progress/compare/v1.5.3...v1.6.0) (2020-08-06)


### Features

* **overlay:** add property to customize overlay value ([b7ae255](https://github.com/kKen94/ngx-progress/commit/b7ae255bb53520102c0d90836eb0198e53be71cd))

## [1.5.3](https://github.com/kKen94/ngx-progress/compare/v1.5.2...v1.5.3) (2020-08-03)


### Bug Fixes

* **spinner style:** set correct property to color spinner ([ad54303](https://github.com/kKen94/ngx-progress/commit/ad54303c21ea76d4c3c91b7b35caf9b85bacd2b8))

## [1.5.2](https://github.com/kKen94/ngx-progress/compare/v1.5.1...v1.5.2) (2020-08-03)


### Bug Fixes

* **bar service:** not disappear after complete ([19e498e](https://github.com/kKen94/ngx-progress/commit/19e498eb72ef5bed26bfb328eeae794c0155efad))

## [1.5.1](https://github.com/kKen94/ngx-progress/compare/v1.5.0...v1.5.1) (2020-07-31)


### Bug Fixes

* **npm update:** forced ([5a985ef](https://github.com/kKen94/ngx-progress/commit/5a985ef3006259ebebf152b89e3b80caa1fd9154))

# [1.5.0](https://github.com/kKen94/ngx-progress/compare/v1.4.3...v1.5.0) (2020-05-17)


### Bug Fixes

* **demo:** change ngx progress module ([5360515](https://github.com/kKen94/ngx-progress/commit/536051520e93a33721a5a16a5b1594e497da5ec8))
* **deps:** updates ([339003d](https://github.com/kKen94/ngx-progress/commit/339003d9158c57a3f156d99ff64b133d76600d2b))


### Features

* **demo:** add http fake request ([9c79f82](https://github.com/kKen94/ngx-progress/commit/9c79f82850db8aae6cd1e96a26f83842386e867a))

## [1.4.3](https://github.com/kKen94/ngx-progress/compare/v1.4.2...v1.4.3) (2020-04-16)


### Bug Fixes

* **dependencier:** incorrect peer dependencies in previous commit ([3b49eff](https://github.com/kKen94/ngx-progress/commit/3b49efffd847743708a2d2071c8d9f63413a2600))

## [1.4.2](https://github.com/kKen94/ngx-progress/compare/v1.4.1...v1.4.2) (2020-01-30)


### Bug Fixes

* **cycle dependency:** remove NgxProgressService from BarService ([ba12bbb](https://github.com/kKen94/ngx-progress/commit/ba12bbb06b095f09841b195c75666d58991d0055))

## [1.4.1](https://github.com/kKen94/ngx-progress/compare/v1.4.0...v1.4.1) (2020-01-30)


### Bug Fixes

* **angular version:** v9-rc10 to rc11 ([35a8987](https://github.com/kKen94/ngx-progress/commit/35a89870e1b9b44dd761438cf62bf62e4fc5b4e7))
* **demo:** update flex-layout ([7e18674](https://github.com/kKen94/ngx-progress/commit/7e18674a50750a2faed8a7bb2e145fd97d610f0c))

# [1.4.0](https://github.com/kKen94/ngx-progress/compare/v1.3.1...v1.4.0) (2020-01-24)


### Bug Fixes

* **public-api:** have to export bar.module ([1aedd1f](https://github.com/kKen94/ngx-progress/commit/1aedd1fe28156a0b8b1507b80d8a5d37ebe92fad))


### Features

* **angular major:** update angular core to v9 ([b512f4a](https://github.com/kKen94/ngx-progress/commit/b512f4a1e689164aa21803cb5e541beefa208c94))

## [1.3.1](https://github.com/kKen94/ngx-progress/compare/v1.3.0...v1.3.1) (2020-01-09)


### Bug Fixes

* **vulnerability:** update package.json to try resolve a vulnerability ([e469478](https://github.com/kKen94/ngx-progress/commit/e4694788829cc922fd82f3f131ec5c54ef6ca8b9))

# [1.3.0](https://github.com/kKen94/ngx-progress/compare/v1.2.3...v1.3.0) (2019-11-27)


### Bug Fixes

* **interceptor:** on http error interceptor terminate progress bar ([0792532](https://github.com/kKen94/ngx-progress/commit/079253214a7bdc57e36e5e711eddb091aa8d0175))


### Features

* **bar enabling:** method to enable or disable bar. Boolean control var ([49994e6](https://github.com/kKen94/ngx-progress/commit/49994e6837a023c2b3af447a42fe937bd2f239b7))

## [1.2.3](https://github.com/kKen94/ngx-progress/compare/v1.2.2...v1.2.3) (2019-11-26)


### Bug Fixes

* **register service:** fixed a bug that didn't allow bar unregistration ([5587891](https://github.com/kKen94/ngx-progress/commit/55878916cae5d5927caa998ea91b76266c972a1c))

## [1.2.2](https://github.com/kKen94/ngx-progress/compare/v1.2.1...v1.2.2) (2019-11-26)


### Bug Fixes

* **bugs:** fixed some bugs ([2405c6e](https://github.com/kKen94/ngx-progress/commit/2405c6e071186442972560537a23244a5faade8a))

## [1.2.1](https://github.com/kKen94/ngx-progress/compare/v1.2.0...v1.2.1) (2019-11-22)


### Bug Fixes

* **demo:** set position relative to ngx-progress parent ([50d3928](https://github.com/kKen94/ngx-progress/commit/50d39286ecf37ff46bee7aae809ac68b44fcdbe1))

# [1.2.0](https://github.com/kKen94/ngx-progress/compare/v1.1.2...v1.2.0) (2019-11-21)


### Bug Fixes

* **style:** remove overflow-x ([00c9169](https://github.com/kKen94/ngx-progress/commit/00c9169f229b0801747f14e5cb37b72f786ea774))


### Features

* **multiple instance:** ngx-progress can be instantiated multiple times ([ce5975c](https://github.com/kKen94/ngx-progress/commit/ce5975cc6df97817d18f02633a3bbd092e5c9a36))

## [1.1.2](https://github.com/kKen94/ngx-progress/compare/v1.1.1...v1.1.2) (2019-11-19)


### Bug Fixes

* **end of bar:** fix an error that not completed progress bar ([0d3257a](https://github.com/kKen94/ngx-progress/commit/0d3257a81de7ab24dd8fc70eecd4561bf6c67fac))

## [1.1.1](https://github.com/kKen94/ngx-progress/compare/v1.1.0...v1.1.1) (2019-11-18)


### Bug Fixes

* **initial value:** manage initial value with set() method ([59371f9](https://github.com/kKen94/ngx-progress/commit/59371f92d7d91302808667213994b517d240c8b1))

# [1.1.0](https://github.com/kKen94/ngx-progress/compare/v1.0.0...v1.1.0) (2019-11-17)


### Features

* **customization:** add more options for library customization ([fa18f17](https://github.com/kKen94/ngx-progress/commit/fa18f174f47996ded02c6d0ed4fc3aebd11ac658))

# 1.0.0 (2019-11-16)


### Bug Fixes

* **modules:** now modules work correct ([c5acdd2](https://github.com/kKen94/ngx-progress/commit/c5acdd25579d926b1f86791786468bd290e67c2f))
