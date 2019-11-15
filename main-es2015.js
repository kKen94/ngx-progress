(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../lib/src/lib/ngx-progress.component.html":
/*!**************************************************************************************************************!*\
  !*** D:/Project/ngx-progress/node_modules/raw-loader/dist/cjs.js!../lib/src/lib/ngx-progress.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"show\">\r\n  <div class=\"overlay\" *ngIf=\"progressService.isStarted && overlay\"></div>\r\n  <ngx-vendor-bar\r\n    [includeSpinner]=\"spinner\"\r\n    [height]=\"heigth\"\r\n    [color]=\"barColor\"\r\n    [diameter]=\"spinnerDiameter\"\r\n    [value]=\"initialValue\"\r\n  ></ngx-vendor-bar>\r\n</ng-container>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../lib/src/lib/vendor-component/vendor.component.html":
/*!*************************************************************************************************************************!*\
  !*** D:/Project/ngx-progress/node_modules/raw-loader/dist/cjs.js!../lib/src/lib/vendor-component/vendor.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(value ? value : loader.progress$|async) as progress\">\r\n  <div id=\"loading-bar-spinner\" *ngIf=\"includeSpinner\" [style.color]=\"color\">\r\n    <div [style.width]=\"diameter\" [style.height]=\"diameter\" class=\"spinner-icon\"></div>\r\n  </div>\r\n  <div id=\"loading-bar\" *ngIf=\"includeBar\" [style.color]=\"color\">\r\n    <div class=\"bar\" [style.background]=\"color\" [style.height]=\"height\" [style.width]=\"progress + '%'\">\r\n      <div class=\"peg\" [style.height]=\"height\"></div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!************************************************************************************************!*\
  !*** D:/Project/ngx-progress/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-progress></ngx-progress>\r\n\r\n<div>\r\n  <div style=\"text-align: center; margin-bottom: 5%; padding-top: 10px;\">Overlay test</div>\r\n  <div class=\"auth-height\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"border-box\">\r\n      <ngx-progress [heigth]=\"'2px'\"></ngx-progress>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <div style=\"font-size: 10px; bottom: 10px; right: 10px; position: absolute;\">\r\n      <div>Icon made by <a href=\"https://www.freepik.com/home\"> Freepik </a> from www.flaticon.com</div>\r\n      <div><a target=\"_blank\" href=\"https://icons8.com/icons/set/wolverine\">Wolverine icon</a> by <a target=\"_blank\" href=\"https://icons8.com\">Icons8</a></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/form-test/form-test.component.html":
/*!****************************************************************************************************************!*\
  !*** D:/Project/ngx-progress/node_modules/raw-loader/dist/cjs.js!./src/app/form-test/form-test.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"box padding-box\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\r\n\r\n    <img class=\"logo\" alt=\"logo\" src=\"../../assets/man.png\">\r\n\r\n    <span style=\"font-size: 24px;\">Login</span>\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Username</mat-label>\r\n      <input matInput>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" style=\"margin-top: -30px;\">\r\n      <mat-label>Password</mat-label>\r\n      <input matInput>\r\n    </mat-form-field>\r\n\r\n    <div style=\"width: 100%;\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <a class=\"link primary-color\" routerLink=\"/logan\"><span style=\"font-weight: bold; color: #0984e3\">-> Logan <-</span></a>\r\n      <button mat-flat-button color=\"primary\" (click)=\"fakeRequest()\"><span style=\"color: #ffffff\">Fake http 3 seconds request</span></button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/logan/logan.component.html":
/*!********************************************************************************************************!*\
  !*** D:/Project/ngx-progress/node_modules/raw-loader/dist/cjs.js!./src/app/logan/logan.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"box padding-box\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\r\n\r\n    <img style=\"width: 90px;\" alt=\"logo\" src=\"../../assets/logan.png\">\r\n\r\n    <span style=\"font-size: 24px;\">Logan</span>\r\n\r\n    <a routerLink=\"/login\"><button mat-flat-button color=\"primary\"><span style=\"color: #ffffff\">Back</span></button></a>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!***************************************************************!*\
  !*** D:/Project/ngx-progress/node_modules/tslib/tslib.es6.js ***!
  \***************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../lib/src/lib/bar.module.ts":
/*!************************************!*\
  !*** ../lib/src/lib/bar.module.ts ***!
  \************************************/
/*! exports provided: BarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarModule", function() { return BarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-progress.component */ "../lib/src/lib/ngx-progress.component.ts");
/* harmony import */ var _vendor_component_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor-component/vendor.component */ "../lib/src/lib/vendor-component/vendor.component.ts");





