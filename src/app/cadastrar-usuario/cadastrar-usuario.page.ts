import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { Util } from 'src/core/util';
import { UsuarioProvider } from 'src/providers/usuario/usuario';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  public loader: any;
  public formulario : any = {};
  constructor(
    public usuarioProvider: UsuarioProvider,
    public loadingCtrl: LoadingController,
    public toast: ToastController,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('CadastrarUsuarioPage');
    this.formulario.aceitoTermo = false;
    //this.router.navigateByUrl('/login/jacksonluis@gmail.com/' + Util.crypt('login', '113384'));
  }

  salvar() {
    
    if (this.formulario.email === '' || this.formulario.email == null) {
      this.toast.create({ message: 'Por favor, informe o e-mail!', position: 'top', duration: 5000, color: 'danger'}).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }
    if (this.formulario.nomeCompleto === '' || this.formulario.nomeCompleto == null) {
      this.toast.create({ message: 'Por favor, informe o nome completo', position: 'top', duration: 5000, color: 'danger'}).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.cpf === '' || this.formulario.cpf == null) {
      this.toast.create({ message: 'Por favor, informe o cpf!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.telefone === '' || this.formulario.telefone == null) {
      this.toast.create({ message: 'Por favor, informe o telefone!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.dtNascimentoTemp === '' || this.formulario.dtNascimentoTemp == null) {
      this.toast.create({ message: 'Por favor, informe a data nascimento!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.dtNascimentoTemp.length !== 10) {
      this.toast.create({ message: 'Data de nascimento incorreta! Ex: 01/01/2000', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    let dataNascimento = moment(this.formulario.dtNascimentoTemp, "DD/MM/YYYY");

    if (!dataNascimento.isValid()) {
      this.toast.create({ message: 'Por favor, informe uma data válida!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.senha === '' || this.formulario.senha == null) {
      this.toast.create({ message: 'Por favor, informe a senha!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.senha.length < 6) {
      this.toast.create({ message: 'A senha precisar ter no mínimo 6 dígitos!', position: 'top', duration: 5000, color: 'danger' }).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (this.formulario.senha !== this.formulario.senhaConfirm) {
      this.toast.create({ message: 'A nova senha e a confirmação devem ser iguais!', position: 'top', duration: 5000, color: 'danger'}).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    if (!this.formulario.aceitoTermo) {
      this.toast.create({ message: 'Leia e aceite os termos de privacidade para cadastrar um novo usuário!', position: 'top', duration: 5000, color: 'danger'}).then((t) => { t.present() });
     // try { this.vibration.vibrate(500); } catch (ex) { console.error(ex); }
      return;
    }

    this.loader = this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: -1
    });

    this.loader.then((t) => { t.present() });
    this.formulario.dtNascimento = dataNascimento;
    this.usuarioProvider.cadastrar(this.formulario)
      .then((result: any) => {

        this.toast.create({ message: 'Usuário cadastrado com sucesso.', position: 'top', duration: 5000}).then((t) => { t.present() });
        this.loader.then((t) => { t.dismiss() });
        this.router.navigateByUrl('/login/' + this.formulario.email + '/' + Util.crypt('login', this.formulario.senha));
      })
      .catch((error: any) => {

        this.formulario.dtNascimento = dataNascimento.format('DD/MM/YYYY');;
        this.loader.then((t) => { t.dismiss() });
        this.toast.create({ message: error.message, position: 'top', duration: 3000, color: 'danger' }).then((t) => { t.present() });
      });
  }

  formatCpf(p:string)
  {
    p = p + '.';
  }
}
