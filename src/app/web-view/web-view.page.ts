import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.page.html',
  styleUrls: ['./web-view.page.scss'],
})
export class WebViewPage implements OnInit {

  public page: any;
  public url: any = this.sanitizer.bypassSecurityTrustResourceUrl('#');;

  constructor(
    private sanitizer: DomSanitizer,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,) {

    this.activatedRoute.queryParams.subscribe((res) => {
      this.page = res;

      if (this.page.timeLoad > 0) {
        this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Aguarde...',
          duration: this.page.timeLoad
        }).then((t) => { t.present() });
      }
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.page.param);
    });
  }

  ngOnInit() {
  }

}
