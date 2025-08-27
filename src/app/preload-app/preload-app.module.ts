import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreloadAppPageRoutingModule } from './preload-app-routing.module';

import { PreloadAppPage } from './preload-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreloadAppPageRoutingModule
  ],
  declarations: [PreloadAppPage]
})
export class PreloadAppPageModule {}
