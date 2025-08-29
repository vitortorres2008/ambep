import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class UsuarioProvider {
  constructor(
    private api: ApiProvider
  ) {
    console.log('Hello UsuarioProvider');
  }

  public cadastrar(model: any) {
    return this.api.put('/AppUsuario/Cadastrar', model);
  }
}
