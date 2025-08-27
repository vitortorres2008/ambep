(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _consulta_consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta/consulta.page */ 89894);
/* harmony import */ var _web_view_pdf_web_view_pdf_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-view-pdf/web-view-pdf.page */ 40511);
/* harmony import */ var _web_view_web_view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-view/web-view.page */ 80487);






const routes = [
    // {
    //   path: '',
    //   loadChildren: () => import('./preload-app/preload-app.module').then(m => m.PreloadAppPageModule)
    // },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'login/:email/:senha',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'web-view',
        component: _web_view_web_view_page__WEBPACK_IMPORTED_MODULE_2__.WebViewPage,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_web-view_web-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./web-view/web-view.module */ 44947)).then(m => m.WebViewPageModule)
    },
    {
        path: 'consulta',
        component: _consulta_consulta_page__WEBPACK_IMPORTED_MODULE_0__.ConsultaPage,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2020_ng-lazyload-image_mjs"), __webpack_require__.e("src_app_consulta_consulta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./consulta/consulta.module */ 46372)).then(m => m.ConsultaPageModule)
    },
    {
        path: 'carteirinha',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2020_ng-lazyload-image_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_carteirinha_carteirinha_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./carteirinha/carteirinha.module */ 17672)).then(m => m.CarteirinhaPageModule)
    },
    {
        path: 'carteirinhas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-lazyload-image_fesm2020_ng-lazyload-image_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_carteirinhas_carteirinhas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./carteirinhas/carteirinhas.module */ 96658)).then(m => m.CarteirinhasPageModule)
    },
    {
        path: 'contato',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contato_contato_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contato/contato.module */ 22674)).then(m => m.ContatoPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./perfil/perfil.module */ 91320)).then(m => m.PerfilPageModule)
    },
    {
        path: 'cadastrar-usuario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cadastrar-usuario_cadastrar-usuario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cadastrar-usuario/cadastrar-usuario.module */ 25639)).then(m => m.CadastrarUsuarioPageModule)
    },
    {
        path: 'alterar-senha',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_alterar-senha_alterar-senha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./alterar-senha/alterar-senha.module */ 83707)).then(m => m.AlterarSenhaPageModule)
    },
    {
        path: 'esqueci-senha',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_esqueci-senha_esqueci-senha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./esqueci-senha/esqueci-senha.module */ 41264)).then(m => m.EsqueciSenhaPageModule)
    },
    {
        path: 'preload-app',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_preload-app_preload-app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preload-app/preload-app.module */ 97043)).then(m => m.PreloadAppPageModule)
    },
    {
        path: 'web-view-pdf',
        component: _web_view_pdf_web_view_pdf_page__WEBPACK_IMPORTED_MODULE_1__.WebViewPdfPage,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_web-view-pdf_web-view-pdf_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./web-view-pdf/web-view-pdf.module */ 9237)).then(m => m.WebViewPdfPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/api/api */ 72274);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);








let AppComponent = class AppComponent {
    constructor(api, router, controleAcessoProvider, loadingController, toastController) {
        this.api = api;
        this.router = router;
        this.controleAcessoProvider = controleAcessoProvider;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.temCarteirinha = false;
    }
    ngOnInit() {
        //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        let _this = this;
        _this.loading = _this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: -1
        });
        _this.loading.then((t) => { t.present(); });
        _this.api.get('/AppControleAcesso/UsuarioLogado').then((result) => {
            console.log(result);
            localStorage.setItem("ambepUser", JSON.stringify(result));
            _this.controleAcessoProvider.menus().then((result) => {
                console.log(result);
                _this.menus = result;
                _this.loading.then((t) => { t.dismiss(); });
                localStorage.setItem("ambepMenu", JSON.stringify(result));
                _this.controleAcessoProvider.exibeMenuCarteirinha().then((result) => {
                    console.log(result);
                    _this.temCarteirinha = result;
                });
            }, (error) => {
                console.log(error);
                _this.loading.then((t) => { t.dismiss(); });
                _this.toastController.create({ message: 'Favor autenticar para acessar o app', position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present(); });
                _this.router.navigateByUrl('login');
            });
        }, (error) => {
            console.error('err 1 = ', error);
            _this.loading.then((t) => { t.dismiss(); });
            _this.router.navigateByUrl('login');
        }).catch(err => {
            console.error('err = ', err);
            _this.loading.then((t) => { t.dismiss(); });
            _this.router.navigateByUrl('login');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: src_providers_api_api__WEBPACK_IMPORTED_MODULE_2__.ApiProvider },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_3__.ControleAcessoProvider },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_providers_api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/api/api */ 72274);
