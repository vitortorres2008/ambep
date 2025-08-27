import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiProvider } from 'src/providers/api/api';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';

@Component({
  selector: 'app-preload-app',
  templateUrl: './preload-app.page.html',
  styleUrls: ['./preload-app.page.scss'],
})
export class PreloadAppPage implements OnInit {

  public loading: any;

  constructor(
    private api: ApiProvider,
    private router: Router,
    public navCtrl: NavController,
    private controleAcessoProvider: ControleAcessoProvider,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {

    console.log('Hello PreloadAppPage');

    this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: -1
    });
    this.loading.then((t) => { t.present() });

    let _this = this;
    this.controleAcessoProvider.menus().then((result: any) => {
      console.log(result);
      _this.loading.then((t) => { t.dismiss() });
      localStorage.setItem("ambepMenu", JSON.stringify(result));

      _this.api.get('/ControleAcesso/UsuarioLogado').then((result: any) => {
        console.log(result);
        localStorage.setItem("ambepUser", JSON.stringify(result));
        _this.router.navigateByUrl('/start');

      }, (error: any) => {
        _this.router.navigateByUrl('login');
      });


    }, (error: any) => {
      _this.loading.then((t) => { t.dismiss() });
      _this.router.navigateByUrl('/login');
    });

  }

}
