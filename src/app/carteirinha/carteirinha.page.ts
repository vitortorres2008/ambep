import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { AppSettings } from 'src/core/appSettings';
//import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.page.html',
  styleUrls: ['./carteirinha.page.scss'],
})
export class CarteirinhaPage implements OnInit {

  public defaultImage = 'assets/img/preload/carteirinha-vertical-preload.gif';
  public carteirinha: any = {};
  public srcCarteirinha: string = '';
  public share: boolean = false;

  constructor(
    public navParams: NavParams,
    private modalController: ModalController,
    //private screenOrientation: ScreenOrientation
  ) {

    // try {
    //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    // } catch (e) { console.log(e); }
  }

  ngOnInit() {

    var qqcoisa = 'aaxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(32);
    });

    this.carteirinha = this.navParams.get('carteirinha');
    this.srcCarteirinha = AppSettings.serverApi.imgCarteirinha + this.carteirinha.guid + '/' + qqcoisa + '/Vertical';

  }

  closeModal() {

    this.modalController.getTop().then((p) => {
      p.dismiss();
    });

  }

  compartilhar(): void {

    try {

      if (navigator.share !== undefined) {
        navigator.share({
          title: 'Compartilhar carteirinha do: ' + this.carteirinha.nome,
          text: this.carteirinha.nome + ', segue o link da sua carteirinha da AMBEP!',
          url: AppSettings.img.linkShare + 'carteirinha/' + this.carteirinha.guid,
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