/* harmony import */ var src_providers_associado_associado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/associado/associado */ 57499);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);
/* harmony import */ var src_providers_usuario_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/usuario/usuario */ 31796);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/pdf-viewer.service */ 32714);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var src_providers_consulta_consulta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/providers/consulta/consulta */ 23122);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_http__WEBPACK_IMPORTED_MODULE_13__.HttpModule,
            _angular_http__WEBPACK_IMPORTED_MODULE_13__.JsonpModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule
        ],
        providers: [
            src_providers_api_api__WEBPACK_IMPORTED_MODULE_0__.ApiProvider,
            src_providers_associado_associado__WEBPACK_IMPORTED_MODULE_1__.AssociadoProvider,
            src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_2__.ControleAcessoProvider,
            src_providers_consulta_consulta__WEBPACK_IMPORTED_MODULE_10__.ConsultaProvider,
            src_providers_usuario_usuario__WEBPACK_IMPORTED_MODULE_3__.UsuarioProvider,
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__.FileTransfer,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__.FileOpener,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File,
            _services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_7__.PdfViewerService,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 89894:
/*!*******************************************!*\
  !*** ./src/app/consulta/consulta.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPage": () => (/* binding */ ConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consulta.page.html */ 77980);
/* harmony import */ var _consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page.scss */ 30638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_assets_model_FiltroModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/model/FiltroModel */ 49543);
/* harmony import */ var src_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/core/util */ 36594);
/* harmony import */ var src_providers_consulta_consulta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/consulta/consulta */ 23122);









let ConsultaPage = class ConsultaPage {
    constructor(navParams, modalController, router, consultaProv, 
    //private appComponent: AppComponent,
    activatedRoute) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.router = router;
        this.consultaProv = consultaProv;
        this.activatedRoute = activatedRoute;
        this.filtroTemp = {};
        this.parceiroTipo = {};
        this.filtro = new src_assets_model_FiltroModel__WEBPACK_IMPORTED_MODULE_2__.Filtro();
        this.constanteTipo = this.activatedRoute.snapshot.params.constante;
        this.especialidades = [];
        this.loadingEspecialidades = false;
        this.textExemploConsulta = '(ex: casa+saude) ou (ex: curso+espanhol) ou (ex: civel+trabalhista)';
        switch (this.constanteTipo) {
            case 'IPAM':
                this.textExemploConsulta = '(ex: casa+saude)';
                break;
            case 'CONVENIO':
                this.textExemploConsulta = '(ex: curso+espanhol)';
                break;
            case 'PROJUR':
                this.textExemploConsulta = '(ex: civel+trabalhista)';
                break;
        }
        this.consultaProv.parceiroTipo(this.constanteTipo).then((result) => {
            console.log(result);
            if (result === null) {
                this.router.navigate(['/consulta-erro']);
            }
            //this.appComponent.parceiroTipo = result;
            this.parceiroTipo = result;
            this.filtro.guidParceiroTipo = this.parceiroTipo.guid;
            localStorage.setItem(this.constanteTipo + '_ParceiroTipo', JSON.stringify(result));
        }, (error) => {
            console.log(error);
            this.router.navigate(['/consulta-erro']);
        });
        if (localStorage.getItem(this.constanteTipo + '_Filtro') !== null) {
            this.filtroTemp = JSON.parse(localStorage.getItem(this.constanteTipo + '_Filtro'));
            this.filtro.descricao = '';
            if (this.filtroTemp.especialidades === undefined) {
                this.filtro.especialidades = [];
            }
            else {
                this.filtro.especialidades = this.filtroTemp.especialidades;
            }
            this.filtro.uf = this.filtroTemp.uf;
            this.filtro.cidade = this.filtroTemp.cidade;
            this.filtro.bairro = this.filtroTemp.bairro;
        }
    }
    ;
    ngOnInit() { }
    ;
    ngAfterViewInit() {
        setTimeout(() => {
            this.verificarShowLocalizacao();
        }, 1000);
    }
    ;
    addRemEspecialidade(especialidade) {
        let temp = this.filtro.especialidades.find((x) => x === especialidade);
        if (temp === null || temp === undefined) {
            this.filtro.especialidades.push(especialidade);
        }
        else {
            this.filtro.especialidades.splice(this.filtro.especialidades.indexOf(especialidade), 1);
        }
        localStorage.setItem(this.constanteTipo + '_Filtro', JSON.stringify(this.filtro));
    }
    carregarEspecialidades() {
        this.especialidades = [];
        if (this.filtro.uf !== null && this.filtro.guidParceiroTipo !== src_core_util__WEBPACK_IMPORTED_MODULE_3__.Util.guidEmpty()) {
            this.loadingEspecialidades = true;
            this.consultaProv.especialidades(this.filtro).then((result) => {
                console.log(result);
                this.especialidades = result;
                this.loadingEspecialidades = false;
            }, (error) => {
                console.log(error);
            });
        }
    }
    ;
    verificarShowLocalizacao() {
        // if (this.filtro.uf === null || this.filtro.uf === '' || this.filtro.uf === undefined) {
        //   this.btnShowLocalizacao.nativeElement.click();
        // }
    }
    ;
    atualizarLocalizacao() {
        setTimeout(() => {
            this.verificarShowLocalizacao();
        }, 1000);
        localStorage.setItem(this.constanteTipo + '_Filtro', JSON.stringify(this.filtro));
    }
    ;
    consultar() {
        localStorage.setItem(this.constanteTipo + '_Filtro', JSON.stringify(this.filtro));
        this.router.navigate(['/consulta-resultado/' + this.constanteTipo]);
    }
    ;
    onKey(event) {
        console.log(event);
        if (event.ctrlKey === false && event.keyCode === 13) {
            this.consultar();
        }
    }
    ;
};
ConsultaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_providers_consulta_consulta__WEBPACK_IMPORTED_MODULE_4__.ConsultaProvider },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
ConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-consulta',
        template: _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultaPage);



