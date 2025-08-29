import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { AppSettings } from 'src/core/appSettings';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
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
    private platform: Platform,
    private socialSharing: SocialSharing
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
    const message = this.carteirinha.nome + ', segue o link da sua carteirinha da AMBEP!';
    const subject = 'Compartilhar carteirinha do: ' + this.carteirinha.nome;
    const url = AppSettings.img.linkShare + 'carteirinha/' + this.carteirinha.guid;


    if (navigator.share !== undefined && !this.platform.is('android')) {
      navigator.share({
        title: subject,
        text: message,
        url: url,
      })
        .then(() => console.log('Successful share via Web Share API'))
        .catch((error) => {
          console.log('Error sharing via Web Share API', error);
          this.fallbackShare(message, subject, url);
        });
    } else {

      this.fallbackShare(message, subject, url);
    }
  }

  private fallbackShare(message: string, subject: string, url: string): void {

    this.socialSharing.share(message, subject, null, url)
      .then(() => {
        console.log('Successful share via SocialSharing plugin');
      })
      .catch((error) => {
        console.log('Error sharing via SocialSharing plugin', error);

        this.share = true;
      });
  }
}
