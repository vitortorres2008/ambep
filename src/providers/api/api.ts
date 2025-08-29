import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../core/appSettings';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ApiProvider {

  constructor(
    public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('ambepToken')
    });
  }

  get(Rota) {
    return new Promise((resolve, reject) => {
      let url = AppSettings.serverApi.url + AppSettings.serverApi.versionBase + Rota;

      this.http.get(url, { headers: this.getHeaders() })
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          console.log('erro: '+  JSON.stringify(error));
          reject(this._ClassificarRetorno(error));
        });
    });
  }


  get2(Rota): Observable<any> {
    let url = AppSettings.serverApi.url + AppSettings.serverApi.versionBase + Rota;

    return this.http.get(url, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => response),
        catchError((error) => {
          console.log('erro: '+  JSON.stringify(error));

          let erro: any = { code: '', action: 'MSG', message: '', page: '', root: false};

          switch(error.status)
          {
            case 401:
              erro = {code: '', action: 'OPEN_PAGE', message: 'Autorização negada', page: 'LoginPage', root: true};
            break;

            case 404:
              erro = {code: '', action: 'MSG', message: 'Rota não encontrada.', page: ''};
            break;

            default:
              erro = {code: '', action: 'MSG', message: 'Sem comunicação com o servidor', page: ''};
            break;
          }

          return throwError(erro);
        })
      );
  }

  post(Rota: string, Model: any) {
    return this.postRequestOption(Rota, Model, true);
  }

  postRequestOption(Rota:string, Model:any, PassRequestOption: boolean) {
    return new Promise((resolve, reject) => {
      let url = AppSettings.serverApi.url + AppSettings.serverApi.versionBase + Rota;

      this.http.post(url, Model, { headers: this.getHeaders() })
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          console.log('erro: '+  JSON.stringify(error));
          reject(this._ClassificarRetorno(error));
        });
    });
  }


  put(Rota, Model) {
    return new Promise((resolve, reject) => {
      let url = AppSettings.serverApi.url + AppSettings.serverApi.versionBase + Rota;

      this.http.put(url, Model, { headers: this.getHeaders() })
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          console.log('erro: '+  JSON.stringify(error));
          reject(this._ClassificarRetorno(error));
        });
    });
  }


  delete(Rota) {
    return new Promise((resolve, reject) => {
      let url = AppSettings.serverApi.url + AppSettings.serverApi.versionBase + Rota;

      this.http.delete(url, { headers: this.getHeaders() })
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          console.log('erro: '+  JSON.stringify(error));
          reject(this._ClassificarRetorno(error));
        });
    });
  }

  postNotToken(Rota, Model) {
    return new Promise((resolve, reject) => {
      let url = AppSettings.serverApi.url + AppSettings.serverApi.versionBase + Rota;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.post(url, Model, { headers: headers })
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          console.log('erro: '+  JSON.stringify(error));
          reject(error);
        });
    });
  }

  _ClassificarRetorno(error:any)
  {
    let code = Math.floor(error.status);
      let erro: any = { code: '', action: 'MSG', titulo: '', message: '', page: '', root: false};
      switch(code)
      {
        case 400:
          erro = {code: '400', action: 'MSG', titulo: 'Autorização negada', message: 'O usuário não tem autorização.', page: ''};
        break;

        case 401:
          erro = {code: '401', action: 'OPEN_PAGE', titulo: 'Autorização negada', message: 'O usuário não tem autorização para acessar esse recurso.', page: 'LoginPage', root: true};
        break;

        case 404:
          erro = {code: '404', action: 'MSG', titulo: 'Rota não encontrada', message: 'Não foi possível encontrar a rota para realizar a operação.', page: ''};
        break;

        case 412:
          erro = {code: '412', action: 'MSG', titulo: 'Restrição do formulário', message: 'Campos de preenchimento obrigatórios', page: ''};
        break;

        //Mensagem enviada pela api.
        case 417:
          erro = {code: '417', action: 'MSG', titulo: 'Mensagem de retorno', message: error.error || error.message, page: ''};
        break;

        case 502:
          erro = {code: '502', action: 'MSG', titulo: 'Sem comunicação', message: 'O servidor não respondeu a requisição.', page: ''};
        break;

        case 500:
          erro = {code: '500', action: 'MSG',titulo: 'Falha na comunicação',  message: 'Dificuldades na comuicação com o servidor.', page: ''};
        break;

        default:
          erro = {code: '', action: 'MSG', titulo: 'Falha na comunicação', message: 'Dificuldades na comuicação com o servidor.', page: ''};
        break;
      }

    return erro;
  }

}
