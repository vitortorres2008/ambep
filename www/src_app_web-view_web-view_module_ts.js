(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_web-view_web-view_module_ts"],{

/***/ 70786:
/*!*****************************************************!*\
  !*** ./src/app/web-view/web-view-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebViewPageRoutingModule": () => (/* binding */ WebViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _web_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-view.page */ 80487);




const routes = [
    {
        path: '',
        component: _web_view_page__WEBPACK_IMPORTED_MODULE_0__.WebViewPage
    }
];
let WebViewPageRoutingModule = class WebViewPageRoutingModule {
};
WebViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WebViewPageRoutingModule);



/***/ }),

/***/ 44947:
/*!*********************************************!*\
  !*** ./src/app/web-view/web-view.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebViewPageModule": () => (/* binding */ WebViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _web_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-view-routing.module */ 70786);
/* harmony import */ var _web_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-view.page */ 80487);







let WebViewPageModule = class WebViewPageModule {
};
WebViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _web_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebViewPageRoutingModule
        ],
        declarations: [_web_view_page__WEBPACK_IMPORTED_MODULE_1__.WebViewPage]
    })
], WebViewPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_web-view_web-view_module_ts.js.map