/***/ }),

/***/ 32714:
/*!************************************************!*\
  !*** ./src/app/services/pdf-viewer.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfViewerService": () => (/* binding */ PdfViewerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






let PdfViewerService = class PdfViewerService {
    constructor(fileOpener, transfer, file) {
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.file = file;
        console.log('PdfViewerService');
    }
    downloadPdf(url, title) {
        return new Promise((resolve, reject) => {
            this.fileTransfer = this.transfer.create();
            this.fileTransfer.download(url, this.file.dataDirectory + title + ".pdf").then(entry => {
                console.log("download complete: " + entry.toURL());
                this.fileOpener.open(entry.toURL(), "application/pdf").then(() => {
                    console.log("File is opened");
                    resolve(true);
                })
                    .catch(e => { console.log("Error opening file", e); reject(e); });
            })
                .catch(e => { console.log("Error download file", e); reject(e); });
        });
    }
};
PdfViewerService.ctorParameters = () => [
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_1__.FileTransfer },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_0__.File }
];
PdfViewerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PdfViewerService);



/***/ }),

/***/ 40511:
/*!***************************************************!*\
  !*** ./src/app/web-view-pdf/web-view-pdf.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebViewPdfPage": () => (/* binding */ WebViewPdfPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_web_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./web-view-pdf.page.html */ 4455);
/* harmony import */ var _web_view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-view-pdf.page.scss */ 61122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pdf-viewer.service */ 32714);








let WebViewPdfPage = class WebViewPdfPage {
    constructor(sanitizer, activatedRoute, loadingController, pdfViewerService) {
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.pdfViewerService = pdfViewerService;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('#');
        console.log('WebViewPdfPage');
        this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: 2000
        }).then((t) => { t.present(); });
        this.activatedRoute.queryParams.subscribe((res) => {
            this.page = res;
            this.pdfViewerService.downloadPdf(this.page.param, this.page.titulo);
            //this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/gview?url=' + this.page.param);
        });
    }
    ;
    ngOnInit() {
    }
};
WebViewPdfPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_2__.PdfViewerService }
];
WebViewPdfPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-web-view-pdf',
        template: _raw_loader_web_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_web_view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WebViewPdfPage);