let BarModule = class BarModule {
};
BarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_ngx_progress_component__WEBPACK_IMPORTED_MODULE_3__["NgxProgressComponent"]],
        declarations: [_ngx_progress_component__WEBPACK_IMPORTED_MODULE_3__["NgxProgressComponent"], _vendor_component_vendor_component__WEBPACK_IMPORTED_MODULE_4__["VendorComponent"]],
    })
], BarModule);



/***/ }),

/***/ "../lib/src/lib/ngx-progress.component.scss":
/*!**************************************************!*\
  !*** ../lib/src/lib/ngx-progress.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .overlay {\n  position: absolute;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  background-color: rgba(255, 255, 255, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2xpYi9zcmMvbGliL0Q6XFxQcm9qZWN0XFxuZ3gtcHJvZ3Jlc3MvcHJvamVjdHNcXGxpYlxcc3JjXFxsaWJcXG5neC1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2xpYi9zcmMvbGliL25neC1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQW9CLG1DQUFBO0VBQ3BCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLDBDQUFBO0VBS0csa0NBQUE7RUFDSCxVQUFBO0FDREoiLCJmaWxlIjoicHJvamVjdHMvbGliL3NyYy9saWIvbmd4LXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXHJcbiAgICAgIDI1NSxcclxuICAgICAgMjU1LFxyXG4gICAgICAyNTUsXHJcbiAgICAgIDAuNVxyXG4gICAgKTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xufSJdfQ== */");

/***/ }),

/***/ "../lib/src/lib/ngx-progress.component.ts":
/*!************************************************!*\
  !*** ../lib/src/lib/ngx-progress.component.ts ***!
  \************************************************/
/*! exports provided: NgxProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxProgressComponent", function() { return NgxProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-progress.service */ "../lib/src/lib/ngx-progress.service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.service */ "../lib/src/lib/register.service.ts");




let NgxProgressComponent = class NgxProgressComponent {
    constructor(progressService, self, register) {
        this.progressService = progressService;
        this.self = self;
        this.register = register;
        /**
         * Color of spinner and progress bar
         * Default color style attributes format ('#0984e3', 'rgb(169, 86, 90)', ...)
         */
        this.barColor = '#0984e3';
        /**
         * Show and hide the circle spinner
         */
        this.spinner = false;
        /**
         * Heigth of progress bar
         * Default heigth style attributes format ('1px', '1%', ...)
         */
        this.heigth = '1px';
        /**
         * Width of spinner
         * Default width style attributes format ('5px', '5%', ...)
         */
        this.spinnerDiameter = '5px';
        /**
         * The starting value of progress bar (from 1 to 100)
         */
        this.initialValue = undefined;
        /**
         * Show or hide overlay
         */
        this.overlay = true;
        this.show = true;
    }
    ngOnDestroy() {
        this.register.unregisterBar(this.self.nativeElement);
    }
    ngOnInit() {
        this.register.registerBar(this.self.nativeElement);
    }
};
NgxProgressComponent.ctorParameters = () => [
    { type: _ngx_progress_service__WEBPACK_IMPORTED_MODULE_2__["NgxProgressService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxProgressComponent.prototype, "barColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxProgressComponent.prototype, "spinner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxProgressComponent.prototype, "heigth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxProgressComponent.prototype, "spinnerDiameter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxProgressComponent.prototype, "initialValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxProgressComponent.prototype, "overlay", void 0);
NgxProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-progress',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-progress.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../lib/src/lib/ngx-progress.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-progress.component.scss */ "../lib/src/lib/ngx-progress.component.scss")).default]
    })
], NgxProgressComponent);



