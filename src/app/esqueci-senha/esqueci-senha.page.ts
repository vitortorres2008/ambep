import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Util } from 'src/core/util';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {

  public loader: any;
  public formulario: any = {};

  constructor(
    private controleAcessoProvider : ControleAcessoProvider,
    public loadingCtrl: LoadingController,
    public toast: ToastController,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {}

  recuperar() {
    
    if (this.formulario.valor === '' || this.formulario.valor == null) {
      this.toast.create({ message: 'Por favor, informe o e-mail!', position: 'top', duration: 5000, color: 'danger'}).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    this.loader = this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: -1
    });

    this.loader.then((t) => { t.present() });
    this.controleAcessoProvider.esqueciSenha(this.formulario)
      .then(() => {

        this.loader.then((t) => { t.dismiss() });
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
        }).then((e) => {e.present();});
        
      })
      .catch((error: any) => {

        this.loader.then((t) => { t.dismiss() });
        this.toast.create({ message: error.message, position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present() });
      });
  }

}