/***/ }),

/***/ 80487:
/*!*******************************************!*\
  !*** ./src/app/web-view/web-view.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebViewPage": () => (/* binding */ WebViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_web_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./web-view.page.html */ 87441);
/* harmony import */ var _web_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-view.page.scss */ 23688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let WebViewPage = class WebViewPage {
    constructor(sanitizer, activatedRoute, loadingController) {
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('#');
        this.activatedRoute.queryParams.subscribe((res) => {
            this.page = res;
            if (this.page.timeLoad > 0) {
                this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Aguarde...',
                    duration: this.page.timeLoad
                }).then((t) => { t.present(); });
            }
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.page.param);
        });
    }
    ;
    ngOnInit() {
    }
};
WebViewPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
WebViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-web-view',
        template: _raw_loader_web_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_web_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WebViewPage);



/***/ }),

/***/ 49543:
/*!*****************************************!*\
  !*** ./src/assets/model/FiltroModel.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filtro": () => (/* binding */ Filtro)
/* harmony export */ });
class Filtro {
    constructor() {
        this.nivel = 0;
        this.guidParceiroTipo = null;
        this.descricao = '';
        this.especialidades = [];
        this.uf = '';
        this.cidade = '';
        this.bairro = '';
        this.groupBy = '';
        this.orderBy = '';
        this.asc = true;
        this.limit = 10;
        this.offSet = 0;
    }
}
;


/***/ }),

/***/ 83560:
/*!*********************************!*\
  !*** ./src/core/appSettings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings)
/* harmony export */ });
/**
 * Configurações globais do APP,
 * possui as constantes e demais configurações globais
 */
const AppSettings = {
    nhaAuth: {
        Free: 0,
        LoginRequired: 1,
        NoAutorized: 2,
        AdminRequired: 3,
        Autorized: 4
    },
    img: {
        //imgCarteirinha: "https://ambep-api-2.azurewebsites.net/api/v1/CarteirinhaImagem/",
        imgCarteirinha: "https://api.ambep.org.br/api/v1/CarteirinhaImagem/",
        imgPublica: "https://servicos.ambep.org.br/publico/",
        linkShare: "https://servicos.ambep.org.br/",
    },
    serverApi: {
        //LOCAL
        //url: "https://localhost:5001",
        url: "https://api.ambep.org.br",
        //url: 'https://ambep-api-2.azurewebsites.net',
        imgCarteirinha: "https://api.ambep.org.br/api/v1/CarteirinhaImagem/",
        //imgCarteirinha: "https://ambep-api-2.azurewebsites.net/api/v1/CarteirinhaImagem/",
        //imgCarteirinha: "https://localhost:5001/api/v1/CarteirinhaImagem/",
        versionBase: "/api/v1",
    }
};


/***/ }),

/***/ 92742:
/*!*******************************************!*\
  !*** ./src/core/defaultRequestOptions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRequestOptions": () => (/* binding */ DefaultRequestOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ 54679);



let DefaultRequestOptions = class DefaultRequestOptions extends _angular_http__WEBPACK_IMPORTED_MODULE_0__.BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('ambepToken'));
    }
    merge(options) {
        const newOptions = super.merge(options);
        newOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem('ambepToken'));
        return newOptions;
    }
};
DefaultRequestOptions.ctorParameters = () => [];
DefaultRequestOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], DefaultRequestOptions);



/***/ }),

