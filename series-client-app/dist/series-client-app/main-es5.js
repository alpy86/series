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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/filter/filter.component */
    "./src/app/components/filter/filter.component.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/components/list/list.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'series-client-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "main"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]],
      styles: [".main[_ngcontent-%COMP%] {\n  min-width: 400px;\n  margin: 0 auto;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFuZ3VsYXJcXHNlcmllc1xcc2VyaWVzLWNsaWVudC1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuIiwiLm1haW4ge1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMiU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/filter/filter.component */
    "./src/app/components/filter/filter.component.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/components/list/list.component.ts");
    /* harmony import */


    var _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/list-header/list-header.component */
    "./src/app/components/list-header/list-header.component.ts");
    /* harmony import */


    var _components_item_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/item/item.component */
    "./src/app/components/item/item.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"], _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_13__["ListHeaderComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_14__["ItemComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"], _components_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_13__["ListHeaderComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_14__["ItemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/filter/filter.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/filter/filter.component.ts ***!
    \*******************************************************/

  /*! exports provided: FilterComponent */

  /***/
  function srcAppComponentsFilterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
      return FilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/get-list.service */
    "./src/app/services/get-list.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["inputTag"];

    function FilterComponent_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var genre_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r3);
      }
    }

    function FilterComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var date_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](date_r4);
      }
    }

    var FilterComponent = /*#__PURE__*/function () {
      function FilterComponent(getListService) {
        _classCallCheck(this, FilterComponent);

        this.getListService = getListService;
        this.firstCounter = 0;
        this.secondCounter = 0;
      }

      _createClass(FilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getListService.valueSeries.subscribe(function (data) {
            _this.listSeries = data;

            _this.filterListGenres(_this.listSeries);

            _this.filterListDates(_this.listSeries);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.inputElem.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            return event.target.value;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (value) {
            return value.length > 2 || value.length === 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (value) {
            _this2.filterName(value);
          });
        }
      }, {
        key: "filter",
        value: function filter(value, id) {
          var response = this.getListService.getResponse();
          id === "genre" ? this.selectedGenre = value : this.selectedDate = value;
          response = this.filterGenre(this.selectedGenre, response);
          response = this.filterDate(this.selectedDate, response);
          this.getListService.transferData(response);
        }
      }, {
        key: "filterName",
        value: function filterName(value) {
          this.response = this.getListService.getResponse();

          if (!value) {
            this.changedResponse = this.response;
          } else {
            this.changedResponse = this.response.filter(function (el) {
              return el.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
            });
          }

          this.getListService.transferData(this.changedResponse);
        }
      }, {
        key: "filterListGenres",
        value: function filterListGenres(value) {
          if (this.firstCounter > 1) return;
          var arrGenres = ["All genres"];
          value.forEach(function (el) {
            return el.genre.forEach(function (item) {
              return arrGenres.push(item);
            });
          });
          this.listGenres = Array.from(new Set(arrGenres));
          this.selectedGenre = this.listGenres[0];
          this.firstCounter++;
        }
      }, {
        key: "filterListDates",
        value: function filterListDates(value) {
          if (this.secondCounter > 1) return;
          var arrDates = [];
          value.forEach(function (el) {
            return arrDates.push(Number(el.premiere.slice(-4)));
          });
          arrDates.sort(function (a, b) {
            return a - b;
          });
          this.listDates = Array.from(new Set(arrDates));
          this.listDates.unshift("All dates");
          this.selectedDate = this.listDates[0];
          this.secondCounter++;
        }
      }, {
        key: "filterGenre",
        value: function filterGenre(value, response) {
          return value === "All genres" ? response : response.filter(function (el) {
            return el.genre.indexOf(value) >= 0;
          });
        }
      }, {
        key: "filterDate",
        value: function filterDate(value, response) {
          return value === "All dates" ? response : response.filter(function (el) {
            return el.premiere.indexOf(value) >= 0;
          });
        }
      }]);

      return FilterComponent;
    }();

    FilterComponent.ɵfac = function FilterComponent_Factory(t) {
      return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_3__["GetListService"]));
    };

    FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilterComponent,
      selectors: [["app-filter"]],
      viewQuery: function FilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElem = _t.first);
        }
      },
      decls: 12,
      vars: 3,
      consts: [[1, "form-name", "filter"], ["type", "text", "placeholder", "Name", "name", "name", 1, "form-field", 3, "ngModel", "ngModelChange"], ["inputTag", ""], [1, "fas", "fa-search"], [1, "box-select", "filter"], ["id", "genre", 1, "select", 3, "change"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "select-arrow"], ["id", "date", 1, "select", 3, "change"], [4, "ngFor", "ngForOf"], [1, "option"]],
      template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.searchName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterComponent_Template_select_change_5_listener($event) {
            return ctx.filter($event.target.value, $event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterComponent_option_6_Template, 2, 1, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterComponent_Template_select_change_9_listener($event) {
            return ctx.filter($event.target.value, $event.target.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterComponent_option_10_Template, 2, 1, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listGenres);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listDates);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.filter[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 30%;\n  height: 35px;\n  color: white;\n  background-color: orange;\n}\n\n.filter[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 1%;\n}\n\n.form-name[_ngcontent-%COMP%] {\n  border-bottom: 2px solid orange;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 1.2rem;\n  color: white;\n  background: transparent;\n  border: 0;\n}\n\n.form-field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  padding-left: 10px;\n  color: white;\n}\n\n.form-field[_ngcontent-%COMP%]::-moz-placeholder {\n  padding-left: 10px;\n  color: white;\n}\n\n.form-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  padding-left: 10px;\n  color: white;\n}\n\n.form-field[_ngcontent-%COMP%]::placeholder {\n  padding-left: 10px;\n  color: white;\n}\n\n.form-field[_ngcontent-%COMP%]:hover {\n  background-color: #ffb733;\n}\n\n.fa-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 80%;\n  color: white;\n  font-size: 1.1rem;\n}\n\n.box-select[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 8px 15px;\n  color: white;\n  font-size: 1.2rem;\n  background-color: orange;\n  border: 0;\n  border-radius: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n}\n\n.select[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n.select[_ngcontent-%COMP%]:hover {\n  background-color: #ffb733;\n}\n\n.select[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\n  background-color: #ffb733;\n}\n\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 15px;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n  border-style: solid;\n  border-width: 8px 5px 0 5px;\n  border-color: #996300 transparent transparent transparent;\n}\n\n.select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover    ~ .select-arrow[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus    ~ .select-arrow[_ngcontent-%COMP%] {\n  border-top-color: #996300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXIvRDpcXGFuZ3VsYXJcXHNlcmllc1xcc2VyaWVzLWNsaWVudC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBZE07RUFlTix3QkFoQlE7QUNjVjs7QURJRTtFQUNFLGdCQUFBO0FDRko7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBOUJNO0VBK0JOLHVCQUFBO0VBQ0EsU0FBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxZQXBDSTtBQ2lDUjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFwQ0k7QUNpQ1I7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFlBcENJO0FDaUNSOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxZQXBDSTtBQ2lDUjs7QURNRTtFQUNFLHlCQUFBO0FDSko7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFoRE07RUFpRE4saUJBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBOURNO0VBK0ROLGlCQUFBO0VBQ0Esd0JBakVRO0VBa0VSLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURPRTtFQUNFLGFBQUE7QUNMSjs7QURRRTtFQUNFLHlCQUFBO0FDTko7O0FEU0U7RUFDRSx5QkFBQTtBQ1BKOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseURBQUE7QUNSRjs7QURVRTtFQUVFLHlCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogb3JhbmdlO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLW5hbWUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeTtcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5mYS1zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwJTtcclxuICBsZWZ0OiA4MCU7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLmJveC1zZWxlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMTAlKTtcclxuICB9XHJcblxyXG4gIC5vcHRpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3QtYXJyb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE2cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA4cHggNXB4IDAgNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyMCUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cclxuICAuc2VsZWN0IHNlbGVjdDpob3ZlciB+ICYsXHJcbiAgLnNlbGVjdCBzZWxlY3Q6Zm9jdXMgfiAmIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMjAlKTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZmlsdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cbi5maWx0ZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5mb3JtLW5hbWUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgb3JhbmdlO1xufVxuXG4uZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4uZm9ybS1maWVsZDo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb3JtLWZpZWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjczMztcbn1cblxuLmZhLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDgwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmJveC1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzMzO1xufVxuLnNlbGVjdCAub3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjczMztcbn1cblxuLnNlbGVjdC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogOHB4IDVweCAwIDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjOTk2MzAwIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuLnNlbGVjdCBzZWxlY3Q6aG92ZXIgfiAuc2VsZWN0LWFycm93LCAuc2VsZWN0IHNlbGVjdDpmb2N1cyB+IC5zZWxlY3QtYXJyb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOTk2MzAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-filter',
          templateUrl: './filter.component.html',
          styleUrls: ['./filter.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_3__["GetListService"]
        }];
      }, {
        inputElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputTag', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/item/item.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/item/item.component.ts ***!
    \***************************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppComponentsItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ItemComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var genre_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", genre_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r14);
      }
    }

    function ItemComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var network_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r15);
      }
    }

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent() {
        _classCallCheck(this, ItemComponent);
      }

      _createClass(ItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listGenres = this.dataSeries.genre;
          this.listNetworks = this.dataSeries.network;
        }
      }]);

      return ItemComponent;
    }();

    ItemComponent.ɵfac = function ItemComponent_Factory(t) {
      return new (t || ItemComponent)();
    };

    ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["app-item"]],
      inputs: {
        dataSeries: "dataSeries"
      },
      decls: 11,
      vars: 5,
      consts: [[1, "box-name-genres", "column"], [1, "series-name"], [1, "box-genres"], ["class", "list-values genre", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "series-season", "column"], [1, "series-networks", "column"], ["class", "list-values", 4, "ngFor", "ngForOf"], [1, "series-premiere", "column"], [1, "list-values", "genre", 3, "ngClass"], [1, "list-values"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemComponent_span_4_Template, 2, 2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemComponent_span_8_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataSeries.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listGenres);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataSeries.season);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listNetworks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataSeries.premiere);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  margin: 1% 0;\n  box-sizing: border-box;\n}\n\n.box-name-genres[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  min-width: 30%;\n}\n\n.series-name[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 1.1rem;\n  font-weight: 400;\n  overflow: hidden;\n}\n\n.series-season[_ngcontent-%COMP%], .series-premiere[_ngcontent-%COMP%] {\n  min-width: 22%;\n}\n\n.series-networks[_ngcontent-%COMP%] {\n  min-width: 26%;\n}\n\n.list-values[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  overflow: hidden;\n}\n\n.list-values[_ngcontent-%COMP%]:first-child {\n  padding-left: none;\n}\n\n.column[_ngcontent-%COMP%] {\n  padding-left: 7px;\n}\n\n.genre[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n\n.horror[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.crime[_ngcontent-%COMP%] {\n  background-color: silver;\n}\n\n.thriller[_ngcontent-%COMP%] {\n  background-color: aqua;\n}\n\n.drama[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.comedy[_ngcontent-%COMP%] {\n  background-color: lightblue;\n}\n\n.tragedy[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.mystery[_ngcontent-%COMP%] {\n  background-color: lightcyan;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtL0Q6XFxhbmd1bGFyXFxzZXJpZXNcXHNlcmllcy1jbGllbnQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpdGVtXFxpdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLHdCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxJSAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5ib3gtbmFtZS1nZW5yZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtaW4td2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnNlcmllcy1uYW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VyaWVzLXNlYXNvbixcclxuLnNlcmllcy1wcmVtaWVyZSB7XHJcbiAgbWluLXdpZHRoOiAyMiU7XHJcbn1cclxuXHJcbi5zZXJpZXMtbmV0d29ya3Mge1xyXG4gIG1pbi13aWR0aDogMjYlO1xyXG59XHJcblxyXG4ubGlzdC12YWx1ZXMge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuXHJcbi5nZW5yZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmhvcnJvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY3JpbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG5cclxuLnRocmlsbGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG4uZHJhbWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uY29tZWR5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi50cmFnZWR5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5teXN0ZXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDElIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ib3gtbmFtZS1nZW5yZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWluLXdpZHRoOiAzMCU7XG59XG5cbi5zZXJpZXMtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZXJpZXMtc2Vhc29uLFxuLnNlcmllcy1wcmVtaWVyZSB7XG4gIG1pbi13aWR0aDogMjIlO1xufVxuXG4uc2VyaWVzLW5ldHdvcmtzIHtcbiAgbWluLXdpZHRoOiAyNiU7XG59XG5cbi5saXN0LXZhbHVlcyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxpc3QtdmFsdWVzOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiBub25lO1xufVxuXG4uY29sdW1uIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi5nZW5yZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmhvcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNyaW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xufVxuXG4udGhyaWxsZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4uZHJhbWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmNvbWVkeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLnRyYWdlZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5teXN0ZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item',
          templateUrl: './item.component.html',
          styleUrls: ['./item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        dataSeries: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/list-header/list-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/list-header/list-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ListHeaderComponent */

  /***/
  function srcAppComponentsListHeaderListHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListHeaderComponent", function () {
      return ListHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/list-series.model */
    "./src/app/models/list-series.model.ts");
    /* harmony import */


    var _list_header_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-header.config */
    "./src/app/components/list-header/list-header.config.ts");
    /* harmony import */


    var src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/get-list.service */
    "./src/app/services/get-list.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListHeaderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListHeaderComponent_div_0_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var column_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.sortData(column_r8.type, column_r8.name, "up");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListHeaderComponent_div_0_Template_i_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var column_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.sortData(column_r8.type, column_r8.name, "down");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", column_r8["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, column_r8.name));
      }
    }

    var ListHeaderComponent = /*#__PURE__*/function () {
      function ListHeaderComponent(getListService) {
        _classCallCheck(this, ListHeaderComponent);

        this.getListService = getListService;
        this.listColumns = _list_header_config__WEBPACK_IMPORTED_MODULE_2__["ListColumns"];
      }

      _createClass(ListHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.getListService.valueSeries.subscribe(function (data) {
            _this3.listSeries = data;
          });
        }
      }, {
        key: "sortData",
        value: function sortData(type, name, directionSort) {
          var changedResponse;

          if (type === src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_1__["ColumnsType"].string) {
            changedResponse = this.sortDataByString(name, directionSort, this.listSeries);
          } else if (type === src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_1__["ColumnsType"].number) {
            changedResponse = this.sortDataByNumber(name, directionSort, this.listSeries);
          } else if (type === src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_1__["ColumnsType"].date) {
            changedResponse = this.sortDataByDate(name, directionSort, this.listSeries);
          }

          this.getListService.transferData(changedResponse);
        }
      }, {
        key: "sortDataByString",
        value: function sortDataByString(columnName, directionSort, arr) {
          return arr.sort(function (a, b) {
            if (directionSort === "up") {
              return a[columnName] > b[columnName] ? 1 : -1;
            }

            if (directionSort === "down") {
              return a[columnName] > b[columnName] ? -1 : 1;
            }

            ;
          });
        }
      }, {
        key: "sortDataByNumber",
        value: function sortDataByNumber(columnName, directionSort, arr) {
          return arr.sort(function (a, b) {
            if (directionSort === "up") {
              return Number(a[columnName]) - Number(b[columnName]);
            }

            if (directionSort === "down") {
              return Number(b[columnName]) - Number(a[columnName]);
            }

            ;
          });
        }
      }, {
        key: "sortDataByDate",
        value: function sortDataByDate(columnName, directionSort, arr) {
          var _this4 = this;

          return arr.sort(function (a, b) {
            if (directionSort === "up") {
              return _this4.changeDateFormat(a[columnName]) > _this4.changeDateFormat(b[columnName]) ? 1 : -1;
            }

            if (directionSort === "down") {
              return _this4.changeDateFormat(a[columnName]) > _this4.changeDateFormat(b[columnName]) ? -1 : 1;
            }

            ;
          });
        }
      }, {
        key: "changeDateFormat",
        value: function changeDateFormat(date) {
          return Date.parse(date.split(".").reverse().join('-'));
        }
      }]);

      return ListHeaderComponent;
    }();

    ListHeaderComponent.ɵfac = function ListHeaderComponent_Factory(t) {
      return new (t || ListHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_3__["GetListService"]));
    };

    ListHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListHeaderComponent,
      selectors: [["app-list-header"]],
      decls: 1,
      vars: 1,
      consts: [["class", "column-header", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "column-header", 3, "ngClass"], [1, "sort-arrow"], [1, "fas", "fa-angle-up", 3, "click"], [1, "fas", "fa-angle-down", 3, "click"]],
      template: function ListHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListHeaderComponent_div_0_Template, 7, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listColumns);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  background-color: purple;\n  box-sizing: border-box;\n}\n\n.column-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1%;\n}\n\n.col-name[_ngcontent-%COMP%] {\n  min-width: 28%;\n}\n\n.col-network[_ngcontent-%COMP%] {\n  min-width: 24%;\n}\n\n.col-season[_ngcontent-%COMP%], .col-premiere[_ngcontent-%COMP%] {\n  min-width: 20%;\n}\n\n.sort-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n\n.sort-arrow[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #ff1aff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWhlYWRlci9EOlxcYW5ndWxhclxcc2VyaWVzXFxzZXJpZXMtY2xpZW50LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGlzdC1oZWFkZXJcXGxpc3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpc3QtaGVhZGVyL2xpc3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFMTTtFQU1OLHdCQVBhO0VBUWIsc0JBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBOztFQUVFLGNBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURJRTtFQUNFLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1oZWFkZXIvbGlzdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWNvbG9yOiBwdXJwbGU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2x1bW4taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMSU7XHJcbn1cclxuXHJcbi5jb2wtbmFtZSB7XHJcbiAgbWluLXdpZHRoOiAyOCU7XHJcbn1cclxuXHJcbi5jb2wtbmV0d29yayB7XHJcbiAgbWluLXdpZHRoOiAyNCU7XHJcbn1cclxuXHJcbi5jb2wtc2Vhc29uLFxyXG4uY29sLXByZW1pZXJlIHtcclxuICBtaW4td2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnNvcnQtYXJyb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogbGlnaHRlbigkaGVhZGVyLWNvbG9yLCAzMCUpO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb2x1bW4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDElO1xufVxuXG4uY29sLW5hbWUge1xuICBtaW4td2lkdGg6IDI4JTtcbn1cblxuLmNvbC1uZXR3b3JrIHtcbiAgbWluLXdpZHRoOiAyNCU7XG59XG5cbi5jb2wtc2Vhc29uLFxuLmNvbC1wcmVtaWVyZSB7XG4gIG1pbi13aWR0aDogMjAlO1xufVxuXG4uc29ydC1hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zb3J0LWFycm93IDpob3ZlciB7XG4gIGNvbG9yOiAjZmYxYWZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-header',
          templateUrl: './list-header.component.html',
          styleUrls: ['./list-header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_3__["GetListService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/list-header/list-header.config.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/list-header/list-header.config.ts ***!
    \**************************************************************/

  /*! exports provided: ListColumns */

  /***/
  function srcAppComponentsListHeaderListHeaderConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListColumns", function () {
      return ListColumns;
    });
    /* harmony import */


    var src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/models/list-series.model */
    "./src/app/models/list-series.model.ts");

    var ListColumns = [{
      name: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].name,
      "class": "col-".concat(src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].name),
      type: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["ColumnsType"].string
    }, {
      name: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].season,
      "class": "col-".concat(src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].season),
      type: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["ColumnsType"].number
    }, {
      name: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].network,
      "class": "col-".concat(src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].network),
      type: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["ColumnsType"].string
    }, {
      name: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].premiere,
      "class": "col-".concat(src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["HeaderColumns"].premiere),
      type: src_app_models_list_series_model__WEBPACK_IMPORTED_MODULE_0__["ColumnsType"].date
    }];
    /***/
  },

  /***/
  "./src/app/components/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/get-list.service */
    "./src/app/services/get-list.service.ts");
    /* harmony import */


    var _list_header_list_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../list-header/list-header.component */
    "./src/app/components/list-header/list-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../item/item.component */
    "./src/app/components/item/item.component.ts");

    function ListComponent_app_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-item", 2);
      }

      if (rf & 2) {
        var dataItem_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSeries", dataItem_r6);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25];
    };

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(getListService) {
        _classCallCheck(this, ListComponent);

        this.getListService = getListService;
        this.lowValue = 0;
        this.highValue = 10;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.getListService.getListSeries();
          this.getListService.valueSeries.subscribe(function (data) {
            _this5.listSeries = data;
          });
        }
      }, {
        key: "getPaginatorData",
        value: function getPaginatorData(event) {
          this.lowValue = event.pageIndex * event.pageSize;
          this.highValue = this.lowValue + event.pageSize;
          return event;
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_1__["GetListService"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 4,
      vars: 8,
      consts: [[3, "dataSeries", 4, "ngFor", "ngForOf"], ["pageSize", "10", "showFirstLastButtons", "true", 3, "length", "pageSizeOptions", "page"], [3, "dataSeries"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_app_item_1_Template, 1, 1, "app-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-paginator", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListComponent_Template_mat_paginator_page_3_listener($event) {
            return ctx.getPaginatorData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 3, ctx.listSeries, ctx.lowValue, ctx.highValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.listSeries.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_2__["ListHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_get_list_service__WEBPACK_IMPORTED_MODULE_1__["GetListService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/list-series.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/list-series.model.ts ***!
    \*********************************************/

  /*! exports provided: HeaderColumns, ColumnsType */

  /***/
  function srcAppModelsListSeriesModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderColumns", function () {
      return HeaderColumns;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnsType", function () {
      return ColumnsType;
    });

    var HeaderColumns;

    (function (HeaderColumns) {
      HeaderColumns["name"] = "name";
      HeaderColumns["season"] = "season";
      HeaderColumns["network"] = "network";
      HeaderColumns["premiere"] = "premiere";
    })(HeaderColumns || (HeaderColumns = {}));

    var ColumnsType;

    (function (ColumnsType) {
      ColumnsType[ColumnsType["string"] = 0] = "string";
      ColumnsType[ColumnsType["number"] = 1] = "number";
      ColumnsType[ColumnsType["date"] = 2] = "date";
    })(ColumnsType || (ColumnsType = {}));
    /***/

  },

  /***/
  "./src/app/services/get-list.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/get-list.service.ts ***!
    \**********************************************/

  /*! exports provided: GetListService */

  /***/
  function srcAppServicesGetListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetListService", function () {
      return GetListService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GetListService = /*#__PURE__*/function () {
      function GetListService(http) {
        _classCallCheck(this, GetListService);

        this.http = http;
        this.listSeriesUrl = 'assets/series.json';
        this.valueSeries$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.valueSeries = this.valueSeries$.asObservable();
      }

      _createClass(GetListService, [{
        key: "getListSeries",
        value: function getListSeries() {
          var _this6 = this;

          this.http.get(this.listSeriesUrl).subscribe(function (data) {
            _this6.valueSeries$.next(data.list);

            _this6.response = data.list;
          });
        }
      }, {
        key: "getResponse",
        value: function getResponse() {
          return this.response;
        }
      }, {
        key: "transferData",
        value: function transferData(value) {
          this.valueSeries$.next(value);
        }
      }]);

      return GetListService;
    }();

    GetListService.ɵfac = function GetListService_Factory(t) {
      return new (t || GetListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    GetListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetListService,
      factory: GetListService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! D:\angular\series\series-client-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map