import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class ConsultaProvider {

  constructor(
    //public http: Http
    private api: ApiProvider
    ) {
    console.log('Hello Consulta Provider');
  }

  public parceiroTipo (constante:string)  {
    return this.api.get('/ConsultaParceiro/ParceiroTipo/Constante/' + constante);
  }

  public ufs ()  {
    return this.api.get('/ConsultaParceiro/Estados');
  }

  public cidades (guidParceiroTipo:string, uf:string)  {
    return this.api.get('/ConsultaParceiro/Cidades/'+ guidParceiroTipo + '/'+ uf + '');
  }

  public bairros (guidParceiroTipo:string, cidade:any)  {
    return this.api.get('/ConsultaParceiro/Bairros/'+ guidParceiroTipo + '/'+ cidade + '');
  }

  public parceiros(filtro: any)
  {
    return this.api.post('/ConsultaParceiro/Parceiros', filtro);
  }  

  public especialidades(filtro: any)
  {
    return this.api.post('/ConsultaParceiro/Especialidades', filtro);
  }

}