/***/ 36594:
/*!**************************!*\
  !*** ./src/core/util.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Util": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 16137);



class Util {
    constructor(http) {
        this.http = http;
    }
    /**
     * newGuid gera uma nova GUID
     *
     */
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static guidEmpty() {
        return '00000000-0000-0000-0000-000000000000';
    }
    static IsEmail(email) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            return false;
        }
        return true;
    }
    static validarData(p) {
        var patternData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
        if (!patternData.test(p)) {
            return false;
        }
        if (new String(Date.parse(p)) === 'NaN') {
            return false;
        }
        return true;
    }
    static formatarMesAno(p) {
        var v = p;
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/g, "$1/$2"); //Coloca parênteses em volta dos dois primeiros dígitos
        return v;
    }
    static limparDadosNumerico(p) {
        let v = p.replace(/\D/g, "");
        return v.trim();
    }
    static limparDados(p) {
        let v = p.replace(/\s+/g, '');
        return v.trim();
    }
    //Deixa apenas numero
    static onlyNumeric(p) {
        var v = p;
        v = v.replace(/\D/g, "");
        return v;
    }
    static getCodigoAreaTelefone(p) {
        var v = p;
        v = v.replace(/\D/g, "");
        return v.substring(0, 2);
    }
    static getNumeroTelefone(p) {
        var v = p;
        v = v.replace(/\D/g, "");
        return v.substring(2, v.length);
    }
    static validarSenha(senha) {
        let er = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!er.exec(senha)) {
            return false;
        }
        return true;
    }
    /**
     * isNullOrWhiteSpace verifica se uma string é nula ou vazia
     */
    static isNullOrWhiteSpace(value) {
        return value === null || value === undefined || value.trim() === "";
    }
    static crypt(salt, text) {
        const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
        const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
        return text
            .split("")
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join("");
    }
    ;
    static decrypt(salt, encoded) {
        const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
        return encoded
            .match(/.{1,2}/g)
            .map((hex) => parseInt(hex, 16))
            .map(applySaltToChar)
            .map((charCode) => String.fromCharCode(charCode))
            .join("");
    }
    ;
    //#region Upload Raiz
    _b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    _sendBlob(uri, file, blob) {
        var parentThis = this;
        let result = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("progress", parentThis._uploadProgress);
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var url = uri.split("?")[0];
                    observer.next("sucesso");
                    // q.resolve({
                    //   "Upload": url,
                    //   "ImagensMd": url.replace("upload", "imagens-md"),
                    //   "ImagensSm": url.replace("upload", "imagens-sm"),
                    //   "ImagensThumbnail": url.replace("upload", "imagens-thumbnail")
                    // });
                    console.log(this);
                    console.log({
                        "Upload": url,
                        "ImagensMd": url.replace("upload", "imagens-md"),
                        "ImagensSm": url.replace("upload", "imagens-sm"),
                        "ImagensThumbnail": url.replace("upload", "imagens-thumbnail")
                    });
                }
            });
            xhr.addEventListener("error", function (err) {
                // q.reject(err);
                console.error(err);
                observer.error(err);
            });
            xhr.open("PUT", uri);
            xhr.setRequestHeader("x-ms-version", "2015-02-21");
            xhr.setRequestHeader("content-type", file.type);
            xhr.setRequestHeader("x-ms-blob-type", "BlockBlob");
            xhr.setRequestHeader("x-ms-meta-m1", "v1");
            xhr.setRequestHeader("x-ms-meta-m2", "v2");
            xhr.setRequestHeader("cache-control", "no-cache");
            //xhr.setRequestHeader("content-length", file.size);
            xhr.send(blob);
        });
        return result;
    }
    _uploadProgress(oEvent) {
        if (oEvent.lengthComputable) {
            var percentComplete = oEvent.loaded / oEvent.total;
            console.log("Progress:" + percentComplete);
        }
        else {
            // Unable to compute progress information since the total size is unknown
        }
    }
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 72274:
/*!**********************************!*\
  !*** ./src/providers/api/api.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiProvider": () => (/* binding */ ApiProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_appSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/appSettings */ 83560);
/* harmony import */ var _core_defaultRequestOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/defaultRequestOptions */ 92742);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 69165);







