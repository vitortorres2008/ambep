(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_esqueci-senha_esqueci-senha_module_ts"],{

/***/ 79240:
/*!***************************************************************!*\
  !*** ./src/app/esqueci-senha/esqueci-senha-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsqueciSenhaPageRoutingModule": () => (/* binding */ EsqueciSenhaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _esqueci_senha_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esqueci-senha.page */ 69146);




const routes = [
    {
        path: '',
        component: _esqueci_senha_page__WEBPACK_IMPORTED_MODULE_0__.EsqueciSenhaPage
    }
];
let EsqueciSenhaPageRoutingModule = class EsqueciSenhaPageRoutingModule {
};
EsqueciSenhaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EsqueciSenhaPageRoutingModule);



/***/ }),

/***/ 41264:
/*!*******************************************************!*\
  !*** ./src/app/esqueci-senha/esqueci-senha.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsqueciSenhaPageModule": () => (/* binding */ EsqueciSenhaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _esqueci_senha_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esqueci-senha-routing.module */ 79240);
/* harmony import */ var _esqueci_senha_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esqueci-senha.page */ 69146);







let EsqueciSenhaPageModule = class EsqueciSenhaPageModule {
};
EsqueciSenhaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _esqueci_senha_routing_module__WEBPACK_IMPORTED_MODULE_0__.EsqueciSenhaPageRoutingModule
        ],
        declarations: [_esqueci_senha_page__WEBPACK_IMPORTED_MODULE_1__.EsqueciSenhaPage]
    })
], EsqueciSenhaPageModule);



/***/ }),

/***/ 69146:
/*!*****************************************************!*\
  !*** ./src/app/esqueci-senha/esqueci-senha.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsqueciSenhaPage": () => (/* binding */ EsqueciSenhaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_esqueci_senha_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./esqueci-senha.page.html */ 92757);
/* harmony import */ var _esqueci_senha_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esqueci-senha.page.scss */ 93823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);







let EsqueciSenhaPage = class EsqueciSenhaPage {
    constructor(controleAcessoProvider, loadingCtrl, toast, router, alertController) {
        this.controleAcessoProvider = controleAcessoProvider;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.router = router;
        this.alertController = alertController;
        this.formulario = {};
    }
    ngOnInit() { }
    recuperar() {
        if (this.formulario.valor === '' || this.formulario.valor == null) {
            this.toast.create({ message: 'Por favor, informe o e-mail!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present(); });
            // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
            return;
        }
        this.loader = this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: -1
        });
        this.loader.then((t) => { t.present(); });
        this.controleAcessoProvider.esqueciSenha(this.formulario)
            .then(() => {
            this.loader.then((t) => { t.dismiss(); });
            this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Sucesso',
                //subHeader: 'Sucesso',
                message: 'As informações sobre a recuperação da senha foram enviadas para o e-mail: ' + this.formulario.valor + '.',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigateByUrl('/login');
                        }
                    }]
            }).then((e) => { e.present(); });
        })
            .catch((error) => {
            this.loader.then((t) => { t.dismiss(); });
            this.toast.create({ message: error.message, position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present(); });
        });
    }
};
EsqueciSenhaPage.ctorParameters = () => [
    { type: src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_2__.ControleAcessoProvider },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
EsqueciSenhaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-esqueci-senha',
        template: _raw_loader_esqueci_senha_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_esqueci_senha_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EsqueciSenhaPage);



/***/ }),

/***/ 93823:
/*!*******************************************************!*\
  !*** ./src/app/esqueci-senha/esqueci-senha.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3F1ZWNpLXNlbmhhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 92757:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/esqueci-senha/esqueci-senha.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>    \n    <ion-title>Esqueci a senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"text-align: center; padding: 20px;\">\n    <img src=\"../../assets/img/logo-ambep.png\" style=\"width: 50%;\">\n  </div>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Informe o e-mail cadastrado</ion-label>\n        <ion-input type=\"email\" [(ngModel)]=\"formulario.valor\" name=\"emailEsqueciSenha\"></ion-input>\n      </ion-item>\n      <div style=\"padding: 5%\">\n        <ion-button expand=\"block\" size=\"large\" color=\"primary\" block (click)=\"recuperar()\">ENVIAR</ion-button>\n      </div>\n    </ion-list>\n  </form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_esqueci-senha_esqueci-senha_module_ts.js.map