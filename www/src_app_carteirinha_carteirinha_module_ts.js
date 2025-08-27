(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_carteirinha_carteirinha_module_ts"],{

/***/ 79972:
/*!***********************************************************!*\
  !*** ./src/app/carteirinha/carteirinha-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteirinhaPageRoutingModule": () => (/* binding */ CarteirinhaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _carteirinha_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carteirinha.page */ 18006);




const routes = [
    {
        path: '',
        component: _carteirinha_page__WEBPACK_IMPORTED_MODULE_0__.CarteirinhaPage
    }
];
let CarteirinhaPageRoutingModule = class CarteirinhaPageRoutingModule {
};
CarteirinhaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarteirinhaPageRoutingModule);



/***/ }),

/***/ 17672:
/*!***************************************************!*\
  !*** ./src/app/carteirinha/carteirinha.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteirinhaPageModule": () => (/* binding */ CarteirinhaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _carteirinha_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carteirinha-routing.module */ 79972);
/* harmony import */ var _carteirinha_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carteirinha.page */ 18006);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 27773);








let CarteirinhaPageModule = class CarteirinhaPageModule {
};
CarteirinhaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _carteirinha_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarteirinhaPageRoutingModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule
        ],
        declarations: [_carteirinha_page__WEBPACK_IMPORTED_MODULE_1__.CarteirinhaPage]
    })
], CarteirinhaPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_carteirinha_carteirinha_module_ts.js.map