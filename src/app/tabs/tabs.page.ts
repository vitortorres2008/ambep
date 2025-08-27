import { Component } from '@angular/core';
import { ControleAcessoProvider } from 'src/providers/controle-acesso/controle-acesso';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private controleAcessoProvider: ControleAcessoProvider
  ) { }

  navegacaoGravar(guid: string) {

    setTimeout(() => {
      if (guid !== null && guid !== undefined) {
        this.controleAcessoProvider.navegacaoGravar(guid).then((result: any) => {
          console.log(result);
        });
      }
    }, 100);

  }
}
