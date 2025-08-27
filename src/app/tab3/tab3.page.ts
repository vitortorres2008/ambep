import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { FileTransferObject } from "@ionic-native/file-transfer";
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public fileTransfer: FileTransferObject;
  public loading: any;
  constructor(
    private router: Router,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private controleAcessoProvider: ControleAcessoProvider,
    private file: File,
    public appComponent: AppComponent) { }

  ngOnInit() {
  }

  openPage(page) {

    setTimeout(() => {
      if (page.guid !== null && page.guid !== undefined) {
        this.controleAcessoProvider.navegacaoGravar(page.guid).then((result: any) => {
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

  getMenus(): Array<any> {

    if (this.appComponent.menus === undefined) { return []; }

    return this.appComponent.menus.filter((el) => { return el.constante !== 'CARTEIRINHA' || (this.appComponent.temCarteirinha && el.constante === 'CARTEIRINHA') });

  }

  download(url: string) {

    let arrayUrl = url.split('/');
    let title = arrayUrl[arrayUrl.length - 1].replace('.pdf', '');
    let _this = this;
    _this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: -1
    });
    _this.loading.then((t) => { t.present() });

    _this.fileOpener.open(_this.file.dataDirectory + title + ".pdf", "application/pdf").then(() => {
      console.log("File is opened");
      _this.loading.then((t) => { t.dismiss() });
      _this.toastController.create({ message: 'Arquivo disponível!', position: 'bottom', duration: 3000 }).then((t) => { t.present() });
    })
      .catch(() => {

        _this.fileTransfer = _this.transfer.create();
        _this.fileTransfer.download(url, _this.file.dataDirectory + title + ".pdf").then(entry => {

          console.log("download complete: " + entry.toURL());
          _this.fileOpener.open(entry.toURL(), "application/pdf").then(() => {
            console.log("File is opened");
            _this.loading.then((t) => { t.dismiss() });
            _this.toastController.create({ message: 'Arquivo disponível!', position: 'bottom', duration: 3000 }).then((t) => { t.present() });
          })
            .catch(e => {
              console.log("Error opening file", e);
              _this.loading.then((t) => { t.dismiss() });
              _this.toastController.create({ message: 'Identificamos uma dificuldade em abrir o pdf. Por favor, tente novamente!', position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present() });
            });
        })
          .catch(e => {
            console.log("Error download file", e);
            _this.loading.then((t) => { t.dismiss() });
            _this.toastController.create({ message: 'Identificamos uma dificuldade em acessar o pdf. Por favor, tente novamente!', position: 'bottom', duration: 6000, color: 'danger' }).then((t) => { t.present() });
          });
      });
  }
}