/***/ }),

/***/ "../lib/src/lib/ngx-progress.interceptor.ts":
/*!**************************************************!*\
  !*** ../lib/src/lib/ngx-progress.interceptor.ts ***!
  \**************************************************/
/*! exports provided: NgxProgressInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxProgressInterceptor", function() { return NgxProgressInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-progress.service */ "../lib/src/lib/ngx-progress.service.ts");





let NgxProgressInterceptor = class NgxProgressInterceptor {
    constructor(progressService) {
        this.progressService = progressService;
    }
    intercept(request, next) {
        this.progressService.start();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.progressService.end();
            }
            return event;
        }));
    }
};
NgxProgressInterceptor.ctorParameters = () => [
    { type: _ngx_progress_service__WEBPACK_IMPORTED_MODULE_4__["NgxProgressService"] }
];
NgxProgressInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NgxProgressInterceptor);



/***/ }),

/***/ "../lib/src/lib/ngx-progress.module.ts":
/*!*********************************************!*\
  !*** ../lib/src/lib/ngx-progress.module.ts ***!
  \*********************************************/
/*! exports provided: NgxProgressOnlyHttpModule, NgxProgressOnlyRouterModule, NgxProgressModule, NgxProgressOnlyBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxProgressOnlyHttpModule", function() { return NgxProgressOnlyHttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxProgressOnlyRouterModule", function() { return NgxProgressOnlyRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxProgressModule", function() { return NgxProgressModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxProgressOnlyBarModule", function() { return NgxProgressOnlyBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-progress.service */ "../lib/src/lib/ngx-progress.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_progress_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-progress.interceptor */ "../lib/src/lib/ngx-progress.interceptor.ts");
/* harmony import */ var _bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar.module */ "../lib/src/lib/bar.module.ts");







/***********************     HTTP ONLY         **************************/
let NgxProgressOnlyHttpModule = class NgxProgressOnlyHttpModule {
};
NgxProgressOnlyHttpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _ngx_progress_interceptor__WEBPACK_IMPORTED_MODULE_5__["NgxProgressInterceptor"], multi: true }],
    })
], NgxProgressOnlyHttpModule);

/********************         ROUTER NAVIGATION ONLY         ********************/
let NgxProgressOnlyRouterModule = class NgxProgressOnlyRouterModule {
    constructor(router, progressService) {
        this.progressService = progressService;
        initRouter(router, progressService);
    }
};
NgxProgressOnlyRouterModule.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngx_progress_service__WEBPACK_IMPORTED_MODULE_3__["NgxProgressService"] }
];
NgxProgressOnlyRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
    })
], NgxProgressOnlyRouterModule);

/********************         HTTP AND ROUTER NAVIGATION        ********************/
let NgxProgressModule = class NgxProgressModule {
    constructor(router, progressService) {
        this.progressService = progressService;
        initRouter(router, progressService);
    }
};
NgxProgressModule.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngx_progress_service__WEBPACK_IMPORTED_MODULE_3__["NgxProgressService"] }
];
NgxProgressModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _ngx_progress_interceptor__WEBPACK_IMPORTED_MODULE_5__["NgxProgressInterceptor"], multi: true }],
    })
], NgxProgressModule);

/*******************         ONLY PROGRESSBAR          ********************/
let NgxProgressOnlyBarModule = class NgxProgressOnlyBarModule {
};
NgxProgressOnlyBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
        exports: [_bar_module__WEBPACK_IMPORTED_MODULE_6__["BarModule"]],
    })
], NgxProgressOnlyBarModule);

/*****************************************************************************************/
const getCurrentNavigationState = (router) => {
    const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras) {
        return currentNavigation.extras.state;
    }
    return {};
};
const initRouter = (router, progressService) => {
    router.events.subscribe(event => {
        const state = getCurrentNavigationState(router);
        if (state && state.ignoreLoadingBar) {
            return;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            progressService.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            progressService.end();
        }
    });
};


