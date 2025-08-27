import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebViewPdfPage } from './web-view-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: WebViewPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebViewPdfPageRoutingModule {}
