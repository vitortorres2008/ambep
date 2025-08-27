import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteirinhasPageRoutingModule } from './carteirinhas-routing.module';

import { CarteirinhasPage } from './carteirinhas.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteirinhasPageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [CarteirinhasPage]
})
export class CarteirinhasPageModule {}
