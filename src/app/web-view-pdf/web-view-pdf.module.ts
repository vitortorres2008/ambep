import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebViewPdfPageRoutingModule } from './web-view-pdf-routing.module';

import { WebViewPdfPage } from './web-view-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebViewPdfPageRoutingModule
  ],
  declarations: [WebViewPdfPage]
})
export class WebViewPdfPageModule {}
