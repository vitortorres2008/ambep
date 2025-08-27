import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreloadAppPage } from './preload-app.page';

const routes: Routes = [
  {
    path: '',
    component: PreloadAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreloadAppPageRoutingModule {}
