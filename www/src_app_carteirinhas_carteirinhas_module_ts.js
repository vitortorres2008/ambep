(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_carteirinhas_carteirinhas_module_ts"],{

/***/ 43843:
/*!*************************************************************!*\
  !*** ./src/app/carteirinhas/carteirinhas-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteirinhasPageRoutingModule": () => (/* binding */ CarteirinhasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _carteirinhas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carteirinhas.page */ 66137);




const routes = [
    {
        path: '',
        component: _carteirinhas_page__WEBPACK_IMPORTED_MODULE_0__.CarteirinhasPage
    }
];
let CarteirinhasPageRoutingModule = class CarteirinhasPageRoutingModule {
};
CarteirinhasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarteirinhasPageRoutingModule);



/***/ }),

/***/ 96658:
/*!*****************************************************!*\
  !*** ./src/app/carteirinhas/carteirinhas.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteirinhasPageModule": () => (/* binding */ CarteirinhasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _carteirinhas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carteirinhas-routing.module */ 43843);
/* harmony import */ var _carteirinhas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carteirinhas.page */ 66137);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 27773);








let CarteirinhasPageModule = class CarteirinhasPageModule {
};
CarteirinhasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _carteirinhas_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarteirinhasPageRoutingModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule
        ],
        declarations: [_carteirinhas_page__WEBPACK_IMPORTED_MODULE_1__.CarteirinhasPage]
    })
], CarteirinhasPageModule);



/***/ }),

/***/ 66137:
/*!***************************************************!*\
  !*** ./src/app/carteirinhas/carteirinhas.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteirinhasPage": () => (/* binding */ CarteirinhasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_carteirinhas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./carteirinhas.page.html */ 40547);
/* harmony import */ var _carteirinhas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carteirinhas.page.scss */ 85123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_core_appSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/appSettings */ 83560);
/* harmony import */ var src_providers_associado_associado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/associado/associado */ 57499);
/* harmony import */ var _carteirinha_carteirinha_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carteirinha/carteirinha.page */ 18006);








let CarteirinhasPage = class CarteirinhasPage {
    constructor(modalCtrl, asssociadoProv, loadingController, toastController) {
        this.modalCtrl = modalCtrl;
        this.asssociadoProv = asssociadoProv;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.carteirinhas = [];
        this.defaultImage = 'assets/img/preload/carteirinha-preload.gif';
        this.loadingBool = true;
        this.share = false;
        this.qqcoisa = '';
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit()');
        this.qqcoisa = 'aaxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(32);
        });
        let _this = this;
        _this.loading = this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: -1
        });
        _this.loading.then((t) => { t.present(); });
        _this.asssociadoProv.carteirinhas().then((result) => {
            console.log(result);
            _this.loadingBool = false;
            this.carteirinhas = result;
            _this.loading.then((t) => { t.dismiss(); });
        }, (error) => {
            _this.loadingBool = false;
            _this.loading.then((t) => { t.dismiss(); });
            _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, cssClass: 'toast-warning' }).then((t) => { t.present(); });
        });
    }
    ngOnInit() {
    }
    getUrlImg(p) {
        return src_core_appSettings__WEBPACK_IMPORTED_MODULE_2__.AppSettings.serverApi.imgCarteirinha + p.guid + '/' + this.qqcoisa;
    }
    openView(carteirinha) {
        const viewModal = this.modalCtrl.create({
            component: _carteirinha_carteirinha_page__WEBPACK_IMPORTED_MODULE_4__.CarteirinhaPage,
            componentProps: {
                carteirinha: carteirinha
            }
        });
        viewModal.then(modal => modal.present());
    }
    compartilhar(carteirinha) {
        try {
            if (navigator.share !== undefined) {
                navigator.share({
                    title: 'Compartilhar carteirinha do: ' + carteirinha.nome,
                    text: carteirinha.nome + ', segue o link da sua carteirinha da AMBEP!',
                    url: src_core_appSettings__WEBPACK_IMPORTED_MODULE_2__.AppSettings.img.linkShare + 'carteirinha/' + carteirinha.guid,
                })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            }
            else {
                this.share = true;
            }
        }
        catch (ex) {
            this.share = true;
        }
    }
};
CarteirinhasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_providers_associado_associado__WEBPACK_IMPORTED_MODULE_3__.AssociadoProvider },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
CarteirinhasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-carteirinhas',
        template: _raw_loader_carteirinhas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_carteirinhas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CarteirinhasPage);



/***/ }),

/***/ 85123:
/*!*****************************************************!*\
  !*** ./src/app/carteirinhas/carteirinhas.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0ZWlyaW5oYXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 40547:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carteirinhas/carteirinhas.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Carteirinhas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div-registro-nao-localizado\" *ngIf=\"!loadingBool && carteirinhas.length === 0\">\n    <div class=\"col-12  text-center\">\n      <label>Não foi localizada carteirinha!</label>\n      <br />\n      <img src=\"../../assets/img/registro-nao-localizado.png\" style=\"max-width: 90px;\" />\n    </div>\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let carteirinha of carteirinhas; let i = index\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div style=\"width: 100%;\"><img [defaultImage]=\"defaultImage\" [lazyLoad]=\"getUrlImg(carteirinha)\" class=\"w-100\"\n              alt=\"...\"></div>\n        </ion-col>\n        <ion-col size=\"12\" style=\"text-align: center;\">\n          <ion-row>\n            <ion-col size=\"6\" style=\"text-align: right; padding-right: 15px\">\n              <div class=\"my-fg-black cursor-hand\" (click)=\"compartilhar(carteirinha)\">\n                <ion-icon name=\"share-social\" style=\"font-size: 30px; color: #6e6e6e;\"></ion-icon>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\" style=\"text-align: left; padding-left: 15px;\">\n              <div class=\"my-fg-black cursor-hand\" (click)=\"openView(carteirinha)\">\n                <ion-icon name=\"eye\" style=\"font-size: 30px; color: #6e6e6e;\"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_carteirinhas_carteirinhas_module_ts.js.map