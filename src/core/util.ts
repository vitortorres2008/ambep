import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from './../core/appSettings';
import { Observable } from 'rxjs';

export class Util {
  constructor(
    public http?: HttpClient
  ) {

  }

  /**
   * newGuid gera uma nova GUID
   *
   */
  public static newGuid(): string {

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public static guidEmpty(): string {

    return '00000000-0000-0000-0000-000000000000';
  }
  public static IsEmail(email: any) {

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      return false;
    }
    return true;
  }

  public static validarData(p: string) {
    var patternData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (!patternData.test(p)) {
      return false;
    }

    if(new String(Date.parse(p)) === 'NaN'){
      return false;
    }

    return true;
  }

  public static formatarMesAno(p: any) {

    var v = p;
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "$1/$2"); //Coloca parênteses em volta dos dois primeiros dígitos

    return v;
  }


  public static limparDadosNumerico(p: any) {
    let v = p.replace(/\D/g, "");
    return v.trim();
  }

  public static limparDados(p: any) {
    let v = p.replace(/\s+/g, '')
    return v.trim();
  }

  //Deixa apenas numero
  public static onlyNumeric(p: any) {
    var v = p;
    v = v.replace(/\D/g, "");
    return v;
  }

  public static getCodigoAreaTelefone(p: any) {
    var v = p;
    v = v.replace(/\D/g, "");


    return v.substring(0, 2);
  }

  public static getNumeroTelefone(p: any) {
    var v = p;
    v = v.replace(/\D/g, "");
    return v.substring(2, v.length);
  }


  public static validarSenha(senha: string) {
    let er = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!er.exec(senha)) {
      return false;
    }

    return true;
  }

  /**
   * isNullOrWhiteSpace verifica se uma string é nula ou vazia
   */
  public static isNullOrWhiteSpace(value: string): boolean {
    return value === null || value === undefined || value.trim() === "";
  }

  public static crypt(salt, text) {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
  };

  public static decrypt(salt, encoded) {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
  };

  //#region Upload Raiz




  _b64toBlob(b64Data: any, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  private _sendBlob(uri: string, file: any, blob: any): Observable<any> {
    var parentThis = this;

    let result = new Observable<any>(observer => {

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("progress", parentThis._uploadProgress);
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          var url = uri.split("?")[0];

          observer.next("sucesso");
          // q.resolve({
          //   "Upload": url,
          //   "ImagensMd": url.replace("upload", "imagens-md"),
          //   "ImagensSm": url.replace("upload", "imagens-sm"),
          //   "ImagensThumbnail": url.replace("upload", "imagens-thumbnail")
          // });
          console.log(this);
          console.log({
            "Upload": url,
            "ImagensMd": url.replace("upload", "imagens-md"),
            "ImagensSm": url.replace("upload", "imagens-sm"),
            "ImagensThumbnail": url.replace("upload", "imagens-thumbnail")
          });
        }
      });
      xhr.addEventListener("error", function (err) {
        // q.reject(err);
        console.error(err);

        observer.error(err);
      });


      xhr.open("PUT", uri);
      xhr.setRequestHeader("x-ms-version", "2015-02-21");
      xhr.setRequestHeader("content-type", file.type);
      xhr.setRequestHeader("x-ms-blob-type", "BlockBlob");
      xhr.setRequestHeader("x-ms-meta-m1", "v1");
      xhr.setRequestHeader("x-ms-meta-m2", "v2");
      xhr.setRequestHeader("cache-control", "no-cache");
      //xhr.setRequestHeader("content-length", file.size);
      xhr.send(blob);

    })

    return result;
  }

  private _uploadProgress(oEvent: any) {
    if (oEvent.lengthComputable) {
      var percentComplete = oEvent.loaded / oEvent.total;
      console.log("Progress:" + percentComplete);
    } else {
      // Unable to compute progress information since the total size is unknown
    }
  }
  //#endregion

}