/***/ }),

/***/ "../lib/src/lib/ngx-progress.service.ts":
/*!**********************************************!*\
  !*** ../lib/src/lib/ngx-progress.service.ts ***!
  \**********************************************/
/*! exports provided: NgxProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxProgressService", function() { return NgxProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _vendor_component_vendor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor-component/vendor.service */ "../lib/src/lib/vendor-component/vendor.service.ts");




let NgxProgressService = class NgxProgressService {
    constructor(vendorBarService) {
        this.vendorBarService = vendorBarService;
        this.endEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Notifica quando lo spinner scompare
         */
        this.end$ = this.endEmitter.asObservable();
        /**
         * Notifica quando lo spinner parte
         */
        this.start$ = this.startEmitter.asObservable();
        this.progressCount = 0;
    }
    /**
     * Viene fatta partire la progress bar.
     * Se ci sono altre navigazioni / chiamate che avevano precedentemente fatto partire la progressbar
     * questa non riparte da 0 ma continua fluidamente ad andare avanti
     */
    start() {
        if (this.progressCount === 0) {
            this.vendorBarService.start();
            this.isStarted = true;
            this.startEmitter.next();
        }
        this.progressCount++;
    }
    /**
     * Viene interrota la progressbar.
     * Se ci sono però altre chiamate / navigazioni di mezzo non sparisce finché non vengono risolte anche quelle
     */
    end() {
        this.progressCount--;
        setTimeout(() => {
            if (this.progressCount === 0) {
                this.vendorBarService.complete();
                this.isStarted = false;
                this.endEmitter.next();
            }
        }, 200);
    }
    /**
     * Forza la progressbar a partire da 0 anche se altre chiamate / navigazioni sono in corso
     */
    reset() {
        this.vendorBarService.start();
        this.isStarted = true;
        this.progressCount++;
        this.startEmitter.next();
    }
    /**
     * Forza la progressbar a scomparire anche se altre chiamate / navigazioni sono in corso
     */
    terminate() {
        this.vendorBarService.complete();
        this.isStarted = false;
        this.endEmitter.next();
    }
};
NgxProgressService.ctorParameters = () => [
    { type: _vendor_component_vendor_service__WEBPACK_IMPORTED_MODULE_3__["VendorService"] }
];
NgxProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], NgxProgressService);



/***/ }),

/***/ "../lib/src/lib/register.service.ts":
/*!******************************************!*\
  !*** ../lib/src/lib/register.service.ts ***!
  \******************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let RegisterService = class RegisterService {
    constructor() {
        this.existingBars = [];
        // TODO: ogni volta che un componente viene registrato o deregistrato solo l'ultimo deve avere la variabile show impostata a true
    }
    registerBar(bar) {
        this.existingBars.push(bar);
    }
    unregisterBar(bar) {
        this.existingBars.splice(this.existingBars.indexOf(bar), 1);
    }
};
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], RegisterService);



/***/ }),