let ApiProvider = class ApiProvider {
    constructor(http) {
        this.http = http;
        console.log('Hello ApiProvider Provider');
    }
    get(Rota) {
        return new Promise((resolve, reject) => {
            let url = _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.url + _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.versionBase + Rota;
            this.http.get(url, new _core_defaultRequestOptions__WEBPACK_IMPORTED_MODULE_1__.DefaultRequestOptions())
                .subscribe((result) => {
                resolve(result.json());
            }, (error) => {
                console.log('erro: ' + JSON.stringify(error));
                reject(this._ClassificarRetorno(error));
            });
        });
    }
    get2(Rota) {
        let url = _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.url + _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.versionBase + Rota;
        let retorno = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(obs => {
            this.http.get(url, new _core_defaultRequestOptions__WEBPACK_IMPORTED_MODULE_1__.DefaultRequestOptions())
                .map(res => res.json())
                .subscribe(rss => {
                obs.next(rss);
            }, error => {
                //obs.error('Usuário ou senha inválidos!');
                console.log('erro: ' + JSON.stringify(error));
                let erro = { code: '', action: 'MSG', message: '', page: '', root: false };
                switch (error.status) {
                    case 401:
                        erro = { code: '', action: 'OPEN_PAGE', message: 'Autorização negada', page: 'LoginPage', root: true };
                        break;
                    case 404:
                        erro = { code: '', action: 'MSG', message: 'Rota não encontrada.', page: '' };
                        break;
                    default:
                        erro = { code: '', action: 'MSG', message: 'Sem comunicação com o servidor', page: '' };
                        break;
                }
                obs.error(erro);
            });
        });
        return retorno;
    }
    post(Rota, Model) {
        return this.postRequestOption(Rota, Model, true);
    }
    postRequestOption(Rota, Model, PassRequestOption) {
        return new Promise((resolve, reject) => {
            let url = _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.url + _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.versionBase + Rota;
            this.http.post(url, Model, new _core_defaultRequestOptions__WEBPACK_IMPORTED_MODULE_1__.DefaultRequestOptions())
                .subscribe((result) => {
                resolve(result.json());
            }, (error) => {
                console.log('erro: ' + JSON.stringify(error));
                reject(this._ClassificarRetorno(error));
            });
        });
    }
    put(Rota, Model) {
        return new Promise((resolve, reject) => {
            let url = _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.url + _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.versionBase + Rota;
            this.http.put(url, Model, new _core_defaultRequestOptions__WEBPACK_IMPORTED_MODULE_1__.DefaultRequestOptions())
                .subscribe((result) => {
                resolve(result.json());
            }, (error) => {
                console.log('erro: ' + JSON.stringify(error));
                reject(this._ClassificarRetorno(error));
            });
        });
    }
    delete(Rota) {
        return new Promise((resolve, reject) => {
            let url = _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.url + _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.versionBase + Rota;
            this.http.delete(url, new _core_defaultRequestOptions__WEBPACK_IMPORTED_MODULE_1__.DefaultRequestOptions())
                .subscribe((result) => {
                resolve(result.json());
            }, (error) => {
                console.log('erro: ' + JSON.stringify(error));
                reject(this._ClassificarRetorno(error));
            });
        });
    }
    postNotToken(Rota, Model) {
        return new Promise((resolve, reject) => {
            let url = _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.url + _core_appSettings__WEBPACK_IMPORTED_MODULE_0__.AppSettings.serverApi.versionBase + Rota;
            this.http.post(url, Model)
                .subscribe((result) => {
                resolve(result.json());
            }, (error) => {
                console.log('erro: ' + JSON.stringify(error));
                reject(error.json());
            });
        });
    }
    _ClassificarRetorno(error) {
        let code = Math.floor(error.status);
        let erro = { code: '', action: 'MSG', titulo: '', message: '', page: '', root: false };
        switch (code) {
            case 400:
                erro = { code: '400', action: 'MSG', titulo: 'Autorização negada', message: 'O usuário não tem autorização.', page: '' };
                break;
            case 401:
                erro = { code: '401', action: 'OPEN_PAGE', titulo: 'Autorização negada', message: 'O usuário não tem autorização para acessar esse recurso.', page: 'LoginPage', root: true };
                break;
            case 404:
                erro = { code: '404', action: 'MSG', titulo: 'Rota não encontrada', message: 'Não foi possível encontrar a rota para realizar a operação.', page: '' };
                break;
            case 412:
                erro = { code: '412', action: 'MSG', titulo: 'Restrição do formulário', message: 'Campos de preenchimento obrigatórios', page: '' };
                break;
            //Mensagem enviada pela api.
            case 417:
                erro = { code: '417', action: 'MSG', titulo: 'Mensagem de retorno', message: error._body, page: '' };
                break;
            case 502:
                erro = { code: '502', action: 'MSG', titulo: 'Sem comunicação', message: 'O servidor não respondeu a requisição.', page: '' };
                break;
            case 500:
                erro = { code: '500', action: 'MSG', titulo: 'Falha na comunicação', message: 'Dificuldades na comuicação com o servidor.', page: '' };
                break;
            default:
                erro = { code: '', action: 'MSG', titulo: 'Falha na comunicação', message: 'Dificuldades na comuicação com o servidor.', page: '' };
                break;
        }
        return erro;
    }
};
ApiProvider.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__.Http }
];
ApiProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ApiProvider);



