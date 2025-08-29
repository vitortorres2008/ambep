import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiProvider } from 'src/providers/api/api';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public temCarteirinha = false;
  public menus: Array<any>;
  public loading: any;
  constructor(
    private api: ApiProvider,
    private router: Router,
    private controleAcessoProvider: ControleAcessoProvider,
    public loadingController: LoadingController,
    public toastController: ToastController //private screenOrientation: ScreenOrientation
  ) {}

  ngOnInit() {
    this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: -1,
    });

    this.loading.then((t) => {
      t.present();
    });

    this.api
      .get('/AppControleAcesso/UsuarioLogado')
      .then(
        (result: any) => {
          localStorage.setItem('ambepUser', JSON.stringify(result));

          this.controleAcessoProvider.menus().then(
            (result: any) => {
              this.menus = result;
              this.loading.then((t) => {
                t.dismiss();
              });
              localStorage.setItem('ambepMenu', JSON.stringify(result));

              this.controleAcessoProvider
                .exibeMenuCarteirinha()
                .then((result: any) => {
                  this.temCarteirinha = result;
                });
            },
            (error: any) => {
              console.log(error);
              this.loading.then((t) => {
                t.dismiss();
              });
              this.toastController
                .create({
                  message: 'Favor autenticar para acessar o app',
                  position: 'bottom',
                  duration: 6000,
                  color: 'danger',
                })
                .then((t) => {
                  t.present();
                });
              this.router.navigateByUrl('login');
            }
          );
        },
        (error: any) => {
          console.error('err 1 = ', error);
          this.loading.then((t) => {
            t.dismiss();
          });
          this.router.navigateByUrl('login');
        }
      )
      .catch((err) => {
        console.error('err = ', err);
        this.loading.then((t) => {
          t.dismiss();
        });
        this.router.navigateByUrl('login');
      });
  }
}
