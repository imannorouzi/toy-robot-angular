function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flexbox-parent app-root\">\n\n  <header class=\"bg-dark\">\n    <app-navbar></app-navbar>\n  </header>\n\n  <div class=\"flexbox-item-grow content\">\n    <main class=\"container h-100\">\n\n      <div class=\"row h-100 overflow-auto\">\n        <div class=\"col-md-4 command-history-wrapper\">\n          <app-command-history (redoCommand)=\"executeCommand($event)\" #commandHistory></app-command-history>\n        </div>\n\n        <div class=\"col-md-8\">\n\n          <h1>{{title}}</h1>\n\n          <section class=\"board-wrapper\">\n            <h2>Board</h2>\n            <hr>\n            <app-robot-board (placeChanged)=\"executeCommand($event)\" [robot]=\"robot\" [rows]=\"rows\" [cols]=\"cols\"></app-robot-board>\n          </section>\n\n          <section >\n            <h2>Move the Robot around</h2>\n            <hr>\n\n            <div clss=\"buttons\">\n              <button class=\"secondary\" (click)=\"this.commandHistory.addCommand(robot.move())\">MOVE</button>\n              <button class=\"secondary ml-2\" (click)=\"this.commandHistory.addCommand(robot.left())\">LEFT</button>\n              <button class=\"secondary ml-2\" (click)=\"this.commandHistory.addCommand(robot.right())\">RIGHT</button>\n              <button class=\"pull-right\" (click)=\"this.commandHistory.addCommand(robot.report())\">REPORT</button>\n            </div>\n            <input (keyup.enter)=\"inputEnterPressed()\"\n                   [(ngModel)]=\"command\"\n                   class=\"mt-3\"\n                   placeholder=\"Command (Press enter to submit)...\"\n                   type=\"text\"/>\n          </section>\n        </div>\n\n      </div>\n\n    </main>\n  </div>\n\n\n  <div class=\"app-footer-wrapper\">\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/command-history/command-history.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/command-history/command-history.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommandHistoryCommandHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"command-history flexbox-parent\">\n  <h4>History of commands</h4>\n  <span *ngIf=\"history.length === 0\"> No commands yet!</span>\n  <ul #commandList class=\"commands flexbox-item-grow\">\n    <li class=\"command-wrapper p-1 smooth\" (click)=\"this.repeatCommand(command.command)\" *ngFor=\"let command of history\">\n      <div class=\"command\" [class.fail]=\"!command.actionPerformed\">{{command.command}}</div>\n      <div class=\"message\" *ngIf=\"command.message\">{{command.message}}</div>\n    </li>\n  </ul> <!-- A placeholder for the commands history -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer p-4\">\n  <div class=\"container\">\n      <ul class=\"footer-links\" >\n        <li><a href=\"./assets/files/Toy-Robot-Code-Challenge-2020.pdf\" target=\"_blank\" data-pagename=\"footer-test-description\" data-name=\"footer-test-description\" name=\"footer-test-description\" ><i class=\"fa fa-info-circle\"></i> What's This?</a></li>\n        <li><a href=\"https://www.linkedin.com/in/imannorouzi/\" target=\"_blank\" data-pagename=\"footer-link-to-linkedIn\" data-name=\"footer-linedIn\" name=\"footer-linedIn\"><i class=\"fa fa-linkedin-square\"></i> My LinkedIn page</a></li>\n        <li><a href=\"https://github.com/imannorouzi\" target=\"_blank\" data-pagename=\"footer-link-to-github-page\" data-name=\"footer-link-to-my-github\" name=\"footer-github\" ><i class=\"fa fa-github-square\"></i> My Github</a></li>\n        <li><a href=\"./assets/files/Resume.pdf\" target=\"_blank\" data-pagename=\"footer-link-to-resume\" data-name=\"footer-link-to-resume\" name=\"footer-resume\"><i class=\"fa fa-user-circle\"></i> My Resume</a></li>\n      </ul>\n\n      <div class=\"\">\n        <p class=\"text-right\">This is all open source <i class=\"fa fa-copyright fa-rotate-180\"></i>, so, feel free to copy.</p>\n      </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark container\">\n\n  <a class=\"navbar-brand\" href=\"#\">Toy Robot</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./assets/files/Resume.pdf\" target=\"_blank\" data-pagename=\"navbar-help\" data-name=\"navbar-help\" name=\"navbar-help\">Help</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/robot-borad/robot-board.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/robot-borad/robot-board.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRobotBoradRobotBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Click any position to place the Robot.</p>\n<table class=\"board smooth\">\n  <tbody>\n  <tr *ngFor=\"let r of [].constructor(rows); let row=index;\">\n    <td (click)=\"place(col,  rows - row - 1)\" class=\"smooth\" *ngFor=\"let c of [].constructor(cols); let col=index;\">\n      <div *ngIf=\"robot &&\n      robot.isRobotPlaced() &&\n      (robot.x-1 === col) &&\n      (robot.y-1 === rows - row - 1)\"\n           [class]=\"'robot face-' + this.robot.f\" >\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header{\n  padding: 0;\n  border-bottom: 1px solid #0070ba;\n}\n\nmain{\n}\n\n.command-history-wrapper{\n  max-height: 100%;\n}\n\nsection{\n  background-color: white;\n  border-radius: 10px;\n  margin-top: 20px;\n  padding: 20px;\n  box-shadow: 0 2px 1px 0 rgba(0,0,0,.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBRWIsc0NBQXNDO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3MGJhO1xufVxuXG5tYWlue1xufVxuLmNvbW1hbmQtaGlzdG9yeS13cmFwcGVye1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5cbnNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDFweCAwIHJnYmEoMCwwLDAsLjEpO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggMCByZ2JhKDAsMCwwLC4xKTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./robot */
    "./src/app/robot.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Toy Robot Software';
        this.rows = 5;
        this.cols = 5;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.robot = new _robot__WEBPACK_IMPORTED_MODULE_2__["Robot"](5, 5);
        }
        /**
         * Description: This is triggered when a file is selected by the user. It tries to read the content of the file and
         * send it line by line to the robot to be executed as a command
         */

      }, {
        key: "readInputFile",
        value: function readInputFile(event) {
          var _this = this;

          if (event.files.length > 0) {
            var file = event.files[0]; // TODO: we need to check if the FileReader is available

            var reader = new FileReader(); // set onload listener

            reader.onload = function (e) {
              var lines = e.target.result.split('\n');
              lines.forEach(function (line) {
                if (line) {
                  _this.executeCommand(line);
                }
              });
            }; // read the file as text


            reader.readAsText(file); // clear the file input, so we can select the same file again

            event.target.innerHTML = '';
          }
        }
        /**
         * Description: Triggers once a keyUp event happens for single input field.
         */

      }, {
        key: "executeCommand",
        value: function executeCommand(command) {
          // if it's an 'Enter' key take the value as a command and send it to robot
          this.processCommand(command);
        }
      }, {
        key: "inputEnterPressed",
        value: function inputEnterPressed() {
          this.executeCommand(this.command.toUpperCase()); // clear the input

          this.command = '';
        }
        /**
         * Description: receives a line of input, checks it's validity and performs the command, if the command has an
         * effect on the robot state or command = 'REPORT', it would return actionPerformed as true otherwise actionPerformed
         * would be false. For some commands like 'REPORT' robot needs to return some message which is
         * communicated using message filed in the return object
         *
         */

      }, {
        key: "processCommand",
        value: function processCommand(line) {
          // check the command syntax using regex test.
          var command = line.split(' ');
          var result; // allowed commands are MOVE, LEFT, RIGHT, REPORT and PLACE x,y,FACE

          if (/(MOVE|LEFT|RIGHT|REPORT|(PLACE \d,\d,(NORTH|EAST|WEST|SOUTH)))/.test(line)) {
            // the first chunk is the main command
            switch (command[0]) {
              case 'PLACE':
                // The second chunk is place command parameters comma separated.
                var args = command[1].split(',');
                var x = Number(args[0]);
                var y = Number(args[1]);
                var face = args[2]; // try to place the robot

                result = this.robot.place(x, y, face);
                break;

              case 'MOVE':
                result = this.robot.move();
                break;

              case 'LEFT':
                result = this.robot.left();
                break;

              case 'RIGHT':
                result = this.robot.right();
                break;

              case 'REPORT':
                result = this.robot.report();
                break;
            }
          } else {
            // regex test failed which means command format is not as expected.
            result = new _robot__WEBPACK_IMPORTED_MODULE_2__["RobotResponse"](line, false, 'Command Not Recognized!');
          }

          this.commandHistory.addCommand(result);
        }
      }]);

      return AppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commandHistory', {
      "static": false
    })], AppComponent.prototype, "commandHistory", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _robot_borad_robot_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./robot-borad/robot-board.component */
    "./src/app/robot-borad/robot-board.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _command_history_command_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./command-history/command-history.component */
    "./src/app/command-history/command-history.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _robot_borad_robot_board_component__WEBPACK_IMPORTED_MODULE_5__["RobotBoardComponent"], _command_history_command_history_component__WEBPACK_IMPORTED_MODULE_7__["CommandHistoryComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/command-history/command-history.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/command-history/command-history.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommandHistoryCommandHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".command-history{\n  padding: 20px;\n}\n\nul{\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  scroll-behavior: smooth;\n}\n\nli{\n  border-bottom: 1px dashed gray;\n}\n\n.command-wrapper{\n  border-left: 5px solid transparent;\n  cursor: pointer;\n}\n\n.command-wrapper:hover{\n  background-color: #d5e8ff;\n  border-left: 5px solid cornflowerblue;\n}\n\n.command.fail{\n  color: darkred;\n}\n\n.command{\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWFuZC1oaXN0b3J5L2NvbW1hbmQtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFDQUFxQztBQUN2Qzs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21tYW5kLWhpc3RvcnkvY29tbWFuZC1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWFuZC1oaXN0b3J5e1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmxpe1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyYXk7XG59XG5cbi5jb21tYW5kLXdyYXBwZXJ7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21tYW5kLXdyYXBwZXI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWU4ZmY7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgY29ybmZsb3dlcmJsdWU7XG59XG4uY29tbWFuZC5mYWlse1xuICBjb2xvcjogZGFya3JlZDtcbn1cbi5jb21tYW5ke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/command-history/command-history.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/command-history/command-history.component.ts ***!
    \**************************************************************/

  /*! exports provided: CommandHistoryComponent */

  /***/
  function srcAppCommandHistoryCommandHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandHistoryComponent", function () {
      return CommandHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommandHistoryComponent = /*#__PURE__*/function () {
      function CommandHistoryComponent() {
        _classCallCheck(this, CommandHistoryComponent);

        this.redoCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.history = [];
      }

      _createClass(CommandHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCommand",
        value: function addCommand(command) {
          this.history.push(command);
          this.scrollToBottom();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          var _this2 = this;

          try {
            setTimeout(function () {
              _this2.commandList.nativeElement.scrollTop = _this2.commandList.nativeElement.scrollHeight;
            }, 100);
          } catch (err) {}
        }
      }, {
        key: "repeatCommand",
        value: function repeatCommand(command) {
          this.redoCommand.emit(command);
        }
      }]);

      return CommandHistoryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commandList', {
      "static": true
    })], CommandHistoryComponent.prototype, "commandList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CommandHistoryComponent.prototype, "redoCommand", void 0);
    CommandHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-command-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./command-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/command-history/command-history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./command-history.component.css */
      "./src/app/command-history/command-history.component.css"))["default"]]
    })], CommandHistoryComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer{\n  border-top: 1px solid #cbd2d6;\n  background: #fff;\n  color: #6c7378;\n  text-shadow: 0 1px 1px #fff;\n}\n\n.footer-links li:not(:last-child):after{\n  content: '|';\n  color: #a7a7a7;\n  margin-left: 10px;\n}\n\n.footer-links li{\n  margin-right: 10px;\n}\n\n.footer-links{\n  padding: 0 0 10px 0;\n  list-style: none;\n  display: flex;\n  border-bottom: 1px dotted #a7a7a7;\n}\n\n.footer-links a{\n  color: #0030c6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjYmQyZDY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNmM3Mzc4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4ICNmZmY7XG59XG5cbi5mb290ZXItbGlua3MgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlcntcbiAgY29udGVudDogJ3wnO1xuICBjb2xvcjogI2E3YTdhNztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZm9vdGVyLWxpbmtzIGxpe1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9vdGVyLWxpbmtze1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNhN2E3YTc7XG59XG4uZm9vdGVyLWxpbmtzIGF7XG4gIGNvbG9yOiAjMDAzMGM2O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-nav .nav-link {\n  color: rgba(255,255,255,.9);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/robot-borad/robot-board.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/robot-borad/robot-board.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRobotBoradRobotBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table{\n  margin: auto;\n  border: 2px solid #909090;\n  box-sizing: border-box;\n}\ntable tr td:hover,\ntable tr:nth-child(odd) td:nth-child(even):hover,\ntable tr:nth-child(even) td:nth-child(odd):hover {\n  background-color: #a7a7a7;\n}\ntd {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #e7e7e7;\n  cursor: pointer;\n  text-align: center;\n}\ntable tr:nth-child(odd) td:nth-child(even) {\n  background: #e7e7e7;\n}\ntable tr:nth-child(even) td:nth-child(odd) {\n  background: #e7e7e7;\n}\n.robot{\n  width: 30px;\n  height: 0px;\n  margin: auto;\n  border-bottom: 20px solid #0070ba;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n}\n.robot.face-1{\n  transform: rotate(90deg);\n}\n.robot.face-2{\n  transform: rotate(180deg);\n}\n.robot.face-3{\n  transform: rotate(270deg);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9ib3QtYm9yYWQvcm9ib3QtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCO0FBQ0E7OztFQUdFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxtQ0FBbUM7RUFDbkMsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFBQztFQUNDLHlCQUF5QjtBQUMzQjtBQUFDO0VBQ0MseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcm9ib3QtYm9yYWQvcm9ib3QtYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5MDkwOTA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG50YWJsZSB0ciB0ZDpob3ZlcixcbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHRkOm50aC1jaGlsZChldmVuKTpob3ZlcixcbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB0ZDpudGgtY2hpbGQob2RkKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2E3YTc7XG59XG50ZCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHRkOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNlN2U3ZTc7XG59XG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikgdGQ6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xufVxuXG4ucm9ib3R7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICMwMDcwYmE7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yb2JvdC5mYWNlLTF7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn0ucm9ib3QuZmFjZS0ye1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufS5yb2JvdC5mYWNlLTN7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/robot-borad/robot-board.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/robot-borad/robot-board.component.ts ***!
    \******************************************************/

  /*! exports provided: RobotBoardComponent */

  /***/
  function srcAppRobotBoradRobotBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RobotBoardComponent", function () {
      return RobotBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RobotBoardComponent = /*#__PURE__*/function () {
      function RobotBoardComponent() {
        _classCallCheck(this, RobotBoardComponent);

        this.placeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rows = 5;
        this.cols = 5;
      }

      _createClass(RobotBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "place",
        value: function place(col, row) {
          var face = this.robot && this.robot.isRobotPlaced() ? this.robot.face() : 'NORTH';
          this.placeChanged.emit('PLACE ' + (col + 1) + ',' + (row + 1) + ',' + face);
        }
      }]);

      return RobotBoardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RobotBoardComponent.prototype, "placeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RobotBoardComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RobotBoardComponent.prototype, "cols", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RobotBoardComponent.prototype, "robot", void 0);
    RobotBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-robot-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./robot-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/robot-borad/robot-board.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./robot-board.component.css */
      "./src/app/robot-borad/robot-board.component.css"))["default"]]
    })], RobotBoardComponent);
    /***/
  },

  /***/
  "./src/app/robot.ts":
  /*!**************************!*\
    !*** ./src/app/robot.ts ***!
    \**************************/

  /*! exports provided: Robot, RobotResponse */

  /***/
  function srcAppRobotTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Robot", function () {
      return Robot;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RobotResponse", function () {
      return RobotResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This object is used to convert face strings to face numbers (indexes). This helps to
    // turn left and right easier just by decreasing and increasing a number


    var FACE = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    /**
     * Robot Object
     *
     * Description: It is better to create this in a ts file to be able to define data types and make it more readable
     * but I decided to deliver this application in pure javascript and that's why I'm not using data types
     *
     * Description. (use period)
     *
     * @author Iman Norouzi
     */

    var Robot = /*#__PURE__*/function () {
      _createClass(Robot, [{
        key: "place",

        /**
         * Description: Places the robot in position (x, y) facing f direction and returns true if place is valid
         */
        value: function place(x, y, f) {
          // check if the place is valid
          if (x < 0 || x > this.boardCols || y < 0 || y > this.boardRows || FACE.indexOf(f) === -1) {
            // place is not valid
            return new RobotResponse('PLACE ' + x + ',' + y + ',' + f, false, 'Place is not valid!');
          }

          this.x = x;
          this.y = y;
          this.f = FACE.indexOf(f);
          return new RobotResponse('PLACE ' + x + ',' + y + ',' + f, true, '');
        }
        /**
         * Description: Constructor to instantiate a Robot object. Sets the board limits.
         */

      }]);

      function Robot(boardCols, boardRows) {
        _classCallCheck(this, Robot);

        this.boardCols = boardCols;
        this.boardRows = boardRows;
      }
      /**
       * Description: Turns the robot to the 90 degrees to the left and returns true if success (which is always after robot has been placed)
       */


      _createClass(Robot, [{
        key: "left",
        value: function left() {
          if (!this.isRobotPlaced()) {
            return new RobotResponse('MOVE', false, 'Robot is not placed yet!');
          } // decrease f by 1 and ensure it's between 0 and 3


          this.f = (this.f - 1 + FACE.length) % FACE.length;
          return new RobotResponse('LEFT', true, '');
        }
        /**
         * Description: Turns the robot to the 90 degrees to the right and returns true if success (which is always after robot has been placed)
         */

      }, {
        key: "right",
        value: function right() {
          if (!this.isRobotPlaced()) {
            return new RobotResponse('MOVE', false, 'Robot is not placed yet!');
          } // increase f by 1 and ensure it's between 0 and 3


          this.f = (this.f + 1) % FACE.length;
          return new RobotResponse('LEFT', true, '');
        }
        /**
         * description: Moves robot one step forward and return true if there is space forward otherwise returns false
         */

      }, {
        key: "move",
        value: function move() {
          // Check if robot has been placed
          if (!this.isRobotPlaced()) {
            return new RobotResponse('MOVE', false, 'Robot is not placed yet!');
          }

          switch (this.f) {
            case 0:
              // NORTH
              if (this.y < this.boardRows) {
                // move forward vertically
                this.y = this.y + 1;
              } else {
                // it would fall out
                return new RobotResponse('MOVE', false, 'Robot would fall out!');
              }

              break;

            case 1:
              // EAST
              if (this.x < this.boardCols) {
                // move forward horizontally
                this.x = this.x + 1;
              } else {
                // it would fall out
                return new RobotResponse('MOVE', false, 'Robot would fall out!');
              }

              break;

            case 2:
              // SOUTH
              if (this.y > 1) {
                // move back vertically
                this.y = this.y - 1;
              } else {
                // it would fall out
                return new RobotResponse('MOVE', false, 'Robot would fall out!');
              }

              break;

            case 3:
              // WEST
              if (this.x > 1) {
                // move back horizontally
                this.x = this.x - 1;
              } else {
                // it would fall out
                return new RobotResponse('MOVE', false, 'Robot would fall out!');
              }

              break;
          }

          return new RobotResponse('MOVE', true, '');
        }
        /**
         * Description: returns the state of the robot in the format of 'Output X,Y,FACE' if robot has placed before
         */

      }, {
        key: "report",
        value: function report() {
          // check if robot is placed
          if (this.isRobotPlaced()) {
            return new RobotResponse('REPORT', true, 'Output: ' + this.x + ',' + this.y + ',' + this.face());
          }

          return new RobotResponse('REPORT', false, 'Robot is not placed yet!');
        }
      }, {
        key: "face",
        value: function face() {
          return this.isRobotPlaced() ? FACE[this.f] : undefined;
        }
        /**
         *
         * Description: returns true if x, y and f have values which means robot has placed on the board
         */

      }, {
        key: "isRobotPlaced",
        value: function isRobotPlaced() {
          return typeof this.x !== 'undefined' && typeof this.y !== 'undefined' && typeof this.f !== 'undefined';
        }
      }]);

      return Robot;
    }();

    var RobotResponse = function RobotResponse(command, actionPerformed, message) {
      _classCallCheck(this, RobotResponse);

      this.actionPerformed = actionPerformed;
      this.command = command;
      this.message = message;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ocmsdev/projects/iman/toy-robot-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map