(self["webpackChunkapp_ambep"] = self["webpackChunkapp_ambep"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/util */ 36594);
/* harmony import */ var src_providers_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/api/api */ 72274);
/* harmony import */ var src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/controle-acesso/controle-acesso */ 87058);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ 55041);










let LoginPage = class LoginPage {
    constructor(navCtrl, api, router, activatedRoute, loadingController, toastController, controleAcessoProvider, appComponent) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.controleAcessoProvider = controleAcessoProvider;
        this.appComponent = appComponent;
        this.account = {
            email: '',
            senha: '',
        };
    }
    ngOnInit() {
        console.log('LoginPage');
        localStorage.removeItem('ambepToken');
        localStorage.removeItem('ambepUser');
        this.loading = this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: -1
        });
        if (this.activatedRoute.snapshot.paramMap.get('email') !== null) {
            this.account.email = this.activatedRoute.snapshot.paramMap.get('email');
        }
        if (this.activatedRoute.snapshot.paramMap.get('senha') !== null) {
            this.account.senha = src_core_util__WEBPACK_IMPORTED_MODULE_2__.Util.decrypt('login', this.activatedRoute.snapshot.paramMap.get('senha'));
        }
        if (this.activatedRoute.snapshot.paramMap.get('email') !== null && this.activatedRoute.snapshot.paramMap.get('senha') !== null) {
            this.autenticar();
        }
    }
    // Attempt to login in through our User service
    autenticar() {
        if (this.account.email === '' || this.account.email == null) {
            this.toastController.create({ message: 'Por favor, informe o e-mail!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present(); });
            // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
            return;
        }
        if (this.account.senha === '' || this.account.senha == null) {
            this.toastController.create({ message: 'Por favor, informe a senha', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present(); });
            // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
            return;
        }
        var _this = this;
        _this.loading.then((t) => { t.present(); });
        this.api.post("/AppControleAcesso/Token", this.account).then((result) => {
            localStorage.setItem("ambepToken", result.token);
            console.log(result);
            _this.requestUser();
        }, (error) => {
            _this.loading.then((t) => { t.dismiss(); });
            _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present(); });
        });
    }
    requestUser() {
        let _this = this;
        _this.api.get('/AppControleAcesso/UsuarioLogado').then((result) => {
            console.log(result);
            localStorage.setItem("ambepUser", JSON.stringify(result));
            this.controleAcessoProvider.exibeMenuCarteirinha().then((result) => {
                console.log(result);
                _this.appComponent.temCarteirinha = result;
            });
            _this.controleAcessoProvider.menus().then((result) => {
                console.log(result);
                _this.loading.then((t) => { t.dismiss(); });
                _this.appComponent.menus = result;
                localStorage.setItem("ambepMenu", JSON.stringify(result));
                _this.loading.then((t) => { t.dismiss(); });
                _this.router.navigateByUrl('');
            }, (error) => {
                _this.loading.then((t) => { t.dismiss(); });
                _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present(); });
            });
        }, (error) => {
            _this.loading.then((t) => { t.dismiss(); });
            _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present(); });
        });
    }
    cadastrarUsuario() {
        this.router.navigateByUrl('/cadastrar-usuario');
    }
    esqueciSenha() {
        this.router.navigateByUrl('/esqueci-senha');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_providers_api_api__WEBPACK_IMPORTED_MODULE_3__.ApiProvider },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_providers_controle_acesso_controle_acesso__WEBPACK_IMPORTED_MODULE_4__.ControleAcessoProvider },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".splash-bg {\n  position: relative;\n  background: url('splash-login.png') no-repeat transparent;\n  background-size: cover;\n  height: 25%;\n  z-index: 1;\n  background-repeat: repeat-x;\n  animation: animatedBackground 40s linear infinite;\n}\n\n@keyframes animatedBackground {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 100% 0;\n  }\n}\n\n.splash-info {\n  position: relative;\n  z-index: 2;\n  margin-top: -64px;\n  text-align: center;\n}\n\n.splash-logo {\n  margin: auto;\n  background: url('icone-login.svg') repeat transparent;\n  background-size: 100%;\n  width: 128px;\n  height: 128px;\n}\n\n.splash-intro {\n  font-size: 18px;\n  font-weight: bold;\n  max-width: 80%;\n  margin: auto;\n}\n\nbutton.login {\n  margin-top: 25px;\n  background-color: white;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);\n  color: #333;\n}\n\nbutton.login.activated {\n  background-color: gainsboro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGtCQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxpREFBQTtBQUNSOztBQUVNO0VBQ0U7SUFBTyx3QkFBQTtFQUViO0VBRE07SUFBSywyQkFBQTtFQUlYO0FBQ0Y7O0FBRk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSVI7O0FBRk07RUFDRSxZQUFBO0VBQ0EscURBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBS1I7O0FBSE07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQU1SOztBQUpNO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQU9SOztBQUxRO0VBQ0UsMkJBQUE7QUFPViIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnNwbGFzaC1iZyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9zcGxhc2gtbG9naW4ucG5nJykgbm8tcmVwZWF0IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlZEJhY2tncm91bmQgNDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgYW5pbWF0ZWRCYWNrZ3JvdW5kIHtcclxuICAgICAgICBmcm9tIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XHJcbiAgICAgICAgdG8geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7IH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5zcGxhc2gtaW5mbyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTY0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5zcGxhc2gtbG9nbyB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9pY29uZS1sb2dpbi5wbmcnKSByZXBlYXQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zcGxhc2gtaW50cm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uLmxvZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgIFxyXG4gICAgICAgICYuYWN0aXZhdGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"splash-bg\"></div>\n  <div class=\"splash-info\">\n    <div class=\"splash-logo\"></div>\n    <div class=\"splash-intro\">\n      Informe as credenciais\n    </div>\n  </div>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">E-mail</ion-label>\n        <ion-input type=\"email\" [(ngModel)]=\"account.email\" name=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Senha</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"account.senha\" name=\"senha\" maxlength=\"20\"></ion-input>\n      </ion-item>\n\n      <div style=\"padding: 5%\">\n        <ion-button expand=\"block\" size=\"large\" color=\"primary\" block (click)=\"autenticar()\">ACESSAR</ion-button>\n        <br />\n        <ion-button expand=\"block\" size=\"large\" color=\"light\" block (click)=\"cadastrarUsuario()\">CADASTRAR</ion-button>\n        <br />\n        <a (click)=\"esqueciSenha()\">Esqueci a senha</a>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map