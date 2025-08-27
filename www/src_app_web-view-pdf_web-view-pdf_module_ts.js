(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_web-view-pdf_web-view-pdf_module_ts"],{

/***/ 28021:
/*!*************************************************************!*\
  !*** ./src/app/web-view-pdf/web-view-pdf-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebViewPdfPageRoutingModule": () => (/* binding */ WebViewPdfPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _web_view_pdf_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-view-pdf.page */ 40511);




const routes = [
    {
        path: '',
        component: _web_view_pdf_page__WEBPACK_IMPORTED_MODULE_0__.WebViewPdfPage
    }
];
let WebViewPdfPageRoutingModule = class WebViewPdfPageRoutingModule {
};
WebViewPdfPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WebViewPdfPageRoutingModule);



/***/ }),

/***/ 9237:
/*!*****************************************************!*\
  !*** ./src/app/web-view-pdf/web-view-pdf.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebViewPdfPageModule": () => (/* binding */ WebViewPdfPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _web_view_pdf_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-view-pdf-routing.module */ 28021);
/* harmony import */ var _web_view_pdf_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-view-pdf.page */ 40511);







let WebViewPdfPageModule = class WebViewPdfPageModule {
};
WebViewPdfPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _web_view_pdf_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebViewPdfPageRoutingModule
        ],
        declarations: [_web_view_pdf_page__WEBPACK_IMPORTED_MODULE_1__.WebViewPdfPage]
    })
], WebViewPdfPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_web-view-pdf_web-view-pdf_module_ts.js.map