/***/ "../lib/src/lib/vendor-component/vendor.component.scss":
/*!*************************************************************!*\
  !*** ../lib/src/lib/vendor-component/vendor.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Make clicks pass-through */\n:host {\n  position: relative;\n  display: block;\n}\n:host.loading-bar-fixed > div .bar {\n  position: fixed;\n}\n:host.loading-bar-fixed > div#loading-bar-spinner {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n}\n[dir=rtl] :host.loading-bar-fixed > div#loading-bar-spinner {\n  right: 10px;\n  left: unset;\n}\n:host.loading-bar-fixed > div .peg {\n  display: block;\n}\n:host > div {\n  pointer-events: none;\n  -webkit-transition: 350ms linear all;\n  transition: 350ms linear all;\n  color: #29d;\n  /* Fancy blur effect */\n}\n:host > div .bar {\n  -webkit-transition: width 350ms;\n  transition: width 350ms;\n  background: #29d;\n  position: absolute;\n  z-index: 10002;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  border-bottom-right-radius: 1px;\n  border-top-right-radius: 1px;\n}\n[dir=rtl] :host > div .bar {\n  right: 0;\n  left: unset;\n}\n:host > div .peg {\n  display: none;\n  position: absolute;\n  width: 70px;\n  right: 0;\n  top: 0;\n  height: 2px;\n  opacity: 0.45;\n  box-shadow: 1px 0 6px 1px;\n  color: inherit;\n  border-radius: 100%;\n}\n:host > div#loading-bar-spinner {\n  display: block;\n  position: absolute;\n  z-index: 10002;\n  top: 5px;\n  left: 0;\n}\n:host > div#loading-bar-spinner .spinner-icon {\n  width: 14px;\n  height: 14px;\n  border: solid 2px transparent;\n  border-top-color: inherit;\n  border-left-color: inherit;\n  border-radius: 50%;\n  -webkit-animation: loading-bar-spinner 400ms linear infinite;\n          animation: loading-bar-spinner 400ms linear infinite;\n}\n@-webkit-keyframes loading-bar-spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes loading-bar-spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2xpYi9zcmMvbGliL3ZlbmRvci1jb21wb25lbnQvRDpcXFByb2plY3RcXG5neC1wcm9ncmVzcy9wcm9qZWN0c1xcbGliXFxzcmNcXGxpYlxcdmVuZG9yLWNvbXBvbmVudFxcdmVuZG9yLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbGliL3NyYy9saWIvdmVuZG9yLWNvbXBvbmVudC92ZW5kb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0k7RUFDRSxlQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZOO0FESU07RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FETUk7RUFDRSxjQUFBO0FDSk47QURRRTtFQUNFLG9CQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFxQkEsc0JBQUE7QUMxQko7QURPSTtFQUNFLCtCQUFBO0VBQUEsdUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDTk47QURRTTtFQUNFLFFBQUE7RUFDQSxXQUFBO0FDTlI7QURXSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRGFJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FDWE47QURZTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0FDWFI7QURpQkE7RUFDRTtJQUFPLCtCQUFBO1lBQUEsdUJBQUE7RUNiUDtFRGNBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ1hQO0FBQ0Y7QURRQTtFQUNFO0lBQU8sK0JBQUE7WUFBQSx1QkFBQTtFQ2JQO0VEY0E7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDWFA7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9saWIvc3JjL2xpYi92ZW5kb3ItY29tcG9uZW50L3ZlbmRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgJi5sb2FkaW5nLWJhci1maXhlZCA+IGRpdiB7XHJcbiAgICAuYmFyIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG5cclxuICAgICYjbG9hZGluZy1iYXItc3Bpbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgW2Rpcj1cInJ0bFwiXSAmIHtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wZWcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gZGl2IHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMzUwbXMgbGluZWFyIGFsbDtcclxuICAgIGNvbG9yOiAjMjlkO1xyXG5cclxuICAgIC5iYXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAzNTBtcztcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6ICMyOWQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMTAwMDI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXB4O1xyXG5cclxuICAgICAgW2Rpcj1cInJ0bFwiXSAmIHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXHJcbiAgICAucGVnIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIG9wYWNpdHk6IC40NTtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDAgNnB4IDFweDtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG9hZGluZy1iYXItc3Bpbm5lclxyXG4gICAgJiNsb2FkaW5nLWJhci1zcGlubmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMTAwMDI7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICAuc3Bpbm5lci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZGluZy1iYXItc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZy1iYXItc3Bpbm5lciB7XHJcbiAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iLCIvKiBNYWtlIGNsaWNrcyBwYXNzLXRocm91Z2ggKi9cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0LmxvYWRpbmctYmFyLWZpeGVkID4gZGl2IC5iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG46aG9zdC5sb2FkaW5nLWJhci1maXhlZCA+IGRpdiNsb2FkaW5nLWJhci1zcGlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5bZGlyPXJ0bF0gOmhvc3QubG9hZGluZy1iYXItZml4ZWQgPiBkaXYjbG9hZGluZy1iYXItc3Bpbm5lciB7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiB1bnNldDtcbn1cbjpob3N0LmxvYWRpbmctYmFyLWZpeGVkID4gZGl2IC5wZWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0ID4gZGl2IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDM1MG1zIGxpbmVhciBhbGw7XG4gIGNvbG9yOiAjMjlkO1xuICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xufVxuOmhvc3QgPiBkaXYgLmJhciB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDM1MG1zO1xuICBiYWNrZ3JvdW5kOiAjMjlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFweDtcbn1cbltkaXI9cnRsXSA6aG9zdCA+IGRpdiAuYmFyIHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IHVuc2V0O1xufVxuOmhvc3QgPiBkaXYgLnBlZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMnB4O1xuICBvcGFjaXR5OiAwLjQ1O1xuICBib3gtc2hhZG93OiAxcHggMCA2cHggMXB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbjpob3N0ID4gZGl2I2xvYWRpbmctYmFyLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDA7XG59XG46aG9zdCA+IGRpdiNsb2FkaW5nLWJhci1zcGlubmVyIC5zcGlubmVyLWljb24ge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWJhci1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nLWJhci1zcGlubmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "../lib/src/lib/vendor-component/vendor.component.ts":
