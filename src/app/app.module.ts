import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ApiProvider } from 'src/providers/api/api';
import { AssociadoProvider } from 'src/providers/associado/associado';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';
import { UsuarioProvider } from 'src/providers/usuario/usuario';
import { FileOpener } from "@ionic-native/file-opener/ngx";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerService } from './services/pdf-viewer.service';
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { ConsultaProvider } from 'src/providers/consulta/consulta';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ApiProvider,
    AssociadoProvider,
    ControleAcessoProvider,
    ConsultaProvider,
    UsuarioProvider,
    FileTransfer,
    FileOpener,
    File,
    PdfViewerService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
