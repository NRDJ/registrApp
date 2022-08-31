import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr-alumno',
  templateUrl: './qr-alumno.page.html',
  styleUrls: ['./qr-alumno.page.scss'],
})
export class QrAlumnoPage implements OnInit {
  constructor() {}

  scan() {

    const prepare = () => {
      BarcodeScanner.prepare();
    };

    const startScan = async () => {
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(result.content);
      }
    };

    const stopScan = () => {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    };

    const askUser = () => {
      prepare();

      const c = confirm('Do you want to scan a barcode?');

      if (c) {
        startScan();
      } else {
        stopScan();
      }
    };

    askUser();

    const checkPermission = async () => {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        // the user granted permission
        return true;
      }

      return false;
    };
  }

  ngOnInit() {

  }


}


