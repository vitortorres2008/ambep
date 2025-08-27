(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 27773);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 99474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_core_appSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/core/appSettings */ 83560);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);
/* harmony import */ var _services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pdf-viewer.service */ 32714);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var src_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/core/util */ 36594);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ 55041);














let Tab1Page = class Tab1Page {
    constructor(router, navCtrl, controleAcessoProvider, loadingController, toastController, pdfViewerService, fileOpener, transfer, file, appComponent) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.controleAcessoProvider = controleAcessoProvider;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.pdfViewerService = pdfViewerService;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.file = file;
        this.appComponent = appComponent;
        this.defaultImage = '../../assets/img/main-topo.png?v=' + src_core_util__WEBPACK_IMPORTED_MODULE_8__.Util.newGuid();
        this.dinamicImage = src_core_appSettings__WEBPACK_IMPORTED_MODULE_3__.AppSettings.img.imgPublica + 'app/tela-inicial/main-topo.png?v=' + src_core_util__WEBPACK_IMPORTED_MODULE_8__.Util.newGuid();
        this.defaultIcone = '../../assets/img/main-icone/default.png';
    }
    ngOnInit() {
        console.log('Hello Tab1Page');
    }
    getBlocos() {
        if (this.appComponent.menus === undefined) {
            return [];
        }
        return this.appComponent.menus.filter((el) => { return (el.constante !== 'CARTEIRINHA' || (this.appComponent.temCarteirinha && el.constante === 'CARTEIRINHA')) && el.isBlocoInicial === true; });
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
    getUrlIcone(icone) {
        return src_core_appSettings__WEBPACK_IMPORTED_MODULE_3__.AppSettings.img.imgPublica + 'app/tela-inicial/main-icone/' + icone + '.png';
    }
    getDefaltIcone(icone) {
        return '../../assets/img/main-icone/' + icone + '.png';
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
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_4__.ControleAcessoProvider },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_5__.PdfViewerService },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__.FileTransfer },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__.AppComponent }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 99474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".div-button {\n  text-align: center;\n}\n\n.div-button button {\n  min-height: 100px;\n  width: 80%;\n  background: white;\n  background: linear-gradient(180deg, white 44%, #e4e4e4 100%);\n  border: solid 1px #e4e4e4;\n  border-radius: 5px;\n}\n\n.img-icone-button {\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7RUFDQSx5QkFBQTtFQUdBLGtCQUFBO0FBREo7O0FBSUU7RUFFRSxVQUFBO0FBRkoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmRpdi1idXR0b25cclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2LWJ1dHRvbiBidXR0b24ge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNDQlLCByZ2JhKDIyOCwyMjgsMjI4LDEpIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMjgsMjI4LDIyOCwxKTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLWljb25lLWJ1dHRvbiB7XHJcbiAgICBcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"content-padrao\">\n  <img  [defaultImage]=\"defaultImage\" [lazyLoad]=\"dinamicImage\" style=\"width: 100%;\" />\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" class=\"div-button\" *ngFor=\"let bloco of getBlocos()\">\n        <button expand=\"full\" class=\"button-inicial\" (click)=\"openPage(bloco)\">\n          <img class=\"icon img-icone-button\" [defaultImage]=\"getDefaltIcone(bloco.icone)\" [lazyLoad]=\"getUrlIcone(bloco.icone)\" />\n          <br>\n          <label>{{bloco.titulo}}</label>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map