/***/ }),

/***/ 57499:
/*!**********************************************!*\
  !*** ./src/providers/associado/associado.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociadoProvider": () => (/* binding */ AssociadoProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ 72274);




let AssociadoProvider = class AssociadoProvider {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        console.log('Hello AssociadoProvider');
    }
    guidsCarteirinhas() {
        return this.api.get('/AssociadoLotacao/App/Carteirinhas/Guid');
    }
    carteirinhas() {
        return this.api.get('/AssociadoLotacao/App/Carteirinhas');
    }
};
AssociadoProvider.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__.Http },
    { type: _api_api__WEBPACK_IMPORTED_MODULE_0__.ApiProvider }
];
AssociadoProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], AssociadoProvider);



/***/ }),

/***/ 23122:
/*!********************************************!*\
  !*** ./src/providers/consulta/consulta.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaProvider": () => (/* binding */ ConsultaProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ 72274);



let ConsultaProvider = class ConsultaProvider {
    constructor(
    //public http: Http
    api) {
        this.api = api;
        console.log('Hello Consulta Provider');
    }
    parceiroTipo(constante) {
        return this.api.get('/ConsultaParceiro/ParceiroTipo/Constante/' + constante);
    }
    ufs() {
        return this.api.get('/ConsultaParceiro/Estados');
    }
    cidades(guidParceiroTipo, uf) {
        return this.api.get('/ConsultaParceiro/Cidades/' + guidParceiroTipo + '/' + uf + '');
    }
    bairros(guidParceiroTipo, cidade) {
        return this.api.get('/ConsultaParceiro/Bairros/' + guidParceiroTipo + '/' + cidade + '');
    }
    parceiros(filtro) {
        return this.api.post('/ConsultaParceiro/Parceiros', filtro);
    }
    especialidades(filtro) {
        return this.api.post('/ConsultaParceiro/Especialidades', filtro);
    }
};
ConsultaProvider.ctorParameters = () => [
    { type: _api_api__WEBPACK_IMPORTED_MODULE_0__.ApiProvider }
];
ConsultaProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], ConsultaProvider);



/***/ }),

/***/ 87058:
/*!**********************************************************!*\
  !*** ./src/providers/controle-acesso/controle-acesso.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControleAcessoProvider": () => (/* binding */ ControleAcessoProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ 72274);




let ControleAcessoProvider = class ControleAcessoProvider {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        console.log('Hello AppControleAcessoProvider');
    }
    menus() {
        return this.api.get('/AppControleAcesso/Menus');
    }
    menusTelaInicial() {
        return this.api.get('/AppControleAcesso/Menus/TelaInicial');
    }
    exibeMenuCarteirinha() {
        return this.api.get('/AppControleAcesso/ExibeMenuCarteirinha');
    }
    navegacaoGravar(_guid) {
        return this.api.post('/AppControleAcesso/Navegacao/Gravar', { guid: _guid });
    }
    alterarSenha(model) {
        return this.api.put('/AppControleAcesso/AlterarSenha', model);
    }
    esqueciSenha(model) {
        return this.api.put('/AppControleAcesso/EsqueciSenha', model);
    }
};
ControleAcessoProvider.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__.Http },
    { type: _api_api__WEBPACK_IMPORTED_MODULE_0__.ApiProvider }
];
ControleAcessoProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], ControleAcessoProvider);



/***/ }),

/***/ 31796:
/*!******************************************!*\
  !*** ./src/providers/usuario/usuario.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioProvider": () => (/* binding */ UsuarioProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ 72274);




