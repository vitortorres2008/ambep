import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class ControleAcessoProvider {
  constructor(
    private api: ApiProvider
  ) {
    console.log('Hello AppControleAcessoProvider');
  }

  public menus ()  {
    return this.api.get('/AppControleAcesso/Menus');
  }

  public menusTelaInicial ()  {
    return this.api.get('/AppControleAcesso/Menus/TelaInicial');
  }

  public exibeMenuCarteirinha ()  {
    return this.api.get('/AppControleAcesso/ExibeMenuCarteirinha');
  }

  public navegacaoGravar(_guid: any) {
    return this.api.post('/AppControleAcesso/Navegacao/Gravar', {guid: _guid});
  }

  public alterarSenha(model: any) {
    return this.api.put('/AppControleAcesso/AlterarSenha', model);
  }

  public esqueciSenha(model: any) {
    return this.api.put('/AppControleAcesso/EsqueciSenha', model);
  }
}
