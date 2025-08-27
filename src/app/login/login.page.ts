import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Util } from 'src/core/util';
import { ApiProvider } from 'src/providers/api/api';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public account: { email: string, senha: string } = {
    email: '',
    senha: '',
  };
  public loading: any;

  constructor(
    public navCtrl: NavController,
    private api: ApiProvider,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private controleAcessoProvider: ControleAcessoProvider,
    public appComponent: AppComponent
  ) { }

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
      this.account.senha = Util.decrypt('login', this.activatedRoute.snapshot.paramMap.get('senha'));
    }
    if (this.activatedRoute.snapshot.paramMap.get('email') !== null && this.activatedRoute.snapshot.paramMap.get('senha') !== null) {
      this.autenticar();
    }
  }

  // Attempt to login in through our User service
  autenticar() {

    if (this.account.email === '' || this.account.email == null) {
      this.toastController.create({ message: 'Por favor, informe o e-mail!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
      // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.account.senha === '' || this.account.senha == null) {
      this.toastController.create({ message: 'Por favor, informe a senha', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
      // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    var _this = this;
    _this.loading.then((t) => { t.present() });
    this.api.post("/AppControleAcesso/Token", this.account).then((result: any) => {
      localStorage.setItem("ambepToken", result.token);
      console.log(result);

      _this.requestUser();

    }, (error: any) => {

      _this.loading.then((t) => { t.dismiss() });
      _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present() });

    });
  }

  requestUser(): void {

    let _this = this;
    _this.api.get('/AppControleAcesso/UsuarioLogado').then((result: any) => {

      console.log(result);
      localStorage.setItem("ambepUser", JSON.stringify(result));

      this.controleAcessoProvider.exibeMenuCarteirinha().then((result: any) => {

        console.log(result);
        _this.appComponent.temCarteirinha = result;

      });

      _this.controleAcessoProvider.menus().then((result: any) => {

        console.log(result);
        _this.loading.then((t) => { t.dismiss() });
        _this.appComponent.menus = result;
        localStorage.setItem("ambepMenu", JSON.stringify(result));
        _this.loading.then((t) => { t.dismiss() });
        _this.router.navigateByUrl('');

      }, (error: any) => {
        _this.loading.then((t) => { t.dismiss() });
        _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present() });
      });

    }, (error: any) => {
      _this.loading.then((t) => { t.dismiss() });
      _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present() });
    });

  }

  cadastrarUsuario(): void {
    this.router.navigateByUrl('/cadastrar-usuario');
  }
  
  esqueciSenha(): void {
    this.router.navigateByUrl('/esqueci-senha');
  }
}
