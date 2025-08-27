import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class AssociadoProvider {
  constructor(
		public http: Http
	, private api: ApiProvider
) {
    console.log('Hello AssociadoProvider');
  }
   
  public guidsCarteirinhas ()  {

    return this.api.get('/AssociadoLotacao/App/Carteirinhas/Guid');

  }

  public carteirinhas ()  {

    return this.api.get('/AssociadoLotacao/App/Carteirinhas');

  }

}
