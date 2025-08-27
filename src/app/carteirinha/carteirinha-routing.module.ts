import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteirinhaPage } from './carteirinha.page';

const routes: Routes = [
  {
    path: '',
    component: CarteirinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteirinhaPageRoutingModule {}
