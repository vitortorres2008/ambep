(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_contato_contato_module_ts"],{

/***/ 52052:
/*!***************************************************!*\
  !*** ./src/app/contato/contato-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContatoPageRoutingModule": () => (/* binding */ ContatoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contato.page */ 86658);




const routes = [
    {
        path: '',
        component: _contato_page__WEBPACK_IMPORTED_MODULE_0__.ContatoPage
    }
];
let ContatoPageRoutingModule = class ContatoPageRoutingModule {
};
ContatoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContatoPageRoutingModule);



/***/ }),

/***/ 22674:
/*!*******************************************!*\
  !*** ./src/app/contato/contato.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContatoPageModule": () => (/* binding */ ContatoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contato_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contato-routing.module */ 52052);
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato.page */ 86658);







let ContatoPageModule = class ContatoPageModule {
};
ContatoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contato_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContatoPageRoutingModule
        ],
        declarations: [_contato_page__WEBPACK_IMPORTED_MODULE_1__.ContatoPage]
    })
], ContatoPageModule);



/***/ }),

/***/ 86658:
/*!*****************************************!*\
  !*** ./src/app/contato/contato.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContatoPage": () => (/* binding */ ContatoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contato.page.html */ 25721);
/* harmony import */ var _contato_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato.page.scss */ 28494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ContatoPage = class ContatoPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.origem = this.activatedRoute.snapshot.paramMap.get('origem');
    }
    ngOnInit() {
    }
};
ContatoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ContatoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-contato',
        template: _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contato_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContatoPage);



/***/ }),

/***/ 28494:
/*!*******************************************!*\
  !*** ./src/app/contato/contato.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-label {\n  color: #646464 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJjb250YXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjNjQ2NDY0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 25721:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"origem !== 'MAIN'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contato</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div style=\"text-align: center; padding: 20px;\">\n    <img src=\"../../assets/img/logo-ambep.png\" style=\"width: 50%;\">\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2><b>IPAM</b></h2>\n        <h3>Todo território nacional</h3>\n        <p><a href=\"tel:08009420077\">0800-9420-077</a></p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2><b>PÓS-VIDA E MAIS+VIDA</b></h2>\n        <h3>Interior</h3>\n        <p><a href=\"tel:08007781073\">0800-7781-073</a></p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2><b>PÓS-VIDA E MAIS+VIDA</b></h2>\n        <h3>Capitais e regiões metropolitanas</h3>\n        <p><a href=\"tel:40901073\">4090-1073</a></p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2><b>WHATSAPP</b></h2>\n        <h3>Fale pelo Whatsapp</h3>\n        <p><a href=\"https://wa.me/message/6P52ILUWV575B1\" target=\"_blank\">+55 21997219970</a></p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"map\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2><b>SEDE AMBEP</b></h2>\n        <p>\n          <a href=\"https://www.google.com/maps/place/Rua+%C3%81lvaro+Alvim,+21+-+Centro,+Rio+de+Janeiro+-+RJ,+20031-010/@-22.911528,-43.176324,16z/data=!4m5!3m4!1s0x997f62275322ff:0x1c4e6967ed262744!8m2!3d-22.9115278!4d-43.1763241?hl=pt-BR\"\n            target=\"_blank\">\n            Rua Álvaro Alvim, 21/6º e 8º andares<br />\n            Centro Rio de Janeiro<br />\n          </a>\n          CEP:20031-010<br />\n          <a href=\"tel:2132123600\">(21) 3212-3600</a>\n        </p><br />\n        <span style=\"color: green;\">Estamos abertos de Segunda a <br />Sexta\n        das 9:00h até 17:00h.</span>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_contato_contato_module_ts.js.map