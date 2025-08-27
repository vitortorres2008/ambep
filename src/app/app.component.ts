import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiProvider } from 'src/providers/api/api';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public temCarteirinha: boolean = false;
  public menus: Array<any>;
  public loading: any;
  constructor(private api: ApiProvider,
    private router: Router,
    private controleAcessoProvider: ControleAcessoProvider,
    public loadingController: LoadingController,
    public toastController: ToastController,
    //private screenOrientation: ScreenOrientation
  ) { }


  ngOnInit() {

    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    let _this = this;
    _this.loading = _this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: -1
    });

    _this.loading.then((t) => { t.present() });

    _this.api.get('/AppControleAcesso/UsuarioLogado').then((result: any) => {
      console.log(result);
      localStorage.setItem("ambepUser", JSON.stringify(result));

      _this.controleAcessoProvider.menus().then((result: any) => {

        console.log(result);
        _this.menus = result;
        _this.loading.then((t) => { t.dismiss() });
        localStorage.setItem("ambepMenu", JSON.stringify(result));

        _this.controleAcessoProvider.exibeMenuCarteirinha().then((result: any) => {
          console.log(result);
          _this.temCarteirinha = result;

        });

      }, (error: any) => {
        console.log(error);
        _this.loading.then((t) => { t.dismiss() });
        _this.toastController.create({ message: 'Favor autenticar para acessar o app', position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present() });
        _this.router.navigateByUrl('login');
      });


    }, (error: any) => {
      console.error('err 1 = ', error);
      _this.loading.then((t) => { t.dismiss() });
      _this.router.navigateByUrl('login');
    }).catch(err => {
      console.error('err = ', err);
      _this.loading.then((t) => { t.dismiss() });
      _this.router.navigateByUrl('login');
    });
  }
}
