import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  public loader: any;
  public formulario : any = {};
  constructor(
    public controleAcessoProvider: ControleAcessoProvider,
    public loadingCtrl: LoadingController,
    public toast: ToastController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('AlterarSenhaPage');
  }

  salvar() {
    
    if (this.formulario.senhaAtual === '' || this.formulario.senhaAtual == null) {
      this.toast.create({ message: 'Por favor, informe a senha atual.', position: 'top', duration: 3000, color: 'danger'}).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.novaSenha === '' || this.formulario.novaSenha == null) {
      this.toast.create({ message: 'Por favor, informe a nova senha.', position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.novaSenha.length < 6) {
      this.toast.create({ message: 'A senha precisar ter no mínimo 6 dígitos.', position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    // if (!UtilZe.validarSenha(this.formulario.senhaNova)) {
    //   this.toast.create({ message: 'A senha precisar ter ao menos um número e uma letra.', position: 'top', duration: 3000, cssClass: 'toast-warning' }).then((t) => { t.present() });
    //  // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
    //   return;
    // }

    if (this.formulario.novaSenha !== this.formulario.confirmacaoSenha) {
      this.toast.create({ message: 'A nova senha e a confirmação devem ser iguais.', position: 'top', duration: 3000, color: 'danger'}).then((t) => { t.present() });
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

    this.loader.then((t) => { t.present() });
    this.controleAcessoProvider.alterarSenha(this.formulario)
      .then((result: any) => {

        this.toast.create({ message: 'Senha alterada com sucesso.', position: 'top', duration: 3000}).then((t) => { t.present() });
        this.loader.then((t) => { t.dismiss() });
        this.closeModal();
      })
      .catch((error: any) => {

        this.loader.then((t) => { t.dismiss() });
        this.toast.create({ message: error.message, position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present() });
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
  closeModal(){
    this.modalController.getTop().then((p)=>{
      p.dismiss();
    });
  }
}
