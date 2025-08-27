import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConsultaPage } from './consulta/consulta.page';
import { WebViewPdfPage } from './web-view-pdf/web-view-pdf.page';
import { WebViewPage } from './web-view/web-view.page';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./preload-app/preload-app.module').then(m => m.PreloadAppPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login/:email/:senha',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'web-view',
    component: WebViewPage,
    loadChildren: () => import('./web-view/web-view.module').then( m => m.WebViewPageModule)
  },
  {
    path: 'consulta',
    component: ConsultaPage,
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'carteirinha',
    loadChildren: () => import('./carteirinha/carteirinha.module').then( m => m.CarteirinhaPageModule)
  },
  {
    path: 'carteirinhas',
    loadChildren: () => import('./carteirinhas/carteirinhas.module').then( m => m.CarteirinhasPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadastrar-usuario',
    loadChildren: () => import('./cadastrar-usuario/cadastrar-usuario.module').then( m => m.CadastrarUsuarioPageModule)
  },
  {
    path: 'alterar-senha',
    loadChildren: () => import('./alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  },
  {
    path: 'preload-app',
    loadChildren: () => import('./preload-app/preload-app.module').then( m => m.PreloadAppPageModule)
  },
  {
    path: 'web-view-pdf',
    component: WebViewPdfPage,
    loadChildren: () => import('./web-view-pdf/web-view-pdf.module').then( m => m.WebViewPdfPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
