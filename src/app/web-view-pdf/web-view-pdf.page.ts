import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { PdfViewerService } from '../services/pdf-viewer.service';

@Component({
  selector: 'app-web-view-pdf',
  templateUrl: './web-view-pdf.page.html',
  styleUrls: ['./web-view-pdf.page.scss'],
})
export class WebViewPdfPage implements OnInit {


  public page: any;
  public url: any = this.sanitizer.bypassSecurityTrustResourceUrl('#');;

  constructor(
    private sanitizer: DomSanitizer,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public pdfViewerService: PdfViewerService) {

      console.log('WebViewPdfPage');

    this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: 2000
    }).then((t) => { t.present() });

    this.activatedRoute.queryParams.subscribe((res) => {
      this.page = res;
      this.pdfViewerService.downloadPdf(this.page.param, this.page.titulo);
      //this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/gview?url=' + this.page.param);
      
    });
  }

  ngOnInit() {
  }

}
