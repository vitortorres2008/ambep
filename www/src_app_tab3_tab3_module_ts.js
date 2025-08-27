(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 64255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 90943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ 55041);











let Tab3Page = class Tab3Page {
    constructor(router, navCtrl, loadingController, toastController, fileOpener, transfer, controleAcessoProvider, file, appComponent) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.controleAcessoProvider = controleAcessoProvider;
        this.file = file;
        this.appComponent = appComponent;
    }
    ngOnInit() {
    }
    openPage(page) {
        setTimeout(() => {
            if (page.guid !== null && page.guid !== undefined) {
                this.controleAcessoProvider.navegacaoGravar(page.guid).then((result) => {
                    console.log(result);
                });
            }
        }, 100);
        if (page.componente === 'WebViewPdfPage') {
            this.download(page.param);
            return;
        }
        this.router.navigate([page.route], {
            queryParams: page,
        });
    }
    getMenus() {
        if (this.appComponent.menus === undefined) {
            return [];
        }
        return this.appComponent.menus.filter((el) => { return el.constante !== 'CARTEIRINHA' || (this.appComponent.temCarteirinha && el.constante === 'CARTEIRINHA'); });
    }
    download(url) {
        let arrayUrl = url.split('/');
        let title = arrayUrl[arrayUrl.length - 1].replace('.pdf', '');
        let _this = this;
        _this.loading = this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: -1
        });
        _this.loading.then((t) => { t.present(); });
        _this.fileOpener.open(_this.file.dataDirectory + title + ".pdf", "application/pdf").then(() => {
            console.log("File is opened");
            _this.loading.then((t) => { t.dismiss(); });
            _this.toastController.create({ message: 'Arquivo disponível!', position: 'bottom', duration: 3000 }).then((t) => { t.present(); });
        })
            .catch(() => {
            _this.fileTransfer = _this.transfer.create();
            _this.fileTransfer.download(url, _this.file.dataDirectory + title + ".pdf").then(entry => {
                console.log("download complete: " + entry.toURL());
                _this.fileOpener.open(entry.toURL(), "application/pdf").then(() => {
                    console.log("File is opened");
                    _this.loading.then((t) => { t.dismiss(); });
                    _this.toastController.create({ message: 'Arquivo disponível!', position: 'bottom', duration: 3000 }).then((t) => { t.present(); });
                })
                    .catch(e => {
                    console.log("Error opening file", e);
                    _this.loading.then((t) => { t.dismiss(); });
                    _this.toastController.create({ message: 'Identificamos uma dificuldade em abrir o pdf. Por favor, tente novamente!', position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present(); });
                });
            })
                .catch(e => {
                console.log("Error download file", e);
                _this.loading.then((t) => { t.dismiss(); });
                _this.toastController.create({ message: 'Identificamos uma dificuldade em acessar o pdf. Por favor, tente novamente!', position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present(); });
            });
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__.FileOpener },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer },
    { type: src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_5__.ControleAcessoProvider },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 90943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".meu-menu {\n  background-color: #4aa3df !important;\n  color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksb0NBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWV1LW1lbnVcclxuICB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDEzLCAxNiwgMjApLCByZ2IoNDYsIDUzLCA2MSkpICFpbXBvcnRhbnQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc0LCAxNjMsIDIyMykgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBcclxuICB9Il19 */");

/***/ }),

/***/ 64255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" class=\"meu-menu\">\n  <div style=\"text-align: center; padding: 20px;\">\n    <img src=\"../../assets/img/logo-ambep.png\" style=\"width: 50%;\">\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let page of getMenus()\" (click)=\"openPage(page)\"\n      style=\"background-color: transparent; color: rgb(129, 135, 151);font-weight: 300; border: none\">\n      <ion-label style=\"font-weight: bolder !important; font-size: 18px;\">{{page.titulo}}</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"openPage({route:'/login'})\"\n      style=\"background-color: transparent; color: rgb(129, 135, 151);font-weight: 300; border: none\">\n      <ion-label style=\"font-weight: bolder !important; font-size: 18px;\">Sair</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map