/*!***********************************************************!*\
  !*** ../lib/src/lib/vendor-component/vendor.component.ts ***!
  \***********************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vendor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor.service */ "../lib/src/lib/vendor-component/vendor.service.ts");



let VendorComponent = class VendorComponent {
    constructor(loader) {
        this.loader = loader;
        this.includeBar = true;
    }
};
VendorComponent.ctorParameters = () => [
    { type: _vendor_service__WEBPACK_IMPORTED_MODULE_2__["VendorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VendorComponent.prototype, "includeSpinner", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VendorComponent.prototype, "includeBar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VendorComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VendorComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VendorComponent.prototype, "diameter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VendorComponent.prototype, "value", void 0);
VendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-vendor-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendor.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../lib/src/lib/vendor-component/vendor.component.html")).default,
        preserveWhitespaces: false,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendor.component.scss */ "../lib/src/lib/vendor-component/vendor.component.scss")).default]
    })
], VendorComponent);



/***/ }),

/***/ "../lib/src/lib/vendor-component/vendor.service.ts":
/*!*********************************************************!*\
  !*** ../lib/src/lib/vendor-component/vendor.service.ts ***!
  \*********************************************************/
/*! exports provided: VendorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorService", function() { return VendorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");





let VendorService = class VendorService {
    constructor(platformId) {
        this.platformId = platformId;
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            requests: 0,
            value: undefined,
        });
        this.progress$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(s => this.timer$(s)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(s => s.value));
        this.timer$ = (s) => {
            let state$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(s);
            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
                state$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ value: 0, requests: 0 });
            }
            else if (s.requests === 0) {
                // Attempt to aggregate any start/complete calls within 500ms:
                state$ =
                    s.value === 0
                        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(s)
                        : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(t => ({ requests: 0, value: t === 1 ? 0 : 100 })));
            }
            else if (s.requests) {
                state$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 250).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(t => (t === 0 ? Object.assign({}, s) : Object.assign({}, s, { value: this._increment() }))));
            }
            return state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(next => {
                this.setState(next, false);
            }));
        };
    }
    start(initialValue = 2) {
        this.setState({
            requests: this.state.requests + 1,
            value: !this.state.value ? initialValue : this.state.value,
        });
    }
    stop() {
        this.setState({ requests: 0 });
    }
    complete() {
        if (this.state.requests > 0) {
            this.setState({ requests: (this.state.requests || 1) - 1 });
        }
    }
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param n any value between 0 and 100
     */
    set(n) {
        this.setState({ value: n });
    }
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     */
    increment(rnd = 0) {
        this.set(this._increment(rnd));
    }
    get state() {
        return this.state$.value;
    }
    setState(state, emitEvent = true) {
        emitEvent
            ? this.state$.next(Object.assign({}, this.state$.value, state))
            : Object.keys(state).forEach(prop => (this.state[prop] = state[prop]));
    }
    _increment(rnd = 0) {
        const stat = this.state.value;
        if (stat >= 99) {
            rnd = 0;
        }
        if (rnd === 0) {
            rnd =
                stat >= 0 && stat < 25
                    ? Math.random() * (5 - 3 + 1) + 3
                    : (rnd =
                        stat >= 25 && stat < 65
                            ? Math.random() * 3
                            : (rnd = stat >= 65 && stat < 90 ? Math.random() * 2 : (rnd = stat >= 90 && stat < 99 ? 0.5 : 0)));
        }
        return rnd + stat;
    }
};
VendorService.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
VendorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], VendorService);



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .auth-height {\n  height: 100%;\n}\n:host .border-box {\n  border: 1px solid #dadce0;\n  border-radius: 8px;\n  position: relative;\n  overflow: auto;\n}\n.box {\n  width: 450px;\n  min-height: 650px;\n}\n.logo {\n  width: 60px;\n}\n.padding-box {\n  padding: 48px 40px 36px;\n}\n.link {\n  color: #0984e3;\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL2FwcC9EOlxcUHJvamVjdFxcbmd4LXByb2dyZXNzL3Byb2plY3RzXFxkZW1vXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUNBSjtBREdFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FES0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtBQ0ZGO0FES0E7RUFDRSx1QkFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUNGRiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5hdXRoLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWJveCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uYm94IHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgbWluLWhlaWdodDogNjUwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLnBhZGRpbmctYm94IHtcclxuICBwYWRkaW5nOiA0OHB4IDQwcHggMzZweDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGNvbG9yOiAjMDk4NGUzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCI6aG9zdCAuYXV0aC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuYm9yZGVyLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRjZTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJveCB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWluLWhlaWdodDogNjUwcHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5wYWRkaW5nLWJveCB7XG4gIHBhZGRpbmc6IDQ4cHggNDBweCAzNnB4O1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjMDk4NGUzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_test_form_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-test/form-test.component */ "./src/app/form-test/form-test.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _logan_logan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logan/logan.component */ "./src/app/logan/logan.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fake_http_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fake-http.interceptor */ "./src/app/fake-http.interceptor.ts");
/* harmony import */ var _lib_src_lib_ngx_progress_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/src/lib/ngx-progress.module */ "../lib/src/lib/ngx-progress.module.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _form_test_form_test_component__WEBPACK_IMPORTED_MODULE_4__["FormTestComponent"], _logan_logan_component__WEBPACK_IMPORTED_MODULE_9__["LoganComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _lib_src_lib_ngx_progress_module__WEBPACK_IMPORTED_MODULE_12__["NgxProgressModule"],
        ],
        providers: [_fake_http_interceptor__WEBPACK_IMPORTED_MODULE_11__["fakeHttpProvider"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/fake-http.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/fake-http.interceptor.ts ***!
  \******************************************/
/*! exports provided: FakeHttpInterceptor, fakeHttpProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeHttpInterceptor", function() { return FakeHttpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeHttpProvider", function() { return fakeHttpProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





const handleRoute = () => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
let FakeHttpInterceptor = class FakeHttpInterceptor {
    intercept(request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
    }
};
FakeHttpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], FakeHttpInterceptor);

const fakeHttpProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeHttpInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/app/form-test/form-test.component.scss":
/*!****************************************************!*\
  !*** ./src/app/form-test/form-test.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .auth-height {\n  height: 100%;\n}\n:host .border-box {\n  border: 1px solid #dadce0;\n  border-radius: 8px;\n  position: relative;\n  overflow: auto;\n}\n.box {\n  width: 450px;\n  min-height: 650px;\n}\n.logo {\n  width: 60px;\n}\n.padding-box {\n  padding: 48px 40px 36px;\n}\n.link {\n  color: #0984e3;\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL2FwcC9mb3JtLXRlc3QvRDpcXFByb2plY3RcXG5neC1wcm9ncmVzcy9wcm9qZWN0c1xcZGVtb1xcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9mb3JtLXRlc3QvZm9ybS10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQ0FKO0FER0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREo7QURLQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0FDRkY7QURLQTtFQUNFLHVCQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQ0ZGIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9mb3JtLXRlc3QvZm9ybS10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5hdXRoLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWJveCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uYm94IHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgbWluLWhlaWdodDogNjUwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLnBhZGRpbmctYm94IHtcclxuICBwYWRkaW5nOiA0OHB4IDQwcHggMzZweDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIGNvbG9yOiAjMDk4NGUzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCI6aG9zdCAuYXV0aC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuYm9yZGVyLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRjZTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJveCB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWluLWhlaWdodDogNjUwcHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5wYWRkaW5nLWJveCB7XG4gIHBhZGRpbmc6IDQ4cHggNDBweCAzNnB4O1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjMDk4NGUzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/form-test/form-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-test/form-test.component.ts ***!
  \**************************************************/
/*! exports provided: FormTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTestComponent", function() { return FormTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");



let FormTestComponent = class FormTestComponent {
    constructor(http) {
        this.http = http;
    }
    fakeRequest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.http.get('https://github.com/kKen94/ngx-progress').toPromise();
        });
    }
};
FormTestComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FormTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-test.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/form-test/form-test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-test.component.scss */ "./src/app/form-test/form-test.component.scss")).default]
    })
], FormTestComponent);