let UsuarioProvider = class UsuarioProvider {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        console.log('Hello UsuarioProvider');
    }
    cadastrar(model) {
        return this.api.put('/AppUsuario/Cadastrar', model);
    }
};
UsuarioProvider.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__.Http },
    { type: _api_api__WEBPACK_IMPORTED_MODULE_0__.ApiProvider }
];
UsuarioProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], UsuarioProvider);



/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 30638:
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 61122:
/*!*****************************************************!*\
  !*** ./src/app/web-view-pdf/web-view-pdf.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWItdmlldy1wZGYucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 23688:
/*!*********************************************!*\
  !*** ./src/app/web-view/web-view.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWItdmlldy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 77980:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consulta/consulta.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{page.titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-sm-12 col-md-10 col-xl-6 col-lg-6\">\n      <img src=\"../../assets/icon/question-circle-fill.svg\" alt=\"Ajuda\" width=\"30\" height=\"30\" class=\"icone-ajuda\" data-toggle=\"modal\" data-target=\"#modalAjuda\">\n\n      <h1 class=\"display-4 text-center\"><img src=\"../assets/img/logo-consulta-main.png?v=1\"></h1>\n      <div class=\"row justify-content-md-center div-linha cursor-hand\" data-toggle=\"modal\" #btnShowLocalizacao\n        data-target=\"#exampleModal\">\n        <div class=\"col-12 text-center\">\n          <img src=\"../assets/icon/geo-alt-fill.svg\" alt=\"localizacao\" width=\"25\" height=\"25\" class=\"icone\">\n          <span *ngIf=\"filtro.bairro !== null && filtro.bairro !== ''\">{{filtro.bairro}}</span>\n          <span *ngIf=\"filtro.cidade !== null && filtro.cidade !== ''\"><span\n              *ngIf=\"filtro.bairro !== null && filtro.bairro !== ''\">,</span>&nbsp;{{filtro.cidade}}</span>\n          <span *ngIf=\"filtro.uf !== null && filtro.uf !== ''\"><span\n              *ngIf=\"filtro.cidade !== null && filtro.cidade !== ''\">,</span>&nbsp;{{filtro.uf}}</span>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 mt-2 div-linha\">\n          <label class=\"hashtag-especialidade-filtro\" *ngFor=\"let especialidade of filtro.especialidades\" (click)=\"addRemEspecialidade(especialidade)\">\n              #{{especialidade}}\n              <label class=\"hashtag-especialidade-filtro-close\">X</label>\n          </label>\n      </div>\n      <div class=\"row justify-content-md-center div-linha\">\n        <div class=\"col-1\" style=\"position: relative;\">\n          <img src=\"../assets/icon/funnel-fill.svg\" class=\"cursor-hand icone\" alt=\"Bootstrap\" width=\"25\" height=\"25\" \n          style=\"position: absolute; top: 10px;\" data-toggle=\"modal\" data-target=\"#modalEspecialidade\" (click)=\"carregarEspecialidades()\">\n      </div>\n      <div class=\"col-11\" style=\"position: relative;\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filtro.descricao\"\n            placeholder=\"{{parceiroTipo.consultaLabelBusca}}\" (keyup)=\"onKey($event)\" autocomplete=\"true\">\n          <img src=\"../assets/icon/search.svg\" alt=\"Buscar\" width=\"20\" (click)=\"consultar()\" class=\"cursor-hand icone\"\n            height=\"20\" style=\"position: absolute; right: 25px; top: 12px;\">\n        </div>\n      </div>\n\n      <div class=\"row justify-content-md-center div-linha\">\n        <div class=\"col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 text-left\">\n          <br />\n          <p class=\"mb-2 text-muted\">\n            &nbsp;&nbsp;&nbsp;<b>\"Todas estas palavras {{textExemploConsulta}}\"</b>: os resultados usarão todas as palavras\n            inseridas.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ 4455:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-view-pdf/web-view-pdf.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>    \n    <ion-title>{{page.titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <iframe [src]=\"url\" style=\"width:100%;height:100%;border: 0px;\" scrolling=\"yes\" ></iframe> -->\n</ion-content>\n");

/***/ }),

/***/ 87441:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-view/web-view.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{page.titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <iframe [src]=\"url\" style=\"width:100%;height:100%;border: 0px;\" scrolling=\"yes\"></iframe>\n</ion-content>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map