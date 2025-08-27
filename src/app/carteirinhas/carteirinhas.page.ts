import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AppSettings } from 'src/core/appSettings';
import { AssociadoProvider } from 'src/providers/associado/associado';
import { CarteirinhaPage } from '../carteirinha/carteirinha.page';

@Component({
  selector: 'app-carteirinhas',
  templateUrl: './carteirinhas.page.html',
  styleUrls: ['./carteirinhas.page.scss'],
})
export class CarteirinhasPage implements OnInit {

  public carteirinhas: Array<any> = [];
  public defaultImage = 'assets/img/preload/carteirinha-preload.gif';
  public loading: any;
  public loadingBool: boolean = true;
  public share: boolean = false;
  public qqcoisa: string = '';

  constructor(
    public modalCtrl: ModalController,
    public asssociadoProv: AssociadoProvider,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');

    this.qqcoisa = 'aaxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(32);
    });


    let _this = this;
    _this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: -1
    });
    _this.loading.then((t) => { t.present() });
    _this.asssociadoProv.carteirinhas().then((result: any) => {

      console.log(result);
      _this.loadingBool = false;
      this.carteirinhas = result;
      _this.loading.then((t) => { t.dismiss() });

    }, (error: any) => {
      _this.loadingBool = false
      _this.loading.then((t) => { t.dismiss() });
      _this.toastController.create({ message: error.message, position: 'bottom', duration: 6000, cssClass: 'toast-warning' }).then((t) => { t.present() });
    });
  }

  ngOnInit() {

  }

  getUrlImg(p: any): string {
    return AppSettings.serverApi.imgCarteirinha + p.guid + '/' + this.qqcoisa;
  }

  openView(carteirinha: any): void {
    const viewModal = this.modalCtrl.create({
      component: CarteirinhaPage,
      componentProps: {
        carteirinha: carteirinha
      }
    });
    viewModal.then(modal => modal.present());
  }

  compartilhar(carteirinha: any): void {

    try {
      if (navigator.share !== undefined) {
        navigator.share({
          title: 'Compartilhar carteirinha do: ' + carteirinha.nome,
          text: carteirinha.nome + ', segue o link da sua carteirinha da AMBEP!',
          url: AppSettings.img.linkShare + 'carteirinha/' + carteirinha.guid,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
      else {
        this.share = true;
      }
    } catch (ex) {
      this.share = true;
    }
  }
}

