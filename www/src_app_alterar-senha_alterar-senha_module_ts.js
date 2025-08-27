(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_alterar-senha_alterar-senha_module_ts"],{

/***/ 59999:
/*!***************************************************************!*\
  !*** ./src/app/alterar-senha/alterar-senha-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlterarSenhaPageRoutingModule": () => (/* binding */ AlterarSenhaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _alterar_senha_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alterar-senha.page */ 79865);




const routes = [
    {
        path: '',
        component: _alterar_senha_page__WEBPACK_IMPORTED_MODULE_0__.AlterarSenhaPage
    }
];
let AlterarSenhaPageRoutingModule = class AlterarSenhaPageRoutingModule {
};
AlterarSenhaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlterarSenhaPageRoutingModule);



/***/ }),

/***/ 83707:
/*!*******************************************************!*\
  !*** ./src/app/alterar-senha/alterar-senha.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlterarSenhaPageModule": () => (/* binding */ AlterarSenhaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _alterar_senha_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alterar-senha-routing.module */ 59999);
/* harmony import */ var _alterar_senha_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alterar-senha.page */ 79865);







let AlterarSenhaPageModule = class AlterarSenhaPageModule {
};
AlterarSenhaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alterar_senha_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlterarSenhaPageRoutingModule
        ],
        declarations: [_alterar_senha_page__WEBPACK_IMPORTED_MODULE_1__.AlterarSenhaPage]
    })
], AlterarSenhaPageModule);



/***/ }),

/***/ 79865:
/*!*****************************************************!*\
  !*** ./src/app/alterar-senha/alterar-senha.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlterarSenhaPage": () => (/* binding */ AlterarSenhaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_alterar_senha_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alterar-senha.page.html */ 96850);
/* harmony import */ var _alterar_senha_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alterar-senha.page.scss */ 41801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);






let AlterarSenhaPage = class AlterarSenhaPage {
    constructor(controleAcessoProvider, loadingCtrl, toast, modalController) {
        this.controleAcessoProvider = controleAcessoProvider;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.modalController = modalController;
        this.formulario = {};
    }
    ngOnInit() {
        console.log('AlterarSenhaPage');
    }
    salvar() {
        if (this.formulario.senhaAtual === '' || this.formulario.senhaAtual == null) {
            this.toast.create({ message: 'Por favor, informe a senha atual.', position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present(); });
            // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
            return;
        }
        if (this.formulario.novaSenha === '' || this.formulario.novaSenha == null) {
            this.toast.create({ message: 'Por favor, informe a nova senha.', position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present(); });
            // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
            return;
        }
        if (this.formulario.novaSenha.length < 6) {
            this.toast.create({ message: 'A senha precisar ter no mínimo 6 dígitos.', position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present(); });
            // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
            return;
        }
        // if (!UtilZe.validarSenha(this.formulario.senhaNova)) {
        //   this.toast.create({ message: 'A senha precisar ter ao menos um número e uma letra.', position: 'top', duration: 3000, cssClass: 'toast-warning' }).then((t) => { t.present() });
        //  // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
        //   return;
        // }
        if (this.formulario.novaSenha !== this.formulario.confirmacaoSenha) {
            this.toast.create({ message: 'A nova senha e a confirmação devem ser iguais.', position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present(); });
            // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
            return;
        }
        this.loader = this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: -1
        });
        // this.loader = this.loadingCtrl.create({
        //   content: "Salvando"
        // });
        //this.loader.present();
        this.loader.then((t) => { t.present(); });
        this.controleAcessoProvider.alterarSenha(this.formulario)
            .then((result) => {
            this.toast.create({ message: 'Senha alterada com sucesso.', position: 'top', duration: 3000 }).then((t) => { t.present(); });
            this.loader.then((t) => { t.dismiss(); });
            this.closeModal();
        })
            .catch((error) => {
            this.loader.then((t) => { t.dismiss(); });
            this.toast.create({ message: error.message, position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present(); });
            //  if (error.action === 'MSG') {
            //    //let modal = this.modalController.create('AlertaErroPage', { erro: { close: true, detalhe: error.message } });
            //    //modal.onDidDismiss(contato => { });
            //    //modal.present();
            //  }
            //  else {
            //    if (error.root) { 
            //      this.navCtrl.setRoot(error.page); }
            //    else { this.navCtrl.push(error.page) }
            //  }
        });
    }
    closeModal() {
        this.modalController.getTop().then((p) => {
            p.dismiss();
        });
    }
};
AlterarSenhaPage.ctorParameters = () => [
    { type: src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_2__.ControleAcessoProvider },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
AlterarSenhaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-alterar-senha',
        template: _raw_loader_alterar_senha_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alterar_senha_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlterarSenhaPage);



/***/ }),

/***/ 41801:
/*!*******************************************************!*\
  !*** ./src/app/alterar-senha/alterar-senha.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".toast-red .toast-message {\n  background-color: red;\n}\n\n.toast-danger .toast-message {\n  background-color: #f22c1c;\n}\n\n.toast-info .toast-message {\n  background-color: #068639;\n}\n\n.toast-warning .toast-message {\n  background-color: #ff9800;\n}\n\n.toast-azul .toast-message {\n  background-color: #288FD2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdGVyYXItc2VuaGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNhO0VBQWlCLHFCQUFBO0FBQzlCOztBQUNnQjtFQUFpQix5QkFBQTtBQUdqQzs7QUFEYztFQUFpQix5QkFBQTtBQUsvQjs7QUFIaUI7RUFBaUIseUJBQUE7QUFPbEM7O0FBTGM7RUFBaUIseUJBQUE7QUFTL0IiLCJmaWxlIjoiYWx0ZXJhci1zZW5oYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvYXN0LXJlZCB7IC50b2FzdC1tZXNzYWdlIHsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9IH1cclxuXHJcbi50b2FzdC1kYW5nZXIgeyAudG9hc3QtbWVzc2FnZSB7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDQ0LCAyOCk7IH0gfVxyXG5cclxuLnRvYXN0LWluZm8geyAudG9hc3QtbWVzc2FnZSB7IGJhY2tncm91bmQtY29sb3I6IHJnYig2LCAxMzQsIDU3KTsgfSB9XHJcblxyXG4udG9hc3Qtd2FybmluZyB7IC50b2FzdC1tZXNzYWdlIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTUyLCAwKTsgfSB9XHJcblxyXG4udG9hc3QtYXp1bCB7IC50b2FzdC1tZXNzYWdlIHsgYmFja2dyb3VuZC1jb2xvcjogIzI4OEZEMjsgfSB9Il19 */");

/***/ }),

/***/ 96850:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alterar-senha/alterar-senha.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Alterar Senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"text-align: center; padding: 20px;\">\n    <img src=\"../../assets/img/logo-ambep.png\" style=\"width: 50%;\">\n  </div>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Senha Atual</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"formulario.senhaAtual\" name=\"senhaAtual\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Senha Nova</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"formulario.novaSenha\" name=\"novaSenha\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Confirmar Senha</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"formulario.confirmacaoSenha\" name=\"confirmacaoSenha\"></ion-input>\n      </ion-item>\n      <div style=\"padding: 5%\">\n        <ion-button expand=\"block\" color=\"primary\" size=\"large\" block (click)=\"salvar()\">ALTERAR</ion-button>\n      </div>\n    </ion-list>\n  </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_alterar-senha_alterar-senha_module_ts.js.map