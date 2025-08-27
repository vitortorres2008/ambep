(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_preload-app_preload-app_module_ts"],{

/***/ 917:
/*!***********************************************************!*\
  !*** ./src/app/preload-app/preload-app-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadAppPageRoutingModule": () => (/* binding */ PreloadAppPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _preload_app_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preload-app.page */ 79622);




const routes = [
    {
        path: '',
        component: _preload_app_page__WEBPACK_IMPORTED_MODULE_0__.PreloadAppPage
    }
];
let PreloadAppPageRoutingModule = class PreloadAppPageRoutingModule {
};
PreloadAppPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreloadAppPageRoutingModule);



/***/ }),

/***/ 97043:
/*!***************************************************!*\
  !*** ./src/app/preload-app/preload-app.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadAppPageModule": () => (/* binding */ PreloadAppPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _preload_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preload-app-routing.module */ 917);
/* harmony import */ var _preload_app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload-app.page */ 79622);







let PreloadAppPageModule = class PreloadAppPageModule {
};
PreloadAppPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _preload_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreloadAppPageRoutingModule
        ],
        declarations: [_preload_app_page__WEBPACK_IMPORTED_MODULE_1__.PreloadAppPage]
    })
], PreloadAppPageModule);



/***/ }),

/***/ 79622:
/*!*************************************************!*\
  !*** ./src/app/preload-app/preload-app.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadAppPage": () => (/* binding */ PreloadAppPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_preload_app_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./preload-app.page.html */ 27601);
/* harmony import */ var _preload_app_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload-app.page.scss */ 32623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/api/api */ 72274);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);








let PreloadAppPage = class PreloadAppPage {
    constructor(api, router, navCtrl, controleAcessoProvider, loadingController) {
        this.api = api;
        this.router = router;
        this.navCtrl = navCtrl;
        this.controleAcessoProvider = controleAcessoProvider;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        console.log('Hello PreloadAppPage');
        this.loading = this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: -1
        });
        this.loading.then((t) => { t.present(); });
        let _this = this;
        this.controleAcessoProvider.menus().then((result) => {
            console.log(result);
            _this.loading.then((t) => { t.dismiss(); });
            localStorage.setItem("ambepMenu", JSON.stringify(result));
            _this.api.get('/ControleAcesso/UsuarioLogado').then((result) => {
                console.log(result);
                localStorage.setItem("ambepUser", JSON.stringify(result));
                _this.router.navigateByUrl('/start');
            }, (error) => {
                _this.router.navigateByUrl('login');
            });
        }, (error) => {
            _this.loading.then((t) => { t.dismiss(); });
            _this.router.navigateByUrl('/login');
        });
    }
};
PreloadAppPage.ctorParameters = () => [
    { type: src_providers_api_api__WEBPACK_IMPORTED_MODULE_2__.ApiProvider },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_3__.ControleAcessoProvider },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
PreloadAppPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-preload-app',
        template: _raw_loader_preload_app_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_preload_app_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PreloadAppPage);



/***/ }),

/***/ 32623:
/*!***************************************************!*\
  !*** ./src/app/preload-app/preload-app.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsb2FkLWFwcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 27601:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preload-app/preload-app.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_preload-app_preload-app_module_ts.js.map