/***/ }),

/***/ "./src/app/logan/logan.component.scss":
/*!********************************************!*\
  !*** ./src/app/logan/logan.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .auth-height {\n  height: 100%;\n}\n:host .border-box {\n  border: 1px solid #dadce0;\n  border-radius: 8px;\n  position: relative;\n  overflow: auto;\n}\n.box {\n  width: 450px;\n  min-height: 650px;\n}\n.logo {\n  width: 60px;\n}\n.padding-box {\n  padding: 48px 40px 36px;\n}\n.link {\n  color: #0984e3;\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL2FwcC9sb2dhbi9EOlxcUHJvamVjdFxcbmd4LXByb2dyZXNzL3Byb2plY3RzXFxkZW1vXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZGVtby9zcmMvYXBwL2xvZ2FuL2xvZ2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQ0FKO0FER0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREo7QURLQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0FDRkY7QURLQTtFQUNFLHVCQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQ0ZGIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9sb2dhbi9sb2dhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuYXV0aC1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGNlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmJveCB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJveCB7XHJcbiAgcGFkZGluZzogNDhweCA0MHB4IDM2cHg7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzA5ODRlMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiOmhvc3QgLmF1dGgtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmJvcmRlci1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5ib3gge1xuICB3aWR0aDogNDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4ucGFkZGluZy1ib3gge1xuICBwYWRkaW5nOiA0OHB4IDQwcHggMzZweDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzA5ODRlMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/logan/logan.component.ts":
/*!******************************************!*\
  !*** ./src/app/logan/logan.component.ts ***!
  \******************************************/
/*! exports provided: LoganComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoganComponent", function() { return LoganComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let LoganComponent = class LoganComponent {
};
LoganComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logan.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/logan/logan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logan.component.scss */ "./src/app/logan/logan.component.scss")).default]
    })
], LoganComponent);



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _form_test_form_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-test/form-test.component */ "./src/app/form-test/form-test.component.ts");
/* harmony import */ var _logan_logan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logan/logan.component */ "./src/app/logan/logan.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _form_test_form_test_component__WEBPACK_IMPORTED_MODULE_3__["FormTestComponent"],
    },
    {
        path: 'logan',
        component: _logan_logan_component__WEBPACK_IMPORTED_MODULE_4__["LoganComponent"],
    },
];
const config = {
    useHash: true,
};
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, config)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => { console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\ngx-progress\projects\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map