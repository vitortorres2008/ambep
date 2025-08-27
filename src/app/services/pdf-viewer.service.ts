import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { Injectable } from "@angular/core";
import { FileTransferObject } from "@ionic-native/file-transfer";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PdfViewerService {

  public fileTransfer: FileTransferObject;

  constructor(
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File
  ) {
    console.log('PdfViewerService');
  }

  downloadPdf(url: string, title: string) {

    return new Promise((resolve, reject) => {
      this.fileTransfer = this.transfer.create();
      this.fileTransfer.download(url, this.file.dataDirectory + title + ".pdf").then(entry => {

        console.log("download complete: " + entry.toURL());
        this.fileOpener.open(entry.toURL(), "application/pdf").then(() => { 
          console.log("File is opened"); 
          resolve(true);
         })
          .catch(e => { console.log("Error opening file", e); reject(e); });
      })
        .catch(e => { console.log("Error download file", e); reject(e); });
    });
  }
}