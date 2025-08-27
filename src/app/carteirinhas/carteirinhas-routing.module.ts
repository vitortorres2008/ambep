import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteirinhasPage } from './carteirinhas.page';

const routes: Routes = [
  {
    path: '',
    component: CarteirinhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteirinhasPageRoutingModule {}
